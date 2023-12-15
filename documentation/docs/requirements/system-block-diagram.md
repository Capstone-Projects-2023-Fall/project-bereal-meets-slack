---
sidebar_position: 2
---

# System Block Diagram

![Bot_Working_Diagram](https://github.com/Capstone-Projects-2023-Fall/project-bereal-meets-slack/assets/97468890/a6541cd1-530f-41ae-a1eb-dae055e4f9dd)

## The BeReal bot uses 3 Microservices  

### 1. Discord Chat Application  
The user will interact with the bot using the Discord chat application, as the bot will send messages via the Discord API & recieve messages the same way. Moderators will be able to interface with slash commands from the Discord application to set configuration parameters from the bot, such as active hours or prompt list.
  
### 2. BeReal Bot
The BeReal bot will send prompts at its own randomly selected time and send out a prompt. Once a user responds to its prompt with an image it will send that to the server for review. Once approved it will recieve the approved image and post it to the Discord channel with the caption. If denied it will prompt the user to post a new image. The bot will also record post reactions & time till submission and send that data to the server for storage.  
  
### 3. Server
The server will store under review images and post reactions. It will send under review images to the Moderators who will send a review decision back to the server for it to send back to the BeReal bot to inform the user.
