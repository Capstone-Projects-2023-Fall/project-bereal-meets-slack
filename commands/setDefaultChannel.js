const {SlashCommandBuilder} = require('discord.js');
const {pool} = require('../utils/dbconn.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setsubmissionchannel')
        .setDescription('Set the submission channel for the guild.')
        .addStringOption(option => 
            option.setName('channel')
                .setDescription('The ID of the submission channel')
                .setRequired(true)),

    async execute(interaction) {
        const channelId = interaction.options.getString('channel');
        const guildId = interaction.guild.id;

        try{
            const queryText = 'INSERT INTO settings (submission_channel_id, guild_id) VALUES (?, ?) ON DUPLICATE KEY UPDATE submission_channel_id = VALUES(submission_channel_id)';
            await pool.execute(queryText, [channelId, guildId]);
            await interaction.reply({ content: `Submission channel set to ${channelId} for this guild.`, ephemeral: true});
        } catch (error) {
            console.error('Error in setChannel command:', error);
            await interaction.reply({ content: 'Failed to set the submission channel.', ephemeral: true});
        }
    }
};