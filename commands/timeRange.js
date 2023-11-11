//Discription: 
//This command is called by /timerange
//This will allow users to set active hours for prompt posts.
//The time will be stored in LocalStorage for each guild
//This will then send a confirm message to the user


const {SlashCommandBuilder} = require ('discord.js');
const {storeOperatingHours} = require ('./activeHours')
const moment = require('moment');

//main time range command
const timeRangeCommand = new SlashCommandBuilder ()
    .setName('timerange')
    .setDescription('Set active hours for prompt posts')

    //this will allow users to input a start time 
    .addStringOption(option => option
        .setName('start-time')
        .setDescription('Enter start time (HH:MM)')
        .setRequired(true)
        )
    //this will allow users to input a end time
    .addStringOption(option => option 
        .setName('end-time')
        .setDescription('Enter end time (HH:MM)')
        .setRequired(true)
        );

//function to handle the time range command
async function setTimeRange(interaction) {
    const guildId = interaction.guild.id;
    const startTime = interaction.options.getString('start-time');
    const endTime = interaction.options.getString('end-time');

    try {
        //store active hours in database
        await storeOperatingHours(guildId, startTime, endTime);

        //confirmation message
        const reply = `Active hours set from ${startTime} to ${endTime}`;
        await interaction.reply(reply);
    } catch (error){
        console.error('Failed to set active hours:', error);
        await interaction.reply('There was an error setting active hours.');
    }
}

function getRandomHourWithinActiveHours(activeHoursData){
    const startTime = moment(activeHoursData.start_time, "HH:mm");
    const endTime = moment(activeHoursData.end_time, "HH:mm");

    if (endTime.isBefore(startTime)){
        endTime.add(1, 'day');
    }

    const diffMinutes = endTime.diff(startTime, 'minutes');
    const randomMinute = Math.floor(Math.random() * diffMinutes);
    const randomTime = startTime.add(randomMinute, 'minutes');

    return randomTime.format("HH:mm");
}

//exports the time range command data 
module.exports= {
    data: timeRangeCommand,
    execute: setTimeRange,
    getRandomHourWithinActiveHours,
};
