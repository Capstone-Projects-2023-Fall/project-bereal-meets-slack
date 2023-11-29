class PromptTimeout {
    constructor() {
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
                await userDMChannel.send(`Your prompt has expired. Please visit submissions channel to post. Your prompt! = ${originalPrompt}`);
                console.log("User was DMed")
                
                //this should reprompt the user
                const channel = await client.channels.cache.get(channelId);
                if (channel) {
                    await channel.send(`<@${user.id}> ${originalPrompt}`);
                }
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

module.exports = new PromptTimeout();
