// Code taken from discord.js documentation on basic command creation & registration.

require('dotenv').config();
const fs = require('fs');
const path = require('node:path');

const { REST } = require('@discordjs/rest')
const { Routes, Guild} = require('discord.js');

const TOKEN = process.env.DISCORD_TOKEN;
const CLIENT_ID = process.env.DISCORD_CLIENT_ID;

const commands = [];

// Grab all the command files from the commands directory 

const commandsPath = path.join(__dirname, '../commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));


//REST api access
const rest = new REST({ version: '10' }).setToken(TOKEN);

//syncing slash commands
function registercommands(){

  for (const file of commandFiles) {
	  const filePath = path.join(commandsPath, file);
	  const command = require(filePath);
	  // Set a new item in the Collection with the key as the command name and the value as the exported module
	  if ('data' in command && 'execute' in command) {
		  commands.push(command.data.toJSON());
	  } else {
		  console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	  }
  }
 
  
  try {
    (async function(){
      console.log(`Started refreshing ${commands.length} application (/) commands.`);
  
      // The put method is used to fully refresh all commands in the guild with the current set
      const data = await rest.put(
        Routes.applicationCommands(CLIENT_ID),
        { body: commands },
      );
    
      console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    })();
    } catch (error) {
      console.error(error);
    }
  
  }

module.exports = {
  registercommands
};