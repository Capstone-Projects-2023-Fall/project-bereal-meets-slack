class Prompt {
    prompt = '';
    

    setPrompt(msg) {
        this.Prompt = msg;
    }

    getPrompt() {
        return this.Prompt; 
    }
}
const prompt = new Prompt();

module.exports = { prompt };