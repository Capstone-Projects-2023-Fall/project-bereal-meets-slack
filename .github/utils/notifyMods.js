async function notifyMods(guild, submissionDetails, submitter){

    //Get role for mods
    const modRole = guild.roles.cache.find(role => role.name === 'mod all');

    if(!modRole){
        return console.error("Moderator role not found");
    }

    //Fetch memebrs with mod all role 
    const moderators = guild.members.cache.filter(member => member.roles.cache.has(modRole.id));

    const content = `New submission from ${submitter.tag}: ${submissionDetails}`;

    //Send DM to all mods
    for (const moderator of moderators.values()){
        try{
            await moderator.send(content);
        } catch (error){
            console.error(`Could not send DM to ${moderator.user.tag}.`, error);
        }
    }
}

module.exports = notifyMods;