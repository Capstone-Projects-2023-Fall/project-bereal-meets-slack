const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const { processAllChannels } = require('../utils/saveDB');
const { Parser } = require('json2csv');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('exportcsv')
        .setDescription('Saves data to a text file and uploads it to the chat'),
    async execute(interaction) {
        await interaction.deferReply();

        try {
            const allChannelsData = await processAllChannels(interaction.client);
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
//Note: test if the exportcsv command is working when they are done to see if the all channel reading data exporting is working and exporting the csv actually
//KNOWN ISSUE: The database is not saving any of this data but that doesn't mean we shouldnt be able to export a csv of what we are reading.