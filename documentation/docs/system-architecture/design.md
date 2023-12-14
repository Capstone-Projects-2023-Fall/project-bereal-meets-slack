---
sidebar_position: 1
---
# WhatchaDoin Bot Design Document

## Components

### Chat Application

The chat application acts as both the bot's user portal and the bot's running environment. The chat application facilitates user interaction with the bot and allows it to act like a pseudo-user that can post and interact with messages. There will be a level of UI/UX design for the bot in Discord using both its API & libraries for command and interaction formatting as well as a block kit for formatting of modals, popups, and responses. The application will also act as the display for all data visualization that moderators ask for.

### WhatchaDoin Bot 

The bot itself is a chatbot that is hosted on Google Cloud via cloud run, as previously mentioned it will act as a pseudo-user posting messages and accepting and reacting to user responses with triggers. It interfaces with the Discord API to send messages and with the database to store and pull user reaction data. When dealing with moderation the bot will opt to DM moderators and generate either popups, modals, or interactive actions for approvals, data requests, or moderation features. When logging data the bot will leverage the server to send data to Firebase for storage.

### Google Cloud Web Server

The Google Cloud web server provides a hosting point for the bot using the cloud run service. The server allows for two things, bot uptime and bot access to the database, through the server, the bot can make calls to the Firebase database both for logging and for access to data. The web server will also provide containers that host the Firebase database for reaction data. The web server also will be responsible for formatting data into visualizations when requested by the bot via a user.

### Google Firebase Database

The Firebase database is contained in the cloud web server and acts as a means of storing and logging all reaction data. The database will contain data about prompts, approved submitted images, time to post, emoji reactions, threaded replies, and several comments. All of this data will be exportable as a CSV or in a visualization done by the host web server.

## Class Diagram
```mermaid
classDiagram
webServer --> WhatchaDoinBot
webServer --> database
class webServer{
  + generateCSV(int startTime, int endTime)
  + generateDataVis(int startTime, int endTime)
}
class WhatchaDoinBot{
  + String botName
  + token botToken
  - int startHour
  - int endHour
  - String [] promptList
  - String [] blackList
  - getCSV()
  - getDatavis()
  - getOperatingHours()
  - sendPrompt()
  - getResponseDelay()
  - getResponse()
  - setOperatingHours(int newStart, int newEnd)
  - generateRandomPromptTime()
  - generateRandomPrompt()
  - getPromptList()
  - setPromptList()
  - getResponsePostComment()
  - setReponsePostComment()
  - getBlackList()
  - addUserToBlackList()
  - removeUserFromBlackList()
  - selectRandomUserToPrompt()
  - getApprovalStatus()
  - setApprovalStatus()
  - sendToReponseToMod()
  - postReponseToChannel()
  - deleteOriginalPromptFromChannel()
  - setaUsersAlreadyPromptedList()
}
class database{
  + String Prompt
  + String imageLink
  + int numReactions
  + int numReplies
  + int timeToPost 
  + setUserRoles()
  + setBotSettings()
  + getBotSettings()
  + updateTotalAverageTimeToPost()
  + getReactionTS()
  + getResponseTS()
  + setPromptPostTS()
  + updateUserTimeToPost()
  + getUserTimeToPost()
  + updateReactionsUsage()
  + getReactionsUsage()
  + updateUsersList()
  + updateUserInfo()
  + getUserInfo()
  + createUser()
  + getUser()

}
```
## WhatchaDoin Bot
This class will contain methods that allow the bot to interact with the users and moderator

**Fields**

  **-botName**: Display name for the bot and how users and other members of the platform will recognize and refer to the bot

  **- botToken**: Unique access token or authentication key that allows the bot to connect to the platform’s API and perform actions

  **- startHour**: Hour of when the bot will start 

  **- endHour**: Hour of when bot will end

  **- promptList**: List of all the prompts the bot can choose from

  **- blackList**: List of users on the blacklist

