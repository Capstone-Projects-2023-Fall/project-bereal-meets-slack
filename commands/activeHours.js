const {SlashCommandBuilder} = require ('discord.js');
const {createConnectionPoolLocal} = require('../utils/dbconn');

//Create connection from dbconn
const pool = createConnectionPoolLocal();

//new slash command to view active hours 
const activeHoursCommand = new SlashCommandBuilder()
    .setName('activehours')
    .setDescription('View active hours for prompts');

//function for viewing active hours
async function getActiveHours(interaction) {
    const guildId = interaction.guild.id;
    //this will get the active hours from DB
    const queryText = 'SELECT start_time, end_time FROM operating_hours WHERE guild_id = ?';
    try{
        const [rows] = await pool.promise().execute(queryText, [guildId]);
        //If no active hours are set
        if (rows.length === 0) {
            await interaction.reply("No Active Hours Set");
            return;
        }

        const {start_time, end_time} = rows[0];
        //Active hours
        await interaction.reply(`Active hours are set from ${start_time} to ${end_time}`);
    } catch (error) {
        console.error('Failed to retrieve active hours:', error);
        await interaction.reply('Failed to retrieve active hours.');
    }
}

async function storeOperatingHours(guildId, startTime, endTime){
    const queryText = 'INSERT INTO operating_hours (guild_id, start_time, end_time) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE start_time = VALUES(start_time), end_time = VALUES(end_time)';
    try {
        await pool.promise().execute(queryText, [guildId, startTime, endTime]);
        console.log(`Operating hours set for guild ${guildId}: ${startTime} - ${endTime}`);
    } catch (error){
        console.error(`Error storing operating hours for ${guildId}:`, error);
    }
}

async function fetchActiveHoursFromDB(guildId){
    const queryText = 'SELECT start_time, end_time FROM operating_hours WHERE guild_id = ?';
    try {
        const[rows] = await pool.promise().execute(queryText, [guildId]);
        if (rows.length === 0){
            return {start_time: '09:00', end_time: '17:00'}; //Default hours
        }
        return rows[0];
    } catch (error) {
        console.error('Error fetching active hours from DB:', error);
        throw error;
    }
}

//will export command data
module.exports= {
    data: activeHoursCommand,
    execute: getActiveHours,
    storeOperatingHours,
    fetchActiveHoursFromDB,
};