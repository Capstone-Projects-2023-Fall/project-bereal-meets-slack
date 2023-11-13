const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const fs = require('fs');
const saveDB = require('../utils/saveDB'); // Adjust the path as needed

module.exports = {
    data: new SlashCommandBuilder()
        .setName('savedata')
        .setDescription('Saves data to a text file and uploads it to the chat'),
    async execute(interaction) {
        // Defer the reply
        await interaction.deferReply();
        
        // Call your saveDB function
        const savedData = await saveDB(interaction.client, process.env.DISCORD_SUBMISSION_CHANNEL_ID);

        // Convert the data to a string format
        const dataString = JSON.stringify(savedData, null, 2);

        // Define the filename
        const filename = 'saved_data.txt';

        // Write the string to a file
        fs.writeFileSync(filename, dataString);

        // Create a message attachment from the file
        const fileAttachment = new AttachmentBuilder(filename, { name: 'saved_data.txt' });

        // Edit the deferred reply with the file
        await interaction.editReply({ content: 'Here is the saved data:', files: [fileAttachment] });

        // Optional: Clean up the file after sending
        fs.unlinkSync(filename);
    },
};