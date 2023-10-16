---
sidebar_position: 2
---
# Integration Tests

Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.

[//]: # ( integrationtests: tests -start )
<table>
  <tr>
    <th>Test Case ID</th>
    <th>Test Case Objective</th>
    <th>Test Case Description</th>
    <th>Expected Value</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Test if owner successful adds bot into the workspace. <br/> <br/> Test that all the guidelines, roles, and settings of server are configured and saved correctly. </td>
    <td>
      <ol>
        <li>Test moderator signing into workspace </li>
        <li>Owner accesses “preferences”</li>
        <li>Owner selects “apps and integration” Install the bot, verifies if installation is successful</li>
        <li>Owner assigns roles and privileges within the community, validates that assigned roles and privileges are correctly reflected</li>
        <li>Owner defines moderation and content guidelines for community, test confirms guidelines are properly set</li>
        <li>Test checks that prompts are correctly configured</li>
        <li>Test validates schedule is correctly configured </li>
        <li>Test ensures that he specific duration is properly applied</li>
        <li>Verifies time limit is correctly set</li>
        <li>Confirms that settings are saved | Assert that actions taken by owner are successful and expected settings are configured and saved correctly</li>
      </ol>
    </td>
    <td> Assert that actions taken by owner are successful and expected settings are configured and saved correctly <br/><br/> Overall bot should be successfully configured in the workspace </td>
  </tr>
  <tr>
    <td>2</td>
    <td> 
         Test if slack bot successfully prompted user <br/><br/>
         Test If user responded, If bot got user response and if it is sent to the moderator <br/><br/>
         Test If user can get approval status from slackbot
    </td>
    <td>      
      <ol>
        <li>Stimulate of notification sent and user receiving notification</li>
        <li>User opens slack</li>
        <li>User responds to random prompt by taking a photo and uploading it</li>
        <li>User sends text response to slack bot</li>
        <li>Moderator is sent the user’s response via the bot, for review</li>
        <li>Slack user waits for approval status from bot, to see whether response was approved or not (test waits for reasonable time and checks for arrival of this status)</li>
      </ol>
    </td>
    <td>
      Assert that moderator receive user’s response for review <br/><br/>
      Slack user receives approval status or feedback from slackbot within reasonable time 
    </td>
  </tr>
  <tr>
    <td>3</td>
    <td>
      Test that the bot is able to wait for the user until timeout <br/><br/>
      That the bot will send a notification to remind user after timeout time <br/><br/>
      That the bot can recognize the user’s failure to respond, and if it can successfully send a reminder notification to users about the missed prompt 
    </td>
    <td>
      <ol>
        <li>User did not answer bot prompt</li>
        <li>Bot waits for user until timeout</li>
        <li>Bot sends notification to user after timeout</li>
        <li>Bot sees that user failed to respond and will send a reminder to users about the missed prompt</li>
      </ol>
    </td>
    <td>
      Asserts that the bot can send a notification to users after confirming that the user failed to respond to the prompt in a certain time frame <br/><br/>
      Confirm that the bot can recognize the user’s failure to respond
    </td>
  </tr>
  <tr>
    <td>4</td>
    <td>
        Test that the bot can receive message from moderator <br/><br/>
        That the bot can post the image with caption and notify the user <br/><br/>
        Bot can log emoji reactions, threaded replies, and comments from the community
      </td> 
    <td>
      <ol>
        <li>Bot receives approval decision </li>
        <li>Bot post approved image with caption</li>
        <li>Bot notified user about posted image</li>
        <li>Logs reaction, threaded replies, comments from community</li>
      </ol>
    </td>
    <td>
      Assert that the bot successfully receives approval decision <br/><br/>
      Bot can post approved image with caption and notify user <br/><br/>
      Bot can correctly log emoji reactions, threaded replies, and comments and can send logs to the server 
    </td>
  </tr>
  <tr>
    <td>5</td>
    <td>
      Test that a notification with feedback and tells the user to resubmit is sent to user if their post was denied <br/><br/>
      That the user is able to resubmit their image <br/><br/>
      If they receive a notification that the post was approved and posted
    </td>
    <td>
      <ol>
        <li>User receives notification that their post was not approved and asked to resubmit with feedback</li>
        <li>User resubmits image</li>
        <li>User receives notification that post was approved and it was posted</li>
      </ol>
    </td>
    <td>
      Assert that the user indeed received a notification with feedback and is able to resubmit image <br/><br/>
      That the user received a notification that their post was approved and posted
    </td>
  </tr>
  <tr>
    <td>6</td>
    <td>
      Test that users are able to receive notifications when other users have posted a response to a prompt <br/><br/>
      That the notifications take users to the post are they able to view the response of other users in the server  <br/><br/>
      That the user is able to leave comments and reactions to posts
    </td>
    <td>
      <ol>
        <li>A user in the Slack community is notified by the Slackbot that another user has posted a response to a prompt. </li>
        <li>User opens Slack to view the response in the Slack community channel</li>
        <li>User interacts with the post by leaving a comment or a reaction(likes, emojis, etc)</li>
      </ol>
    </td>
    <td> 
      Asserts that the user can receive notification when others post, as well as the notification being able to take users to the correct post <br/><br/>
      Comments and reactions that the user posts are saved on other user’s posts
    </td>
  </tr>
  <tr>
    <td>7</td>
    <td>Test that the user can use settings of the bot and can successfully choose the option to turn off new post notifications</td>
    <td>
      <ol>
        <li>User goes to setting of bot</li>
        <li>User chooses option to turn off new post notification</li>
        <li>User is no longer sent any post notification</li>
      </ol>
    </td>
    <td>Assert that the user is able to turn off new post notifications of the bot, and that the user no longer receives those notifications</td>
  </tr>
  <tr>
    <td>8</td>
    <td> 
      Test that the moderator can log into slack, is able to run a command to request data in csv format, and is able to export reaction data for further analysis <br/><br/>
      That the moderator can run a command to see reaction data, as well as being able to receive data visualizations from the bot
    </td>
    <td>
      <h4>Main Testing Flow</h4>
      <ol>
        <li>Moderator logs into Slack</li>
        <li>Moderator runs datacsv command from bot</li>
        <li>Moderator exports reaction data, and recieves a CSV</li>
      </ol> 
      <br/><br/>
      <h4>Alternate Testing Flow</h4>
      <ol>
        <li>Moderator logs into Slack</li>
        <li>Moderator runs datavis command from bot</li>
        <li>Moderator receives data visualizations from bot</li>
      </ol>
    </td>
    <td>
      Assert that the moderator can log in and run a command to request data in csv format <br/><br/>
      The moderator can successfully export reaction data <br/><br/>
      The moderator can run a command to see reaction data and is able to receive data visualizations from the bot
  </td>
  </tr>
  <tr>
    <td>9</td>
    <td>Test that the moderator is able to receive notifications about a user’s submission and that the moderator can successfully mark submissions as “Approved” or “Denied” to the bot</td>
    <td>
      <ol>
        <li>Moderator receives notification about a user submission</li>
        <li>Moderator opens slack</li>
        <li>Marks Submission as approved or denied</li>
        <li>Recieves a confirmation</li>
      </ol>
    </td>
    <td>
      Asserts that the moderator can receive notifications from users and is able to approve or deny submissions <br/><br/>
      Confirms that moderators can mark submissions as “Approved” or “Denied” to the bot
    </td>
  </tr>
  <tr>
    <td>10</td>
    <td>
      Test that the bot can recognize bad behavior within the community <br/><br/>
      That the bot can send a warning notification to the user about bad behavior <br/><br/>
      That the bot can notify the moderator about the bad behavior and ask if they want the moderator to add the user to the blacklist <br/><br/>
      That the bot can add the user to the blacklist themselves if the user continues the bad behavior, the bot should be able to log this action
    </td>
    <td>
      <ol>
        <li>Bot is repeatedly ignored to a set limit</li>
        <li>Slack Bot sends a warning notification about the bad behavior.</li>
        <li>Slack Bot notifies moderators about the bad behavior and asks if they want to add the user to the blacklist.</li>
        <li>Slack Bot logs the action.</li>
      </ol>
    </td>
    <td>
      Asserts that the bot can recognize bad behavior within the community <br/><br/>
      The bot can successfully send a warning notification to the user about bad behavior <br/><br/>
      The bot is able to notify the moderator and ask if the moderator wants to add the user to the blacklist <br/><br/>
      The bot itself will be able to successfully add a user to the blacklist in the behavior continues and will log this action
    </td>
  </tr>
  <tr>
    <td>11</td>
    <td>
      Test that the moderator can choose not to add the user to the blacklist <br/><br/>
      The moderator can view the blacklist and remove users from the blacklist <br/><br/>
      The moderator can run a command to remove a user from the blacklist, and make sure that the user is no longer on the blacklist
    </td>
    <td>
      <h4>Main Testing Flow</h4>
      <ol>
        <li>Moderator chooses to add the user to the blacklist.</li>
        <li>Moderator runs a command to view the blacklist and sees added users.</li>
      </ol>
      <br/><br/>
      <h4>Alternative Testing Flow</h4>
      <ol>
        <li>Moderator chooses not to add users to the blacklist </li>
        <li>Moderator views the blacklist and sees another user they want to remove.</li>
        <li>Moderator runs a command to remove the user from the blacklist.</li>
        <li>Moderator views the blacklist and no longer sees removed user.</li>
      </ol>
    </td>
    <td>
      Assert that the moderator can choose not to add a user to the blacklist, can view the blacklist as well as remove users from the blacklist <br/><br/>
      Can successfully run a command to remove a user from the blacklist and make sure the user is no longer on the blacklist
    </td>
  </tr>
</table>

[//]: # ( integrationtests: tests -end )
