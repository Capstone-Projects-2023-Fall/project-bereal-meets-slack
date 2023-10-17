const { SlashCommandBuilder } = require('discord.js');
const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./data');
const promptArray = JSON.parse(localStorage.getItem('prompts')) || [];

module.exports = {
    data: new SlashCommandBuilder()
      .setName('deleteprompt')
      .setDescription('Deletes a prompt from the list.')
      .addStringOption(option =>
        option
          .setName('prompt')
          .setDescription('Enter the prompt to delete')
          .setRequired(true),
      ),

    async execute(interaction) {
      const promptToDelete = interaction.options.getString('prompt');
      const fullMatches = promptArray.filter((prompt) => prompt === promptToDelete);
      const partialMatches = promptArray.filter(prompt => prompt.includes(promptToDelete) && !fullMatches.includes(prompt));
        
      const reply = fullMatches.length === 1
        ? ((() => {
            const index = promptArray.indexOf(fullMatches[0]);
            promptArray.splice(index, 1);
            localStorage.setItem('prompts', JSON.stringify(promptArray));
            return `Prompt "${fullMatches[0]}" has been deleted. Current prompts: ${promptArray.join(', ')}`;
          }))()
        : fullMatches.length === 0 && partialMatches.length > 0
        ? `Prompt(s) that partially match "${promptToDelete}":\n${partialMatches.join('\n')}`
        : `No prompts found that match "${promptToDelete}"`;
  
      await interaction.reply(reply);
    },
  };
  
  