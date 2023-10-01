---
sidebar_position: 5
---

# Use Case Descriptions

## Use Case 1: Owner of the Slack Workspace Configures the Slackbot

**As a workspace owner, I want to easily integrate the slackbot into my workspace so that my community can become more active**

Actor: Owner of the Slack workspace.  
Triggering event: Slack workspace creation

Normal Flow:  
1. Owner signs in to Slack
2. Owner opens the workspace "Preferences".
3. Owner selects "Apps and Integrations" and installs the BMS bot.
4. Owner assigns roles and privileges to users in the community.
5. Owner defines moderation and content guidelines.
6. Owner defines type of prompts for BMS bot to send properly suit the culture and vibe of their community.
7. Owner configures the schedule for BMS bot, defining the hours when the it will send prompts.
8. Owner sets the duration for prompt responses to remain in the chat.
9. Owner sets the amount of time users have to respond to prompt notification
10. Owner saves the configuration settings.

## Use Case 2: User Responds to a Slackbot Prompt

**As a slack user, I want to respond to the bot’s prompt with an image so that I can share moments of my day with my community.**  

Actor: Slack User  
Triggering Event: The user receives a prompt from the Slackbot.  

Normal Flow:
1. User in the Slack community receives a notification at a random time of day that they have received a prompt from the Slackbot.
2. User opens Slack.
3. User responds to the random prompt by taking a picture and uploading it.
4. User replies to the Slackbot with their response to the prompt, which is sent to the moderator.
5. User waits for approval status from the Slackbot.

## Use Case 3: User Does Not Respond to a Slackbot Prompt
**As a slack bot, I want to remind the user to engage with its prompts when they miss them.**

Actor: Slack Bot 
Triggering Event: User fails to respond to the Slack bot’s prompt within a set time frame.  

Normal Flow:
1. The Slack bot waits until timeout The Slackbot sends a notification to the slack user
2. Slack bot recognizes the user’s failure to respond, and sends a reminder notification to the users about the missed prompt.

## Use Case 4 : User-Submission approved 
**As the Bot I want to post photos after they have been approved so they can get reactions and users can feel more connected.**

Actor: BMS bot  
Triggering event: the submitted image is approved by moderators

Normal Flow:
1. BMS bot receives the approval decision
2. BMS bot posts the image with the caption and notifies the user
3. BMS bot logs emoji reactions, threaded replies, and comments from the community
4. BMS bot sends logs to the server

## Use Case 5: User’s submission is denied 

**As a Slack user I want to have another chance to post a photo if it does not follow content guidelines so I can respectfully engage with my community**

Actor: Slack User  
Trigering event: The submitted image is denied by moderators

Normal Flow:
1. User receives a notification that the post was not approved and is asked to resubmit with feedback
2. User resubmits the image
3. User receives a notification that the post was approved and it was posted


## Use Case 6: User Reacts to a New Post Notification

**As a user in the Slack community, I want to be updated on other user’s activities and show my reaction to other users so I can feel more engaged in the community.**

Actor: User  
Triggering Event: The user receives a notification about a new post in the Slack community.

Normal Flow:
1. A user in the Slack community is notified by the Slackbot that another user has posted a response to a prompt.
2. User opens Slack to view the response in the Slack community channel
3. User interacts with the post by leaving a comment or a reaction(likes, emojis, etc)
   
## Use Case 7: User ignores New Post Notification

**As a user in the Slack community, I want to be able to avoid certain notifications about posts from other users so that I don't have too many notifications.**

Actor: User  
Triggering Event: User is sent an unwanted post notification

Normal Flow:
1. A user in the Slack community goes to the settings of the Slackbot
2. User chooses an option to turn off new post notifications.
3. The user is no longer sent another post notification.

## Use Case 8: Moderator Accesses Reaction Data in Database 

**As a moderator I want to be able to see reaction data so that I can understand how well users are interacting with the bot and each other.**

Actor: Moderator  
Triggering Event: Timeframe for getting reactions has ended

Normal Flow: 
1. Moderator logs into Slack
2. Moderator runs a command to request reaction data in csv format
3. Moderator exports reaction data for further analysis, if needed

Alternate Flow:
1. Moderator logs into Slack
2. Moderator runs a command to see reaction data
3. Moderator receives data visualizations from bot

## Use Case 9: Moderator makes approval status decision 

**As a moderator I want to be able to approve or deny user submissions, so that I can make sure community guidelines are being followed and users remain safe.**

Actor: Moderator  
Triggering Event: Moderator receives response from user submission via BMS

Normal Flow:
1. Moderator receives notification about a user submission 
2. Moderator opens moderation panel to review submissions
3. Moderator reviews submission using predefined criteria from community guidelines
4. Based on guidelines, moderators approves or rejects submissions
5. Moderator marks submissions as “Approved” or “Denied” in panel

Alternate Flow:
1. Moderator is unsure if response is appropriate
2. Moderator flags response for review by another moderator or community manager
3. Final approval or denial is made 

## Use Case 10: Slack Bot bans User from Prompting 

**As a slack bot I want to be able to prevent unwanted prompts, so that I can ensure users that break community guidelines are discouraged from doing so.**

Actor: Slack Bot 
Triggering Event: User continuously fails to reply or gets denied by moderators.

Normal Flow: 
1. Slack Bot recognizes bad user behavior within the Slack community.
2. Slack Bot sends a warning notification to the user about the bad behavior.
3. Slack Bot notifies moderator about the bad behavior and asks if they want to add the user to the blacklist.
4. If the user continues with bad behavior, Slack Bot adds the user to the blacklist.
5. Slack Bot logs the action.


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

