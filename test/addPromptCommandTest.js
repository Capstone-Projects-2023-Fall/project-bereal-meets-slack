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
                getChannel: sinon.stub(),
            },
            guild: { 
                id: 'guild123',
                roles: {
                    cache: [
                        { name: 'bot mod' }
                    ]
                }
            },
            channel: { id: 'channel123' },
            deferReply: sinon.fake(),
            followUp: sinon.fake(),
        };
    });

    afterEach(() => {
        sinon.restore();
    });


    it('should call the addPrompt util upon /prompt add execution', async () => {
        const addPromptStub = sinon.stub(promptUtils, 'addPrompt');
        interaction.options.getSubcommand.returns('add');
        interaction.options.getChannel.returns('channel123');

        await promptCommand.execute(interaction);

        expect(interaction.deferReply.called).to.be.true;
        expect(promptUtils.addPrompt.called).to.be.true;
        addPromptStub.restore(); 
    });


    it('should add prompt to the list', async () => {
        const queryStub = sinon.stub(pool, 'query').resolves();

        await promptUtils.addPrompt('guild123', 'New Prompt', 'channel123');

        expect(queryStub.calledOnceWithExactly(
            "INSERT INTO bot.prompts (guild_id, prompt_text, channel_id) VALUES (?, ?, ?)", ['guild123', 'New Prompt', 'channel123'])
            ).to.be.true;
    });

    it('should return the success message when adding a prompt from the user', async () => {
        sinon.stub(pool, 'query').resolves();
        const result = await promptUtils.addPrompt('guild123', 'New Prompt', 'channel123');
        expect(result).to.equal('Prompt "New Prompt" has been added to the list in <#channel123>.');
    });


});