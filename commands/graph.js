const {SlashCommandBuilder} = require('discord.js');
const {AttachmentBuilder} = require('discord.js');
const {fetchDataForGraph, generateGraph} = require('../utils/dataGraph'); 

module.exports = {
    data: new SlashCommandBuilder()
        .setName('graphdata')
        .setDescription('Displays a graph based on the data'),

    async execute(interaction) {
        await interaction.deferReply();
        const data = await fetchDataForGraph();
        const imageBuffer = await generateGraph(data);
        const attachment = new AttachmentBuilder(imageBuffer, { name: 'graph.png' });
        await interaction.editReply({ files: [attachment] });
    }
};
