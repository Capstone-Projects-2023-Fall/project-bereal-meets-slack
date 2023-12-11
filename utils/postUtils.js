const { getRandomPrompt } = require('./promptUtils.js');
const outputUsers = require('./getRandom.js');
const moment = require('moment-timezone');
const { getRandomHourWithinActiveHours } = require('./activeHoursUtils');

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

let scheduledPromptTimeout;

async function schedulePost(activeHoursData, guildId, client){
    if (scheduledPromptTimeout) {
        clearTimeout(scheduledPromptTimeout);
    }
    client.guilds.fetch();
    const clientGuild = await client.guilds.cache.find(guild => guild.id === guildId);
    //get random hour within active hours
    const targetHour = await getRandomHourWithinActiveHours(activeHoursData);
    const [hour, minute] = targetHour.split(':');

    const now = moment().tz("America/New_York");
    const targetTime = now.clone().hour(hour).minute(minute).second(0);

    if(now.isAfter(targetTime)){
        //if current time is after target time, schedule for next day
        console.log("Current time is past target posting time. Scheduling for next available slot.\n");
        targetTime.add(1, 'day');
    }
        const timeDifference = targetTime.diff(now);
        console.log(`Now prompt is scheduled for: ${targetTime.format('MM-DD-YYYY @ HH:mm A')} in: ${clientGuild.name}`);

        scheduledPromptTimeout = setTimeout(async () => {
          await postPrompt(guildId, client); 
        }, timeDifference);
}


module.exports = { postPrompt, schedulePost }