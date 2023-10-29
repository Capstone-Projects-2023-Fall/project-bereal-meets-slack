const {ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Attachment} = require('discord.js');

async function notifyMods(guild, content, author, attachments) {

	//console.log('AAAA');

    //Get role for mods
    //const modRole = guild.roles.cache.find(role => role.name === 'mod all');
    const modRole = guild.roles.cache.find(role => role.name === 'administrator'); //maybe admin
    await guild.members.fetch();

    if (!modRole) {
        return console.error("Moderator role not found");
    }

	if (!attachments || attachments.size == 0) {
		return console.error("No attachment was provided");
	}

	//console.log('B');

    //Fetch memebrs with mod all role 
    const moderators = guild.members.cache.filter(member => member.roles.cache.has(modRole.id));
    // console.log("List of mods");
    // moderators.forEach(moderator => {
    //     console.log(`Moderator: ${moderator.user.username} #${moderator.user.discriminator}`);
    // });

	//console.log('C');

    //Embedd message to include images
    const embed = new EmbedBuilder()
        .setTitle('New Submission!') //title of embedded message
        .setDescription(`New submission from: ${author.tag} `) //who submitted post
        .setColor('Blue')
    	.addFields({name: 'Caption:', value: content ?? '[no caption provided]'}); //include text from post with image

	//if theres an attachment, include it
	const image = Array.isArray(attachments) ? attachments[0] : attachments.first(); //get the first attachment

	if (image && image.url) {
		embed.setImage(image.url); //embed image 
	}

	//console.log('D');

	// create buttons
	const approve = new ButtonBuilder()
		.setCustomId('approve')
		.setLabel('Approve the image')
		.setStyle(ButtonStyle.Success);

	const deny = new ButtonBuilder()
		.setCustomId('deny')
		.setLabel('Deny the image')
		.setStyle(ButtonStyle.Danger);

	// send message
	const row = new ActionRowBuilder()
		.addComponents(approve, deny);

		//console.log('E');

    // send DM to all moderators
	const responses = []
    for (const moderator of moderators.values()) {
        try {
            const response = await moderator.send({ content: 'Review This Image to Approve or Deny', components: [row], embeds: [embed] });
			responses.push(response);
        } catch (error) {
            console.error(`Could not send DM to ${moderator.user.tag}.`, error);
        }
    }

	return { responses, moderators };
}

module.exports = notifyMods;






//FORMER notifyMods 

// const {EmbedBuilder, Attachment} = require('discord.js');

// async function notifyMods(guild, content, author, attachments){

//     //Get role for mods
//     //const modRole = guild.roles.cache.find(role => role.name === 'mod all');
//     const modRole = guild.roles.cache.find(role => role.name === 'bot mod');
//     await guild.members.fetch();

//     if(!modRole){
//         return console.error("Moderator role not found");
//     }

//     //Fetch memebrs with mod all role 
//     const moderators = guild.members.cache.filter(member => member.roles.cache.has(modRole.id));

//     // console.log("List of mods");
//     // moderators.forEach(moderator => {
//     //     console.log(`Moderator: ${moderator.user.username} #${moderator.user.discriminator}`);
//     // });

//     //Embedd message to include images
//     const embed = new EmbedBuilder()
//         .setTitle('New Submission!') //title of embedded message
//         .setDescription(`New Submission from: ${author.tag} `) //who submitted post
//         .setColor('Green')
    
//     if (content){
//         //include text from post with image
//         embed.addFields({name: 'Post:', value: content});
//     } else{
//         embed.addFields({name: 'Note:', value: 'No caption submitted.'})
//     }

//     if(attachments && attachments.size > 0){
//         //if theres an attachment, include it
//         const image = attachments.first(); //get the first attachment

//         if(image && image.url){
//             embed.setImage(image.url); //embed image 
//         }
//     } else{
//             embed.addFields({name: 'Attachment:', value: 'No image was submitted.'});
//         }

//     //Send DM to all mods
//     for (const moderator of moderators.values()){
//         try{
//             await moderator.send({ embeds: [embed] });
//         } catch (error){
//             console.error(`Could not send DM to ${moderator.user.tag}.`, error);
//         }
//     }
// }

// module.exports = notifyMods;