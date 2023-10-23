require('dotenv').config(); //initialize dotenv
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const path = require('node:path');
const fs = require('fs');
const registrar = require('./commandregistrar'); 
const cron = require('node-cron');
const moment = require('moment-timezone');
const notifyMods = require('./.github/utils/notifyMods');
const http = require('http');

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
    if (now.hour() > 12) {// If the bot is started before 12 PM EST, try to schedule for today
		console.log("Since I was started after 12 PM EST, I might wait till the next day to start") //have this become a message sent into the discord channel
        schedulePost();
    }
    //scheduling for the scheduled post
    cron.schedule('* 12 * * *', schedulePost, {
        scheduled: true,
        timezone: "America/New_York"
    });
    registrar.registercommands();
});


client.on('messageCreate', async msg => {
	if (msg.author.bot) { return; }

    if (msg.channel.id === 1165442182937841684){
        try{
            await notifyMods(msg.guild, msg.content, msg.author, msg.attachments);
        } catch (error){
            console.error(`Error notifying moderator:`, error);
        }
    }
    
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
    else if(msg.content === 'are you alive?'){
        msg.reply('what gives you that impression?')
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
function getRandomHour() {
    return Math.floor(Math.random() * (24 - 14) + 14);
}

function schedulePost() {
    const targetHour = getRandomHour();
    const now = moment().tz("America/New_York");
    const targetTime = now.clone().hour(targetHour).minute(0).second(0);

    if (now.isAfter(targetTime)) {
        console.log("Bot was added to discord or started to late, skipping today and only today")
    }

    const timeDifference = targetTime.diff(now);
    console.log(`Scheduling post for ${targetHour}:00 EST`);

    setTimeout(() => {
        console.log("Time to make a post!");
    }, timeDifference);
}
// Make sure this line is the last line
client.login(TOKEN);

