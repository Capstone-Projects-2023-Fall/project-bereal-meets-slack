const { expect } = require('chai');
const sinon = require('sinon');
const promptCommand = require('../commands/prompt-commands.js');
const promptUtils = require('../utils/promptUtils.js');
const { pool } = require('../utils/dbconn.js');


describe(('prompt utils to get prompts and get a random prompt'), () => {
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
    
    // it('should return a random prompt when prompts are available', async () => {
    //     //Mock pool.query to return specific set of rows
    //     const mockRows = [{ prompt_text: 'Prompt1', channelId: 'channel123' }, { prompt_text: 'Prompt2', channelId: 'channel123' }];
    //     const queryStub = sinon.stub(pool, 'query').resolves([[mockRows]]);

    //     const result = await promptUtils.getRandomPrompt('guild123');
        
    //     // check returns a prompt from mockedRows
    //     expect(result).to.equal(mockRows);

    //     // check that pool.query was called with the correct SQL query and parameters
    //     expect(queryStub.calledOnceWithExactly("SELECT prompt_text, channel_id FROM prompts WHERE guild_id = ? ORDER BY RAND() LIMIT 1", ['guild123'])).to.be.true;
    // });
    it('should return a random prompt when prompts are available', async () => {
  // Mock pool.query to return specific set of rows
  const mockRows = [{ prompt_text: 'Prompt1', channelId: 'channel123' }, { prompt_text: 'Prompt2', channelId: 'channel123' }];
  const queryStub = sinon.stub(pool, 'query').resolves([mockRows]);

  const result = await promptUtils.getRandomPrompt('guild123');
  

//   // check returns a prompt from mockedRows
//   expect(result).to.equal({
//     promptText: mockRows[0].prompt_text,
//     channelId: mockRows[0].channelId
//   });

  // check that pool.query was called with the correct SQL query and parameters
  expect(queryStub.calledOnceWithExactly("SELECT prompt_text, channel_id FROM prompts WHERE guild_id = ? ORDER BY RAND() LIMIT 1", ['guild123'])).to.be.true;
});


    it('should return null when no prompts are available', async () => {
        //Mock pool.query to return empty result 
        const queryStub = sinon.stub(pool, 'query').resolves([[]]);

        const result = await promptUtils.getRandomPrompt('guild123');

        // Check getRandomPrompt returns null when no prompts are available
        expect(result).to.be.null;

        // check that pool.query was called with the correct SQL query and parameters
        expect(queryStub.calledOnceWithExactly("SELECT prompt_text, channel_id FROM prompts WHERE guild_id = ? ORDER BY RAND() LIMIT 1", ['guild123'])).to.be.true;
    
    });
});