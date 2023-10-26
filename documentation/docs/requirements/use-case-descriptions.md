---
sidebar_position: 5
---

# Use Case Descriptions

## Use Case 1: Owner of the Discord Server Configures the BeReal bot

**As a server owner, I want to easily integrate the BeReal bot into my server so that my community can become more active**

Actor: Owner of the Discord server.  
Triggering event: Discord server creation

Normal Flow:  
1. Owner signs in to Discord
2. Owner opens the server "Preferences".
3. Owner selects "Apps and Integrations" and installs the BeReal bot.
4. Owner assigns roles and privileges to users in the community.
5. Owner defines moderation and content guidelines.
6. Owner defines type of prompts for BeReal bot to send properly suit the culture and vibe of their community.
7. Owner configures the schedule for BeReal bot, defining the hours when the it will send prompts.
8. Owner sets the duration for prompt responses to remain in the chat.
9. Owner sets the amount of time users have to respond to prompt notification
10. Owner saves the configuration settings.

## Use Case 2: User Responds to a BeReal bot Prompt

**As a Discord user, I want to respond to the bot’s prompt with an image so that I can share moments of my day with my community.**  

Actor: Discord User  
Triggering Event: The user receives a prompt from the BeReal bot.  

Normal Flow:
1. User in the Discord community receives a notification at a random time of day that they have received a prompt from the BeReal bot.
2. User opens Discord.
3. User responds to the random prompt by taking a picture and uploading it.
4. User replies to the BeReal bot with their response to the prompt, which is sent to the moderator.
5. User waits for approval status from the BeReal bot.

## Use Case 3: User Does Not Respond to a BeReal bot Prompt
**As a BeReal bot, I want to remind the user to engage with its prompts when they miss them.**

Actor: BeReal bot 
Triggering Event: User fails to respond to the BeReal bot’s prompt within a set time frame.  

Normal Flow:
1. The BeReal bot waits until timeout The BeReal bot sends a notification to the Discord user
2. BeReal bot recognizes the user’s failure to respond, and sends a reminder notification to the users about the missed prompt.

## Use Case 4 : User-Submission approved 
**As the Bot I want to post photos after they have been approved so they can get reactions and users can feel more connected.**

Actor: BeReal bot  
Triggering event: the submitted image is approved by moderators

Normal Flow:
1. BeReal bot receives the approval decision
2. BeReal bot posts the image with the caption and notifies the user
3. BeReal bot logs emoji reactions, threaded replies, and comments from the community
4. BeReal bot sends logs to the server

## Use Case 5: User’s submission is denied 

**As a Discord user I want to have another chance to post a photo if it does not follow content guidelines so I can respectfully engage with my community**

Actor: Discord User  
Trigering event: The submitted image is denied by moderators

Normal Flow:
1. User receives a notification that the post was not approved and is asked to resubmit with feedback
2. User resubmits the image
3. User receives a notification that the post was approved and it was posted


## Use Case 6: User Reacts to a New Post Notification
**As a user in the Discord community, I want to be updated on other user’s activities and show my reaction to other users so I can feel more engaged in the community.**

Actor: User  

Triggering Event: The user receives a notification about a new post in the Discord community.

Normal Flow:
1. A user in the Discord community is notified by the BeReal bot that another user has posted a response to a prompt.
2. User opens Discord to view the response in the Discord community channel
3. User interacts with the post by leaving a comment or a reaction(likes, emojis, etc)
   
## Use Case 7: User ignores New Post Notification

**As a user in the Discord community, I want to be able to avoid certain notifications about posts from other users so that I don't have too many notifications.**

Actor: User  
Triggering Event: User is sent an unwanted post notification

Normal Flow:
1. A user in the Discord community goes to the settings of the BeReal bot
2. User chooses an option to turn off new post notifications.
3. The user is no longer sent another post notification.

## Use Case 8: Moderator Accesses Reaction Data in Database 

**As a moderator I want to be able to see reaction data so that I can understand how well users are interacting with the bot and each other.**

Actor: Moderator  
Triggering Event: Timeframe for getting reactions has ended

Normal Flow: 
1. Moderator logs into Discord
2. Moderator runs a command to request reaction data in csv format
3. Moderator exports reaction data for further analysis, if needed

Alternate Flow:
1. Moderator logs into Discord
2. Moderator runs a command to see reaction data
3. Moderator receives data visualizations from bot

## Use Case 9: Moderator makes approval status decision 

**As a moderator I want to be able to approve or deny user submissions, so that I can make sure community guidelines are being followed and users remain safe.**

Actor: Moderator  
Triggering Event: Moderator receives response from user submission via BeReal

Normal Flow:
1. Moderator receives notification about a user submission 
2. Moderator opens Discord
3. Moderator reviews submission using predefined criteria from community guidelines
4. Based on guidelines, moderators approves or rejects submissions
5. Moderator marks submissions as “Approved” or “Denied” to bot


## Use Case 10: BeReal Bot bans User from Prompting 

**As a BeReal bot I want to be able to prevent unwanted prompts, so that I can ensure users that break community guidelines are discouraged from doing so.**

Actor: BeReal bot 
Triggering Event: User continuously fails to reply or gets denied by moderators.

Normal Flow: 
1. BeReal bot recognizes bad user behavior within the Discord community.
2. BeReal bot sends a warning notification to the user about the bad behavior.
3. BeReal bot notifies moderator about the bad behavior and asks if they want to add the user to the blacklist.
4. If the user continues with bad behavior, BeReal bot adds the user to the blacklist.
5. BeReal bot logs the action.


## Use Case 11: Moderator manages blacklist

**As a Moderator I want to be able to ensure the blacklist is functional and users that break community guidelines are discouraged from doing so.**

Actor: Moderator 
Triggering Event: Moderator is notified about a bad actor.

Normal Flow: 
1. Moderator chooses to add user to blacklist. 
2. Moderator runs a command to view the blacklist and sees added user.

Alternate Flow:
1. Moderator chooses not to add user to blacklist. 
2. Moderator views the blacklist and sees another user they want to remove.
3. Moderator runs a command to remove the user from the blacklist.
4. Moderator views the blacklist and no longer sees removed user.

