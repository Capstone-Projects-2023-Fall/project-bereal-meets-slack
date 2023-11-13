const { ChannelType } = require('discord.js');

async function fetchMessagesUntilPrompt(client, channelId) {
    if (!client.isReady()) {
        console.error('Client is not ready');
        return [];
    }
    const channel = client.channels.cache.get(channelId);
    if (!channel || channel.type !== ChannelType.GuildText) {
        console.error('The channel was not found or it is not a text channel.');
        return [];
    }
    let lastId;
    const messagesList = [];
    let foundPrompt = false;
    while (!foundPrompt) {
        const options = { limit: 100 };
        if (lastId) {
            options.before = lastId;
        }
        try {
            const messages = await channel.messages.fetch(options);
            if (messages.size === 0) {
                break; // No more messages left to fetch
            }
            for (const message of messages.values()) {
                if (message.content.includes("Prompt")) {
                    foundPrompt = true;
                    break; // Stop if we find the "Prompt"
                }
                messagesList.push(message); // Add the message to our list
                lastId = message.id; // Set the last ID for the next fetch
            }
        } catch (error) {
            console.error('Error fetching messages: ', error);
            break; // Exit the loop in case of API error
        }
    }
    return messagesList;
}

function countReactions(message) {
    // Check if the message has reactions
    if (message.reactions.cache.size > 0) {
        // Reduce the reactions to a total count
        const totalReactions = message.reactions.cache.reduce((acc, reaction) => acc + reaction.count, 0);
        return totalReactions;
    } else {
        // If there are no reactions, return 0
        return 0;
    }
}

function getImageLinkFromMessage(message) {
    // Initialize the image link variable
    let imageLink = null;
    // Check for attachments in the message
    message.attachments.forEach(attachment => {
        // Check if the attachment is an image based on its content type
        if (attachment.contentType && attachment.contentType.startsWith('image/')) {
            // Set the image link
            imageLink = attachment.url;
        }
    });
    // If no image was found in attachments, check embeds as Discord automatically embeds some image links
    if (!imageLink) {
        message.embeds.forEach(embed => {
            if (embed.type === 'image' && embed.url) {
                imageLink = embed.url;
            }
            // Some embeds might contain an image within them rather than being of type 'image'
            else if (embed.image && embed.image.url) {
                imageLink = embed.image.url;
            }
        });
    }
    return imageLink;
}

async function findTimeDifferenceToPrompt(client, channelId, referenceMessage) {
    if (!client.isReady()) {
      throw new Error('Client is not ready');
    }
    // Fetch the channel object using the provided channelId
    const channel = client.channels.cache.get(channelId);
    if (!channel || channel.type !== ChannelType.GuildText) {
      throw new Error('The channel was not found or it is not a text channel.');
    }
    try {
      // Fetch the last 100 messages in the channel
      const messages = await channel.messages.fetch({ limit: 100 });
      // Find the first message that contains the word "Prompt"
      const promptMessage = messages.find(m => m.content.includes("Prompt"));
      if (!promptMessage) {
        console.log('No prompt message found.');
        return null;
      }
      // Calculate the time difference in seconds between the reference message and the prompt message
      const timeDifferenceSeconds = Math.abs(referenceMessage.createdTimestamp - promptMessage.createdTimestamp) / 1000;
      console.log(`Time difference: ${timeDifferenceSeconds} seconds.`);
      return timeDifferenceSeconds;
    } catch (error) {
      console.error('Error fetching messages:', error);
      throw error;
    }
}

async function saveDB(client, channelId) {
    try {
        const messagesList = await fetchMessagesUntilPrompt(client, channelId);
        const messagesData = [];

        for (const message of messagesList) {
            const numOfReactions = countReactions(message);
            const imageLink = getImageLinkFromMessage(message);
            const timeToPost = await findTimeDifferenceToPrompt(client, channelId, message);

            const messageData = {
                numOfReactions: numOfReactions,
                response_image: imageLink,
                timeToPost: timeToPost
            };
            messagesData.push(messageData);
        }
        // TODO: Save messagesData to database here
        return messagesData;
    } catch (error) {
        console.error('Error in saveDB:', error);
        throw error;
    }
}

module.exports = saveDB;