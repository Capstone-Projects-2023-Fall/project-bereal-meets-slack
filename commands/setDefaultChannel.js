const {SlashCommandBuilder} = require('discord.js');
const {pool} = require('../utils/dbconn.js');

module.exports= {
    data: new SlashCommandBuilder()
        .setName('setsubmissionchannel')
        .setDescription('Set the default submission channel')
        .addChannelOption(option =>
            option.setName('channel')
            .setDescription('The channel for submissions')
            .setRequired(true)
            ),

    async execute(interaction) {
        if (!interaction.member.permissions.has('mod all')) {
            return await interaction.reply({content: 'You do not have permission to use this command.', ephemeral: true});
        }

        const channel = interaction.options.getChannel('channel');

        const channelId = channel.id;
        if (!/^\d{17,19}$/.test(channelId)){
            console.error("Invalid channel ID format");
            return await interaction.reply({content: 'Invalid channel ID format.', ephemeral: true});
        }

        const guildChannel = interaction.guild.channels.cache.get(channelId);
        if(!guildChannel){
            console.error("Channel does not exist in the guild");
            return await interaction.reply({content: 'Channel does not exist in the guild.', ephemeral: true});
        }

        const query = 'INSERT settings SET submission_channel_id = ? WHERE guild_id = ?';

        console.log('Executing SQL Query:', query);

        try{
            await pool.execute(query, [channel.id, interaction.guild.id]); 
            console.log('Data Inserted Successfully');
            await interaction.reply({content: `Submission channel set to ${channel.name}`, ephemeral: true});
        } catch (error) {
            console.error('Error Inserting Data:', error);
            await interaction.reply({content: 'An error occurred while setting the submission channel,', ephemeral: true});
        }
        
    }
};