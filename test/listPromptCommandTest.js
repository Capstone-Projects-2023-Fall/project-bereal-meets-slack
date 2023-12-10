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
});