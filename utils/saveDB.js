require('dotenv').config();
const { ChannelType } = require('discord.js');
const {pool} = require('./dbconn.js');

async function fetchImageMessagesUntilPrompt(client, channelId) {
    if (!client.isReady()) {
        console.error('Client is not ready');
        return { imageMessagesList: [], promptText: null, promptUserId: null };
    }
    const channel = client.channels.cache.get(channelId);
    if (!channel || channel.type !== ChannelType.GuildText) {
        console.error('The channel was not found or it is not a text channel.');
        return [];
    }
    let lastId;
    const imageMessagesList = [];
    let foundPrompt = false;
    let promptText = null;
    let promptUserId = null;
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
                    promptText = extractPromptText(message.content);
                    promptUserId = message.author.id;
                    break; // Stop if we find the "Prompt"
                }
                // Check if the message has attachments and if any of them are images
                const hasImage = message.attachments.some(attachment => attachment.contentType?.startsWith('image/'));
                if (hasImage) {
                    imageMessagesList.push(message); // Add the message to our list if it contains an image
                }
                lastId = message.id; // Set the last ID for the next fetch
            }
        } catch (error) {
            console.error('Error fetching messages: ', error);
            break; // Exit the loop in case of API error
        }
    }
    return {imageMessagesList, promptText, promptUserId};
}
//to clean prompt text to only provide the main prompt when adding to database
function extractPromptText(fullMessage) {
    const promptStartIndex = fullMessage.indexOf("**Prompt:**");
    if (promptStartIndex !== -1) {
        return fullMessage.substring(promptStartIndex + "**Prompt:**".length).trim();
    }
    return fullMessage;
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
        const {imageMessagesList, promptText, promptUserId} = await fetchImageMessagesUntilPrompt(client, channelId);
        const messagesData = [];

        for (const message of imageMessagesList) {
            const numOfReactions = countReactions(message);
            const imageLink = getImageLinkFromMessage(message);
            const timeToPost = await findTimeDifferenceToPrompt(client, channelId, message);
            const message_id = message.id;
            const messageData = {
                message_id: message_id,
                num_reactions: numOfReactions,
                response_image: imageLink,
                time_to_respond: timeToPost,
                prompt_text: promptText,
                user_id: promptUserId
            };
            messagesData.push(messageData);
        }
        // Insert each messageData into the database
        for (const messageData of messagesData) {
            await insertResponseData(messageData);
        }

        console.log('All data has been saved to the database');
        return messagesData;
    } catch (error) {
        console.error('Error in saveDB:', error);
        throw error;
    }
}

async function insertResponseData(messageData) {
    try {
        // First, check if a record with the same message_id already exists
        const checkQuery = 'SELECT * FROM responses WHERE message_id = ?';
        const [existingRecords] = await pool.query(checkQuery, [messageData.message_id]);
        const values = [
            messageData.response_image,
            messageData.num_reactions,
            messageData.time_to_respond,
            messageData.message_id,
            messageData.prompt_text,
            messageData.user_id
        ];
        // If no existing record is found, proceed to insert the new record
        if (existingRecords.length === 0) {
            const insertQuery = `
                INSERT INTO responses (response_image, num_reactions, time_to_respond, message_id, prompt_text, user_id) 
                VALUES (?, ?, ?, ?, ?, ?)
            `;
            await pool.query(insertQuery, values)
            console.log('Data inserted successfully');
        } else {
            const updateQuery = `UPDATE bot.responses SET response_image = ? , num_reactions = ? , time_to_respond = ? , prompt_text = ? , user_id = ? WHERE (message_id= ? ) `;
            pool.query(updateQuery, values);
            console.log(`Record with message_id ${messageData.message_id} already exists. Updating`);
        }
    } catch (error) {
        console.error('Error in insertResponseData:', error);
        throw error;
    }
}

module.exports = saveDB;