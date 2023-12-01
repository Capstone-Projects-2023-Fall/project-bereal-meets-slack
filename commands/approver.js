const { AttachmentBuilder, ComponentType, SlashCommandBuilder, ModalBuilder } = require('discord.js');
const notifyMods = require('../utils/notifyMods.js')

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

                    const lastMessages = await interaction.channel.messages.fetch({ limit: 1 });
                    const content = lastMessages.last().content;
                    const promptMatch = content.match(/\*\*Prompt:\*\*([\s\S]+)/);
                    const promptContent = promptMatch && promptMatch[1] ? promptMatch[1].trim() : null;

                    const { responses, moderators } = await notifyMods(interaction.guild, promptContent, caption, interaction.user, [attachment]);
					const collectorFilter = i => moderators.has(i.user.id);

					// const zip = (a, b) => a.map((k, i) => [k, Array.from(b)[i][1].user.globalName]);
					const zip = (a, b) => a.map((k, i) => [k, Array.from(b)[i][1].user]);
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
									console.log(`${moderator.username} approved`);
									approved = true;
									approver = moderator;
									const file = new AttachmentBuilder(url);
                                    await interaction.channel.send({ content: `(${interaction.user}) responded to \"${promptContent}\" \n Caption: ${caption}`, files: [file]}); //use interaction.user for dm
									await interaction.channel.send('@everyone New post!');
									collectorStop();
								} else if (i.customId === 'deny') {
									await i.deferUpdate();
									remaining_votes--;
									console.log(`${moderator.username} denied; ${remaining_votes} votes left pending`);
									
									try {
										let messagefilter = m => m.author.id ===moderator.id
										const message = await moderator.send(`<@${moderator.id}> PLEASE GIVE REASON FOR DENYING THE POST:`);
										const collected = await message.channel.awaitMessages({messagefilter, max: 1, time: 30000, error: ['time']});
										if(collected.first()){
										  await interaction.user.send(collected.first().content);
										}
										else{
											message.channel.send("timeout error");
										} 
									} catch (error) {
										console.error(`Could not send notification to ${moderator.username}.`, error);
									}

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

