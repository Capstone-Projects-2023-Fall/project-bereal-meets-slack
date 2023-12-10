const { expect } = require('chai');
const sinon = require('sinon');
const promptCommand = require('../commands/prompt-commands');
const promptUtils = require('../utils/promptUtils');
const { pool } = require('../utils/dbconn.js');


describe(('add prompt command'), () => {
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


    it('should call the addPrompt util upon /prompt add execution', async () => {
        const listPromptsStub = sinon.stub(promptUtils, 'addPrompt');
        interaction.options.getSubcommand.returns('add');
        
        await promptCommand.execute(interaction);

        expect(interaction.deferReply.called).to.be.true;
        expect(promptUtils.addPrompt.called).to.be.true;
        listPromptsStub.restore(); 
    });


    it('should add the user inputted prompt to the list', async () => {
        const queryStub = sinon.stub(pool, 'query').resolves();

        await promptUtils.addPrompt('guild123', 'New Prompt');

        // check that pool.query was called with the correct SQL query and parameters
        expect(queryStub.calledOnceWithExactly("INSERT INTO bot.prompts (guild_id, prompt_text) VALUES (?, ?)", ['guild123', 'New Prompt'])).to.be.true;
    });

    it('should return the success message when adding a prompt from the user', async () => {
        sinon.stub(pool, 'query').resolves();
        const result = await promptUtils.addPrompt('guild123', 'New Prompt');
        expect(result).to.equal('Prompt "New Prompt" has been added to the list.');
    });


});