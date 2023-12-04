const { expect } = require('chai');
const sinon = require('sinon');
const activeHoursCommand = require('../commands/activeHours');
const activeHoursUtils = require('../utils/activeHoursUtils');

describe('activeHours command', () => {
    let interaction;

    beforeEach(() => {
       
        sinon.stub(activeHoursUtils, 'fetchActiveHoursFromDB');
        sinon.stub(activeHoursUtils, 'storeOperatingHours');

      
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

    it('should list active hours', async () => {
        interaction.options.getSubcommand.returns('list');
        activeHoursUtils.fetchActiveHoursFromDB.resolves({ start_time: '09:00', end_time: '17:00' });

        await activeHoursCommand.execute(interaction);

        expect(interaction.deferReply.called).to.be.true;
        expect(activeHoursUtils.fetchActiveHoursFromDB.calledWith('guild123')).to.be.true;
        expect(interaction.followUp.calledWith('Active hours are from 09:00 to 17:00')).to.be.true;
    });

    it('should set active hours', async () => {
        interaction.options.getSubcommand.returns('set');
        interaction.options.getString.withArgs('start-time').returns('08:00');
        interaction.options.getString.withArgs('end-time').returns('18:00');

        await activeHoursCommand.execute(interaction);

        expect(interaction.deferReply.called).to.be.true;
        expect(activeHoursUtils.storeOperatingHours.calledWith('guild123', '08:00', '18:00')).to.be.true;
        expect(interaction.followUp.calledWith('Active hours set from 08:00 to 18:00')).to.be.true;
    });

});
