const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const { Parser } = require('json2csv');
const { processAllChannels } = require('../utils/saveDB');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('exportcsv')
        .setDescription('Saves data to a text file and uploads it to the chat'),
    async execute(interaction) {
        const modRole = interaction.guild.roles.cache.find(role => role.name === 'bot mod');
            
        if (!(interaction.member.roles.cache.has(modRole.id))) {
            return await interaction.reply({ content: 'Only **moderators** can use this command', ephemeral: true});
        }
        
        await interaction.deferReply();

        try {
            // Process channels from the guild where the command is executed
            const allChannelsData = await processAllChannels(interaction.client, interaction);
            const parser = new Parser();
            const csvData = parser.parse(allChannelsData);

            const buffer = Buffer.from(csvData, 'utf-8');
            const fileAttachment = new AttachmentBuilder(buffer, { name: 'saved_data.csv' });

            await interaction.editReply({ content: 'Here is the saved data:', files: [fileAttachment] });
        } catch (error) {
            console.error('Error converting to CSV:', error);
            await interaction.editReply({ content: 'An error occurred while converting data to CSV.' });
        }
    },
};
