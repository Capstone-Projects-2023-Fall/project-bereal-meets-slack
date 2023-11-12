const{createPromiseConnectionPool} = require('./dbconn');
const pool = createPromiseConnectionPool();

async function storeOperatingHours (guildId, startTime, endTime){
    const queryText = 'INSERT INTO operating_hours (guild_id, start_time, end_time) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE start_time = VALUES(start_time), end_time = VALUES(end_time)';
    await pool.execute(queryText, [guildId, startTime, endTime]);
}

module.exports = {
    storeOperatingHours
};