const { SlashCommandBuilder } = require('discord.js');
const {addPrompt, listPrompts, deletePrompt, getPrompts} = require('../utils/promptUtils.js')

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
        .addChannelOption(option => 
          option
            .setName('channel')
            .setDescription('Select the channel for the prompt')
            .setRequired(false))
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

    if (subcommand === 'add') {
      const promptText = interaction.options.getString('prompt');
      const channel = interaction.options.getChannel('channel');
      const channelId = channel ? channel.id : null; // Get the channel ID or null
      reply = await addPrompt(guildId, promptText, channelId); // Pass channelId to addPrompt
  } else if (subcommand === 'delete') {
      const promptText = interaction.options.getString('prompt');
      reply = await deletePrompt(guildId, promptText);
  } else if (subcommand === 'list') {
      reply = await listPrompts(guildId, interaction.client);
  }

      await interaction.followUp(reply);
  },
};