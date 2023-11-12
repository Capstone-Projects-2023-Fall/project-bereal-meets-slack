const {SlashCommandBuilder} = require('discord.js');
const activeHoursUtils = require('../utils/activeHoursUtils');

const timeRangeCommand = new SlashCommandBuilder()
    .setName('timerange')
    .setDescription('Set active hours for prompt posts')
    .addStringOption(option =>
        option.setName('start-time').setDescription('Enter start time(HH:MM)').setRequired(true))
    .addStringOption(option =>
        option.setName('end-time').setDescription('Enter end time (HH:MM)').setRequired(true));

async function setTimeRange(interaction){
    const guildId = interaction.guild.id;
    const startTime = interaction.options.getString('start-time');
    const endTime = interaction.options.getString('end-time');

    try{
        await activeHoursUtils.storeOperatingHours(guildId, startTime, endTime);
        await interaction.reply(`Active hours set from ${startTime} to ${endTime}`);
    } catch (error){
        console.error('Failed to set active hours:', error);
        await interaction.reply('There was an error setting active hours.');
    }
}

module.exports = {
    data: timeRangeCommand,
    execute: setTimeRange,
};
