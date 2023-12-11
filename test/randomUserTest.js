const { expect } = require('chai');
const sinon = require('sinon');
const getRandomUser = require('../utils/getRandom');

// Import the pool (assuming it's exported from dbconn.js)
const { pool } = require('../utils/dbconn');

describe('get random user', () => {
    let guild;
    let poolStub;

    beforeEach(() => {
        // Mock guild
        guild = {
            id: 'guild123',
            members: {
                fetch: sinon.stub().resolves(),
                cache: new Map(),
            },
        };

        // Mock pool.query
        queryStub = sinon.stub(pool, 'query');
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should return a non-bot user ID', async () => {

        guild.members.cache.set('user1', { user: { id: 'user1', bot: false } });
        guild.members.cache.set('user2', { user: { id: 'user2', bot: false } });
        guild.members.cache.set('bot1', { user: { id: 'bot1', bot: true } });
        guild.members.cache.set('bot2', { user: { id: 'bot2', bot: true } });

        queryStub.resolves([[], {}]);

        const result = await getRandomUser(guild);

        expect(result).to.be.oneOf(['user1', 'user2']);
    });

});
