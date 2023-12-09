const { blacklistAddUser } = require('../utils/blacklistutils.js');
const { AttachmentBuilder, ComponentType } = require('discord.js');
const { notifyMods } = require('./notifyMods.js');
const { prompt } = require('./prompt.js');

let deniedUsers = new Map(); //keep track of user denial counts


async function handleUserSubmission(attachment, caption, interaction) {
    const {client, guild, user: submitter} = interaction;

    const botUserRole = guild.roles.cache.find(role => role.name === 'Bot User'); //Bot User, bot mod, mod all
    const promptContent = prompt.getPrompt();

    if (!prompt.isUserIdMatch(submitter.id)) {
        await interaction.reply({content: 'Either you were not prompted, or there is no active prompt.', ephemeral: true});
        return;
    } else {
        await interaction.deferReply();
        await interaction.editReply('submitted to moderators!');
    }

    if (!attachment) {
        return;
    }
    
    const type = attachment.contentType;
    if (!type || !type.startsWith('image')) {
        return;
    }

    const { responses, moderators } = await notifyMods( guild, promptContent, caption, submitter, [attachment]);              
    const collectorFilter = i => moderators.has(i.user.id);

    const zip = (a, b) => a.map((k, i) => [i, k, Array.from(b)[i][1].user]); // just makes it easier to iterate through things
    try {
        const collectors = [];
        for (const [idx, response, moderator] of zip(responses, moderators)) {
            const modName = moderator.globalName;

            const collector = response.createMessageComponentCollector({
                componentType: ComponentType.Button,
                filter: collectorFilter,
                max: 1,
                time: 86_400_000
            });
        
            collector.mod = modName; // tag collector with who they belong to
            collector.on('collect', async i => {
                if (i.customId === 'approve') {
                    await i.deferUpdate();
                    console.log(`${modName} approved`);

                    // if somebody approved, then kill every collector since we dont need to get more inputs
                    for (const collector of collectors) {
                        if (!collector.ended) {
                            collector.stop();
                        }
                    }
                    // edit all the messages that bot sent to the DMs for the particular submission
                    for (const [idx2, response] of responses.entries()) {
                        approve_msg = idx == idx2 ? '**APPROVED**' : `**APPROVED BY ${modName}**`;
                        await response.edit({ content: approve_msg, components: [] });
                    }
                    const file = new AttachmentBuilder(attachment.url);
                    await submissionChannel.send({ content: `${botUserRole} New post!\n${submitter} responded to "${promptContent}":\n${caption ?? ''}`, files: [file] });
                    await interaction.deleteReply(); //remove clutter
                    prompt.setUserId(client.user.id); //prompt has been responded to, default the value to prevent extraneous post spam.

                }
                // check if someone press deny
                else if (i.customId === 'deny') {
                    await i.deferUpdate();
                    console.log(`${modName} denied`);
                    await i.editReply({ content: '**DENIED**', components: [] });
                    await interaction.deleteReply(); //remove clutter
                    try {
                        const messageFilter = m => m.author.id === moderator.id
                        const denyMessage = await moderator.send({content: `<@${moderator.id}> Please give the reason for denying the post` });

                        const denyCollector = await denyMessage.channel.createMessageCollector({ filter: messageFilter, max: 1, time: 30000, error: ['time']});
                        denyCollector.on('collect', async j => {
                            await submitter.send(`Notice of denial: ${j.content}`);
                        });
                        denyCollector.on('end', async j => {
                            console.log('deny log');
                            denyMessage.edit({ content: `<@${moderator.id}> Please give the reason for denying the post (ENDED)` }); //bot being mean and yelling at mods, now tamed... (Also not sure if we need @?) 
                        });
                    } catch (error) {
                        console.error(`Could not send notification to ${modName}.`, error);
                    }

                    //if not approved, check if user should be automatically added to blacklist
                    const deniedUser = submitter;
                    
                    if (deniedUser) {
                        const denialCount = (deniedUsers.get(deniedUser.id) || 0) + 1;
                        deniedUsers.set(deniedUser.id, denialCount);
                        await interaction.user.send(`Because your post was denied you now have ${denialCount} strikes, be careful not to get anymore or you may be blacklisted from participation in the prompts`);

                        if (denialCount >= 3) {
                            prompt.setUserId(client.user.id); //prompt has been exhausted, default the value to prevent extraneous post spam.
                            //add user to blacklist
                            await blacklistAddUser(guild.id, submitter.id);

                            await interaction.user.send(`You have reached the strike limit and were added to the blacklist. Please refer to your moderators for recourse.`);

                            for (const moderator of moderators.values()) {
                                try {
                                    await moderator.user.send({ content: `${submitter} was added to the blacklist`});
                                } catch (error) {
                                    console.error(`Could not send notification to ${moderator.user.tag}.`, error);
                                }
                            }
                            //remove user from denial tracking
                            deniedUsers.delete(deniedUser.id);
                        }
                    }
                }
            });

            collector.on('end', () => {
                console.log(`(${collector.mod}'s collector explosioned)`);
            });

            collectors.push(collector); // keep track of the collector
        }
    } catch (e) {
        console.error('BUTTON ERROR');
        console.error(e);
    }
}

module.exports = handleUserSubmission;
