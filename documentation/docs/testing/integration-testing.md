---
sidebar_position: 2
---
# Integration Tests

Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.

| Test Case ID | Test Case Objective                                                                                                                                                                                                                                                                                                                                                                                                                               | Test Case Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Expected Result                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1            | Test if owner successful adds bot into the workspace

<br/>

Test that all the guidelines, roles, and settings of server are configured and saved correctly

<br/>                                                                                                                                                                                                                                                                                  | 1.  Test moderator signing into workspace
    
2.  Owner accesses “preferences”
    
3.  owner selects “apps and integration” Install the bot, verifies if installation is successful
    
4.  Owner assigns roles and privileges within the community, validates that assigned roles and privileges are correctly reflected
    
5.  Owner defines moderation and content guidelines for community, test confirms guidelines are properly set
    
6.  Test checks that prompts are correctly configured
    
7.  Test validates schedule is correctly configured 
    
8.  Test ensures that he specific duration is properly applied
    
9.  Verifies time limit is correctly set
    
10.  Confirms that settings are saved | Assert that actions taken by owner are successful and expected settings are configured and saved correctly

<br/><br/>

Overall bot should be successfully configured in the workspace

<br/><br/>                                                                                                                                                                                                                                           |
| 2            | Test if the bot successfully prompted user 

<br/>

Test If user responded, If bot got user response and if it is sent to the moderator

<br/>

Test If user can get approval status from the bot                                                                                                                                                                                                                                                   | 1.  Stimulate of notification sent and user receiving notification
    
2.  User opens app
    
3.  User responds to random prompt by taking a photo and uploading it
    
4.  User sends text response to bot
    
5.  Moderator is sent the user’s response via the bot, for review
    
6.  User waits for approval status from bot, to see whether response was approved or not (test waits for reasonable time and checks for arrival of this status)                                                                                                                                                                                                                                                                       | Assert that moderator receive user’s response for review

<br/><br/>

User receives approval status or feedback from the bot within reasonable time

<br/><br/>                                                                                                                                                                                                                                                                              |
| 3            | Test that the bot is able to wait for the user until timeout

<br/>

That the bot will send a notification to remind user after timeout time

<br/>

That the bot can recognize the user’s failure to respond, and if it can successfully send a reminder notification to users about the missed prompt                                                                                                                                             | 1.  User did not answer bot prompt
    
2.  Bot waits for user until timeout
    
3.  Bot sends notification to user after timeout\\
    
4.  Bot sees that user failed to respond and will send a reminder to users about the missed prompt                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Asserts that the bot can send a notification to users after confirming that the user failed to respond to the prompt in a certain time frame

<br/><br/>

Confirm that the bot can recognize the user’s failure to respond

<br/><br/>                                                                                                                                                                                                       |
| 4            | Test that the bot can receive message from moderator

<br/>

That the bot can post the image with caption and notify the user<br/><br/>

Bot can log emoji reactions, threaded replies, and comments from the community                                                                                                                                                                                                                              | 1.  Bot receives approval decision
    
2.  Bot post approved image with caption
    
3.  Bot notified user about posted image
    
4.  Logs reaction, threaded replies, comments from community                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Assert that the bot successfully receives approval decision

<br/><br/>

Bot can post approved image with caption and notify user

<br/><br/>

Bot can correctly log emoji reactions, threaded replies, and comments and can send logs to the server

<br/><br/>                                                                                                                                                                               |
| 5            | Test that a notification with feedback and tells the user to resubmit is sent to user if their post was denied

<br/>

That the user is able to resubmit their image

<br/>

If they receive a notification that the post was approved and posted                                                                                                                                                                                                   | 1.  User receives notification that their post was not approved and asked to resubmit with feedback
    
2.  User resubmits image
    
3.  User receives notification that post was approved and it was posted                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Assert that the user indeed received a notification with feedback and is able to resubmit image

<br/><br/>

That the user received a notification that their post was approved and posted

<br/><br/>                                                                                                                                                                                                                                       |
| 6            | Test that users are able to receive notifications when other users have posted a response to a prompt

<br/>

That the notifications take users to the post are they able to view the response of other users in the server 

<br/>

That the user is able to leave comments and reactions to posts                                                                                                                                                 | 1.  A user in the community is notified by the the bot that another user has posted a response to a prompt.
    
2.  User opens app to view the response in the community channel
    
