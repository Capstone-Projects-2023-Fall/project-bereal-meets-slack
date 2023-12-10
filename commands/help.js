const {SlashCommandBuilder} = require ('discord.js');
const helpUtils = require('../utils/helpUtils.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Displays help information.'),

    async execute(interaction){
        let role = 'Bot User';

        if (interaction.member.roles.cache.find(r => r.name === 'bot mod')){
            role = 'bot mod';
        }

        const helpMessage = helpUtils.getHelpMessage(role);
        await interaction.reply({content: helpMessage, ephemeral: true});
    }
};