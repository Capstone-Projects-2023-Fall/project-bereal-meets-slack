class Prompt {
    prompt = '';
    userId = '';
    channelId = '';

    isUserIdMatch(userId) {
        return this.userId === userId;
    }

    setPrompt(msg) {
        this.Prompt = msg;
    }

    setUserId(userId) {
        this.userId = userId;
    }
    
    setChannelId(channelId){
        this.channelId = channelId;
    }

    getPrompt() {
        return this.Prompt; 
    }

    getUserId() {
        return this.userId;
    }

    getChannelId(){
        return this.channelId;
    }

}
const prompt = new Prompt();

module.exports = { prompt };