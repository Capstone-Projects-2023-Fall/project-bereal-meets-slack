const { SlashCommandBuilder } = require('discord.js');
const { postPrompt } = require('../utils/postUtils.js');

module.exports = {
	data: new SlashCommandBuilder() 
		.setName('post')
		.setDescription('sends a prompted post')
        .addSubcommand(subcommand =>
            subcommand
              .setName('random')
              .setDescription('prompt a random user')
        )
        .addSubcommand(subcommand =>
            subcommand
              .setName('someone')
              .setDescription('prompt a specified user')
              .addUserOption(option =>
                option
                  .setName('user')
                  .setDescription('prompt a specific user.')
                  .setRequired(true),
               ) 
        ),

    async execute(interaction){
        const modRole = interaction.guild.roles.cache.find(role => role.name === 'bot mod');    
        if (!(interaction.member.roles.cache.has(modRole.id))) return await interaction.reply({ content: 'Only **moderators** can use this command', ephemeral: true});

        const subcommand = interaction.options.getSubcommand();

        await interaction.deferReply({ephemeral: true});

        if(subcommand === 'random'){
            postPrompt(interaction.guild.id, interaction.client);
            await interaction.followUp("Random user prompted!");
        }
        else{
            const user = interaction.options.getUser('user');
            const userId = user.id;
            postPrompt(interaction.guild.id, interaction.client, userId);
            await interaction.followUp(`${user} prompted!`);
        }

    }
}