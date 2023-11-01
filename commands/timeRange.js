//Discription: 
//This command is called by /timerange
//This will allow users to set active hours for prompt posts.
//The time will be stored in LocalStorage for each guild
//This will then send a confirm message to the user


const {SlashCommandBuilder} = require ('discord.js');
const {LocalStorage} = require ('node-localstorage');

const localStorage = new LocalStorage('./data');

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
function setTimeRange(interaction) {
    const guildId = interaction.guild.id;
    const startTime = interaction.options.getString('start-time');
    const endTime = interaction.options.getString('end-time');

    localStorage.setItem(`activeHours_${interaction.guild.id}`, JSON.stringify ({startTime, endTime}));
    //response to the user with a confirmation message
    const reply = `Active hours set from ${startTime} to ${endTime}`
    interaction.reply(reply);
}

//exports the time range command data 
module.exports= {
    data: timeRangeCommand,
    execute: setTimeRange,
};