**Methods**

  **-getCSV()**: Gets the CSV fields

  **-getDatavis()**: Checks for CSV fields by parsing lines from a file

  **-getOperatingHours()**: Gets the operation hours of the bot

  **-sendPrompt()**: Sends a prompt to a user

  **-getResponseDelay()**: Gets the time it takes when the bot has to resend a prompt to the user

  **-getResponse()**: gets response from the user

  **-setOperatingHours(int newStart, int newEnd)**: Sets the operating hours

  **-generateRandomPromptTime()**: Generates a random time for when prompts are assigned

  **-generateRandomPrompt()**: Generates a random prompt

  **-getPromptList()**: Gets the prompt list

  **-setPromptList()**: Sets the prompt list 

  **-getResponsePostComment()**: Gets and stores the response of a post comment

  **-setReponsePostComment()**: Sets a response of a post comment

  **-getBlackList()**: Shows the blacklist

  **-addUserToBlackList()**: Adds users to the blacklist

  **-removeUserFromBlackList()**: Removes a user from the blacklist

  **-selectRandomUserToPrompt()**: Selects a random user to assign a prompt to

  **-getApprovalStatus()**: Gets the approval status after sending a user response to the moderator

  **-setApprovalStatus()**: Sets the approval status after sending a user response to a moderator

  **-sendToReponseToMod()**:  Sends a user response to a prompt to a moderator

  **-postReponseToChannel()**: Posts the response of a moderator to a user to a channel

  **-deleteOriginalPromptFromChannel()**: Deletes a prompt from a certain channel

  **-setaUsersAlreadyPromptedList()**: Sets a list of users that were already prompted by the bot
  


## Algorithms

## Database Diagrams

```mermaid
erDiagram
Prompts {
  Int prompt_id PK
  String text
  Int guild_id
}

Responses {
  Int response_id PK
  String response_image
  Int numReactions
  Int numReplies
  Int timetoRespond
  Int prompt_id FK
}

Blacklist{
  Int blacklist_id PK
  Int user_id
  Int guild_id
}

Hours{
  Int hour_id PK
  Int start_time
  Int end_time
  Int guild_id
}

Prompts ||--|{ Responses : ""

```
## Sequence Diagrams

**Use Case #1**: Owner of the Discord Server Configures the WhatchaDoin bot
<details>
<summary>
Use Case 1 Discription
</summary>

1. Owner signs in to Discord.</p>
2. Owner opens the server "Preferences".</p>
3. Owner selects "Apps and Integrations" and installs the WhatchaDoin bot.</p>
4. Owner assigns roles and privileges to users in the community.</p>
5. Owner defines moderation and content guidelines.</p>
6. Owner defines type of prompts for WhatchaDoin bot to send properly suit the culture and vibe of their community.</p>
7. Owner configures the schedule for WhatchaDoin bot, defining the hours when the it will send prompts.</p>
8. Owner sets the duration for prompt responses to remain in the chat.</p>
9. Owner sets the amount of time users have to respond to prompt notification.</p>
10. Owner saves the configuration settings.</p>
      
</details>

```mermaid

sequenceDiagram
    actor Owner as Owner
    participant Discord as Discord Server
    participant WhatchaDoinBot as WhatchaDoin Bot
    participant Database as Configuration Database

    Owner ->> Discord: Open server "Preferences"
    activate Discord
    Owner ->> Discord: Select "Apps and Integrations"
    Discord ->> WhatchaDoinBot: Install WhatchaDoin bot
    deactivate Discord
    activate WhatchaDoinBot
    Owner ->> WhatchaDoinBot: Assign roles and privileges
    Owner ->> WhatchaDoinBot: Define moderation and content guidelines
    Owner ->> WhatchaDoinBot: Define prompts culture and vibe
    Owner ->> WhatchaDoinBot: Configure schedule for prompts
    Owner ->> WhatchaDoinBot: Set duration for prompt responses
    Owner ->> WhatchaDoinBot: Set response time limit
    WhatchaDoinBot ->> Database: Save configuration settings
    deactivate WhatchaDoinBot
    activate Database
    Database -->> WhatchaDoinBot: Confirmation
    WhatchaDoinBot -->> Owner: Configuration settings saved
    deactivate Database

```
<br/><br/>

**Use Case #2**: User Responds to a WhatchaDoin bot Prompt
<details>
<summary>
Use Case 2 Discription
</summary>
  
1. User in the Discord community receives a notification at a random time of day that they have received a prompt from the BeReal bot</p>
2. User opens Discord.</p>
3. User responds to the random prompt by taking a picture and uploading it.</p>
4. User replies to the BeReal bot with their response to the prompt, which is sent to the moderator.</p>
5. User waits for approval status from the BeReal bot.</p>
    
</details>

```mermaid

sequenceDiagram
    actor User as Discord User
    participant Discord as Discord
    participant WhatchaDoinBot as WhatchaDoin Bot
    participant Moderator as Moderator

    WhatchaDoinBot ->> WhatchaDoinBot: 
    WhatchaDoinBot ->> User: Receive WhatchaDoin bot prompt notification
    activate User
    User -->> WhatchaDoinBot: Respond to prompt by taking a picture
    activate WhatchaDoinBot
    User ->> WhatchaDoinBot: Reply to the WhatchaDoin bot with the image
    WhatchaDoinBot ->> Moderator: Send user's response to moderator
    deactivate WhatchaDoinBot
    Moderator -->> WhatchaDoinBot: Send approval status
    WhatchaDoinBot -->> User: Display approval status
    deactivate User

```
<br/><br/>

