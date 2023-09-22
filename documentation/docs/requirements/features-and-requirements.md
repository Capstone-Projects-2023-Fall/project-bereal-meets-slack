---
sidebar_position: 4
---

# Features and Requirements

## Functional Requirements
 
- Users will be able to submit an image to the bot
- BMS bot will be able to randomly determine a time within its operating hours to send a prompt  
- BMS bot will be able to randomly determine an appropriate prompt from a pool based on time of day and previous sends  
- BMS bot will be able to send messages and tag users autonomously.  
- BMS bot will be able to log post reaction data and send it to a server  
  - Emoji Reactions  
  - Threaded Replies  
  - Other comments  
- BMS bot will be able to log the time it takes to respond and send it to a server  
- BMS bot will be able to reprompt a user or prompt a user after a set timeout  
- BMS bot will integrate with slack to provide a modal window for camera access  
- BMS bot will be able to receive user submissions and send them to a server to DM moderators & ask for approval  
- BMS bot will be able to receive moderator feedback and send a DM to the user asking them to retry  
- BMS bot will be able to receive moderator approval and send the submitted image back to the appropriate chat, with the initial caption  
- BMS bot will be linked to Slack and added to a Slack chat by moderators via the bot/applications page of Slack  
- Moderators can configure the operating hours & prompt pool via slash commands  
- Moderators can approve or deny user submissions  
  - If approved image will be posted to a specific channel  
  - If denied moderator will provide feedback about denied image
- BMS bot will be able to have a moderator managed “blacklist” of users who cannot receive prompts
- Moderators will be able to add or remove users from a no prompt "blacklist" at will.

## Nonfunctional Requirements

- BMS bot will have pop ups with prompts for users to respond
- BMS bot will format reaction data into a CSV in the server
- BMS bot will format data into visual aids (graphs/charts)
- BMS bot will make use of the slash command format to allow moderators to configure the bot and see data
- BMS bot will use a modal window to allow users to submit.
- BMS bot will make use of the rear camera for user submissions

