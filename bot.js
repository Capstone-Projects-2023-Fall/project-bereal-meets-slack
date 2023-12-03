require('dotenv').config(); //initialize dotenv
const { AttachmentBuilder, ChannelType, Client, Collection, ComponentType, Events, GatewayIntentBits, Partials } = require('discord.js');
const path = require('node:path');
const fs = require('fs');
const registrar = require('./utils/commandregistrar');
const cron = require('node-cron');
const moment = require('moment-timezone');
const http = require('http');
const promptUtils = require('./utils/promptUtils');
const outputUsers = require('./utils/getRandom');
const activeHoursUtils = require('./utils/activeHoursUtils');
const notifyMods = require('./utils/notifyMods.js');
const saveDB = require('./utils/saveDB');
const handleUserSubmission = require('./utils/handleUserSubmission.js');

//for cloud run, serverless application needs a server to listen.
const port = 8080;

const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
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
    partials: [
        Partials.Channel,
    ]
}); //create new client

client.toggles = new Collection();
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


client.on(Events.ClientReady, async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    registrar.registercommands();
    const guildId = process.env.DISCORD_GUILD_ID;

    //setup cron
    cron.schedule('0 0 8 * * *', async () => {
        //try to schedule post 
        try {
            const activeHoursData = await activeHoursUtils.fetchActiveHoursFromDB(guildId);
            await schedulePost(activeHoursData);
        } catch (error) {
            console.error('Error scheduling post', error);
        }
    });
    console.log('scheduling data collector')
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

async function schedulePost(activeHoursData) {
    //get random hour within active hours
    const targetHour = activeHoursUtils.getRandomHourWithinActiveHours(activeHoursData);
    const [hour, minute] = targetHour.split(':');

    const now = moment().tz("America/New_York");
    const targetTime = now.clone().hour(hour).minute(minute).second(0);

    if (now.isAfter(targetTime)) {
        //if current time is after target time, schedule for next day
        console.log("Current time is past target posting time. Scheduling for next available slot.");
        targetTime.add(1, 'day');
    }
    const timeDifference = targetTime.diff(now);

    setTimeout(async () => {
        await postPrompt();
    }, timeDifference);
}

async function postPrompt(callingUser) {
    const randomPrompt = await promptUtils.getRandomPrompt();
    if (callingUser) {
        const userID = callingUser.id;
        const message = `${callingUser} Use /submit to submit your post! \n **Prompt:**\n${randomPrompt}`;

        if (client.toggles.get(userID)) {
            // public
            client.sendMessageWithTimer(process.env.DISCORD_SUBMISSION_CHANNEL_ID, message);
        }
        else {
            // private
            callingUser.send(message);
        }

    }
    else {

        const list = client.guilds.cache.get(process.env.DISCORD_GUILD_ID);
        const userRand = await outputUsers(list);
        const userID = userRand.id;

        if (!client.toggles.has(userID)) {
            client.toggles.set(userID, true);
        }
        const instruction = client.toggles.get(userID) ? 'Use /submit to submit your post!' : 'Attach an image and type a caption!';
        const message = `<${userRand}> ${instruction} \n **Prompt:**\n${randomPrompt}`;

        if (client.toggles.get(userID)) {
            // public
            client.sendMessageWithTimer(process.env.DISCORD_SUBMISSION_CHANNEL_ID, message);
        }
        else {
            // private
            userRand.send(message);
        }
    }
}


async function triggerImmediatePost(callingUser) {
    try {
        if (callingUser) {
            await postPrompt(callingUser);
        }
        else {
            await postPrompt();
        }
    } catch (error) {
        console.error('Failed to trigger immediate post:', error);
    }

}

client.sendMessageWithTimer = async (channelId, content) => {
    timer.start(); // Ensure the timer starts when the message is sent
    const channel = await client.channels.cache.get(channelId);
    if (!channel) {
        throw new Error("Channel not found");
    }

    await channel.send(content);
    console.log("Message sent and timer started.");
}


client.on(Events.MessageCreate, async msg => {
    // Check if the message is from the bot itself
    if (msg.author.id === client.user.id) {
        // Check if the message is in the specified channel
        if (msg.channel.id === process.env.DISCORD_SUBMISSION_CHANNEL_ID) {
            if (!msg.content.includes('\n **Prompt:**\n')) {
                // bot posted an approved submission 
                return;
            }

            // If the timer is running, stop it and log the time
            if (timer.isRunning()) {
                const elapsedSeconds = timer.stop();
                console.log(`timeToRespond: ${elapsedSeconds} seconds.`);
            }
        }
    } else {
        //trigger
        console.log("I caught that");
        if (msg.content === "!demoTrigger") { 
            await triggerImmediatePost();
        } else if (msg.content === "Prompt me") { 
            await triggerImmediatePost(msg.author);
        }

        // make sure it is a dm
        if (msg.channel.type === ChannelType.DM) {
            console.log("amogus");
        } else {
            return;
        }

        const guild = await client.guilds.fetch(process.env.DISCORD_GUILD_ID);
		const caption = !msg.content.trim().length ? null : msg.content;
		await handleUserSubmission(client, msg.attachments.first(), guild, channel, caption, msg.author);
    }
});

// Make sure this line is the last line
client.login(TOKEN);
