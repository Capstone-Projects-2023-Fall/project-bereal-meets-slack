const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const {pool} = require('./dbconn.js');

async function getRandomUser(guild){
    await guild.members.fetch();
    //query database for list of blacklisted users
    const listQuery = `SELECT user_id FROM bot.blacklist WHERE guild_id = '${guild.id}'`;
    
    try{
        //retrieve blacklsted user IDs
        const[rows, fields] = await pool.query(listQuery);
        const blacklistArray = rows.map(row => row.user_id);

        //filter out blacklisted users from guild members
        const users = guild.members.cache
            .filter(member => !blacklistArray.includes(member.user.id))
            .map(member => member.user.id);

        if (users.length === 0) {
            //handles case where no users are on the blacklist
            return null;
        }

    //random index to select user ID
    const size = users.length
    const index = Math.floor(Math.random() * size);
    return users[index];
    } catch (err) {
        console.error('Error getting blacklist for guild:', err);
        return;
    }

}

module.exports = getRandomUser;