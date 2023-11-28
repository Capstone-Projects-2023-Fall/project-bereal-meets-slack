class PromptTimeout {
    constructor() {
        this.activePrompts = new Map();
    }
    //this will setup the timeout and message
    setupPrompt(channelId, message) {
        const promptId = `${channelId}-${Date.now()}`;
        const timeoutDuration = 60000; // 60 seconds (1hr is 3600000 & 1min is 60000)
        const expiredContent = 'Post has expired.';

        this.setPromptTimeout(promptId, timeoutDuration, message, expiredContent);
    }

    // this will set a timeout for a prompt
    setPromptTimeout(promptId, duration, message, expiredContent) {
        const expirationTime = Date.now() + duration;
        this.activePrompts.set(promptId, expirationTime);
        
        setTimeout(async () => {
            this.activePrompts.delete(promptId);
            if (message && message.editable) {
                await message.edit(expiredContent);
            }
            console.log("Prompt has expired")
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
