const {EmbedBuilder} = require('discord.js');

async function notifyMods(guild, message){

    //Get role for mods
    const modRole = guild.roles.cache.find(role => role.name === 'mod all');

    if(!modRole){
        return console.error("Moderator role not found");
    }

    //Fetch memebrs with mod all role 
    const moderators = guild.members.cache.filter(member => member.roles.cache.has(modRole.id));

    //Embedd message to include images
    const embed = new EmbedBuilder()
        .setTitle('New Submission!') //title of embedded message
        .setDescription(`New Submission from: `) //who submitted post
        .setColor('#000000')
    
    if (message.content){
        //include text from post with image
        embed.addField('Post:', message.content);
    }
    else{
        embed.addField('Note', 'No caption submitted.');
    }

    if(message.attachments.size > 0){
        //if theres an attachment, include it
        const image = message.attachments.first(); //get the first attachment

        if(image){
            embed.setImage(image.url); //embed image 
        }
    }
    else{
            embed.addField('Attachment:', 'No image was submitted.');
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