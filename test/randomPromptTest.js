const { expect } = require('chai');
const sinon = require('sinon');
const promptUtils = require('../utils/promptUtils');
const { getRandomPrompt, getPrompts } = require('../utils/promptUtils');

describe('get random prompt', () => {
    beforeEach(() => {
        const guildId = process.env.DISCORD_GUILD_ID;
        sinon.stub(promptUtils, 'getRandomPrompt').resolves(guildId);
        sinon.stub(promptUtils, 'getPrompts').resolves(guildId);
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

    it('should get a list of prompts', async () => {
        const guildId = process.env.DISCORD_GUILD_ID;
        const prompts = await getPrompts(guildId);

        expect(prompts).to.exist;
    });

    it('should return an empty list of prompts', async () => {
        const prompts = await getPrompts('');

        expect(prompts.length).to.equal(0);
    });
}); 