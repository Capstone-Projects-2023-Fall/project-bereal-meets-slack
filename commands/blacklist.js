const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const {pool} = require('../utils/dbconn.js');

const denialCounts = new Map();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('blacklist')
		.setDescription('Blacklist a user from using the bot')
        .addSubcommand(command => command.setName('add').setDescription('Add user to the blacklist').addStringOption(option => option.setName('user').setDescription('The user ID you want to blacklist').setRequired(true)))
        .addSubcommand(command => command.setName('remove').setDescription('Remove user from the blacklist').addStringOption(option => option.setName('user').setDescription('The user ID you want to remove from the blacklist').setRequired(true)))
        .addSubcommand(command => command.setName('list').setDescription('List users in the blacklist')),
        async execute (interaction){
            const {options} = interaction;
            const modRole = interaction.guild.roles.cache.find(role => role.name === 'bot mod');
            const moderators = interaction.guild.members.cache.filter(member => member.roles.cache.has(modRole.id));
            
            if (!(interaction.member.roles.cache.has(modRole.id))) return await interaction.followUp({ content: 'Only **moderators** can use this command', ephemeral: true});

            const user = options.getString('user');
            let dbuser;
            if(user){
                dbuser = user.replace('<', '');
                dbuser = dbuser.replace('>', '');
                dbuser = dbuser.replace('@', '');
            }
            const sub = options.getSubcommand();
            
            switch(sub) {
                case 'add':
                    await interaction.deferReply({ephemeral: true});
                    const checkQuery = `SELECT * FROM bot.blacklist WHERE user_id = '${dbuser}' AND guild_id = '${interaction.guild.id}'`;
                    try{
                        [rows, fields] = await pool.query(checkQuery);
                        const results = rows;
                        if (results.length === 0) {
                            (async function(){
                                const insertQuery = `INSERT INTO bot.blacklist (user_id, guild_id) VALUES ('${dbuser}', '${interaction.guild.id}')`;
                                try{
                                await pool.query(insertQuery);
                                    const embed = new EmbedBuilder()
                                    .setColor("Green")
                                    .setDescription(`The user \'${user}\` has been blacklisted from this bot`);
    
                                    await interaction.followUp({embeds: [embed]});

                                    for (const moderator of moderators.values()) {
                                        try {
                                            await moderator.send({ content: `${user} was added to the blacklist`});
                                        } catch (error) {
                                            console.error(`Could not send notification to ${moderator.user.tag}.`, error);
                                        }
                                    }
                                }
                                catch(error){
                                    console.error('Error checking the blacklist:', err);
                                    return;
                                }
                            })();
                        } else {
                            await interaction.followUp({content: `The user \`${user}\` has already been blacklisted`});
                        }
                    }
                    catch(err){
                        console.error('Error checking the blacklist:', err);
                       return;
                    }
                break;

                case 'remove':
                    await interaction.deferReply({ephemeral: true});
                    const deleteQuery = `DELETE FROM bot.blacklist WHERE user_id = '${dbuser}' AND guild_id = '${interaction.guild.id}'`;
                    try{
                        [rows, fields] = await pool.query(deleteQuery);
                        const results = rows;
                        if (results.affectedRows > 0) {
                            const embed = new EmbedBuilder()
                            .setColor("Green")
                            .setDescription(`The user \`${user}\` has been removed from the blacklist`);

                            await interaction.followUp({embeds: [embed]});
                        } else {
                            await interaction.followUp({content: `The user \`${user}\` is not on the blacklist`});
                        }

                    }
                    catch(err){
                        console.error('Error deleting from the blacklist', err);
                        return;
                    }
                    break;

                case 'list':
                    await interaction.deferReply({ephemeral: true});
                    const listQuery = `SELECT user_id FROM bot.blacklist WHERE guild_id = '${interaction.guild.id}'`;
                    try{
                        [rows, fields] = await pool.query(listQuery);
                        const results = rows;
                        blacklistArray = results.map(row => row.user_id);
                        if (blacklistArray.length === 0){
                            await interaction.followUp({content: 'The blacklist is empty'});
                        } else {
                            for(i = 0; i < blacklistArray.length; i++){
                                blacklistArray[i] = '<@' + blacklistArray[i].toString() + '>'
                            }
                            await interaction.followUp({content: `Users on the blacklist: ${blacklistArray.join (', ')}`});
                        }
                    }
                    catch(err){
                        console.error('Error reading from the blacklist', err);
                        return;
                    }
                    break;
            }
               // Increment the denial count for the user
    denialCounts.set(user, denialCount + 1);

    // Check if the denial count exceeds the threshold (e.g., 3)
    const denialThreshold = 3; // Adjust this value as needed
    if (denialCount + 1 >= denialThreshold) {
      // Add the user to the blacklist
      (async function () {
        const insertQuery = `INSERT INTO bot.blacklist (user_id, guild_id) VALUES ('${user}', '${interaction.guild.id}')`;
        try {
          await pool.query(insertQuery);
          const embed = new EmbedBuilder()
            .setColor("Green")
            .setDescription(`The user '${user}' has been automatically blacklisted from this bot due to repeated denials`);

          interaction.followUp({ embeds: [embed], ephemeral: true });
        }
        catch (error) {
          console.error('Error automatically blacklisting the user:', error);
        }
      })();
        }
    }
};
