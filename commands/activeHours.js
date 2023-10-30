const {SlashCommandBuilder} = require ('discord.js');
const {LocalStorage} = require ('node-localstorage');

const localStorage = new LocalStorage('./data');

//new slash command to view active hours 
const activeHoursCommand = new SlashCommandBuilder()
    .setName('activehours')
    .setDescription('view active hours for prompts');

//function for viewing active hours
function getActiveHours(interaction) {
    const guildId = interaction.guild.id;
    //this will get the active hours
    const activeHours = JSON.parse (localStorage.getItem(`activeHours_${guildId}`));

    //incase no active hours are set
    if (!activeHours) {
        const reply = "No Active Hours SET";
        interaction.reply(reply);
        return;
    }

    const { startTime, endTime } = activeHours;
    //will state the active hours
    const reply = `Active hours are set from ${startTime} to ${endTime}`;
    interaction.repl(reply);
}

//will export command data
module.exports= {
    data: activeHoursCommand,
    execute: getActiveHours,
};