const {SlashCommandBuilder} = require ('discord.js');
const {Pool} = require ('pg');

//connection string
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`;

const pool = new Pool({
    connectionString: connectionString
});

//new slash command to view active hours 
const activeHoursCommand = new SlashCommandBuilder()
    .setName('activehours')
    .setDescription('View active hours for prompts');

//function for viewing active hours
async function getActiveHours(interaction) {
    const guildId = interaction.guild.id;
    //this will get the active hours from DB
    const queryText = 'SELECT start_time, end_time FROM operating_hours WHERE guild_id = $1';
    try{
        const res = await pool.query(queryText, [guildId]);
        //If no active hours are set
        if (res.rows.length === 0) {
            await interaction.reply("No Active Hours Set");
            return;
        }

        const {start_time, end_time} = res.rows[0];
        //Active hours
        await interaction.reply(`Active hours are set from ${start-time} to ${end-time}`);
    } catch (error) {
        console.error('Failed to retrieve active hours:', error);
        await interaction.reply('Failed to retrieve active hours.');
    }
}

//will export command data
module.exports= {
    data: activeHoursCommand,
    execute: getActiveHours,
};