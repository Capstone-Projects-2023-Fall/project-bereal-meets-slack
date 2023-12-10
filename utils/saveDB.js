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
    let guild_id = null;
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
                    promptText = extractPromptTextFromEmbed(message.content);
                    promptUserId = message.author.id;
                    guild_id = message.guild.id;
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
    return {imageMessagesList, promptText, promptUserId, guild_id};
}
//to clean prompt text to only provide the main prompt when adding to database
function extractPromptTextFromEmbed(embed) {
    let promptText = null;
    if (embed.title && embed.title.includes("Prompt:")) {
        promptText = embed.title.split("Prompt:")[1].trim();
    } else if (embed.description && embed.description.includes("Prompt:")) {
        promptText = embed.description.split("Prompt:")[1].trim();
    }
    return promptText;
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

function getImageLinkFromEmbed(embed) {
    if (embed.image) {
        return embed.image.url;
    }
    return null;
}

async function findTimeDifferenceToPrompt(client, channelId, referenceMessage) {
    if (!client.isReady()) {
        throw new Error('Client is not ready');
    }
    const channel = client.channels.cache.get(channelId);
    if (!channel || channel.type !== ChannelType.GuildText) {
        throw new Error('The channel was not found or it is not a text channel.');
    }
    try {
        const messages = await channel.messages.fetch({ limit: 100 });
        let promptMessage = messages.find(m => m.content.includes("Prompt"));
        // If prompt is not found in message content, check the embeds
        if (!promptMessage) {
            promptMessage = messages.find(m => m.embeds.some(embed => extractPromptTextFromEmbed(embed) !== null));
        }
        if (!promptMessage) {
            console.log('No prompt message found.');
            return null;
        }
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
        const {imageMessagesList, promptText, promptUserId, guild_id} = await fetchImageMessagesUntilPrompt(client, channelId);
        const messagesData = [];

        for (const message of imageMessagesList) {
            const numOfReactions = countReactions(message);
            const imageLink = getImageLinkFromEmbed(message);
            const timeToPost = await findTimeDifferenceToPrompt(client, channelId, message);
            const message_id = message.id;
            const messageData = {
                message_id: message_id,
                num_reactions: numOfReactions,
                response_image: imageLink,
                time_to_respond: timeToPost,
                prompt_text: promptText,
                user_id: promptUserId,
                guild_id: guild_id
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
        
        // If no existing record is found, proceed to insert the new record
        if (existingRecords.length === 0) {
            const values = [
                messageData.response_image,
                messageData.num_reactions,
                messageData.time_to_respond,
                messageData.message_id,
                messageData.prompt_text,
                messageData.user_id,
                messageData.guild_id
            ];
            const insertQuery = `
                INSERT INTO responses (response_image, num_reactions, time_to_respond, message_id, prompt_text, user_id, guild_id) 
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `;
            await pool.query(insertQuery, values)
            console.log('Data inserted successfully');
        } else {
            const values = [
                messageData.response_image,
                messageData.num_reactions,
                messageData.time_to_respond,
                messageData.prompt_text,
                messageData.user_id,
                messageData.guild_id,
                messageData.message_id
            ];
            const updateQuery = `UPDATE bot.responses SET response_image = ? , num_reactions = ? , time_to_respond = ? , prompt_text = ? , user_id = ? , guild_id = ? WHERE (message_id= ? ) `;
            pool.query(updateQuery, values);
            console.log(`Record with message_id ${messageData.message_id} already exists. Updating`);
        }
    } catch (error) {
        console.error('Error in insertResponseData:', error);
        throw error;
    }
}

async function fetchAllTextChannelIds(client) {
    if (!client.isReady()) {
        console.error('Client is not ready');
        return [];
    }

    const channelIds = [];

    // Iterate over all guilds the client is a part of
    client.guilds.cache.forEach(guild => {
        // Iterate over all channels in the guild
        guild.channels.cache.forEach(channel => {
            // Check if the channel is a text channel
            if (channel.type === ChannelType.GuildText) {
                // Add the channel ID to the list
                channelIds.push(channel.id);
            }
        });
    });

    return channelIds;
}

async function processAllChannels(client) {
    try {
        const channelIds = await fetchAllTextChannelIds(client);
        for (const channelId of channelIds) {
            const data = await fetchImageMessagesUntilPrompt(client, channelId);
            // Process the data as needed
        }
    } catch (error) {
        console.error('Error processing channels:', error);
    }
}

//TODO: Make chages to all methods to read from embeds to get the data it needs, then make it so it will scan for all channels in the discord, then fix exportCSV

module.exports = saveDB;