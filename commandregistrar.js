require('dotenv').config();
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord.js');

const TOKEN = process.env.DISCORD_TOKEN;
const CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const GUILD_ID = process.env.DISCORD_GUILD_ID;

//for slash commands
const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];

//REST api access
const rest = new REST({ version: '10' }).setToken(TOKEN);

//syncing slash commands
function registercommands(){
    try {
      console.log('Started refreshing application (/) commands.');
  
      rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });
  
      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
    console.error(error);
    }
}

module.exports = {
  registercommands
};