const { expect } = require('chai');
const sinon = require('sinon');
const promptCommand = require('../commands/prompt-commands');
const promptUtils = require('../utils/promptUtils');


describe(('list prompt command'), () => {
    let interaction;

    beforeEach(() => {
        interaction = {
            options: {
                getSubcommand: sinon.stub(),
                getString: sinon.stub(),
            },
            client: {
                channels: {
                    cache: {
                        get: sinon.stub(),
                    }
                }
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

        const listPromptsStub = sinon.stub(promptUtils, 'listPrompts').
        resolves('Current Prompts:\nPrompt: Prompt1 - Channel: channel123\nPrompt: Prompt2 - Channel: channel123\nPrompt: Prompt3 - Channel: channel123');

        await promptCommand.execute(interaction);

        expect(interaction.deferReply.calledOnce).to.be.true;
        expect(interaction.followUp.calledOnceWithExactly(
            'Current Prompts:\nPrompt: Prompt1 - Channel: channel123\nPrompt: Prompt2 - Channel: channel123\nPrompt: Prompt3 - Channel: channel123')).
            to.be.true;

        listPromptsStub.restore();
    });
});