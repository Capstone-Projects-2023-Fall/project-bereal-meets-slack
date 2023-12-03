const { AttachmentBuilder, ComponentType } = require('discord.js');
const notifyMods = require('./notifyMods.js');

async function handleUserSubmission(client, attachment, guild, promptChannel, caption, submitter) {
    if (!attachment) {
        return;
    }
    
    const type = attachment.contentType;
    if (!type || !type.startsWith('image')) {
        return;
    }

    const lastMessages = await promptChannel.messages.fetch({ limit: 2 });
    const content = lastMessages.last().content;
    const promptMatch = content.match(/\*\*Prompt:\*\*([\s\S]+)/);
    const promptContent = promptMatch && promptMatch[1] ? promptMatch[1].trim() : null;

    const { responses, moderators } = await notifyMods([attachment], guild, promptContent, caption, submitter);              
    const collectorFilter = i => moderators.has(i.user.id);

    const zip = (a, b) => a.map((k, i) => [i, k, Array.from(b)[i][1].user.globalName]); // just makes it easier to iterate through things
    try {
        const collectors = [];
        for (const [idx, response, moderator] of zip(responses, moderators)) {
            const collector = response.createMessageComponentCollector({
                componentType: ComponentType.Button,
                filter: collectorFilter,
                max: 1,
                time: 86_400_000
            });
        
            collector.mod = moderator; // tag collector with who they belong to
            collector.on('collect', async i => {
                if (i.customId === 'approve') {
                    await i.deferUpdate();
                    console.log(`${moderator} approved`);

                    // if somebody approved, then kill every collector since we dont need to get more inputs
                    for (const collector of collectors) {
                        if (!collector.ended) {
                            collector.stop();
                        }
                    }
                    // edit all the messages that bot sent to the DMs for the particular submission
                    for (const [idx2, response] of responses.entries()) {
                        approve_msg = idx == idx2 ? '**APPROVED**' : `**APPROVED BY ${moderator}**`;
                        await response.edit({ content: approve_msg, components: [] });
                    }
                    const file = new AttachmentBuilder(attachment.url);
                    const submit_channel = await client.channels.fetch(process.env.DISCORD_SUBMISSION_CHANNEL_ID);
                    await submit_channel.send({ content: `(${submitter}) ${caption ?? '[no caption provided]'}`, files: [file] });
                }
                // check if someone press deny
                else if (i.customId === 'deny') {
                    await i.deferUpdate();
                    console.log(`${moderator} denied`);
                    await i.editReply({ content: '**DENIED**', components: [] });
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
