const { SlashCommandBuilder } = require('discord.js');
const {addPrompt, listPrompts, searchPrompts, deletePrompt, getPrompts} = require('../utils/promptUtils.js')

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
            .setRequired(true)
            .setAutocomplete(true),
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
    
  async autocomplete(interaction) {
    try{
      const focusedValue = interaction.options.getFocused();
      const choices = await getPrompts(interaction.guild.id);
      const filtered = choices.filter(choice => choice.startsWith(focusedValue));
      await interaction.respond(
        filtered.map(choice => ({ name: choice, value: choice })),
      );
    }catch(error){
      console.log("Timeout; Unknown Interaction");
      await interaction.respond([{name: "Fetching ERROR: You can still enter aprompt to delete", value: "N/A"}]);
    }
  },

  async execute(interaction) {
    const guildId = interaction.guild.id; //Get guild ID
    const subcommand = interaction.options.getSubcommand();
    await interaction.deferReply({ephemeral: true});
    let reply = '';

    reply = subcommand === 'add'
      ? await addPrompt(guildId, interaction.options.getString('prompt'))
      : subcommand === 'delete'
      ? await deletePrompt(guildId, interaction.options.getString('prompt'))
      : subcommand === 'list'
      ? await listPrompts(guildId)
      : subcommand === 'search'
      ? await searchPrompts(guildId, interaction.options.getString('search-term'))
      : '';
  
      await interaction.followUp(reply);
  },
};