require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord.js');

const TOKEN = process.env.DISCORD_TOKEN;
const CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const GUILD_ID = process.env.DISCORD_GUILD_ID;


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
});

client.on('messageCreate', async msg => {
    if (msg.content === 'ping') {
        msg.reply('stop trying to do that.');
    }
  });


  const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];

const rest = new REST({ version: '10' }).setToken(TOKEN);

( async () =>{
  try {
    console.log('Started refreshing application (/) commands.');

    rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
  console.error(error);
  }
})();
  
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
  });


//make sure this line is the last line
client.login(TOKEN); //login bot using token