**Use Case #3**: User Does Not Respond to a WhatchaDoin bot Prompt
<details>
<summary>
Use Case 3 Discription
</summary>

1. The BeReal bot waits until timeout The BeReal bot sends a notification to the Discord user</p>
2. BeReal bot recognizes the user’s failure to respond, and sends a reminder notification to the users about the missed prompt.</p>
    
</details>

```mermaid

sequenceDiagram
    participant WhatchaDoinBot as WhatchaDoin Bot
    participant User as Discord User

    activate WhatchaDoinBot
    WhatchaDoinBot ->> WhatchaDoinBot: Wait until timeout
    WhatchaDoinBot ->> User: Send a notification
    activate User
    User ->> User: Receive notification
    User -->> WhatchaDoinBot: Acknowledge notification
    deactivate User
    WhatchaDoinBot ->> WhatchaDoinBot: Recognize user's failure to respond
    WhatchaDoinBot ->> User: Send a reminder notification

```
<br/><br/>

**Use Case #4**: User-Submission approved
<details>
<summary>
Use Case 4 Discription
</summary>

1. BeReal bot receives the approval decision</p>
2. BeReal bot posts the image with the caption and notifies the user</p>
3. BeReal bot logs emoji reactions, threaded replies, and comments from the community</p>
4. BeReal bot sends logs to the server</p>
    
</details>

```mermaid

sequenceDiagram
    participant WhatchaDoinBot as WhatchaDoin Bot
    participant Moderators as Moderators
    participant User as Discord User
    participant Server as Discord Server

    Moderators -->> WhatchaDoinBot: Approval decision
    WhatchaDoinBot ->> WhatchaDoinBot: Process approval decision
    WhatchaDoinBot ->> WhatchaDoinBot: Retrieve image and caption
    WhatchaDoinBot ->> WhatchaDoinBot: Notify user
    WhatchaDoinBot ->> User: Post image with caption
    User ->> Server: Post image with caption
    User ->> User: React with emoji, thread replies, and comment
    WhatchaDoinBot ->> WhatchaDoinBot: Log emoji reactions, threaded replies, and comments
    WhatchaDoinBot ->> Server: Send logs

```
<br/><br/>

**Use Case #5**: User’s submission is denied
<details>
<summary>
Use Case 5 Discription
</summary>
  
1. User receives a notification that the post was not approved and is asked to resubmit with feedback</p>
2. User resubmits the image</p>
3. User receives a notification that the post was approved and it was posted</p>
    
</details>

```mermaid

sequenceDiagram
    participant User as Discord User
    participant WhatchaDoinBot as WhatchaDoin Bot
    participant Moderator as Moderator

    User ->> WhatchaDoinBot: Receives a notification that the post was not approved
    WhatchaDoinBot -->> User: Notifies the user to resubmit the image with feedback
    User ->> User: Resubmits the image with necessary changes
    WhatchaDoinBot ->> Moderator: Notifies the moderator about the resubmission
    Moderator -->> WhatchaDoinBot: Reviews the resubmitted image
    Moderator -->> WhatchaDoinBot: Approves the resubmitted image
    WhatchaDoinBot -->> User: Notifies the user that the post was approved and posted

```
<br/><br/>

**Use Case #6**: User Reacts to a New Post Notification
<details>
<summary>
Use Case 6 Discription
</summary>

1. A user in the Discord community is notified by the BeReal bot that another user has posted a response to a prompt.</p>
2. User opens Discord to view the response in the Discord community channel</p>
3. User interacts with the post by leaving a comment or a reaction(likes, emojis, etc)</p>

</details>

```mermaid

sequenceDiagram
    participant User as Discord User
    participant WhatchaDoinBot as WhatchaDoin Bot
    participant Community as Discord Community

    activate User
    User ->> WhatchaDoinBot: Receives a new post notification
    User ->> Discord: Opens Discord to view the response
    WhatchaDoinBot -->> User: Displays the new post in the Discord channel
    User ->> WhatchaDoinBot: Interacts with the post (e.g., leaves a comment or reacts with emojis)
    WhatchaDoinBot ->> Community: Updates the post with user interactions
    Community -->> WhatchaDoinBot: Views reactions and comments on the post
    WhatchaDoinBot ->> WhatchaDoinBot: Collects data on reactions and comments
    deactivate User

```
<br/><br/>

