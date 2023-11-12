require('dotenv').config(); //initialize dotenv
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const path = require('node:path');
const fs = require('fs');
const registrar = require('./commandregistrar'); 
const cron = require('node-cron');
const moment = require('moment-timezone');
const notifyMods = require('./utils/notifyMods');
const http = require('http');
const { ChannelType } = require('discord.js');

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

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    const now = moment().tz("America/New_York");
    //scheduling for the scheduled post
    cron.schedule('0 12 * * *', schedulePost, {
        scheduled: true,
        timezone: "America/New_York"
    });
    registrar.registercommands(); 
});

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

function schedulePost() {
    const targetHour = getRandomHour();
    const now = moment().tz("America/New_York");
    const targetTime = now.clone().hour(targetHour).minute(0).second(0);

    if (now.isAfter(targetTime)) {
        client.channels.cache.get(process.env.DISCORD_SUBMISSION_CHANNEL_ID).send("Bot was added to discord or started too late, skipping today and only today")  
    }
    const timeDifference = targetTime.diff(now);
    console.log(`Scheduling post for ${targetHour}:00 EST`);
    setTimeout(() => {  
        client.sendMessageWithTimer(process.env.DISCORD_SUBMISSION_CHANNEL_ID, "Time to make a post!"); //sendMessageWithTimer allows you to keep track of when you want the timer to start and end by the next bot message
    }, timeDifference);
}

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
                console.log(`timeToRespond: ${elapsedSeconds} seconds.`); //TODO: BMS-99 TODO: Make this fill into the DB as timeToRespond
            }
        }
    }
});

async function fetchMessagesUntilPrompt(client, channelId) {
    if (!client.isReady()) {
        console.error('Client is not ready');
        return [];
    }
    const channel = client.channels.cache.get(channelId);
    if (!channel || channel.type !== ChannelType.GuildText) {
        console.error('The channel was not found or it is not a text channel.');
        return [];
    }
    let lastId;
    const messagesList = [];
    let foundPrompt = false;
    while (!foundPrompt) {
        const options = { limit: 100 };
        if (lastId) {
            options.before = lastId;
        }
        try {
            const messages = await channel.messages.fetch(options);
            if (messages.size === 0) {
                break; // No more messages left to fetch
            }
            for (const message of messages.values()) {
                if (message.content.includes("Prompt")) {
                    foundPrompt = true;
                    break; // Stop if we find the "Prompt"
                }
                messagesList.push(message); // Add the message to our list
                lastId = message.id; // Set the last ID for the next fetch
            }
        } catch (error) {
            console.error('Error fetching messages: ', error);
            break; // Exit the loop in case of API error
        }
    }
    return messagesList;
}

function countReactions(message) {
    // Check if the message has reactions
    if (message.reactions.cache.size > 0) {
        // Reduce the reactions to a total count
        const totalReactions = message.reactions.cache.reduce((acc, reaction) => acc + reaction.count, 0);
        return totalReactions;
    } else {
        // If there are no reactions, return 0
        return 0;
    }
}

async function countRepliesToMessage(message) {
    // Ensure the message object has the necessary properties
    if (!message.channel || !message.id) {
        throw new Error('The provided message object is missing required properties.');
    }
    // Fetch all messages in the channel that came after the message in question
    const options = { after: message.id };
    let repliesCount = 0;
    let lastID;
    while (true) {
        if (lastID) {
            options.after = lastID;
        }
        const messages = await message.channel.messages.fetch(options);
        if (messages.size === 0) {
            // No more messages left to fetch
            break;
        }
        // Count messages that are a direct reply to the original message
        const replies = messages.filter(m => m.reference && m.reference.messageId === message.id);
        repliesCount += replies.size;
        // Prepare for the next batch
        lastID = messages.last().id;
    }
    return repliesCount;
}

function getImageLinkFromMessage(message) {
    // Initialize the image link variable
    let imageLink = null;
    // Check for attachments in the message
    message.attachments.forEach(attachment => {
        // Check if the attachment is an image based on its content type
        if (attachment.contentType && attachment.contentType.startsWith('image/')) {
            // Set the image link
            imageLink = attachment.url;
        }
    });
    // If no image was found in attachments, check embeds as Discord automatically embeds some image links
    if (!imageLink) {
        message.embeds.forEach(embed => {
            if (embed.type === 'image' && embed.url) {
                imageLink = embed.url;
            }
            // Some embeds might contain an image within them rather than being of type 'image'
            else if (embed.image && embed.image.url) {
                imageLink = embed.image.url;
            }
        });
    }
    return imageLink;
}

async function saveDB(client, channelId) {
    try {
        const messagesList = await fetchMessagesUntilPrompt(client, channelId);
        const messagesData = [];

        // Loop through each message and get the number of reactions
        for (const message of messagesList) {
            const numOfReactions = message.reactions.cache.reduce((acc, reaction) => acc + reaction.count, 0);
            // Create an object with the message ID and the number of reactions
            const messageData = {
                messageId: message.id,
                numOfReactions: numOfReactions,
                numOfReplies: numOfReplies,
                response_image: getImageLinkFromMessage
            };
            //Add the object to our array
            messagesData.push(messageData);
        }
        //TODO: Loop through messageData element by element, extract data out of it, insert data into database
        //  Also keep in mind you will need to add the time onto each element from that array (you will write a method to do this)
        //      TODO: write a method to find the earliest prompt message, then have it get the time stamp of that message and do the math to calculate the time diff and return that

    } catch (error) {
        console.error('Error in saveDB:', error);
        throw error;
    }
}
// Make sure this line is the last line
client.login(TOKEN);