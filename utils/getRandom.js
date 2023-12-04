const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const {pool} = require('./dbconn.js');

async function getRandomUser(guild) {
    await guild.members.fetch();

    // Query database for the list of blacklisted users
    const listQuery = `SELECT user_id FROM bot.blacklist WHERE guild_id = '${guild.id}'`;

    try {
        // Retrieve blacklisted user IDs
        const [rows, fields] = await pool.query(listQuery);
        const blacklistArray = rows.map(row => row.user_id);

        // Filter out blacklisted and bot users from guild members
        const nonBotUsers = [];
        const botUsers = [];
        const blacklistedUsers = [];

        guild.members.cache.forEach(member => {
            if (blacklistArray.includes(member.user.id)) {
                blacklistedUsers.push(member.user.id);
            } else if (member.user.bot) {
                botUsers.push(member.user.id);
            } else {
                nonBotUsers.push(member.user.id);
            }
        });

        console.log('Blacklisted Users:', blacklistedUsers);
        console.log('Bot Users:', botUsers);
        console.log('Non-Bot Users:', nonBotUsers);

        if (nonBotUsers.length === 0) {
            // Handles the case where no eligible non-bot users are found
            return null;
        }

        // Random index to select a user ID
        const size = nonBotUsers.length;
        const index = Math.floor(Math.random() * size);
        return nonBotUsers[index];
    } catch (err) {
        console.error('Error getting blacklist for guild:', err);
        return null;
    }
}



module.exports = getRandomUser;