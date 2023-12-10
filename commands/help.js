const {SlashCommandBuilder} = require ('discord.js');
const helpUtils = require('../utils/helpUtils.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Displays help information.'),

    async execute(interaction){
        const helpMessage = helpUtils.getHelpMessage();

        await interaction.reply({content: helpMessage, ephemeral: true});
    }
};