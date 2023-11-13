const { AttachmentBuilder, ComponentType, SlashCommandBuilder } = require('discord.js');
const notifyMods = require('../utils/notifyMods.js')

const test = "What are you procrastinating with?"
module.exports = {
	data: new SlashCommandBuilder()
		.setName('submit') //upload?
		.setDescription('Please submit your post:')
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

		// console.log(interaction)
		await interaction.editReply('submitted to moderators!');
		//await interaction.channel.send('b again');

		const attachment = interaction.options.getAttachment('file');
		if (attachment) {
			const name = attachment.name;
			const url = attachment.url;
			const proxy = attachment.proxyURL;
			const type = attachment.contentType;

			if (type) {
				if (type.startsWith('image')) {
					console.log('THIS IS AN IMAGE');

					const caption = interaction.options.getString('caption');

					const { responses, moderators } = await notifyMods(interaction.guild, test, interaction.user, [attachment]);
				
					const collectorFilter = i => moderators.has(i.user.id);

					// const zip = (a, b) => a.map((k, i) => [k, Array.from(b)[i][1].user.globalName]);
					const zip = (a, b) => a.map((k, i) => [k, Array.from(b)[i][1].user.globalName]);
					try {
						let approved = false;
						let approver = null;
						let remaining_votes = responses.length;

						collectors = [];
						for (const [response, moderator] of zip(responses, moderators)) {
							// console.log(response);
							// console.log(moderator);
							const collector = response.createMessageComponentCollector({ componentType: ComponentType.Button,
																						 filter: collectorFilter,
																						 max: 1,
																						 time: 86_400_000 });
							
							collector.on('collect', async i => {
								if (i.customId === 'approve') {
									await i.deferUpdate();
									console.log(`${moderator} approved`);
									approved = true;
									approver = moderator;
									const file = new AttachmentBuilder(url);
									await interaction.channel.send({ content: `(${interaction.user}) ${test}`, files: [file]});
									await interaction.channel.send('@everyone New post');
									collectorStop();
								} else if (i.customId === 'deny') {
									await i.deferUpdate();
									remaining_votes--;
									console.log(`${moderator} denied; ${remaining_votes} votes left pending`);
									await i.editReply({ content: '**DENIED**', components: [] });
									if (remaining_votes === 0) {
										console.log('hello');
										collectorStop();
									}
								}
							});

							collector.on('end', () => {
								console.log('ahhh check ');
							})

							collectors.push(collector)
						}

						const collectorStop = async function () {
							for (const collector of collectors) {
								if (!collector.ended) {
									collector.stop();
								}
							}
							
							if (approved) {
								for (const response of responses) {
									await response.edit({ content: `**APPROVED BY ${approver}**`, components: [] });
								}
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

