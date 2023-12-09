class Prompt {
    prompt = '';
    userId = '';
    channel = '';

    isUserIdMatch(userId) {
        return this.userId === userId;
    }

    setPrompt(msg) {
        this.Prompt = msg;
    }

    setUserId(userId) {
        this.userId = userId;
    }
    
    setChannel(channel){
        this.channel = channel;
    }

    getPrompt() {
        return this.Prompt; 
    }

    getUserId() {
        return this.userId;
    }

    getChannel(){
        return this.channel;
    }

}
const prompt = new Prompt();

module.exports = { prompt };