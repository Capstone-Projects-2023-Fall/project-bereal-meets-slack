const { expect } = require('chai');
const sinon = require('sinon');
const promptUtils = require('../utils/promptUtils');
const {getRandomPrompt} = require('../utils/promptUtils');

describe('getRandomPrompt', () => {
    beforeEach(() => {
        const guildId = process.env.DISCORD_GUILD_ID;
        sinon.stub(promptUtils, 'getRandomPrompt').resolves(guildId);
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should return a random prompt', async () => {
        const guildId = process.env.DISCORD_GUILD_ID;
        const randomPrompt = await getRandomPrompt(guildId);

        expect(randomPrompt).to.exist;
    });

    it('should not return a random prompt', async () => {
        const randomPrompt = await getRandomPrompt('');

        expect(randomPrompt).to.not.exist;
    });
}); 