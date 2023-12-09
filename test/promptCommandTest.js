// const { expect } = require('chai');
// const sinon = require('sinon');
// const promptCommand = require('../commands/prompt-commands');
// const promptUtils = require('../utils/promptUtils');

// describe(('prompt command'), () => {
//     let interaction;

//     beforeEach(() => {
//         // sinon.stub(promptUtils, 'deletePrompt');

//         interaction = {
//             options: {
//                 getSubcommand: sinon.stub(),
//                 getString: sinon.stub(),
//             },
//             guild: { id: process.env.DISCORD_GUILD_ID },
//             deferReply: sinon.fake(),
//             followUp: sinon.fake(),
//         };
//     });

//     afterEach(() => {
//         sinon.restore();
//     });

//     it('should list the prompts', async () => {
//         const listPromptsStub = sinon.stub(promptUtils, 'listPrompts');
//         interaction.options.getSubcommand.returns('list');
        
//         await promptCommand.execute(interaction);

//         expect(interaction.deferReply.called).to.be.true;
//         expect(promptUtils.listPrompts.called).to.be.true;
//         listPromptsStub.restore(); 
//     });

//     it('should execute the search prompt command with a keyword', async () => {
//         const searchPromptStub = sinon.stub(promptUtils, 'searchPrompts');
//         interaction.options.getSubcommand.returns('search');
//         promptUtils.searchPrompts.resolves('lunch');
        
//         await promptCommand.execute(interaction);

//         expect(interaction.deferReply.called).to.be.true;
//         expect(promptUtils.searchPrompts.called).to.be.true;
//         searchPromptStub.restore(); 
//     });


//     it('should execute the add prompt command', async () => {
//         const addPromptStub = sinon.stub(promptUtils, 'addPrompt');
//         interaction.options.getSubcommand.returns('add');
//         promptUtils.addPrompt.resolves('Adding a test prompt');
        
//         await promptCommand.execute(interaction);

//         expect(interaction.deferReply.called).to.be.true;
//         expect(promptUtils.addPrompt.called).to.be.true;
//         addPromptStub.restore(); 
//     });

//     it('should execute the delete prompt command', async () => {
//         const deletePromptStub = sinon.stub(promptUtils, 'deletePrompt');
//         interaction.options.getSubcommand.returns('delete');
//         promptUtils.deletePrompt.resolves('Prompt was deleted');
        
//         await promptCommand.execute(interaction);

//         expect(interaction.deferReply.called).to.be.true;
//         expect(promptUtils.deletePrompt.called).to.be.true;
//         deletePromptStub.restore(); 
//     });
// });

const { expect } = require('chai');
const sinon = require('sinon');
const promptCommand = require('../commands/prompt-commands');
const promptUtils = require('../utils/promptUtils');

describe('prompt command', () => {
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

    it('should add a prompt', async () => {
        interaction.options.getSubcommand.returns('add');
        interaction.options.getString.returns('New Prompt');

        const addPromptStub = sinon.stub(promptUtils, 'addPrompt').resolves('Prompt "New Prompt" has been added to the list.');

        await promptCommand.execute(interaction);

        expect(interaction.deferReply.calledOnce).to.be.true;
        expect(addPromptStub.calledOnceWithExactly('guild123', 'New Prompt')).to.be.true;
        expect(interaction.followUp.calledOnceWithExactly('Prompt "New Prompt" has been added to the list.')).to.be.true;

        addPromptStub.restore();
    })

});