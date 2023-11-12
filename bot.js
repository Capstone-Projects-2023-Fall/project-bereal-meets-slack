require('dotenv').config(); //initialize dotenv
const { Client, Collection, Events, GatewayIntentBits, channelLink } = require('discord.js');
const path = require('node:path');
const fs = require('fs');
const registrar = require('./commandregistrar'); 
const cron = require('node-cron');
const moment = require('moment-timezone');
const http = require('http');
const database = require('./utils/databasePrompts');
const outputUsers = require('./utils/promptRandom');
const timeRange = require('./commands/timeRange');
const activeHoursUtils = require('./utils/activeHoursUtils');
const {getRandomHourWithinActiveHours} = require('./utils/timeRangeUtils');

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
],
}); //create new client

client.commands = new Collection(); // set up commands list

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


// client.on('ready', () => {
//     console.log(`Logged in as ${client.user.tag}!`);
//     const now = moment().tz("America/New_York");
//     //scheduling for the scheduled post
//     cron.schedule('0 12 * * *', schedulePost, {
//         scheduled: true,
//         timezone: "America/New_York"
//     });
//     registrar.registercommands();
// });

//check for ping command.
client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;
  
	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});


function getRandomHour() {
    return Math.floor(Math.random() * (24 - 14) + 14);
}


client.on('guildCreate', guild => {
    //Default active hours for new guild
    activeHoursUtils.storeOperatingHours(guild.id, '09:00', '17:00')
    .then(() => console.log(`Default active hours set for guild ${guild.id}`))
    .catch(error => console.error(`Error setting default active hours for guild ${guild.id}:`, error));
});


client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    registrar.registercommands();

    const guildId = process.env.DISCORD_GUILD_ID;
    //try to schedule post
    try{
        const activeHoursData = await activeHoursUtils.fetchActiveHoursFromDB(guildId);
        await schedulePost(activeHoursData);
    } catch (error) {
        console.error('Error scheduling post', error);
    }
});


async function schedulePost(activeHoursData){
    //get random hour within active hours
    const targetHour = getRandomHourWithinActiveHours(activeHoursData);
    const [hour, minute] = targetHour.split(':');

    const now = moment().tz("America/New_York");
    const targetTime = now.clone().hour(hour).minute(minute).second(0);

    if(now.isAfter(targetTime)){
        //if current time is after target time, schedule for next day
        console.log("Current time is past target posting time. Scheduling for next available slot.");
        targetTime.add(1, 'day');
    }
        const timeDifference = targetTime.diff(now);

        setTimeout(async () => {
          const list = client.guilds.cache.get(process.env.DISCORD_GUILD_ID);
          const userRand = await outputUsers(list);
          const randomPrompt = await database.getRandomPrompt();
          client.sendMessageWithTimer(process.env.DISCORD_SUBMISSION_CHANNEL_ID, `<@${userRand}> Use /submit to submit your post! \n **Prompt:**\n${randomPrompt}`);
            //schedule next post 
            //const nextActiveHoursData = await activeHoursUtils.fetchActiveHoursFromDB(process.env.DISCORD_GUILD_ID);
           // schedulePost(nextActiveHoursData);
        }, timeDifference);
}

// function schedulePost() {
//     const targetHour = timeRange.getRandomHourWithinActiveHours();
//     const now = moment().tz("America/New_York");
//     const targetTime = now.clone().hour(targetHour).minute(0).second(0);

//     if (now.isAfter(targetTime)) {
//         client.channels.cache.get(process.env.DISCORD_SUBMISSION_CHANNEL_ID).send("Bot was added to discord or started too late, skipping today and only today")  
//     }

//     const timeDifference = targetTime.diff(now);
//     console.log(`Scheduling post for ${targetHour}:00 EST`);

//     setTimeout(() => {  
//         client.sendMessageWithTimer(process.env.DISCORD_SUBMISSION_CHANNEL_ID, "Time to make a post!"); //sendMessageWithTimer allows you to keep track of when you want the timer to start and end by the next bot message
//     }, timeDifference);
// }



client.sendMessageWithTimer = async (channelId, content) => {
    timer.start(); // Ensure the timer starts when the message is sent
    const channel = await client.channels.cache.get(channelId);
    if (!channel) {
        throw new Error("Channel not found");
    }
    await channel.send(content);
    console.log("Message sent and timer started.");
};

client.on('messageCreate', async msg => {
    // Check if the message is from the bot itself
    if (msg.author.id === client.user.id) {
        // Check if the message is in the specified channel
        if (msg.channel.id === process.env.DISCORD_SUBMISSION_CHANNEL_ID) {
            // If the timer is running, stop it and log the time
            if (timer.isRunning()) {
                const elapsedSeconds = timer.stop();
                console.log(`timeToRespond: ${elapsedSeconds} seconds.`); //TODO: Make this fill into the DB as timeToRespond
            }
        }
    }
});

// Make sure this line is the last line
client.login(TOKEN);

