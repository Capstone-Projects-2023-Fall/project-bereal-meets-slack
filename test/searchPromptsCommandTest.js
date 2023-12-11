const { expect } = require('chai');
const sinon = require('sinon');
const promptCommand = require('../commands/prompt-commands.js');
const promptUtils = require('../utils/promptUtils.js');
const { pool } = require('../utils/dbconn.js');


describe(('search prompt command'), () => {
    let interaction;

    beforeEach(() => {

        interaction = {
            options: {
                getSubcommand: sinon.stub(),
                getString: sinon.stub(),
            },
            guild: { id: 'guild123' },
            deferReply: sinon.fake(),
            followUp: sinon.fake(),
        };
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should call the searchPrompt util upon /prompt search execution', async () => {
        const searchPromptStub = sinon.stub(promptUtils, 'searchPrompts');
        interaction.options.getSubcommand.returns('search');
        promptUtils.searchPrompts.resolves('lunch');
        
        await promptCommand.execute(interaction);

        expect(interaction.deferReply.called).to.be.true;
        expect(promptUtils.searchPrompts.called).to.be.true;
        searchPromptStub.restore(); 
    });

    it('should search prompts with a keyword from user input - matches found', async () => {
        interaction.options.getSubcommand.returns('search');
        interaction.options.getString.returns('SearchTerm');
    
        const searchPromptsStub = sinon.stub(promptUtils, 'searchPrompts').resolves('Search results for "SearchTerm":\nSearchTerm1\nSearchTerm2');
    
        await promptCommand.execute(interaction);
    
        expect(interaction.deferReply.calledOnce).to.be.true;
        expect(searchPromptsStub.calledOnceWithExactly('guild123', 'SearchTerm')).to.be.true;
        expect(interaction.followUp.calledOnceWithExactly('Search results for "SearchTerm":\nSearchTerm1\nSearchTerm2')).to.be.true;
    
        searchPromptsStub.restore();
    });
    
    it('should search prompts with a keyword from user input - no matches found', async () => {
        interaction.options.getSubcommand.returns('search');
        interaction.options.getString.returns('NonExistentTerm');
    
        const searchPromptsStub = sinon.stub(promptUtils, 'searchPrompts').resolves('No prompts found that match "NonExistentTerm"\nall prompts: Prompt1\nPrompt2');
    
        await promptCommand.execute(interaction);
    
        expect(interaction.deferReply.calledOnce).to.be.true;
        expect(searchPromptsStub.calledOnceWithExactly('guild123', 'NonExistentTerm')).to.be.true;
        expect(interaction.followUp.calledOnceWithExactly('No prompts found that match "NonExistentTerm"\nall prompts: Prompt1\nPrompt2')).to.be.true;
    
        searchPromptsStub.restore();
    });
    
});