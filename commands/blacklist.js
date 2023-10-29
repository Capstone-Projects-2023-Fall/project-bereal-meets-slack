const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

// Create a Set to store blacklisted user IDs
const blacklistSet = new Set();

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
                // Check if the user is not in the blacklist
                if(!blacklistSet.has(user)){
                    blacklistSet.add(user);

                    const embed = new EmbedBuilder()
                    .setColor("Green")
                    .setDescription(`The user \`${user}\` has been blacklisted from this bot`)

                    await interaction.reply({embeds: [embed], ephemeral: true});
                } else if (blacklistSet.has(user)) {
                    return await interaction.reply({ content: `The user \`${user}\` has already been blacklisted,`, ephemeral: true});
                }

                break;
                case 'remove':
                // Check if the user is not in the blacklist
                if (blacklistSet.has(user)) {
                    blacklistSet.delete(user);

                    const embed = new EmbedBuilder()
                    .setColor("Green")
                    .setDescription(`The user \`${user}\` has been removed from the blacklist`)

                    await interaction.reply({embeds: [embed], ephemeral: true});
                } else {
                    return await interaction.reply({ content: `The user \`${user}\` is not on the blacklist.`, ephemeral: true });
                }
                break;

                case 'list':
                //Print the contents of the blacklistSet
                const blacklistArray = Array.from(blacklistSet);
                 if (blacklistArray.length === 0) {
                await interaction.reply({ content: 'The blacklist is empty.', ephemeral: true });
                 } else {
                     await interaction.reply({ content: `Users on the blacklist: ${blacklistArray.join(', ')}`, ephemeral: true });
                    }
            }
        }
};

