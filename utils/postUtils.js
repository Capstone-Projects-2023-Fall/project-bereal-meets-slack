const { getRandomPrompt } = require('./promptUtils.js');
const outputUsers = require('./getRandom.js');

async function postPrompt(guildId, client, callingUser) {
    var prompt = client.activePrompts.get(guildId);
    const promptData = await getRandomPrompt(guildId);
    
    if (!promptData) {
        console.error("No prompt found.");
        return;
    }

    const { promptText, channelId } = promptData;
    prompt.setPrompt(promptText);

    // Fetch the target channel using the channel ID
    const submissionChannel = await client.channels.fetch(channelId);
    if (!submissionChannel) {
        console.error(`Could not find channel with ID: ${channelId}`);
        return;
    }

    prompt.setChannel(submissionChannel);

    let messageContent;
    let userToPrompt;

    if (callingUser) {
        userToPrompt = await client.users.fetch(callingUser);
    } else {
        const userRand = await outputUsers(submissionChannel.guild);
        try {
            userToPrompt = await client.users.fetch(userRand);
        } catch (error) {
            console.error("Error fetching random user:", error);
            return;
        }
    }

    const userID = userToPrompt.id;
    if (!client.toggles.has(userID)) {
        client.toggles.set(userID, true);
    }
    const instruction = client.toggles.get(userID) ? 'Use /submit to submit your post!' : 
    `You opted for private prompting!, use /submit in ${submissionChannel} (Click that link!) to post!`;

    messageContent = `${userToPrompt} ${instruction}\n**Prompt:**\n${promptText}`;

    if (!userToPrompt || !messageContent) {
        console.error("Error: User or message content is not defined.");
        return;
    }

    let sentMessage;
    let sentChannel;

    if (client.toggles.get(userID)) {
        // public
        sentMessage = await client.sendMessageWithTimer(submissionChannel.id, messageContent);
        sentChannel = submissionChannel.id;
    } else {
        // private
        sentMessage = await userToPrompt.send(messageContent); 
        sentChannel = sentMessage.channel.id;
    }
    // Send the message in the specified channel
    prompt.setUserId(userToPrompt.id);
    client.activePrompts.set(guildId, prompt);
    client.promptTimeout.setupPrompt(sentChannel, sentMessage, userToPrompt, promptText);
}


module.exports = { postPrompt }