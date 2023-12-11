require('dotenv').config(); //initialize dotenv
const { Client, Collection, Events, GatewayIntentBits} = require('discord.js');
const cron = require('node-cron');
const moment = require('moment-timezone');
const path = require('node:path');
const fs = require('fs');
const registrar = require('./utils/commandregistrar'); 
const promptUtils = require('./utils/promptUtils');
const outputUsers = require('./utils/getRandom');
const activeHoursUtils = require('./utils/activeHoursUtils');
const saveDB = require('./utils/saveDB');
const { Prompt } = require('./utils/prompt.js');
const PromptTimeout = require('./utils/promptTimeout');
const activeEvents = require('./utils/activeEvents')
const { setDefaultChannel } = require('./utils/setDefaultChannelUtils.js');
const helpUtils = require('./utils/helpUtils.js');

const TOKEN = process.env.DISCORD_TOKEN;

class Timer {
    constructor() {
        this.startTime = null;
        this.endTime = null;
    }
    start() {
        this.startTime = Date.now();
        this.endTime = null; // Reset the end time in case start is called again before stop
    }
    stop() {
        if (this.startTime === null) {
            throw new Error("Timer was stopped without being started.");
        }
        this.endTime = Date.now();
        const elapsedSeconds = (this.endTime - this.startTime) / 1000;
        this.startTime = null; // Reset the start time for the next use
        return elapsedSeconds;
    }
    isRunning() {
        return this.startTime !== null;
    }
}
const timer = new Timer(); //create a timer object

const client = new Client({ 
    intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
],
}); //create new client

client.toggles = new Collection();
client.commands = new Collection(); // set up commands list
const promptTimeout = new PromptTimeout(client);

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}


//Handle Interaction Command.
client.on(Events.InteractionCreate, async interaction => {  
    if(interaction.isAutocomplete()) {
        const command = interaction.client.commands.get(interaction.commandName);

        if (!command) {
            console.error(`No command matching ${interaction.commandName} was found.`);
            return;
        }

        try {
			await command.autocomplete(interaction);
		} catch (error) {
			console.error(error);
		}
    }

    else if(interaction.isChatInputCommand()){
        const command = interaction.client.commands.get(interaction.commandName);

        if (!command) {
            console.error(`No command matching ${interaction.commandName} was found.`);
            return;
        }
	    try {
		    await command.execute(interaction);
            }
	     catch (error) {
		    console.error(error);
		    if (interaction.replied || interaction.deferred) {
			    await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		    } else {
		    	await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		    }
	    }
    }
    else{
        return;
    }
});

client.activePrompts = new Map();

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    registrar.registercommands();

    client.guilds.cache.forEach(async (guild) => {
        //create prompt map
        client.activePrompts.set(guild.id, new Prompt());
        //setup cron
        const activeHoursData = await activeHoursUtils.fetchActiveHoursFromDB(guild.id);
        await schedulePost(activeHoursData, guild.id); //schedule a post at first whenever the bot loads up.
        cron.schedule('30 36 16 * * *', async () => {
        //try to schedule post 
        try{
            await schedulePost(activeHoursData, guild.id);
        } catch (error) {
            console.error('Error scheduling post', error);
        }
        }, {
            scheduled: true,
            timezone: "America/New_York"
        });

        console.log('scheduling data collector\n');
        cron.schedule('59 23 * * *', async () => { //scheduled to run every day at 11:59 PM
            try {
                console.log('Running daily saveDB task');
                await saveDB(client, guild.id); 
                console.log('Daily saveDB task completed');
            } catch (error) {
                console.error('Error running daily saveDB task:', error);
            }
        }, {
            scheduled: true,
            timezone: "America/New_York"
        });

    });
});
let scheduledPromptTimeout;

activeEvents.on('activeHoursUpdated', async (data) => {
    const activeHoursData = await activeHoursUtils.fetchActiveHoursFromDB(data.guildId);
    await schedulePost(activeHoursData);
});

activeEvents.on('activePromptExpired', async (data) => {
    await postPrompt(data.guildId);
});

async function schedulePost(activeHoursData, guildId){
    if (scheduledPromptTimeout) {
        clearTimeout(scheduledPromptTimeout);
    }
    client.guilds.fetch();
    const clientGuild = await client.guilds.cache.find(guild => guild.id === guildId);
    //get random hour within active hours
    const targetHour = await activeHoursUtils.getRandomHourWithinActiveHours(activeHoursData);
    const [hour, minute] = targetHour.split(':');

    const now = moment().tz("America/New_York");
    const targetTime = now.clone().hour(hour).minute(minute).second(0);

    if(now.isAfter(targetTime)){
        //if current time is after target time, schedule for next day
        console.log("Current time is past target posting time. Scheduling for next available slot.\n");
        targetTime.add(1, 'day');
    }
        const timeDifference = targetTime.diff(now);
        console.log(`Now prompt is scheduled for: ${targetTime.format('MM-DD-YYYY @ HH:mm A')} in: ${clientGuild.name}`);

        scheduledPromptTimeout = setTimeout(async () => {
          await postPrompt(guildId); 
        }, timeDifference);
}

