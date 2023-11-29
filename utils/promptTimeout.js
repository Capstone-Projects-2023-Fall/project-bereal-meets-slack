class PromptTimeout {
    constructor(client) {
        this.client = client;
        this.activePrompts = new Map();
    }
    //this will setup the timeout and message
    setupPrompt(channelId, message, user, originalPrompt) {
        const promptId = `${channelId}-${Date.now()}`;
        const timeoutDuration = 30000; // 60 seconds (1hr is 3600000 & 1min is 60000)
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
                await userDMChannel.send(`Your prompt has expired. You have been Reprompted! Please visit the submissions channel to post`);
                console.log("User was sent a DM about expired Prompt")

                //this should reprompt the user
                const channel = await this.client.channels.cache.get(channelId);
                if (channel) {
                    await channel.send(`Use /submit to submit your post!\n**Prompt:**\n <@${user.id}> ${originalPrompt}`);
                }
                console.log("Same user has been reprompted!")
            }
        }, duration);
    }

    // this will check if a prompt is still active
    isPromptActive(promptId) {
        if (!this.activePrompts.has(promptId)) {
            return false;
        }
        const expirationTime = this.activePrompts.get(promptId);
        return Date.now() < expirationTime;
    }
}

module.exports = PromptTimeout;
