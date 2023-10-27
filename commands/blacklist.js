const { SlashCommandBuilder, Embed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('blacklist')
		.setDescription('Blacklist a user from using the bot')
        .addSubcommand(command => command.setName('add').setDescription('Add user to the blacklist').addStringOption(option => option.setName('user').setDescription('The user ID you want to blacklist').setRequired(true)))
        .addSubcommand(command => command.setName('remove').setDescription('Remove user from the blacklist').addStringOption(option => option.setName('user').setDescription('The user ID you want to remove from the blacklist').setRequired(true))),
        async execute (interaction){
            const {options} = interaction;
            if (interaction.user.id !== '514962222674477066') return await interaction.reply({ content: 'Only **moderators** can use this command', ephermeral: true});

            const user = options.getString('user');
            const data = await blacklist.findOne({User: user});
            const sub = options.getSubcommand();
            
            switch(sub) {
                case 'add':
                
                if(!data){
                    await blacklist.create({
                        User: user,
                    })

                    const embed = new EmbedBuilder()
                    .setColor("Green")
                    .setDescription(`The user \`${user}\` has been blacklisted from this bot`)

                    await interaction.reply({embeds: [embed], ephemeral: true});
                } else if (data) {
                    return await interaction.reply({ content: `The user \`${user}\` has already been blacklisted,`, ephemeral: true});
                }

                break;
                case 'remove':
                
                if (!data) {
                    return await interaction.reply({ content: `The user \`${user}\` is not on the blacklist,`, ephemeral: true});
                } else if (data) {
                    await blacklist.deleteMany({User: user});

                    const embed = new EmbedBuilder()
                    .setColor("Green")
                    .setDescription(`The user \`${user}\` has been removed from the blacklist`)

                    await interaction.reply({embeds: [embed], ephemeral: true});
                }
            }
        }
};

