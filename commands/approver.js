const { SlashCommandBuilder} = require('discord.js');
const handleUserSubmission = require('../utils/handleUserSubmission.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('submit') 
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
		const attachment = interaction.options.getAttachment('file');
		const caption = interaction.options.getString('caption');
		await handleUserSubmission(attachment, caption, interaction);	
	}
}