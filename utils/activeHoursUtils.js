const moment = require('moment-timezone');
const {pool} = require('./dbconn');

/**
 * Fetches active operating hours for a guild from the database.
 *
 * @param {string} guildId - The ID of the Discord guild.
 * @returns {Promise<{ start_time: string, end_time: string }>} - An object containing start_time and end_time.
 */

async function fetchActiveHoursFromDB(guildId){
    const queryText = 'SELECT start_time, end_time FROM operating_hours WHERE guild_id = ?';
    const [rows] = await pool.execute(queryText, [guildId]);
    return rows.length === 0 ? {start_time: '09:00', end_time: '17:00'} : rows[0];
}

/**
 * Stores or updates operating hours for a guild in the database.
 *
 * @param {string} guildId - The ID of the Discord guild.
 * @param {string} startTime - The starting time of operating hours.
 * @param {string} endTime - The ending time of operating hours.
 * @returns {Promise<void>} - A Promise that resolves when the operation is complete.
 */

async function storeOperatingHours(guildId, startTime, endTime) {
    const queryText = 'INSERT INTO operating_hours (guild_id, start_time, end_time) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE start_time = VALUES(start_time), end_time = VALUES(end_time)';
    await pool.execute(queryText, [guildId, startTime, endTime]);
}

/**
 * Generates a random hour within the active operating hours for a guild.
 *
 * @param {{ start_time: string, end_time: string }} activeHoursData - An object containing start_time and end_time.
 * @returns {string} - A formatted string representing a random hour within the active hours.
 */

function getRandomHourWithinActiveHours(activeHoursData){

    const now = moment().tz("America/New_York");
    const startTime = moment(activeHoursData.start_time, "HH:mm");
    const endTime = moment(activeHoursData.end_time, "HH:mm");

    //Adjust start time for today
    startTime.set({
        year: now.year(),
        month: now.month(),
        date: now.date()
    });

    //adjust end time for today
    endTime.set({
        year: now.year(),
        month: now.month(),
        date: now.date()
    });

    if(endTime.isBefore(startTime)){
        endTime.add(1, 'day');
    }

    //if current time is before start time, set random time after start time 
    //else, set random time after current time
    const referenceTime = now.isBefore(startTime) ? now.add(1, 'minutes') : startTime;
    
    const diffMinutes = endTime.diff(referenceTime, 'minutes');
    const randomMinute = Math.floor(Math.random() * diffMinutes);
    const randomTime = referenceTime.add(randomMinute, 'minutes');

    //Format for random time
    return randomTime.format("HH:mm");
}

module.exports = {
    getRandomHourWithinActiveHours,
    fetchActiveHoursFromDB,
    storeOperatingHours,
};