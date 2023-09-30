---
sidebar_position: 5
---

# Use Case Descriptions

## Use Case 1: Owner of the Slack Workspace Configures the Slackbot

### As a workspace owner, I want to easily integrate the slackbot into my workspace so that my community can become more active

Actor: Owner of the Slack workspace.  
Triggering event: Slack workspace creation

Normal Flow:  
1. User signs in to Slack
2. User opens the workspace "Preferences".
3. User selects "Apps and Integrations" and installs the BMS bot.
4. User assigns roles and privileges to users in the community.
5. User defines moderation and content guidelines.
6. User defines type of prompts for BMS bot to send properly suit the culture and vibe of their community.
7. User configures the schedule for BMS bot, defining the hours when the it will send prompts.
8. User sets the duration for prompt responses to remain in the chat.
9. User sets the amount of time users have to respond to prompt notification
10. Owner saves the configuration settings.

## Use Case 2: User Responds to a Slackbot Prompt

### As a slack user, I want to respond to the bot’s prompt with an image so that I can share moments of my day with my community.  

Actor: Slack User  
Triggering Event: The user receives a prompt from the Slackbot.  

Normal Flow:
1. User in the Slack community receives a notification that they have received a prompt from  the Slackbot.
2. User opens Slack.
3. User creates a response to the prompt (text, taking a picture, uploading an image, etc.)
4. User replies to the Slackbot with their response to the prompt, which is sent to the moderator.
5. User waits for approval status from the Slackbot.

## Use Case 3: User Does Not Respond to a Slackbot Prompt
### As a slack user, I want the bot to remind me to engage with its prompts when I miss them.  

Actor: Slack User  
Triggering Event: User fails to respond to the Slack bot’s prompt within a set time frame.  

Normal Flow:
1. The slack user receives a notification that they have received a prompt from the Slackbot.
2. User either misses or chooses not to respond to the initial prompt within a certain timeframe. 
3. Slack bot recognizes the user’s failure to respond, and sends a reminder notification to the users about the missed prompt.
4. User is then prompted by the Slackbot again to submit a response.

## Use Case 4 : User-Submission approved 
### As the Bot I want to post photos after they have been approved so they can get reactions and users can feel more connected.

Actor: BMS bot  
Triggering event: the submitted image is approved by moderators

Normal Flow:
1. BMS bot prompts a random user at a random time
2. BMS bot receives a submission which it sends to the moderator
3. BMS bot receives the approval decision
4. BMS bot posts the image with the caption and notifies the user
5. BMS bot logs the reactions from the community

## Use Case 5: User’s submission is denied 

### As a Slack user I want to have another chance to post a photo if it does not follow content guidelines so I can respectfully engage with my community

Actor: Slack User  
Trigering event: The submitted image is denied by moderators

Normal Flow:
1. User receives a prompt from the BMS bot 
2. User submits an image
3. User receives a notification that the post was not approved and is asked to resubmit with feedback
4. User resubmits the image
5. User receives a notification that the post was approved and it was posted


## Use Case 6: User Reacts to a New Post Notification

### As a user in the Slack community, I want to be updated on other user’s activities and show my reaction to other users so I can feel more engaged in the community.

Actor: User  
Triggering Event: The user receives a notification about a new post in the Slack community.

Normal Flow:
1. A user in the Slack community is notified by the Slackbot that another user has posted a response to a prompt.
2. User opens Slack to view the response in the Slack community channel
3. User interacts with the post by leaving a comment or a reaction(likes, emojis, etc)
   
## Use Case 7: User ignores New Post Notification

### As a user in the Slack community, I want to be able to avoid certain notifications about posts from other users so that I don't have too many notifications.

Actor: User  
Triggering Event: User is sent an unwanted post notification

Alternate Flow:
1. A user in the Slack community goes to the settings of the Slackbot
2. User chooses an option to turn off new post notifications.
3. The user is no longer sent another post notification.

## Use Case 8: Moderator Accesses Reaction Data in Database 

### As a moderator I want to be able to see reaction data so that I can understand how well users are interacting with the bot and each other.

Actor: Moderator  
Triggering Event: Timeframe for getting reactions has ended

Normal Flow: 
1. Moderator logs into admin account for Slack
2. Moderator navigates to reaction data section
3. Moderator reviews data and engagement on approved posts 
4. Moderator exports reaction data for further analysis, if needed

Alternate Flow:
1. Moderator logs into admin account for Slack
2. Moderator checks settings to ensure data collection is enabled

## Use Case 9: Moderator makes approval status decision 

### As a moderator I want to be able to approve or deny user submissions, so that I can make sure community guidelines are being followed and users remain safe.

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

