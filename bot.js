require('dotenv').config(); //initialize dotenv
const { AttachmentBuilder, ChannelType, Client, Collection, ComponentType, Events, GatewayIntentBits, channelLink, Partials } = require('discord.js');
const path = require('node:path');
const fs = require('fs');
const registrar = require('./commandregistrar'); 
const cron = require('node-cron');
const moment = require('moment-timezone');
const http = require('http');
const database = require('./utils/databasePrompts');
const outputUsers = require('./utils/promptRandom');
const activeHoursUtils = require('./utils/activeHoursUtils');
const {getRandomHourWithinActiveHours} = require('./utils/timeRangeUtils');

//for cloud run, serverless application needs a server to listen.
const port = 8080;

const server = http.createServer((req, res) => {
// Set the response HTTP header with HTTP status and Content type
res.writeHead(200, {'Content-Type': 'text/plain'});
// Send the response body "Hello World"
res.end('BeRealBot lives here\n');
});

server.listen(port, () => {
console.log('Hello world listening on port', port);
});

const TOKEN = process.env.DISCORD_TOKEN;

class Timer {
    constructor() {
        this.startTime = null;
        this.endTime = null;
    }
    start() {
        this.startTime = Date.now();
        this.endTime = null; // Reset the end time in case start is called again before stop
    }
    stop() {
        if (this.startTime === null) {
            throw new Error("Timer was stopped without being started.");
        }
        this.endTime = Date.now();
        const elapsedSeconds = (this.endTime - this.startTime) / 1000;
        this.startTime = null; // Reset the start time for the next use
        return elapsedSeconds;
    }
    isRunning() {
        return this.startTime !== null;
    }
}
const timer = new Timer(); //create a timer object

const client = new Client({ 
    intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
	partials: [
		Partials.Channel,
	]
}); //create new client

client.toggles = new Collection(); 
client.commands = new Collection(); // set up commands list

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}


//check for ping command.
client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;
  
	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});


client.on(Events.ClientReady, async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    registrar.registercommands();

    const guildId = process.env.DISCORD_GUILD_ID;

    const activeHoursData = await activeHoursUtils.fetchActiveHoursFromDB(guildId);
    await schedulePost(activeHoursData);

    //setup cron

    cron.schedule('* * 8 * * *', async () => {
		//try to schedule post 
		try{
			const activeHoursData = await activeHoursUtils.fetchActiveHoursFromDB(guildId);
			await schedulePost(activeHoursData);
		} catch (error) {
			console.error('Error scheduling post', error);
		}
	});
});

async function schedulePost(activeHoursData) {
    //get random hour within active hours
    const targetHour = getRandomHourWithinActiveHours(activeHoursData);
    const [hour, minute] = targetHour.split(':');

    const now = moment().tz("America/New_York");
    const targetTime = now.clone().hour(hour).minute(minute).second(0);

    if(now.isAfter(targetTime)){
        //if current time is after target time, schedule for next day
        console.log("Current time is past target posting time. Scheduling for next available slot.");
        targetTime.add(1, 'day');
    }
        const timeDifference = targetTime.diff(now);

        setTimeout(async () => {
			const list = client.guilds.cache.get(process.env.DISCORD_GUILD_ID);
			const userRand = await outputUsers(list);
			userID = userRand.id;
			const randomPrompt = await database.getRandomPrompt();

            if (!client.toggles.has(userID)) {
                client.toggles.set(userID, true);
            }
        
			const instruction = client.toggles.get(userID) ? 'Use /submit to submit your post!' : 'Attach an image and type a caption!';
			const message = `<${userRand}> ${instruction} \n **Prompt:**\n${randomPrompt}`;
			if (client.toggles.get(userID)) {
				// public
				client.sendMessageWithTimer(process.env.DISCORD_SUBMISSION_CHANNEL_ID, message);
			} else {
				// private
				userRand.send(message);
			}
        
        }, timeDifference);
        
}

client.sendMessageWithTimer = async (channelId, content) => {
    timer.start(); // Ensure the timer starts when the message is sent
    const channel = await client.channels.cache.get(channelId);
    if (!channel) {
        throw new Error("Channel not found");
    }
    await channel.send(content);
    console.log("Message sent and timer started.");
};

