const {SlashCommandBuilder} = require ('discord.js');
const activeHoursUtils = require('../utils/activeHoursUtils');;


module.exports = {
    data: new SlashCommandBuilder()
        .setName('activehours')
        .setDescription('View active hours for prompts')
        .addSubcommand(subcommand =>
            subcommand
              .setName('set')
              .setDescription(`set the bot's active hours.`)
              .addStringOption(option =>
                option.setName('start-time').setDescription('Enter start time(HH:MM)').setRequired(true))
              .addStringOption(option =>
                option.setName('end-time').setDescription('Enter end time (HH:MM)').setRequired(true)),
          )
        .addSubcommand(subcommand =>
            subcommand
              .setName('list')
              .setDescription('List the active hours.')
          ),

      
        async execute(interaction){
            const subcommand = interaction.options.getSubcommand();
            const guildId = interaction.guild.id;
            switch(subcommand){
                case 'list':
                    await interaction.deferReply();
                    try{
                        const hours = await activeHoursUtils.fetchActiveHoursFromDB(guildId);
                        await interaction.followUp(`Active hours are from ${hours.start_time} to ${hours.end_time}`);
                    } catch (error){
                        console.error('Failed to retrieve active hours:', error);
                        await interaction.followUp('Failed to retrieve active hours.');
                    }
                    break;
                
                case 'set':
                    await interaction.deferReply(); 
                        const startTime = interaction.options.getString('start-time');
                        const endTime = interaction.options.getString('end-time');
                            try{
                                await activeHoursUtils.storeOperatingHours(guildId, startTime, endTime);
                                await interaction.followUp(`Active hours set from ${startTime} to ${endTime}`);
                            } catch (error){
                                console.error('Failed to set active hours:', error);
                                await interaction.followUp('There was an error setting active hours.');
                            }
                    break;
            }
        }
    };
