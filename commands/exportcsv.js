const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
require('dotenv').config();
const saveDB = require('../utils/saveDB');
const { Parser } = require('json2csv');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('exportcsv')
        .setDescription('Saves data to a text file and uploads it to the chat'),
    async execute(interaction) {
        await interaction.deferReply();
        const channelId = process.env.DISCORD_SUBMISSION_CHANNEL_ID;
        const savedData = await saveDB(interaction.client, channelId);
        try {
            const parser = new Parser();
            const csvData = parser.parse(savedData);

            const buffer = Buffer.from(csvData, 'utf-8');
            const fileAttachment = new AttachmentBuilder(buffer, { name: 'saved_data.csv' });

            await interaction.editReply({ content: 'Here is the saved data:', files: [fileAttachment] });
        } catch (error) {
            console.error('Error converting to CSV:', error);
            await interaction.editReply({ content: 'An error occurred while converting data to CSV.' });
        }
    },
};
