const {SlashCommandBuilder} = require ('discord.js');
const activeHoursUtils = require('../utils/activeHoursUtils');;


module.exports = {
    data: new SlashCommandBuilder()
        .setName('activehours')
        .setDescription('View active hours for prompts'),
        
        async execute(interaction){
            const guildId = interaction.guild.id;
                try{
                    const hours = await activeHoursUtils.fetchActiveHoursFromDB(guildId);
                    await interaction.reply(`Active hours are from ${hours.start_time} to ${hours.end_time}`);
                } catch (error){
                    console.error('Failed to retrieve active hours:', error);
                    await interaction.reply('Failed to retrieve active hours.');
                }
        }
    };
