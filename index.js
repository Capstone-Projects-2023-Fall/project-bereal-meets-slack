require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js
const registrar = require('./commandregistrar'); 

const TOKEN = process.env.DISCORD_TOKEN;

const client = new Discord.Client({ 
    intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.GuildMembers,
],
}); //create new client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  //make sure commands are synced & registered
  registrar.registercommands();
}); // when client is ready to listen, log.

client.on('messageCreate', async msg => {
    if (msg.content === 'ping') {
        msg.reply('stop trying to do that.');
    }
  }); //listens for "ping"


//check for ping command.
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
  });


//make sure this line is the last line
client.login(TOKEN); //login bot using token

