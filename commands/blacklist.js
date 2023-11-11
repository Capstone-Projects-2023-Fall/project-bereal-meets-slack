const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '34.29.242.181',
    user: 'root',
    password: 'l,2did/uc&O?izJv',
    database: 'bot'
});

connection.connect((err) => {
    if(err){
        console.error('Error connecting to MySQL:', err);
        process.exit(1);
    }
    console.log('Connected to MySQL');
});


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
            if (!(interaction.member.roles.cache.has(modRole.id))) return await interaction.reply({ content: 'Only **moderators** can use this command', ephemeral: true});

            const user = options.getString('user');
            const sub = options.getSubcommand();
            
            switch(sub) {
                case 'add':
                const checkQuery = `SELECT * FROM bot.blacklist WHERE user_id = '${user}' AND guild_id = '${interaction.guild.id}'`;
                connection.query(checkQuery, (err, results) => {
                    if (err){
                        console.error('Error checking blacklist', err);
                        return;
                    }
                    if (results.length === 0) {
                        const insertQuery = `INSERT INTO bot.blacklist (user_id, guild_id) VALUES ('${user}', '${interaction.guild.id}')`;
                        connection.query(insertQuery, (err) => {
                            if(err) {
                                console.error('Error adding to the blacklist:', err);
                                return;
                            }
                            const embed = new EmbedBuilder()
                            .setColor("Green")
                            .setDescription(`The user \'${user}\` has been blacklisted from this bot`);

                            interaction.reply({embeds: [embed], ephemeral: true});

                        });
                    } else {
                        interaction.reply({content: `The user \`${user}\` has already been blacklisted`, ephemeral:true });
                    }
                });
                break;

                case 'remove':
                    const deleteQuery = `DELETE FROM bot.blacklist WHERE user_id = '${user}' AND guild_id = '${interaction.guild.id}'`;
                    connection.query(deleteQuery, (err, results) => {
                        if(err){
                            console.error('Error removing from blacklist:', err);
                            return;
                        }
                        if (results.affectedRows > 0) {
                            const embed = new EmbedBuilder()
                            .setColor("Green")
                            .setDescription(`The user \`${user}\` has been removed from the blacklist`);

                            interaction.reply({embeds: [embed], ephemeral: true});
                        } else {
                            interaction.reply({content: `The user \`${user}\` is not on the blacklist`, ephemeral: true});
                        }
                    });
                    break;

                case 'list':
                    const listQuery = `SELECT user_id FROM bot.blacklist WHERE guild_id = '${interaction.guild.id}'`;
                    connection.query(listQuery, (err, results) => {
                        if(err){
                            console.error('Error fetching blacklist:', err);
                            return;
                        }
                        const blacklistArray = results.map(row => row.user_id);
                        if (blacklistArray.length === 0){
                            interaction.reply({content: 'The blacklist is empty', ephemeral:true});
                        } else {
                            interaction.reply({content: `Users on the blacklist: ${blacklistArray.join (', ')}`, ephemeral: true});
                        }
                    });
                    break;

            }
        }
};