client.on(Events.MessageCreate, async msg => {
    // Check if the message is from the bot itself
    if (msg.author.id === client.user.id) {
        // Check if the message is in the specified channel
        if (msg.channel.id === process.env.DISCORD_SUBMISSION_CHANNEL_ID) {
            if (!msg.content.includes('\n **Prompt:**\n')) {
				// bot posted an approved submission 
				return;
			}

            // If the timer is running, stop it and log the time
            if (timer.isRunning()) {
                const elapsedSeconds = timer.stop();
                console.log(`timeToRespond: ${elapsedSeconds} seconds.`); //TODO: Make this fill into the DB as timeToRespond
            }
        }
    } else {
        // the user has dm'd the bot

    	// make sure it is a dm
		const channel = await client.channels.fetch(msg.channelId);
		if (channel.type != ChannelType.DM) {
			return;
		}

		const attachment = msg.attachments.first();
		
		if (attachment) {
			const name = attachment.name;
			const url = attachment.url;
			const proxy = attachment.proxyURL;
			const type = attachment.contentType;

			// console.log(JSON.stringify(attachment, null, 4));

			// console.log(name);
			// console.log(url);
			// console.log(proxy);
			// console.log(type);

			// console.log(JSON.stringify(type, null, 4));

			if (type) {
				if (type.startsWith('image')) {
					console.log('THIS IS AN IMAGE');

                    const caption = !msg.content.trim().length ? null : msg.content;
					//const caption = msg.content;
					const guild = await client.guilds.fetch(process.env.DISCORD_GUILD_ID);
					const { responses, moderators } = await notifyMods(guild, caption, msg.author, [attachment]);
					// console.log(moderators);
					const collectorFilter = i => moderators.has(i.user.id); // makes sure that only the mods can do the button-ing, redundant-ish

					// const zip = (a, b) => a.map((k, i) => [k, Array.from(b)[i][1].user.globalName]);
					const zip = (a, b) => a.map((k, i) => [i, k, Array.from(b)[i][1].user.globalName]); // just makes it easier to iterate through things
					try {
						// let approved = false;
						// let approver = null;
						let approve_idx = -1;
						// let remaining_votes = responses.length;

						const collectors = [];
						for (const [idx, response, moderator] of zip(responses, moderators)) {
							// console.log(response);
							// console.log(moderator);
							const collector = response.createMessageComponentCollector({ componentType: ComponentType.Button,
																						 filter: collectorFilter,
																						 max: 1,
																						 time: 86_400_000 });

							collector.on('collect', async i => {
								// check if someone press approve
								if (i.customId === 'approve') {
									await i.deferUpdate();
									console.log(`${moderator} approved`);
									// approved = true;
									// approver = moderator;
									// approve_idx = idx;
									// if somebody approved, then kill every collector since we dont need to get more inputs
									for (const collector of collectors) {
										if (!collector.ended) {
											collector.stop();
										}
									}
									// then edit all the messages that bot sent to the DMs for the particular submission
									for (const [idx2, response] of responses.entries()) {
										approve_msg = idx == idx2 ? '**APPROVED**' :  `**APPROVED BY ${moderator}**`;
										await response.edit({ content: approve_msg, components: [] });
									}

									const file = new AttachmentBuilder(url);
									const submit_channel = await client.channels.fetch(process.env.DISCORD_SUBMISSION_CHANNEL_ID);
									await submit_channel.send({ content: `(${msg.author}) ${caption ?? '[no caption provided]'}`, files: [file]});									
								}
								
								// check if someone press deny
								else if (i.customId === 'deny') {
									await i.deferUpdate();
									console.log(`${moderator} denied`);
									await i.editReply({ content: '**DENIED**', components: [] });
								}
							});

							collectors.push(collector); // keep track of the collector
						}
					} catch (e) {
						console.error('BUTTON ERROR');
						console.error(e);
					}
				} else {
					console.log('THIS IS NOT AN IMAGE');
				}
			} else {
				console.log('Type is nonexistent');
			}
		} else {
			console.log('NO ATTACHMENT');
		}
	}
});



// Make sure this line is the last line
client.login(TOKEN);

