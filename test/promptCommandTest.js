const { expect } = require('chai');
const sinon = require('sinon');
const promptCommand = require('../commands/prompt-commands');
const promptUtils = require('../utils/promptUtils');

describe(('prompt command'), () => {
    let interaction;

    beforeEach(() => {
        sinon.stub(promptUtils, 'addPrompt');
        sinon.stub(promptUtils, 'deletePrompt');

        interaction = {
            options: {
                getSubcommand: sinon.stub(),
                getString: sinon.stub(),
            },
            guild: { id: process.env.DISCORD_GUILD_ID },
            deferReply: sinon.fake(),
            followUp: sinon.fake(),
        };
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should list the prompts', async () => {
        const listPromptsStub = sinon.stub(promptUtils, 'listPrompts');
        interaction.options.getSubcommand.returns('list');
        
        await promptCommand.execute(interaction);

        expect(interaction.deferReply.called).to.be.true;
        expect(promptUtils.listPrompts.called).to.be.true;
        listPromptsStub.restore(); 
    });

    it('should return a prompt when searching with a keyword', async () => {
        const searchPromptStub = sinon.stub(promptUtils, 'searchPrompts');
        promptUtils.searchPrompts.resolves('lunch');
        
        await promptCommand.execute(interaction);

        expect(interaction.deferReply.called).to.be.true;
        expect(promptUtils.searchPrompts.called).to.be.true;
        searchPromptStub.restore(); 
    });
});