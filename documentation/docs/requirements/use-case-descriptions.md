---
sidebar_position: 5
---

# Use Case Descriptions

## Use Case 1: Owner of the Slack Workspace Configures the Slackbot
### As a workspace owner, I want to easily integrate the slackbot into my workspace so that my community can become more active
Actor: Owner of the Slack workspace.  
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
Actor: User
Triggering Event: The user receives a prompt from the Slackbot.
Normal Flow:
1.  User in Slack community gets a notification that they have received a prompt from  the Slackbot.
2. User opens Slack.
3. User creates a response to the prompt (text, taking a picture, uploading an image, etc.)
4. User replies to the Slackbot with their response to the prompt, which is sent to the moderator.
5. User waits for approval status from the Slackbot.
Alternate Flow:
1.  User in Slack community gets a notification that they have received a prompt from  the Slackbot.
2. User does not respond within a certain timeframe. 
3. User is prompted by the Slackbot again to submit a response.

## Use Case 3: Moderator Reviews User-Submitted Response
Actor: Moderator
Triggering Event: The moderator receives a user-submitted response from the Slackbot.
Normal Flow:
1. Moderator receives a notification from the Slackbot that a user has responded to a prompt. 
2. Moderator uses moderation and content guidelines to make a decision on whether to approve or deny the submission.
3. Moderator approves the response and selects the option for the Slackbot to post response to the appropriate channel
4. The Slackbot notifies the community to react to the response.
Alternate Flow:
1. Moderator receives a notification from the Slackbot that a user has responded to a prompt. 
2. Moderator uses moderation and content guidelines to make a decision on whether to approve or deny the submission.
3. Moderator denies the response and selects the option for the Slackbot to re-prompt the user to submit a response that fits community guidelines.

## Use Case 4: User Reacts to a New Post Notification
Actor: User
Triggering Event: The user receives a notification about a new post in the Slack community.
Normal Flow:
1. A user in the Slack community is notified  by the Slackbot that another user has posted a response to a prompt.
2. User opens  Slack to view the response in the Slack community channel
3. User interacts with the post by leaving a comment or a reaction(likes, emojis, etc)
Alternate Flow:
1. A user in the Slack community is notified  by the Slackbot that another user has posted a response to a prompt.
2. User chooses not to open the community channel.
3. After a certain amount of time, the user is sent another notification to react to the post.

## Use Case 5: Moderator Accesses Reaction Data in Database
Actor: Moderator
Triggering Event: The moderator wants to review reaction data from the Slackbot to analyze community engagement.
Normal Flow:
1. A moderator authorized to access the system's database logs into the database management interface.
2. From the system's dashboard or menu, the moderator opens the reaction and post data collected by the Slackbot
3. Moderator with filters and sorts data they want to review.
4. Moderator exports the data for analysis.