require('dotenv').config();
const { ChannelType } = require('discord.js');
const {pool} = require('./dbconn.js');

async function fetchImageMessagesUntilPrompt(client, channelId) {
    if (!client.isReady()) {
        console.error('Client is not ready');
        return { imageMessagesList: [], promptText: null, promptUserId: null, guild_id: null };
    }
    const channel = client.channels.cache.get(channelId);
    if (!channel || channel.type !== ChannelType.GuildText) {
        console.error('The channel was not found or it is not a text channel.');
        return { imageMessagesList: [], promptText: null, promptUserId: null, guild_id: null };
    }
    let lastId;
    const imageMessagesList = [];
    let guild_id = channel.guild.id;

    const options = { limit: 100 };
    while (true) {
        if (lastId) {
            options.before = lastId;
        }
        try {
            const messages = await channel.messages.fetch(options);
            if (messages.size === 0) {
                break; // No more messages left to fetch
            }
            for (const message of messages.values()) {
                lastId = message.id; // Update the last ID for the next fetch

                // Check if the message is from the bot
                if (message.author.id === client.user.id) {
                    // If the message does not have an embed with an image and contains "Prompt", stop scanning
                    if (!message.embeds.some(embed => embed.image) && message.content.includes("Prompt")) {
                        console.log("prompt message found sending list to saveDB()")
                        return {imageMessagesList, guild_id}; //dont return the prompttext from here for right now we can get that from the message now from the embed
                    }
                    // If the message has an embed with an image, add it to the list
                    if (message.embeds.some(embed => embed.image)) {
                        console.log("message with image found, adding it to the list")
                        imageMessagesList.push(message);
                    }
                }
            }
        } catch (error) {
            console.error('Error fetching messages: ', error);
            break; // Exit the loop in case of API error
        }
    }

    // If the loop exits without finding a message with "Prompt" that has no embedded image
    return {imageMessagesList, guild_id};
}

//to clean prompt text to only provide the main prompt when adding to database
function extractPromptTextFromEmbed(embed) {
    let promptText = null;

    // Check if the embed and its fields are defined
    if (embed && embed.fields) {
        const promptField = embed.fields.find(field => field.name === 'Prompt:');
        if (promptField) {
            promptText = promptField.value;
        }
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
        const { imageMessagesList, guild_id } = await fetchImageMessagesUntilPrompt(client, channelId);
        console.log("This is the data");
        console.log(imageMessagesList, guild_id);
        const messagesData = [];

        for (const message of imageMessagesList) {
            const numOfReactions = countReactions(message);
            const embed = message.embeds[0];
            if (!embed) continue;  // Skip if there's no embed in the message

            const imageLink = getImageLinkFromEmbed(embed);
            const timeToPost = await findTimeDifferenceToPrompt(client, channelId, message);
            const message_id = message.id;
            const promptText = extractPromptTextFromEmbed(embed);
            const promptUserId = extractPromptUserIdFromEmbed(embed);
            const messageUrl = `https://discord.com/channels/${guild_id}/${channelId}/${message_id}`;

            console.log("Message URL:", messageUrl); // Print the message URL

            const messageData = {
                message_id: message_id,
                num_reactions: numOfReactions,
                response_image: imageLink,
                time_to_respond: timeToPost,
                prompt_text: promptText,
                user_id: promptUserId,
                guild_id: guild_id
            };

            //console.log("saving the message data");
            //console.log(messageData);
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

async function fetchTextChannelIdsFromGuild(interaction) {
    if (!interaction.guild) {
        console.error('This command can only be used in a guild.');
        return [];
    }

    const channelIds = [];

    // Iterate over all channels in the guild
    interaction.guild.channels.cache.forEach(channel => {
        // Check if the channel is a text channel
        if (channel.type === ChannelType.GuildText) {
            // Add the channel ID to the list
            channelIds.push(channel.id);
        }
    });

    return channelIds;
}


async function processAllChannels(client, interaction) {
    try {
        const channelIds = await fetchTextChannelIdsFromGuild(interaction);
        let allMessagesData = [];

        for (const channelId of channelIds) {
            const messagesData = await saveDB(client, channelId);
            allMessagesData = allMessagesData.concat(messagesData);
        }

        console.log('All channel data has been processed and saved.');
        return allMessagesData;
    } catch (error) {
        console.error('Error processing channels:', error);
    }
}


function extractPromptUserIdFromEmbed(embed) {
    let promptUserId = null;
    
    // Check if the embed has a description
    if (embed.description) {
        // Regular expression to match the user mention format <@userId>
        const userIdMatch = embed.description.match(/<@(\d+)>/);
        if (userIdMatch && userIdMatch.length > 1) {
            // Extract the user ID
            promptUserId = userIdMatch[1];
        }
    }
    console.log(promptUserId)
    return promptUserId;
}

module.exports = {
    saveDB,
    processAllChannels
};
