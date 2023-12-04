const blacklist = require('./blacklist.js');
const { AttachmentBuilder, ComponentType, SlashCommandBuilder} = require('discord.js');
const { notifyMods } = require('../utils/notifyMods.js');
const { prompt } = require('../utils/prompt.js');


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
		await interaction.deferReply();
		await interaction.editReply('submitted to moderators!');
		const attachment = interaction.options.getAttachment('file');
		const botUserRole = interaction.guild.roles.cache.find((role) => role.name === 'Bot User');

		if (attachment) {
			const url = attachment.url;
			const type = attachment.contentType;

			if (type) {
				if (type.startsWith('image')) {
					console.log('THIS IS AN IMAGE');

					const caption = interaction.options.getString('caption');
          			const { responses, moderators } = await notifyMods(interaction.guild, prompt.getPrompt(), caption, interaction.user, [attachment]);
									

					const collectorFilter = i => moderators.has(i.user.id);

					let deniedUsers = new Map(); //keep track of user denial counts

					// const zip = (a, b) => a.map((k, i) => [k, Array.from(b)[i][1].user.globalName]);
					const zip = (a, b) => a.map((k, i) => [k, Array.from(b)[i][1].user]);

					try {
						let approved = false;
						let approver = null;
						let remaining_votes = responses.length;

						collectors = [];
						for (const [response, moderator] of zip(responses, moderators)) {
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
                  await interaction.channel.send({ content: `(${interaction.user}) responded to \"${prompt.getPrompt()}\" \n Caption: ${caption}`, files: [file]});

									await interaction.channel.send(`@${botUserRole} New post!`);
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
							} else {
								//if not approved, check if user should be automatically added to blacklist
								const deniedUser = response[0]?.user;
								if(deniedUser){
									const denialCount = (deniedUsers.get(deniedUser.id) || 0) + 1;
									deniedUsers.set(deniedUser.id, denialCount);

									if (denialCount >= 2) {
										//add user to blacklist
										const blacklistCommand = interaction.client.commands.get('add');

										//execute blacklist command
										await blacklistCommand.execute ({
											interaction: interaction,
											options: blacklistCommand.data	
												.find(subcommand => subcommand.name === 'add')
												.toJSON()
												.options.map(option => {
													return {
														name: option.name,
														value: option.name === 'user'? deniedUser.id : null
													};
												})
										});
										
										//remove user from denial tracking
										deniedUsers.delete(deniedUser.id);
									}
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

