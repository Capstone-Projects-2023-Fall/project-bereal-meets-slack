require('dotenv').config(); //initialize dotenv
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const path = require('node:path');
const fs = require('fs');
const registrar = require('./commandregistrar'); 

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
  registrar.registercommands();
}); // when client is ready to listen, log.

client.on('messageCreate', async msg => {
    if (msg.content === 'ping') {
        msg.reply('ping');
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

//make sure this line is the last line
client.login(TOKEN); //login bot using token

