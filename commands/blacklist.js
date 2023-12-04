const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { blacklistAddUser, blacklistDeleteUser, blacklistListUsers } = require('../utils/blacklistutils.js');

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
            
            if (!(interaction.member.roles.cache.has(modRole.id))) return await interaction.reply({ content: 'Only **moderators** can use this command', ephemeral: true});

            const user = options.getString('user');
            let dbuser;
            //Remove brackets so discord understands id string
            if(user){
                dbuser = user.replace('<', '');
                dbuser = dbuser.replace('>', '');
                dbuser = dbuser.replace('@', '');
            }
            const sub = options.getSubcommand();
            
            switch(sub) {
                case 'add':
                    await interaction.deferReply({ephemeral: true});
                    try{
                        const addRC = await blacklistAddUser(interaction.guild.id, dbuser);
                        if(addRC === 0){
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
                         else if (addRC === 1) {
                            await interaction.followUp({content: `The user \`${user}\` has already been blacklisted`});
                        }
                        else{
                            await interaction.followUp("There was an Error executing this command!");
                        }
                    }
                    catch(err){
                        console.error('Error checking the blacklist:', err);
                       return;
                    }
                break;

                case 'remove':
                    await interaction.deferReply({ephemeral: true});
                    try{
                       const deleteRC = await blacklistDeleteUser(interaction.guild.id, dbuser);
                        if (deleteRC === 0) {
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
                    try{
                        const results = await blacklistListUsers(interaction.guild.id);
                        if (results.length === 0){
                            await interaction.followUp({content: 'The blacklist is empty'});
                        } else {
                            await interaction.followUp({content: `Users on the blacklist: ${results.join (', ')}`});
                        }
                    }
                    catch(err){
                        console.error('Error reading from the blacklist', err);
                        return;
                    }
                    break;
            }
    }
};
