const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('notifications')
        .setDescription('Toggle bot notifications'),
    
    async execute(interaction) {
        const { user, guild } = interaction;
        const { members } = guild;
        const member = members.cache.get(user.id);

        const botUserRole = guild.roles.cache.find((role) => role.name === 'Bot User');
        const hasBotUserRole = member.roles.cache.find((role) => role.name === 'Bot User');

        if (hasBotUserRole) {
            await member.roles.remove(botUserRole).catch(console.error);
            await interaction.reply('Successfully removed the Bot User role. You will no longer receive BeReal Bot post notifications.'); 
        } else {
            await member.roles.add(botUserRole).catch(console.error);
            await interaction.reply('Successfully added the Bot User role. You will now receive BeReal Bot post notifications.'); 
        }
    }
}