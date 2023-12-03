const { AttachmentBuilder, ComponentType, SlashCommandBuilder } = require('discord.js');
const notifyMods = require('../utils/notifyMods.js');

const test = "What are you procrastinating with?"
module.exports = {
	data: new SlashCommandBuilder()
		.setName('submit') //upload?
		.setDescription('Please submit your post:')
		.addAttachmentOption(option => {
			return option
				.setName('file')	
				.setDescription('Give the file').setRequired(true)
		})
		.addStringOption(option => {
			return option
				.setName('caption')
				.setDescription('Please enter a caption: ')
		}),
		
	async execute(interaction) {
		await interaction.deferReply();
		await interaction.editReply('submitted to moderators!');

		const attachment = interaction.options.getAttachment('file');
		const caption = interaction.options.getString('caption');
		await handleUserSubmission(interaction.client, attachment, interaction.guild, interaction.channel, caption, interaction.user);	
	}
}

