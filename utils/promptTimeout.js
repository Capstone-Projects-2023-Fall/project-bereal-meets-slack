class PromptTimeout {
    constructor(client) {
        this.client = client;
        this.activePrompts = new Map();
        this.repromptTimeouts = new Map();
    }
    //this will setup the timeout and message
    setupPrompt(channelId, message, user, originalPrompt) {
        const promptId = `${channelId}-${Date.now()}`;
        const timeoutDuration = 3600000; // 60 seconds (1hr is 3600000 & 1min is 60000)
        const expiredContent = 'Post has expired.';

        this.setPromptTimeout(promptId, timeoutDuration, message, expiredContent, user, originalPrompt, channelId);
    }

    // this will set a timeout for a prompt
    setPromptTimeout(promptId, duration, message, expiredContent, user, originalPrompt, channelId) {
        const expirationTime = Date.now() + duration;
        this.activePrompts.set(promptId, expirationTime);
        
        setTimeout(async () => {
            this.activePrompts.delete(promptId);
            if (message && message.editable) {
                await message.edit(expiredContent);
            }
            console.log("Prompt has expired")
            
            // will send the same user to post again or re-prompt
            if (user) {
                const userDMChannel = await user.createDM();
                await userDMChannel.send(`Your original prompt has expired, and you have been reprompted!\nPlease visit the submissions channel to post`);
                console.log("User was sent a DM about expired Prompt")

                this.handleReprompt(user, originalPrompt, channelId, message);
            }
        }, duration);
    }

    handleReprompt(user, originalPrompt, channelId, originalMessage) {
        // this is for reprompting the user
        const repromptId = `${channelId}-${user.id}-${Date.now()}`;
        const repromptDuration = 3600000; //set to 1hr

        this.repromptTimeouts.set(repromptId, Date.now() + repromptDuration);

        // will send reprompt message in channel
        const channel = this.client.channels.cache.get(channelId);
        if (channel) {
            channel.send(`<@${user.id}> Use /submit to submit your post!\n**Prompt:**\n${originalPrompt}`).then(repromptMessage => {
                // this will set a timeout for the reprompt eprompt message after the reprompt duration
                setTimeout(async () => {
                    this.repromptTimeouts.delete(repromptId);
                    if (repromptMessage && repromptMessage.deletable) {
                        await repromptMessage.delete();
                        const userDMChannel = await user.createDM();
                        await userDMChannel.send(`Your reprompt has also expired.`);
                        console.log("Reprompt message deleted after final timeout.");
                    }
                }, repromptDuration);
            })
            .catch(console.error);
        }
    }
}

module.exports = PromptTimeout;
