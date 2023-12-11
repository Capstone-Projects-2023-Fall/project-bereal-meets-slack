const {SlashCommandBuilder} = require ('discord.js');
const helpUtils = require('../utils/helpUtils.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Displays help information.'),

    async execute(interaction){
        let helpMessage;
        if (interaction.member.roles.cache.find(r => r.name === 'bot mod')){
            helpUtils.getHelpMessageMod();
        }

        helpMessage = helpUtils.getHelpMessageUser();
        await interaction.reply({content: helpMessage, ephemeral: true});
    }
};