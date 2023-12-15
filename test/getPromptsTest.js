const { expect } = require('chai');
const sinon = require('sinon');
const promptCommand = require('../commands/prompt-commands.js');
const promptUtils = require('../utils/promptUtils.js');
const { pool } = require('../utils/dbconn.js');


describe(('getPrompts util'), () => {
    let interaction;

    beforeEach(() => {
        interaction = {
            options: {
                getSubcommand: sinon.stub(),
                getString: sinon.stub(),
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

    
    it('should return an array of prompt texts when getPrompts is called', async () => {
        //Mock pool.query to return specific set of rows
        const mockRows = [{ prompt_text: 'Prompt1' }, { prompt_text: 'Prompt2' }];
        const queryStub = sinon.stub(pool, 'query').resolves([mockRows]);
    
        const result = await promptUtils.getPrompts('guild123');
        // check getPrompts returns an array of mocked rows
        expect(result).to.deep.equal(['Prompt1', 'Prompt2']);

        // check that pool.query was called with the correct SQL query and parameters
        expect(queryStub.calledOnceWithExactly("SELECT prompt_text FROM bot.prompts WHERE guild_id = ?", ['guild123'])).to.be.true;
    
        queryStub.restore();
    });
});