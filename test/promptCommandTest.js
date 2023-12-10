const { expect } = require('chai');
const sinon = require('sinon');
const promptCommand = require('../commands/prompt-commands');
const promptUtils = require('../utils/promptUtils');
const { pool } = require('../utils/dbconn.js');


describe(('prompt command'), () => {
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
    
    



    
    


    it('should call the deletePrompt util upon /prompt delete executio', async () => {
        const deletePromptStub = sinon.stub(promptUtils, 'deletePrompt');
        interaction.options.getSubcommand.returns('delete');
        promptUtils.deletePrompt.resolves('Prompt was deleted');
        
        await promptCommand.execute(interaction);

        expect(interaction.deferReply.called).to.be.true;
        expect(promptUtils.deletePrompt.called).to.be.true;
        deletePromptStub.restore(); 
    });

    it('should delete a user-specified prompt - full match', async () => {
        interaction.options.getSubcommand.returns('delete');
        interaction.options.getString.returns('PromptToDelete');
    
        const deletePromptStub = sinon.stub(promptUtils, 'deletePrompt').resolves('PromptToDelete was deleted');
    
        await promptCommand.execute(interaction);
    
        expect(interaction.deferReply.calledOnce).to.be.true;
        expect(deletePromptStub.calledOnceWithExactly('guild123', 'PromptToDelete')).to.be.true;
        expect(interaction.followUp.calledOnceWithExactly('PromptToDelete was deleted')).to.be.true;
    
        deletePromptStub.restore();
    });
    
    it('should delete a user-specified prompt - partial match', async () => {
        interaction.options.getSubcommand.returns('delete');
        interaction.options.getString.returns('PartialMatch');
    
        const deletePromptStub = sinon.stub(promptUtils, 'deletePrompt').resolves('Did not find specified prompt, did you mean: PartialMatch1, PartialMatch2');
    
        await promptCommand.execute(interaction);
    
        expect(interaction.deferReply.calledOnce).to.be.true;
        expect(deletePromptStub.calledOnceWithExactly('guild123', 'PartialMatch')).to.be.true;
        expect(interaction.followUp.calledOnceWithExactly('Did not find specified prompt, did you mean: PartialMatch1, PartialMatch2')).to.be.true;
    
        deletePromptStub.restore();
    });
    
    it('should delete a user-specified prompt - not found', async () => {
        interaction.options.getSubcommand.returns('delete');
        interaction.options.getString.returns('NonExistentPrompt');
    
        const deletePromptStub = sinon.stub(promptUtils, 'deletePrompt').resolves('Prompt Not Found.');
    
        await promptCommand.execute(interaction);
    
        expect(interaction.deferReply.calledOnce).to.be.true;
        expect(deletePromptStub.calledOnceWithExactly('guild123', 'NonExistentPrompt')).to.be.true;
        expect(interaction.followUp.calledOnceWithExactly('Prompt Not Found.')).to.be.true;
    
        deletePromptStub.restore();
    });
    
    it('should handle an error during prompt deletion', async () => {
        interaction.options.getSubcommand.returns('delete');
        interaction.options.getString.returns('ErrorPrompt');
    
        const deletePromptStub = sinon.stub(promptUtils, 'deletePrompt').resolves('There was an error deleting the specified prompt!');
    
        await promptCommand.execute(interaction);
    
        expect(interaction.deferReply.calledOnce).to.be.true;
        expect(deletePromptStub.calledOnceWithExactly('guild123', 'ErrorPrompt')).to.be.true;
        expect(interaction.followUp.calledOnceWithExactly('There was an error deleting the specified prompt!')).to.be.true;
    
        deletePromptStub.restore();
    });
    
    

});