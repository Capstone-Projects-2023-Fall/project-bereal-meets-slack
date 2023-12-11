function getHelpMessageMod(){
    const message =  `
    Hello! It is the bot, beep bop boop.
    \n Please make sure to use /setsubmissionchannel to change the default channel of the bot.
    \n Use /prompts add to add new prompts, /prompt delete to delete a prompt, and /prompt list to list all of your prompts. Be sure to assign them to the corresponding channel.
    \n Use /activehours set to setup the random prompting feature.
    \n Use /blacklist to manage users who are not able to be prompted. Users have 3 strikes (denials) before they are automatically blacklisted.
    \n Use /exportcsv to retrieve a copy of reaction data from the server.
    \n Use /graphdata to show a graph of the reaction data on screen.
    \n
    \n The bot mod role provides access to the above commands. (Please assign it to reliable moderators.)
    \n
    \n Users can use /notifications to enable or disable notifications of new posts.
    \n Users can use /toggle_private to receive their message prompt as a DM. 
    \n Users should use /submit when prompted to upload their images with a caption in the corresponding channel.
    \n
    \n Everyone is assigned the bot user role, but @everyone can use the above commands.
    \n
    \n Use /help with the bot mod role to review this message again.`;

    return message; 
}

function getHelpMessageUser(){
   const message = `
    Hello! It is the bot, beep bop boop.
    \n Users can use /notifications to enable or disable notifications of new posts.
    \n Users can use /toggle_private to receive their message prompt as a DM. 
    \n Users should use /submit when prompted to upload their images with a caption in the corresponding channel.
    \n
    \n Use /help to review this message again.
    `;

    return message; 
}

module.exports = {
    getHelpMessageUser,
    getHelpMessageMod
};