const {SlashCommandBuilder} = require('discord.js');
const {setDefaultChannel} = require('../utils/setDefaultChannelUtils.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('setsubmissionchannel')
        .setDescription('Set the submission channel for the guild.')
        .addChannelOption(option => 
            option.setName('channel')
                .setDescription('The channel for submissions')
                .setRequired(true)),

    async execute(interaction) {

        if (!interaction.member.permissions.has('bot mod')){
            return await interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true});
        }

        const channel = interaction.options.getChannel('channel');
        const channelId = channel.id;
        const guildId = interaction.guild.id;

        const rc = await setDefaultChannel(channelId, guildId);

        if (rc === 0){
            await interaction.reply({ content: `Submission channel set to ${channel} for this guild.`, ephemeral: true});
        } else {
           
            await interaction.reply({ content: 'Failed to set the submission channel.', ephemeral: true});
        }
    }
};