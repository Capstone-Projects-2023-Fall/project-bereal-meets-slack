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
            return await interaction.reply({content: 'You do nott have permission to use this command.', ephemeral: true});
        }

        const channel = interaction.options.getChannel('channel');

        const query = 'UPDATE settings SET submission_channel_id = ? WHERE guild_id = ?';

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