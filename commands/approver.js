const { AttachmentBuilder, SlashCommandBuilder } = require('discord.js');
const notifyMods = require('../notifyMods.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('action')
		.setDescription('does the action')
		.addAttachmentOption(option => {
			return option
				.setName('file')	
				.setDescription('Give the file')
		})
		.addStringOption(option => {
			return option
				.setName('caption')
				.setDescription('Please enter a caption: ')
		}),
		
	async execute(interaction) {
		await interaction.deferReply();

		await interaction.editReply('b');

		const attachment = interaction.options.getAttachment('file');
		if (attachment) {
			const name = attachment.name;
			const url = attachment.url;
			const proxy = attachment.proxyURL;
			const type = attachment.contentType;

			// console.log(JSON.stringify(attachment, null, 4));

			// console.log(name);
			// console.log(url);
			// console.log(proxy);
			// console.log(type);

			// console.log(JSON.stringify(type, null, 4));

			if (type) {
				if (type.startsWith('image')) {
					//console.log('THIS IS AN IMAGE');

					const caption = interaction.options.getString('caption');
					const { responses, moderators } = await notifyMods(interaction.guild, caption, interaction.user, [attachment]);
					// console.log(responses)
					// console.log(moderators)

					// console.log(moderators);
					const collectorFilter = i => moderators.has(i.user.id);

					const zip = (a, b) => a.map((k, i) => [k, Array.from(b)[i][1].user.globalName]);
					try {
						let approved = false;
						let approver = null;
						for (const [response, moderator] of zip(responses, moderators)) {
							const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: null });
							if (approved) {
								await confirmation.update({ content: `${approver} Already Approved `, components: [] });
								break;
							}
						
							if (confirmation.customId === 'approve') {
								approved = true;
								// console.log(moderator);
								approver = moderator;
								await confirmation.update({ content: 'Image Has Been Approved', components: [] });
								// then we do something
								const file = new AttachmentBuilder(url);
								await interaction.channel.send({ content: `(${interaction.user}) ${caption ?? '[No Caption Provided]'}`, files: [file]});
								
							} else if (confirmation.customId === 'deny') {
								await confirmation.update({ content: 'Denied', components: [] });
								// then we do something
							}
						}
					} catch (e) {
						console.error('BUTTON ERROR');
						console.error(e);
					}

				} else {
					console.log('THIS IS NOT AN IMAGE');
				}
			} else {
				console.log('Type is nonexistent');
			}

		} else {
			console.log('NO ATTACHMENT');
		}
	},
}

