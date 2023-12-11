
const { expect } = require('chai');
const sinon = require('sinon');
const blacklistUtils = require('../utils/blacklistutils.js');
const { pool } = require('../utils/dbconn.js');

describe('Blacklist Utils', () => {
    afterEach(() => {
        sinon.restore();
    });

    it('should add a user to the blacklist', async () => {
        const guildId = 'guild123';
        const dbuser = 'dbUser123';
        const mockRows = [];

        const queryStub = sinon.stub(pool, 'query');
        queryStub.onFirstCall().resolves([mockRows]);
        queryStub.onSecondCall().resolves();

        const result = await blacklistUtils.blacklistAddUser(guildId, dbuser);

        expect(result).to.equal(0); // 0 for success

        // Check pool.query was called with the correct SQL query and parameters
        expect(queryStub.calledTwice).to.be.true;
        expect(queryStub.firstCall.calledWithExactly(
            `SELECT * FROM bot.blacklist WHERE user_id = '${dbuser}' AND guild_id = '${guildId}'`
        )).to.be.true;
        expect(queryStub.secondCall.calledWithExactly(
            `INSERT INTO bot.blacklist (user_id, guild_id) VALUES ('${dbuser}', '${guildId}')`
        )).to.be.true;
    });

    it('should delete a user from the blacklist', async () => {
        const guildId = 'guild123';
        const dbuser = 'dbUser123';
        const mockRows = { affectedRows: 1 }; // 1 row was affected

        const queryStub = sinon.stub(pool, 'query').resolves([mockRows]);

        const result = await blacklistUtils.blacklistDeleteUser(guildId, dbuser);

        expect(result).to.equal(0); // 0 for success

        // check pool.query was called with the correct SQL query and parameters
        expect(queryStub.calledOnce).to.be.true;
        expect(queryStub.calledWithExactly(
            `DELETE FROM bot.blacklist WHERE user_id = '${dbuser}' AND guild_id = '${guildId}'`
        )).to.be.true;
    });

    it('should list users from the blacklist', async () => {
        const guildId = 'guild123';
        const mockRows = [{ user_id: 'user1' }, { user_id: 'user2' }];

        const queryStub = sinon.stub(pool, 'query').resolves([mockRows]);

        const result = await blacklistUtils.blacklistListUsers(guildId);

        // Assuming your function returns an array of user IDs
        expect(result).to.deep.equal(['<@user1>', '<@user2>']);

        // Check if pool.query was called with the correct SQL query and parameters
        expect(queryStub.calledOnce).to.be.true;
        expect(queryStub.calledWithExactly(
            `SELECT user_id FROM bot.blacklist WHERE guild_id = '${guildId}'`
        )).to.be.true;
    });
    
});