const {createPromiseConnectionPool} = require('./dbconn');
const pool = createPromiseConnectionPool();

async function fetchActiveHoursFromDB(guildId){
    const queryText = 'SELECT start_time, end_time FROM operating_hours WHERE guild_id = ?';
    const [rows] = await pool.execute(queryText, [guildId]);
    return rows.length === 0 ? {start_time: '09:00', end_time: '17:00'} : rows[0];
}

async function storeOperatingHours(guildId, startTime, endTime) {
    const queryText = 'INSERT INTO operating_hours (guild_id, start_time, end_time) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE start_time = VALUES(start_time), end_time = VALUES(end_time)';
    await pool.execute(queryText, [guildId, startTime, endTime]);
}

module.exports = {
    fetchActiveHoursFromDB,
    storeOperatingHours
};