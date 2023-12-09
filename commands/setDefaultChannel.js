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
            await pool.execute(queryText, [guildId, channelId]);
            await interaction.reply(`Submission channel set to ${channelId} for this guild.`);
        } catch (error) {
            console.error('Error in setChannel command:', error);
            await interaction.reply('Failed to set the submission channel.');
        }
    }
};