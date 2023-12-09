const {SlashCommandBuilder} = require('discord.js');
const {pool} = require('../utils/dbconn.js');

async function setDefaultChannel(guildId, channelId){
    const query = 'INSERT INTO guild_settings (guild_id, default_channel_id) VALUES (?, ?) ON DUPLICATE KEY UPDATE default_channel_id = VALUES(default_channel_id)';
    await pool.execute(query, [guildId, channelId]);
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setsubmissionchannel')
        .setDescription('Set the submission channel for the guild.')
        .addChannelOption(option => 
            option.setName('channel')
                .setDescription('The channel for submissions')
                .setRequired(true)),

    async execute(interaction) {
        if (!interaction.member.permissions.has('mod all')){
            return await interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true});
        }

        const channel = interaction.options.getChannel('channel');
        const channelId = channel.id;
        const guildId = interaction.guild.id;

        try{
            const query = 'INSERT settings (submission_channel_id, guild_id) VALUES (?, ?) ON DUPLICATE KEY UPDATE submission_channel_id = VALUES(submission_channel_id)';
            await pool.execute(query, [channelId, guildId]);
            await interaction.reply({ content: `Submission channel set to ${channel} for this guild.`, ephemeral: true});
        } catch (error) {
            console.error('Error in setChannel command:', error);
            await interaction.reply({ content: 'Failed to set the submission channel.', ephemeral: true});
        }
    }
};