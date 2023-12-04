const { blacklistAddUser } = require('../utils/blacklistutils.js');
const { AttachmentBuilder, ComponentType } = require('discord.js');
const { notifyMods } = require('./notifyMods.js');
const { prompt } = require('../utils/prompt.js');

// TODO: change what u need here before comitting

let deniedUsers = new Map(); //keep track of user denial counts

async function handleUserSubmission(client, attachment, guild, caption, submitter) {
    const botUserRole = guild.roles.cache.find((role) => role.name === 'yoshino simp');
    const promptContent = prompt.getPrompt();

    if (!attachment) {
        return;
    }
    
    const type = attachment.contentType;
    if (!type || !type.startsWith('image')) {
        return;
    }

    const { responses, moderators } = await notifyMods([attachment], guild, promptContent, caption, submitter);              
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
                    const submit_channel = await client.channels.fetch(process.env.DISCORD_SUBMISSION_CHANNEL_ID);
                    await submit_channel.send({ content: `${botUserRole} come get ur bread\n${submitter} responded to "${promptContent}":\n${caption ?? '[no caption provided]'}`, files: [file] });
                }
                // check if someone press deny
                else if (i.customId === 'deny') {
                    await i.deferUpdate();
                    console.log(`${modName} denied`);
                    await i.editReply({ content: '**DENIED**', components: [] });

                    try {
                        const messageFilter = m => m.author.id === moderator.id
                        const denyMessage = await moderator.send({content: `<@${moderator.id}> PLEASE GIVE REASON FOR DENYING THE POST` });

                        const denyCollector = await denyMessage.channel.createMessageCollector({ filter: messageFilter, max: 1, time: 30000, error: ['time']});
                        denyCollector.on('collect', async j => {
                            await submitter.send(`Notice of denial: ${j.content}`);
                        });
                        denyCollector.on('end', async j => {
                            console.log('deny dead');
                            denyMessage.edit({ content: `<@${moderator.id}> PLEASE GIVE REASON FOR DENYING THE POST (ENDED)` });
                        });
                    } catch (error) {
                        console.error(`Could not send notification to ${modName}.`, error);
                    }

                    //if not approved, check if user should be automatically added to blacklist
                    const deniedUser = submitter;
                    
                    if (deniedUser) {
                        const denialCount = (deniedUsers.get(deniedUser.id) || 0) + 1;
                        deniedUsers.set(deniedUser.id, denialCount);
                        console.log(deniedUsers.get(deniedUser.id));
                        if (denialCount >= 2) {
                            //add user to blacklist
                            await blacklistAddUser(guild.id, submitter.id);
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
