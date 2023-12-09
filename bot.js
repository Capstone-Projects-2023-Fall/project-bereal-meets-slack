require('dotenv').config(); //initialize dotenv
const { Client, Collection, Events, GatewayIntentBits, channelLink,  ChannelType } = require('discord.js');
const path = require('node:path');
const fs = require('fs');
const registrar = require('./utils/commandregistrar'); 
const cron = require('node-cron');
const moment = require('moment-timezone');
const http = require('http');
const promptUtils = require('./utils/promptUtils');
const outputUsers = require('./utils/getRandom');
const activeHoursUtils = require('./utils/activeHoursUtils');
const saveDB = require('./utils/saveDB');
const { prompt } = require('./utils/prompt.js');
const PromptTimeout = require('./utils/promptTimeout');
const activeEvents = require('./utils/activeEvents')
const setDefaultChannel = require('./commands/setDefaultChannel.js');


//for cloud run, serverless application needs a server to listen.
const port = 8080;

const server = http.createServer((req, res) => {
// Set the response HTTP header with HTTP status and Content type
res.writeHead(200, {'Content-Type': 'text/plain'});
// Send the response body "Hello World"
res.end('BeRealBot lives here\n');
});

server.listen(port, () => {
console.log('Hello world listening on port', port);
});


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


//check for ping command.
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
            if(interaction.commandName === 'setsubmissionchannel'){
                await setDefaultChannel.execute(interaction);
            } else {
		    await command.execute(interaction);
            }
	    } catch (error) {
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


client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    registrar.registercommands();
    const guildId = process.env.DISCORD_GUILD_ID;

    //setup cron
    cron.schedule('0 0 8 * * *', async () => {
    //try to schedule post 
    try{
        const activeHoursData = await activeHoursUtils.fetchActiveHoursFromDB(guildId);
        await schedulePost(activeHoursData);
    } catch (error) {
        console.error('Error scheduling post', error);
    }
  });
    console.log('scheduling data collector\n')
    cron.schedule('59 23 * * *', async () => { //scheduled to run every day at 11:59 PM
        try {
            console.log('Running daily saveDB task');
            await saveDB(client, process.env.DISCORD_SUBMISSION_CHANNEL_ID); //this is hard coded for the submissions channel
            console.log('Daily saveDB task completed');
        } catch (error) {
            console.error('Error running daily saveDB task:', error);
        }
    }, {
        scheduled: true,
        timezone: "America/New_York"
    });
});
let scheduledPromptTimeout;

activeEvents.on('activeHoursUpdated', async (data) => {
    const activeHoursData = await activeHoursUtils.fetchActiveHoursFromDB(data.guildId);
    await schedulePost(activeHoursData);
});

async function schedulePost(activeHoursData){
    if (scheduledPromptTimeout) {
        clearTimeout(scheduledPromptTimeout);
    }
    //get random hour within active hours
    const targetHour = activeHoursUtils.getRandomHourWithinActiveHours(activeHoursData);
    const [hour, minute] = targetHour.split(':');

    const now = moment().tz("America/New_York");
    const targetTime = now.clone().hour(hour).minute(minute).second(0);

    if(now.isAfter(targetTime)){
        //if current time is after target time, schedule for next day
        console.log("Current time is past target posting time. Scheduling for next available slot.\n");
        targetTime.add(1, 'day');
    }
        const timeDifference = targetTime.diff(now);
        console.log(`Now prompt is scheduled for: ${targetTime.format('MM-DD-YYYY @ HH:mm A')}`);

        scheduledPromptTimeout = setTimeout(async () => {
          await postPrompt();
        }, timeDifference);
}

async function postPrompt(callingUser) {
    const query = 'SELECT submission_channel_id FROM settings WHERE guild_id = ?';
    const [rows] = await pool.execute(query, [process.env.DISCORD_GUILD_ID]);

    let submissionChannel;
    if(rows.length > 0){
        const submissionChannelId = rows[0].submission_channel_id;
        submissionChannel = await client.channels.fetch(submissionChannelId);
    }

    if(!submissionChannel){
        console.error("Submission channel is not set or invalid.");
        return;
    }

    const guildId = process.env.DISCORD_GUILD_ID;
    const randomPrompt = await promptUtils.getRandomPrompt(guildId);
    prompt.setPrompt(randomPrompt);
        
    let messageContent;
    let userToPrompt;

    if (callingUser) {
            userToPrompt = await client.users.fetch(callingUser.id); // this should store the calling user
            messageContent = `${callingUser.toString()} Use /submit to submit your post!\n**Prompt:**\n${randomPrompt}`;
    } else {
        const list = client.guilds.cache.get(process.env.DISCORD_GUILD_ID);
        const userRand = await outputUsers(list);
        try {
            userToPrompt = await client.users.fetch(userRand); // this should fetch the user that was prompted
            messageContent = `<@${userRand}> Use /submit to submit your post!\n**Prompt:**\n${randomPrompt}`;
        } catch (error) {
            console.error("Error fetching random user:", error);
            return;
        }
    }
    if (!userToPrompt || !messageContent) {
        console.error("Error: User or message content is not defined.");
        return;
    }
    
    //for promptTimeout
    const message = await submissionChannel.send(messageContent);
    const channelId = process.env.DISCORD_SUBMISSION_CHANNEL_ID;
    const sentMessage = await client.sendMessageWithTimer(channelId, messageContent);
    promptTimeout.setupPrompt(channelId, sentMessage, userToPrompt, randomPrompt, channelId);
}

async function triggerImmediatePost(callingUser){
    try{
        if(callingUser){
            await postPrompt(callingUser); 
        }
        else{
            await postPrompt();
        }
    }catch (error){
        console.error('Failed to trigger immediate post:', error);
    }
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
        if (msg.channel.id === process.env.DISCORD_SUBMISSION_CHANNEL_ID) {
            // If the timer is running, stop it and log the time
            if (timer.isRunning()) {
                const elapsedSeconds = timer.stop();
                console.log(`timeToRespond: ${elapsedSeconds} seconds.`);
            }
        }
    } 
    else if(msg.content === "!demoTrigger"){ //&& msg.author.id === process.env.ADMIN_USER_ID
        await triggerImmediatePost();
    }
    else if(msg.content === "Prompt me"){ //&& msg.author.id === process.env.ADMIN_USER_ID
        await triggerImmediatePost(msg.author);
    }
});
// Make sure this line is the last line
client.login(TOKEN);