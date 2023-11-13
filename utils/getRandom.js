
async function getRandomUser(guild){
    await guild.members.fetch();
    
    users = [];
    guild.members.cache.forEach(member => {
        users.push(member.user.id)
    });
    let size = users.length;
    let index = Math.floor(Math.random()* size);
    //console.log(users[index]);
    return users[index];
}



module.exports = getRandomUser;