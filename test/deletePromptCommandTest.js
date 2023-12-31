const { expect } = require('chai');
const sinon = require('sinon');
const promptCommand = require('../commands/prompt-commands');
const promptUtils = require('../utils/promptUtils');
const { pool } = require('../utils/dbconn.js');


describe(('delete prompt command'), () => {
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
            deferReply: sinon.fake(),
            followUp: sinon.fake(),
        };
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should call the deletePrompt util upon /prompt delete execution', async () => {
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

        const deletePromptStub = sinon.stub(promptUtils, 'deletePrompt').
        resolves('Did not find specified prompt, did you mean: PartialMatch1, PartialMatch2');

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
        const queryStub = sinon.stub(pool, 'query').resolves();

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