async function postPrompt(guildId, callingUser) {
    var prompt = client.activePrompts.get(guildId);
    const promptData = await promptUtils.getRandomPrompt(guildId);
    
    if (!promptData) {
        console.error("No prompt found.");
        return;
    }

    const { promptText, channelId } = promptData;
    prompt.setPrompt(promptText);

    // Fetch the target channel using the channel ID
    const submissionChannel = await client.channels.fetch(channelId);
    if (!submissionChannel) {
        console.error(`Could not find channel with ID: ${channelId}`);
        return;
    }

    prompt.setChannel(submissionChannel);

    let messageContent;
    let userToPrompt;

    if (callingUser) {
        userToPrompt = await client.users.fetch(callingUser.id);
    } else {
        const userRand = await outputUsers(submissionChannel.guild);
        try {
            userToPrompt = await client.users.fetch(userRand);
        } catch (error) {
            console.error("Error fetching random user:", error);
            return;
        }
    }

    const userID = userToPrompt.id;
    if (!client.toggles.has(userID)) {
        client.toggles.set(userID, true);
    }
    const instruction = client.toggles.get(userID) ? 'Use /submit to submit your post!' : 
    `You opted for private prompting!, use /submit in ${submissionChannel} (Click that link!) to post!`;

    messageContent = `${userToPrompt} ${instruction}\n**Prompt:**\n${promptText}`;

    if (!userToPrompt || !messageContent) {
        console.error("Error: User or message content is not defined.");
        return;
    }

    let sentMessage;
    let sentChannel;

    if (client.toggles.get(userID)) {
        // public
        sentMessage = await client.sendMessageWithTimer(submissionChannel.id, messageContent);
        sentChannel = submissionChannel.id;
    } else {
        // private
        sentMessage = await userToPrompt.send(messageContent); 
        sentChannel = sentMessage.channel.id;
    }
    // Send the message in the specified channel
    prompt.setUserId(userToPrompt.id);
    client.activePrompts.set(guildId, prompt);
    promptTimeout.setupPrompt(sentChannel, sentMessage, userToPrompt, promptText);

}


client.sendMessageWithTimer = async (channelId, content) => {
    timer.start(); // Ensure the timer starts when the message is sent
    const channel = await client.channels.cache.get(channelId);
    if (!channel) {
        throw new Error("Channel not found");
    }
    
    const message = await channel.send(content);
    console.log("Message sent and timer started.\n");
    return message;
}

client.on('messageCreate', async msg => {
    // Check if the message is from the bot itself
    if (msg.author.id === client.user.id) {
        // Check if the message is in the specified channel
         {
            // If the timer is running, stop it and log the time
            if (timer.isRunning()) {
                const elapsedSeconds = timer.stop();
                console.log(`timeToRespond: ${elapsedSeconds} seconds.`);
            }
        }
    } 
    else if(msg.content === "!demoTrigger"){ 
        await postPrompt(msg.guildId);
    }
    else if(msg.content === "Prompt me"){ 
        await postPrompt(msg.guildId, msg.author);
    }
});


client.on('guildCreate', async guild => {

    botChannel = guild.systemChannel;
    

    if(!botChannel){
       await guild.channels.fetch();
       textChannels = await guild.channels.cache.filter(channel => channel.isTextBased());
       botChannel = textChannels.first();
    }

    console.log(botChannel);

    await setDefaultChannel(botChannel.id, guild.id);
    const welcomeMessage = helpUtils.getHelpMessageMod();
    await botChannel.send(welcomeMessage);
    const modrole = await guild.roles.create({
        name:'bot mod', 
        color:'Random',
        reason:'moderator role for BerealBot' 
    });
    const userrole = await guild.roles.create({
        name:'Bot User', 
        color:'Random',
        reason:'Notification user role for BerealBot' 
    });
    
    await guild.members.fetch();
    const guildMembers = guild.members.cache.values(); 
    for(member of guildMembers){
        await member.roles.add(userrole);
    }

});


client.on('guildMemberAdd', async member => {

    await member.guild.roles.fetch();
    const role = await member.guild.roles.cache.find(role => role.name === 'Bot User');
    try{
        await member.roles.add(role);
    }
    catch(error){
        console.error("Bot role is below specified user role");
    }
});

// Make sure this line is the last line
client.login(TOKEN);