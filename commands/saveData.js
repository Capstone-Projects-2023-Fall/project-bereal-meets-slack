const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const saveDB = require('../utils/saveDB');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('savedata')
        .setDescription('Saves data to a text file and uploads it to the chat'),
    async execute(interaction) {
        await interaction.deferReply();
        const channelId = interaction.channelId;
        const savedData = await saveDB(interaction.client, channelId);
        const dataString = JSON.stringify(savedData, null, 2);
        const buffer = Buffer.from(dataString, 'utf-8');
        const fileAttachment = new AttachmentBuilder(buffer, { name: 'saved_data.txt' }); //this is using RAM or memory rather than local storage
        await interaction.editReply({ content: 'Here is the saved data:', files: [fileAttachment] });
    },
};
