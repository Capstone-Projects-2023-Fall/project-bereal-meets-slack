---
sidebar_position: 2
---

# System Block Diagram

![Block Diagram](https://cdn.discordapp.com/attachments/1158176482569494568/1158176510864281670/BeReal_Block_Diagram.png?ex=651b4b6e&is=6519f9ee&hm=62360592131a751e85cd11d0414f710a81d8990f70bf611f2b6af5c1ba04224a&)

## The BeReal bot uses 3 Microservices  

### 1. Discord Chat Application  
The user will interact with the bot using the Discord chat application, as the bot will send messages via the Discord API & recieve messages the same way. Moderators will be able to interface with slash commands from the Discord application to set configuration parameters from the bot, such as active hours or prompt list.
  
### 2. BeReal Bot
The BeReal bot will send prompts at its own randomly selected time and send out a prompt. Once a user responds to its prompt with an image it will send that to the server for review. Once approved it will recieve the approved image and post it to the Discord channel with the caption. If denied it will prompt the user to post a new image. The bot will also record post reactions & time till submission and send that data to the server for storage.  
  
### 3. Server
The server will store under review images and post reactions. It will send under review images to the Moderators who will send a review decision back to the server for it to send back to the BeReal bot to inform the user.
