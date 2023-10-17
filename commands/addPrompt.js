const { SlashCommandBuilder } = require('discord.js');
const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./data');
const promptArray = JSON.parse(localStorage.getItem('prompts')) || [];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('addprompt')
    .setDescription('Adds a new prompt to the list.')
    .addStringOption(option =>
      option
        .setName('prompt')
        .setDescription('Enter a new prompt.')
        .setRequired(true),
    ),
  async execute(interaction) {

    const prompt = interaction.options.getString('prompt');

    promptArray.push(prompt);
    localStorage.setItem('prompts', JSON.stringify(promptArray));

    await interaction.reply(`Prompt "${prompt}" has been added to the list. Current prompts: ${promptArray.join(', ')}`);
  },
};
