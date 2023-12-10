const {pool} = require('./dbconn.js');

async function setDefaultChannel(channelId, guildId){

    try{
        const query = 'INSERT INTO settings (submission_channel_id, guild_id) VALUES (?, ?) ON DUPLICATE KEY UPDATE submission_channel_id = VALUES(submission_channel_id)';
        await pool.execute(query, [channelId, guildId]);
        return 0;
    }
    catch{
        console.error('Error in setChannel command:', error);
        return 1;
    }

}

module.exports = { setDefaultChannel };