const {EmbedBuilder, Attachment} = require('discord.js');

async function notifyMods(guild, content, author, attachments){

    //Get role for mods
    //const modRole = guild.roles.cache.find(role => role.name === 'mod all');
    const modRole = guild.roles.cache.find(role => role.name === 'bot mod');
    await guild.members.fetch();

    if(!modRole){
        return console.error("Moderator role not found");
    }

    //Fetch memebrs with mod all role 
    const moderators = guild.members.cache.filter(member => member.roles.cache.has(modRole.id));

    // console.log("List of mods");
    // moderators.forEach(moderator => {
    //     console.log(`Moderator: ${moderator.user.username} #${moderator.user.discriminator}`);
    // });

    //Embedd message to include images
    const embed = new EmbedBuilder()
        .setTitle('New Submission!') //title of embedded message
        .setDescription(`New Submission from: ${author.tag} `) //who submitted post
        .setColor('Green')
    
    if (content){
        //include text from post with image
        embed.addFields({name: 'Post:', value: content});
    } else{
        embed.addFields({name: 'Note:', value: 'No caption submitted.'})
    }

    if(attachments && attachments.size > 0){
        //if theres an attachment, include it
        const image = attachments.first(); //get the first attachment

        if(image && image.url){
            embed.setImage(image.url); //embed image 
        }
    } else{
            embed.addFields({name: 'Attachment:', value: 'No image was submitted.'});
        }

    //Send DM to all mods
    for (const moderator of moderators.values()){
        try{
            await moderator.send({ embeds: [embed] });
        } catch (error){
            console.error(`Could not send DM to ${moderator.user.tag}.`, error);
        }
    }
}

module.exports = notifyMods;