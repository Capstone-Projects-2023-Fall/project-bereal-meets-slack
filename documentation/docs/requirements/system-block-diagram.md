---
sidebar_position: 2
---

# System Block Diagram

![Block Diagram](https://media.discordapp.net/attachments/1150951348754456610/1153037123394473984/Drawing1.png?width=919&height=671)

## The BMS bot uses 3 Microservices  

### 1. Slack Chat Application  
The user will interact with the bot using the slack chat application, as the bot will send messages via the slack API & recieve messages the same way. Moderators will be able to interface with slash commands from the Slack application to set configuration parameters from the bot, such as active hours or prompt list.
  
### 2. BMS Bot
The BMS bot will send prompts at its own randomly selected time and send out a prompt. Once a user responds to its prompt with an image it will send that to the server for review. Once approved it will recieve the approved image and post it to the slack channel with the caption. If denied it will prompt the user to post a new image. The bot will also record post reactions & time till submission and send that data to the server for storage.  
  
### 3. Server
The server will store under review images and post reactions. It will send under review images to the Moderators who will send a review decision back to the server for it to send back to the BMS bot to inform the user.
