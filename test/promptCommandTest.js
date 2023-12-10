const { expect } = require('chai');
const sinon = require('sinon');
const promptCommand = require('../commands/prompt-commands');
const promptUtils = require('../utils/promptUtils');
const { pool } = require('../utils/dbconn.js');


describe(('prompt command'), () => {
    let interaction;

    beforeEach(() => {
        // sinon.stub(promptUtils, 'deletePrompt');

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

    
    it('should return an array of prompt texts when getPrompts is called', async () => {
        //Mock pool.query to return specific set of rows
        const mockRows = [{ prompt_text: 'Prompt1' }, { prompt_text: 'Prompt2' }];
        const queryStub = sinon.stub(pool, 'query').resolves([mockRows]);
    
        const result = await promptUtils.getPrompts('guild123');

        // check that pool.query was called with the correct SQL query and parameters
        expect(queryStub.calledOnceWithExactly("SELECT prompt_text FROM bot.prompts WHERE guild_id = ?", ['guild123'])).to.be.true;
        expect(result).to.deep.equal(['Prompt1', 'Prompt2']);
    
        queryStub.restore();
    });
    
    
    it('should call the listPrompt util upon /prompt list execution', async () => {
        const listPromptsStub = sinon.stub(promptUtils, 'listPrompts');
        interaction.options.getSubcommand.returns('list');
        
        await promptCommand.execute(interaction);

        expect(interaction.deferReply.called).to.be.true;
        expect(promptUtils.listPrompts.called).to.be.true;
        listPromptsStub.restore(); 
    });

    it('should list all the prompts for the user', async () => {
        interaction.options.getSubcommand.returns('list');

        const listPromptsStub = sinon.stub(promptUtils, 'listPrompts').resolves('Current Prompts: \nPrompt1\nPrompt2\nPrompt3');

        await promptCommand.execute(interaction);

        expect(interaction.deferReply.calledOnce).to.be.true;
        expect(listPromptsStub.calledOnceWithExactly('guild123')).to.be.true;
        expect(interaction.followUp.calledOnceWithExactly('Current Prompts: \nPrompt1\nPrompt2\nPrompt3')).to.be.true;

        listPromptsStub.restore();
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
    
    

    it('should add the user inputted prompt to the list', async () => {
        const queryStub = sinon.stub(pool, 'query').resolves();

        await promptUtils.addPrompt('guild123', 'New Prompt');

        // check that pool.query was called with the correct SQL query and parameters
        expect(queryStub.calledOnceWithExactly("INSERT INTO bot.prompts (guild_id, prompt_text) VALUES (?, ?)", ['guild123', 'New Prompt'])).to.be.true;
    });

    it('should return the success message when adding a prompt', async () => {
        sinon.stub(pool, 'query').resolves();
        const result = await promptUtils.addPrompt('guild123', 'New Prompt');
        expect(result).to.equal('Prompt "New Prompt" has been added to the list.');
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

    it('should return a random prompt when prompts are available', async () => {
        //Mock pool.query to return specific set of rows
        const mockRows = [{ prompt_text: 'Prompt1' }, { prompt_text: 'Prompt2' }];
        const queryStub = sinon.stub(pool, 'query').resolves([[mockRows]]);

        const result = await promptUtils.getRandomPrompt('guild123');

        // Ensure that the result returned by getRandomPrompt matches the mocked row
        expect(result).to.equal(mockRows.prompt_text);
        // Ensure that pool.query was called with the correct SQL query and parameters
        expect(queryStub.calledOnceWithExactly("SELECT prompt_text FROM bot.prompts WHERE guild_id = ? ORDER BY RAND() LIMIT 1", ['guild123'])).to.be.true;
    });

    it('should return null when no prompts are available', async () => {
        //Mock pool.query to return empty result row
        const queryStub = sinon.stub(pool, 'query').resolves([[]]);

        const result = await promptUtils.getRandomPrompt('guild123');

        // Ensure that the result returned by getRandomPrompt is null when no prompts are available
        expect(result).to.be.null;
        // Ensure that pool.query was called with the correct SQL query and parameters
        expect(queryStub.calledOnceWithExactly("SELECT prompt_text FROM bot.prompts WHERE guild_id = ? ORDER BY RAND() LIMIT 1", ['guild123'])).to.be.true;
    
    
    });
    
    

});