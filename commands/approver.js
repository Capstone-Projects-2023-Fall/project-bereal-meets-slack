const { AttachmentBuilder, ComponentType, SlashCommandBuilder } = require('discord.js');
const notifyMods = require('../utils/notifyMods.js')

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

					const caption = interaction.options.getString('caption'); // retrieve the caption value
					const { responses, moderators } = await notifyMods(interaction.guild, caption, interaction.user, [attachment]);
					// console.log(responses)
					// console.log(moderators)

					// console.log(moderators);
					const collectorFilter = i => moderators.has(i.user.id); // makes sure that only the mods can do the button-ing, redundant-ish

					// const zip = (a, b) => a.map((k, i) => [k, Array.from(b)[i][1].user.globalName]);
					const zip = (a, b) => a.map((k, i) => [i, k, Array.from(b)[i][1].user.globalName]); // just makes it easier to iterate through things
					try {
						const collectors = []; 
						for (const [idx, response, moderator] of zip(responses, moderators)) {
							const collector = response.createMessageComponentCollector({ componentType: ComponentType.Button,
																						 filter: collectorFilter,
																						 max: 1,
																						 time: 86_400_000 });

							collector.on('collect', async i => {
								// checks if someone press aprove
								if (i.customId === 'approve') {
									await i.deferUpdate();
									console.log(`${moderator} approved`);
									// approved = true;
									// approver = moderator;
									// approve_idx = idx;

									// if somebody approved, then kill every collector since we dont need to get more inputs
									for (const collector of collectors) {
										if (!collector.ended) {
											collector.stop();
										}
									}

									// then edit all the messages that bot sent to the DMs for the particular submission
									for (const [idx2, response] of responses.entries()) {
										approve_msg = idx == idx2 ? '**APPROVED**' :  `**APPROVED BY ${moderator}**`;
										await response.edit({ content: approve_msg, components: [] });
									}
									const file = new AttachmentBuilder(url);
									await interaction.channel.send({ content: `(${interaction.user}) ${caption ?? '[no caption provided]'}`, files: [file]});
                  await interaction.channel.send('@everyone New post!');
								}
								// checks if someone  press deny
                 else if (i.customId === 'deny') {
									await i.deferUpdate();
									console.log(`${moderator} denied`);
									await i.editReply({ content: '**DENIED**', components: [] }); 

								}
							});
							// whenever the 'end' event happens (when collector dies for any reason), this functionality operation begets itself, can remove cuz dont need it
							collector.on('end', () => {
								console.log('annn >.<');
							})
							collectors.push(collector); 
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

