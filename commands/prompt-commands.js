const { SlashCommandBuilder } = require('discord.js');
const {addPrompt, listPrompts, searchPrompts, deletePrompt} = require('../utils/promptUtils.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('prompts')
    .setDescription('Manage prompts.')
    .addSubcommand(subcommand =>
      subcommand
        .setName('add')
        .setDescription('Add a new prompt.')
        .addStringOption(option =>
          option
            .setName('prompt')
            .setDescription('Enter a new prompt.')
            .setRequired(true),
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('delete')
        .setDescription('Delete a prompt from the list.')
        .addStringOption(option =>
          option
            .setName('prompt')
            .setDescription('Enter the prompt to delete')
            .setRequired(true),
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('list')
        .setDescription('List all prompts.')
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('search')
        .setDescription('Search for prompts in the list.')
        .addStringOption(option =>
          option
            .setName('search-term')
            .setDescription('Search prompt list:')
            .setRequired(true),
        )
    ),
  async execute(interaction) {
    const subcommand = interaction.options.getSubcommand();
    //await interaction.deferReply();
    let reply = '';

     reply = subcommand === 'add'
    ? await (async () => {
      const prompt = interaction.options.getString('prompt');
      return await addPrompt(prompt);
    })()
    : subcommand === 'delete'
    ? await (async () => {
        const promptToDelete = interaction.options.getString('prompt');
        return await deletePrompt(promptToDelete, subcommand === 'delete');
     })()
    : subcommand === 'list'
      ? await listPrompts()
    : subcommand === 'search'
      ? await (async () => {
        const query = interaction.options.getString('search-term');
        return await searchPrompts(query);
      })()
    : '';
  
      await interaction.followUp(reply);
  },
};