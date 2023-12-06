class Prompt {
    prompt = '';
    userId = '';

    setPrompt(msg) {
        this.Prompt = msg;
    }

    setUserId(userId) {
        this.userId = userId;
    }

    getPrompt() {
        return this.Prompt; 
    }

    getUserId() {
        return this.userId;
    }
}
const prompt = new Prompt();

module.exports = { prompt };