const { expect } = require('chai');
const sinon = require('sinon');
const promptUtils = require('../utils/promptUtils');

describe('getRandomPromppt', () => {
    beforeEach(() => {
        sinon.stub(promptUtils, 'getRandomPrompt');
    });


    afterEach(() => {
        sinon.restore();
    });

    it('should return a random prompt', async () => {
        const randomPrompt = await promptUtils.getRandomPrompt('guild123');
        console.log(randomPrompt);

        expect(randomPrompt).to.exist;
        expect(promptUtils.getRandomPrompt.calledWith('guild123')).to.be.true;
    });
}); 