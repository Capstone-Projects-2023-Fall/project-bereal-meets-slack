const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const dbconn = require('../utils/dbconn.js');
const pool = dbconn.createPromiseConnectionPool();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('blacklist')
		.setDescription('Blacklist a user from using the bot')
        .addSubcommand(command => command.setName('add').setDescription('Add user to the blacklist').addStringOption(option => option.setName('user').setDescription('The user ID you want to blacklist').setRequired(true)))
        .addSubcommand(command => command.setName('remove').setDescription('Remove user from the blacklist').addStringOption(option => option.setName('user').setDescription('The user ID you want to remove from the blacklist').setRequired(true)))
        .addSubcommand(command => command.setName('list').setDescription('List users in the blacklist')),
        async execute (interaction){
            await interaction.deferReply();
            const {options} = interaction;
            const modRole = interaction.guild.roles.cache.find(role => role.name === 'bot mod');
            if (!(interaction.member.roles.cache.has(modRole.id))) return await interaction.followUp({ content: 'Only **moderators** can use this command', ephemeral: true});

            const user = options.getString('user');
            const sub = options.getSubcommand();
            
            switch(sub) {
                case 'add':
                    const checkQuery = `SELECT * FROM bot.blacklist WHERE user_id = '${user}' AND guild_id = '${interaction.guild.id}'`;
                    try{
                        [rows, fields] = await pool.query(checkQuery);
                        const results = rows;
                        if (results.length === 0) {
                            (async function(){
                                const insertQuery = `INSERT INTO bot.blacklist (user_id, guild_id) VALUES ('${user}', '${interaction.guild.id}')`;
                                try{
                                await pool.query(insertQuery);
                                    const embed = new EmbedBuilder()
                                    .setColor("Green")
                                    .setDescription(`The user \'${user}\` has been blacklisted from this bot`);
    
                                    interaction.reply({embeds: [embed], ephemeral: true});
                                }
                                catch(error){
                                    console.error('Error checking the blacklist:', err);
                                    return;
                                }
                            })();
                        } else {
                            interaction.reply({content: `The user \`${user}\` has already been blacklisted`, ephemeral:true });
                        }
                    }
                    catch(err){
                        console.error('Error checking the blacklist:', err);
                       return;
                    }
                break;

                case 'remove':
                    const deleteQuery = `DELETE FROM bot.blacklist WHERE user_id = '${user}' AND guild_id = '${interaction.guild.id}'`;
                    try{
                        [rows, fields] = await pool.query(deleteQuery);
                        const results = rows;
                        if (results.affectedRows > 0) {
                            const embed = new EmbedBuilder()
                            .setColor("Green")
                            .setDescription(`The user \`${user}\` has been removed from the blacklist`);

                            interaction.reply({embeds: [embed], ephemeral: true});
                        } else {
                            interaction.reply({content: `The user \`${user}\` is not on the blacklist`, ephemeral: true});
                        }

                    }
                    catch(err){
                        console.error('Error deleting from the blacklist', err);
                        return;
                    }
                    break;

                case 'list':
                    const listQuery = `SELECT user_id FROM bot.blacklist WHERE guild_id = '${interaction.guild.id}'`;
                    try{
                        [rows, fields] = await pool.query(listQuery);
                        const results = rows;
                        const blacklistArray = results.map(row => row.user_id);
                        if (blacklistArray.length === 0){
                            interaction.reply({content: 'The blacklist is empty', ephemeral:true});
                        } else {
                            interaction.reply({content: `Users on the blacklist: ${blacklistArray.join (', ')}`, ephemeral: true});
                        }
                    }
                    catch(err){
                        console.error('Error deleting from the blacklist', err);
                        return;
                    }
                    break;
            }
        }
};

