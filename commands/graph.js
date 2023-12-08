const {SlashCommandBuilder} = require('discord.js');
const {AttachmentBuilder,PermissionsBitField} = require('discord.js');
const {fetchDataForGraph, generateGraph} = require('../utils/dataGraph'); 

module.exports = {
    data: new SlashCommandBuilder()
        .setName('graphdata')
        .setDescription('Displays a graph based on the data'),

    async execute(interaction) {

        await interaction.deferReply();
        try {
            const data = await fetchDataForGraph(interaction.guild.id);
            if (data.length === 0) {
                //incase the graph is blank, it will instead give a message now
                return await interaction.editReply({ content: 'No data available to generate a graph.' });
            }

            const imageBuffer = await generateGraph(data);
            const attachment = new AttachmentBuilder(imageBuffer, { name: 'graph.png' });
            await interaction.editReply({ files: [attachment] });
        } catch (error) {
            console.error('Error generating graph:', error);
            await interaction.editReply({ content: 'An error occurred while generating the graph.' });
        }
    }
};
