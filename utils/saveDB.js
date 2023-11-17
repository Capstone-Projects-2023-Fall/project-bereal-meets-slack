require('dotenv').config();
const { ChannelType } = require('discord.js');
const {pool} = require('./dbconn.js');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

async function fetchImageMessagesUntilPrompt(client, channelId) {
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
    const imageMessagesList = [];
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
    return imageMessagesList;
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
            const message_id = message.id;
            const messageData = {
                message_id: message_id,
                num_reactions: numOfReactions,
                response_image: imageLink,
                time_to_respond: timeToPost
            };
            messagesData.push(messageData);
        }
        // Insert each messageData into the database
        for (const messageData of messagesData) {
            await insertResponseData(messageData); // Use the new insertResponseData method
        }

        console.log('All data has been saved to the database');
        return messagesData;
    } catch (error) {
        console.error('Error in saveDB:', error);
        throw error;
    }
}

async function insertResponseData(messageData) {
    const connection = await pool.getConnection();
    try {
        // Construct the SQL statement with specific columns
        const query = `
            INSERT INTO responses (response_image, num_reactions, time_to_respond, message_id) 
            VALUES (?, ?, ?, ?)
        `;

        // Extract the values from messageData object in the order of the columns specified in the SQL statement
        const values = [
            messageData.response_image,
            messageData.num_reactions,
            messageData.time_to_respond,
            messageData.message_id
        ];

        // Execute the query with the values array
        await connection.query(query, values);
        console.log('Data inserted successfully');
    } catch (error) {
        console.error('Error in insertResponseData:', error);
        throw error;
    } finally {
        connection.release(); // Always release the connection
    }
}

module.exports = saveDB;