**Use Case #7**: User ignores New Post Notification
<details>
<summary>
Use Case 7 Discription
</summary>
  
1. A user in the Discord community goes to the settings of the BeReal bot</p>
2. User chooses an option to turn off new post notifications.</p>
3. The user is no longer sent another post notification.</p>

</details>

```mermaid

sequenceDiagram
    participant User as Discord User
    participant DiscordInterface as Discord Interface
    participant WhatchaDoinBot as WhatchaDoin Bot
    participant NotificationSettings as Notification Settings

    User ->> DiscordInterface: Opens WhatchaDoin Bot settings
    DiscordInterface -->> User: Notification viewed
    User ->> DiscordInterface: Accesses Settings
    DiscordInterface ->> NotificationSettings: Turn Off Notification settings
    NotificationSettings -->> WhatchaDoinBot: Sends updated notification settings
    WhatchaDoinBot -->> DiscordInterface: Forwards the updated settings (OFF)
    DiscordInterface -->> User: Sent the new notification settings
    Note over DiscordInterface: User views notifications

```
<br/><br/>

**Use Case #8**: Moderator Accesses Reaction Data in Database
<details>
<summary>
Use Case 8 Discription
</summary>
Normal Flow:

1. Moderator logs into Discord</p>
2. Moderator runs a command to request reaction data in csv format</p>
3. Moderator exports reaction data for further analysis, if needed</p>

</details>

```mermaid

sequenceDiagram
    participant Moderator as Moderator
    participant Discord as Discord Server
    participant WhatchaDoinBot as WhatchaDoin Bot
    participant Database as Configuration Database

    Moderator ->> Discord: Log into Discord
    activate Discord
    Moderator ->> Discord: Run command to request reaction data in CSV format
    Discord ->> WhatchaDoinBot: Send data view command
    WhatchaDoinBot ->> Database: Retrieve reaction data
    activate WhatchaDoinBot
    Database -->> WhatchaDoinBot: Reaction data
    WhatchaDoinBot -->> Discord: Provide reaction data
    Discord -->> Moderator: Display reaction data
    deactivate WhatchaDoinBot
    Moderator ->> Moderator: Exports reaction data for further analysis (if needed)
    deactivate Discord

```
<details>
<summary>
Use Case 8 Alternate Discription
</summary>
  
Alternate Flow:

1. Moderator logs into Discord</p>
2. Moderator runs a command to see reaction data</p>
3. Moderator receives data visualizations from bot</p>

</details>

```mermaid

sequenceDiagram
    participant Moderator as Moderator
    participant Discord as Discord Server
    participant WhatchaDoinBot as WhatchaDoin Bot
    participant Database as Configuration Database

    Moderator ->> Discord: Log into Discord
    activate Discord
    Moderator ->> Discord: Run command to request reaction data in CSV format
    Discord ->> WhatchaDoinBot: Send data view command
    WhatchaDoinBot ->> Database: Retrieve reaction data
    activate WhatchaDoinBot
    Database -->> WhatchaDoinBot: Reaction data in CSV format
    WhatchaDoinBot -->> Discord: Provide reaction data in CSV format
    Discord -->> Moderator: Display reaction data CSV
    deactivate WhatchaDoinBot
    Moderator ->> Moderator: Exports reaction data for further analysis (if needed)
    deactivate Discord

```
<br/><br/>

![Sequence Diagram 9](https://cdn.discordapp.com/attachments/1158176482569494568/1158246744417640588/image.png?ex=651b8cd7&is=651a3b57&hm=82005351873047d440493d7523197f984992051a6aee5cebcfba722b27dddc51&)

![Sequence Diagram 10](https://cdn.discordapp.com/attachments/1158176482569494568/1158245639008817212/Screen_Shot_2023-10-01_at_11.34.34_PM.png?ex=651b8bcf&is=651a3a4f&hm=5b059721fd6e6a0fd52f4dc157ebf12eac0d255e54b4798ee34e8ac07f38d616&)

![Sequence Diagram 11](https://cdn.discordapp.com/attachments/1158176482569494568/1158245675163734056/Screen_Shot_2023-10-01_at_11.34.45_PM.png?ex=651b8bd8&is=651a3a58&hm=7a1811a5cce04fe5100a891d4a4a89bca843f9cebf120e10a66cb7b74b3e298a&)

![Sequence Diagram 11 Alt](https://cdn.discordapp.com/attachments/1158176482569494568/1158245708969811978/Screen_Shot_2023-10-01_at_11.34.53_PM.png?ex=651b8be0&is=651a3a60&hm=ea1ae6eebd6fdb5bce2dec8cd0e381bfd76e20541e8c73b85a343c59da5cd075&)
