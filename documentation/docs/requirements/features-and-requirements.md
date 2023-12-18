---
sidebar_position: 4
---

# Features and Requirements

## Functional Requirements
 
- Users will be able to submit an image to the bot
- WhatchaDoin bot will be able to randomly determine a time within its operating hours to send a prompt  
- WhatchaDoin bot will be able to randomly determine an appropriate prompt from a pool based on time of day and previous sends  
- WhatchaDoin bot will be able to send messages and tag users autonomously.
- WhatchaDoin bot will be able to toggle between sending prompts privately and publically in a Discord channel.
- WhatchaDoin bot will be able to log whether the prompt was sent publically or privately.
- WhatchaDoin bot will be able to log post reaction data and send it to a server  
  - Emoji Reactions  
  - Threaded Replies  
  - Other comments  
- WhatchaDoin bot will be able to log the time it takes to respond and send it to a server  
- WhatchaDoin bot will be able to reprompt a user or prompt a user after a set timeout  
- WhatchaDoin bot will be able to receive user submissions and send them to a server to DM moderators & ask for approval.
- WhatchaDoin bot will be able to receive moderator feedback and send a DM to the user asking them to retry if response is denied. 
- WhatchaDoin bot will be able to receive moderator approval and send the submitted image back to the appropriate chat, with the initial caption  
- WhatchaDoin bot will be linked to Discord and added to a Discord channel by moderators via the bot/applications page of Discord  
- Moderators can configure the operating hours & prompt pool via slash commands  
- Moderators can approve or deny user submissions  
  - If approved image will be posted to a specific channel  
  - If denied moderator will provide feedback about denied image
- WhatchaDoin bot will provide some means of data viewing be it through the server or Discord
- WhatchaDoin bot will be able to have a moderator managed “blacklist” of users who cannot receive prompts
- Moderators will be able to add or remove users from a no prompt "blacklist" at will.

## Nonfunctional Requirements

- WhatchaDoin bot will have pop ups with prompts for users to respond
- WhatchaDoin bot will format reaction data into a CSV in the server
- WhatchaDoin bot will format data into visual aids (graphs/charts)
- WhatchaDoin bot will make use of the slash command format to allow moderators to configure the bot and see data
- WhatchaDoin bot will use a modal window to allow users to submit.
- WhatchaDoin bot will make use of the rear camera for user submissions
- WhatchaDoin bot will delete user submissions posted to public channels and send them to moderators.
