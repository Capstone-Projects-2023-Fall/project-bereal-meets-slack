class Prompt {
    prompt = '';
    userId = '';

    isUserIdMatch(userId) {
        return this.userId === userId;
    }

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