3.  User interacts with the post by leaving a comment or a reaction(likes, emojis, etc)                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Asserts that the user can receive notification when others post, as well as the notification being able to take users to the correct post

<br/><br/>

Comments and reactions that the user posts are saved on other user’s posts

<br/><br/>                                                                                                                                                                                                |
| 7            | Test that the user can use settings of the bot and can successfully choose the option to turn off new post notifications                                                                                                                                                                                                                                                                                                                          | 1.  User goes to setting of bot
    
2.  User chooses option to turn off new post notification
    
3.  User is no longer sent any post notification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Assert that the user is able to turn off new post notifications of the bot, and that the user no longer receives those notifications                                                                                                                                                                                                                                                                                                     |
| 8            | Test that the moderator can log into the app, is able to run a command to request data in csv format, and is able to export reaction data for further analysis

<br/>

That the moderator can run a command to see reaction data, as well as being able to receive data visualizations from the bot                                                                                                                                                | Normal Flow:

1.  Moderator logs into app
    
2.  Moderator runs a command to request reaction data in csv format
    
3.  Moderator exports reaction data for further analysis, if needed
    

Alternate Flow:

1.  Moderator logs into app
    
2.  Moderator runs a command to see reaction data
    
3.  Moderator receives data visualizations from bot                                                                                                                                                                                                                                                                                                                                                                   | Assert that the moderator can log in and run a command to request data in csv format

<br/><br/>

The moderator can successfully export reaction data

<br/><br/>

The moderator can run a command to see reaction data and is able to receive data visualizations from the bot

<br/><br/>                                                                                                                                                    |
| 9            | Test that the moderator is able to receive notifications about a user’s submission and that the moderator can successfully mark submissions as “Approved” or “Denied” to the bot                                                                                                                                                                                                                                                                  | 1.  Moderator receives notification about a user submission
    
2.  Moderator opens app
    
3.  Moderator reviews submission using predefined criteria from community guidelines
    
4.  Based on guidelines, moderators approves or rejects submissions
    
5.  Moderator marks submissions as “Approved” or “Denied” to bot                                                                                                                                                                                                                                                                                                                                                                                                | Asserts that the moderator can receive notifications from users and is able to approve or deny submissions

<br/><br/>

Confirms that moderators can mark submissions as “Approved” or “Denied” to the bot

<br/><br/>                                                                                                                                                                                                                       |
| 10           | Test that the bot can recognize bad behavior within the community<br/><br/>

That the bot can send a warning notification to the user about bad behavior

<br/>

That the bot can notify the moderator about the bad behavior and ask if they want the moderator to add the user to the blacklist

<br/>

That the bot can add the user to the blacklist themselves if the user continues the bad behavior, the bot should be able to log this action | 1.  The bot recognizes bad user behavior within the app community.
    
2.  Bot sends a warning notification to the user about the bad behavior.
    
3.  Bot notifies the moderator about the bad behavior and asks if they want to add the user to the blacklist.
    
4.  If the user continues with bad behavior, bot adds the user to the blacklist.
    
5.  Bot logs the action.                                                                                                                                                                                                                                                                                                                                          | Asserts that the bot can recognize bad behavior within the community 

<br/><br/>

The bot can successfully send a warning notification to the user about bad behavior

<br/><br/>

The bot is able to notify the moderator and ask if the moderator wants to add the user to the blacklist 

<br/><br/>

The bot itself will be able to successfully add a user to the blacklist in the behavior continues and will log this action

<br/><br/> |
| 11           | Test that the moderator can choose not to add the user to the blacklist

<br/>

The moderator can view the blacklist and remove users from the blacklist

<br/>

The moderator can run a command to remove a user from the blacklist, and make sure that the user is no longer on the blacklist

<br/><br/>                                                                                                                                           | Normal Flow:

1.  Moderator chooses to add the user to the blacklist.
    
2.  Moderator runs a command to view the blacklist and sees added users.
    

Alternate Flow:

1.  Moderator chooses not to add users to the blacklist.
    
2.  Moderator views the blacklist and sees another user they want to remove.
    
3.  Moderator runs a command to remove the user from the blacklist.
    
4.  Moderator views the blacklist and no longer sees removed users.                                                                                                                                                                                                                                                          | Assert that the moderator can choose not to add a user to the blacklist, can view the blacklist as well as remove users from the blacklist

<br/><br/>

Can successfully run a command to remove a user from the blacklist and make sure the user is no longer on the blacklist

<br/><br/>                                                                                                                                                  |
