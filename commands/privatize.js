//in
const {SlashCommandBuilder } = require('discord.js');
//Use toggle_private to toggle between public and private
module.exports = {
	data: new SlashCommandBuilder() 
		.setName('toggle_private')
		.setDescription('toggles bot to DM user instead'),

	async execute(interaction) {
		await interaction.deferReply(); //cooking

		const toggles = interaction.client.toggles;
		const userID = interaction.user.id;
		if (!toggles.has(userID)) {
			toggles.set(userID, true);
		}

		toggles.set(userID, !toggles.get(userID));
		if (toggles.get(userID)) {
			await interaction.editReply('Toggle has been set to: public');
		} else {
			await interaction.editReply('Toggle has been set to: private');
		}
	}
}
