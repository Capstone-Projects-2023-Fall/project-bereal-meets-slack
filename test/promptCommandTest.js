const { expect } = require('chai');
const sinon = require('sinon');
const promptUtils = require('../utils/promptUtils');

describe(('prompt command'), () => {
    let interaction;

    beforeEach(() => {
        sinon.stub(promptUtils, 'getPrompts');
        sinon.stub(promptUtils, 'addPrompt');
        sinon.stub(promptUtils, 'deletePrompt');
        sinon.stub(promptUtils, 'deletePrompt');

        interaction = {
            options: {
                getSubcommand: sinon.stub(),
                getString: sinon.stub(),
            },
            guild: { id: process.env.DISCORD_GUILD_ID },
            deferReply: sinon.fake(),
            followUp: simon.fake(),
        };
    });

    afterEach(() => {
        sinon.restor();
    });

});