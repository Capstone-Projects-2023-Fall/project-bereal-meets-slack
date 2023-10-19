require('dotenv').config(); //initialize dotenv
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const path = require('node:path');
const fs = require('fs');
const registrar = require('./commandregistrar'); 
const cron = require('node-cron');
const { DateTime } = require('luxon');

const TOKEN = process.env.DISCORD_TOKEN;

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
  //make sure commands are synced & registered
  scheduleRandomTask();
  registrar.registercommands();
}); // when client is ready to listen, log.

client.on('messageCreate', async msg => {
	if (msg.author.bot) { return; }
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
  }); //listens for "ping"


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

let lastExecutionTime = null;

function scheduleRandomTask() {
    const now = DateTime.now().setZone('America/New_York');

    let startHour = 14; // 2 PM EST
    let endHour = 23;   // 11 PM EST

    let targetTime;
    if (now.hour < startHour) {
        // If it's before 2 PM, schedule the task for a random time after 2 PM on the same day
        targetTime = now.set({ hour: startHour, minute: 0, second: getRandomInt(0, 3599) });
    } else if (now.hour >= endHour) {
        // If it's after 11 PM, schedule the task for a random time after 2 PM on the next day
        targetTime = now.plus({ days: 1 }).set({ hour: startHour, minute: 0, second: getRandomInt(0, 3599) });
    } else {
        // If it's between 2 PM and 11 PM, schedule the task for a random time within this window
        const secondsUntilEnd = endHour * 3600 - (now.hour * 3600 + now.minute * 60 + now.second);
        targetTime = now.plus({ seconds: getRandomInt(0, secondsUntilEnd) });
    }

    const delayInMilliseconds = targetTime.diff(now).as('milliseconds');

    console.log(`Task scheduled for: ${targetTime.toString()}`); // For debugging

    setTimeout(() => {
        // This is where the bot sends the notification to make a post
        console.log("Time to make a post!");

        // Schedule the next notification
        scheduleRandomTask();
    }, delayInMilliseconds);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//make sure this line is the last line
client.login(TOKEN); //login bot using token

