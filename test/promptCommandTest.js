const { expect } = require('chai');
const sinon = require('sinon');
const promptCommand = require('../commands/prompt-commands');
const promptUtils = require('../utils/promptUtils');

describe(('prompt command'), () => {
    let interaction;

    beforeEach(() => {
        // sinon.stub(promptUtils, 'listPrompts');
        sinon.stub(promptUtils, 'addPrompt');
        sinon.stub(promptUtils, 'deletePrompt');
        sinon.stub(promptUtils, 'searchPrompts');

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
});