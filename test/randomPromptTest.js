const { expect } = require('chai');
const sinon = require('sinon');
const promptUtils = require('../utils/promptUtils');

describe('getRandomPromppt', () => {
    let interaction;

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
    });
}); 