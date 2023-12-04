const {pool} = require('./dbconn.js');


async function blacklistAddUser(guildId, dbuser){
    const checkQuery = `SELECT * FROM bot.blacklist WHERE user_id = '${dbuser}' AND guild_id = '${guildId}'`;
    [rows, fields] = await pool.query(checkQuery);
    const results = rows;
    if (results.length === 0) {
        const insertQuery = `INSERT INTO bot.blacklist (user_id, guild_id) VALUES ('${dbuser}', '${guildId}')`;
        try{
            await pool.query(insertQuery);
            return 0;
        }
        catch(error){
            console.error('Error checking the blacklist:', err);
            return 2;
        }
    } 
    else {
        return 1;
    }
}

async function blacklistDeleteUser(guildId, dbuser){
    const deleteQuery = `DELETE FROM bot.blacklist WHERE user_id = '${dbuser}' AND guild_id = '${guildId}'`;
    [rows, fields] = await pool.query(deleteQuery);
    const results = rows;
    if (results.affectedRows > 0) {
        return 0;
    }
    else{
        return 1;
    }
}

async function blacklistListUsers(guildId){
    const listQuery = `SELECT user_id FROM bot.blacklist WHERE guild_id = '${guildId}'`;
    [rows, fields] = await pool.query(listQuery);
    const results = rows;
    blacklistArray = results.map(row => row.user_id);
    if (blacklistArray.length === 0){
        return [];
    } else {
        for(i = 0; i < blacklistArray.length; i++){
            blacklistArray[i] = '<@' + blacklistArray[i].toString() + '>'
        }
        return blacklistArray;
    }
}

module.exports = {
    blacklistAddUser,
    blacklistDeleteUser,
    blacklistListUsers
};