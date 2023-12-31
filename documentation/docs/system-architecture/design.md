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
class WhatchaDoinBot{
  + String botName
  + token botToken
  - int startHour
  - int endHour
  - String [] promptList
  - String [] blackList
  - activeEvents()
  - activeHourUtils()
  - blacklistutils()
  - commandregistrar()
  - dataGraph()
  - dbconn()
  - getRandom()
  - handleUserSubmissions()
  - helpUtils()
  - notifyMods()
  - postUtils()
  - promptUtils()
  - saveDB()
  - setDefualtChannelUtils()
}

class Timer {
  - startTime: number
  - endTime: number
  + constructor()
  + start(): void
  + stop(): number
  + isRunning(): boolean
}

class PromptTimeout {
  - client
  - activePrompts: Map
  - repromptTimeouts: Map
  + setupPrompt(channelId, message, user, originalPrompt)
  + setPromptTimeout(promptId, duration, message, user, originalPrompt, channelId)
  + handleReprompt(user, originalPrompt, channelId, originalMessage)
}

class Prompt {
  - prompt: string
  - userId: string
  - channel: string
  + isUserIdMatch(userId: string): boolean
  + setPrompt(msg: string): void
  + setUserId(userId: string): void
  + setChannel(channel: string): void
  + getPrompt(): string
  + getUserId(): string
  + getChannel(): string
}

WhatchaDoinBot "1" --> "*" Timer
WhatchaDoinBot "1" --> "*" PromptTimeout
WhatchaDoinBot "1" --> "*" Prompt
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
    PROMPTS ||--|{ RESPONSES : "includes"

    PROMPTS {
        int prompt_id PK "Unique identifier for the prompt"
        varchar prompt_text "Text of the prompt"
        bigint guild_id FK "References the guild"
        bigint channel_id FK "References the channel"
    }

    RESPONSES {
        int response_id PK "Unique identifier for the response"
        varchar response_image "URL of the response image"
        int num_reactions "Number of reactions to the response"
        int time_to_respond "Time taken to respond"
        bigint message_id FK "References the message"
        bigint prompt_id FK "References the prompt"
        bigint user_id FK "References the user"
        bigint guild_id FK "References the guild"
    }

    OPERATING_HOURS {
        bigint guild_id PK "Unique identifier for the guild"
        time start_time "Start time for bot activity"
        time end_time "End time for bot activity"
    }

    BLACKLIST {
        int blacklist_id PK "Unique identifier for the blacklist entry"
        bigint user_id "References the user"
        bigint guild_id "References the guild"
    }

    SETTINGS {
        bigint submission_channel_id PK "Unique identifier for the submission channel"
        bigint guild_id PK "Unique identifier for the guild"
    }
```
## Sequence Diagrams

**Use Case #1**: Owner of the Discord Server Configures the WhatchaDoin bot
<details>
<summary>
Use Case 1 Discription
</summary>
  
  <p>1. Owner signs in to Discord.</p>
  <p>2. Owner opens the server "Preferences".</p>
  <p>3. Owner selects "Apps and Integrations" and installs the WhatchaDoin bot.</p>
  <p>4. Owner assigns roles and privileges to users in the community.</p>
  <p>5. Owner defines moderation and content guidelines.</p>
  <p>6. Owner defines type of prompts for WhatchaDoin bot to send properly suit the culture and vibe of their community.</p>
  <p>7. Owner configures the schedule for WhatchaDoin bot, defining the hours when the it will send prompts.</p>
  <p>8. Owner sets the duration for prompt responses to remain in the chat.</p>
  <p>9. Owner sets the amount of time users have to respond to prompt notification.</p>
  <p>10. Owner saves the configuration settings.</p>
      
</details>

```mermaid

sequenceDiagram
    actor Owner as Owner
    participant Discord as Discord Server
    participant WhatchaDoinBot as WhatchaDoin Bot
    participant Database as Configuration Database

    Owner ->> Discord: Open server "Preferences"
    activate Owner
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
    deactivate Database
    WhatchaDoinBot -->> Owner: Configuration settings saved
    deactivate Owner

```
<br/><br/>

**Use Case #2**: User Responds to a WhatchaDoin bot Prompt
<details>
<summary>
Use Case 2 Discription
</summary>
  
<p>1. User in the Discord community receives a notification at a random time of day that they have received a prompt from the WhatchaDoinBot bot.</p>
<p>2. User opens Discord.</p>
<p>3. User responds to the random prompt by taking a picture and uploading it.</p>
<p>4. User replies to the WhatchaDoinBot bot with their response to the prompt, which is sent to the moderator.</p>
<p>5. User waits for approval status from the WhatchaDoinBot bot.</p>
    
</details>

```mermaid

sequenceDiagram
    actor User as Discord User
    participant Discord as Discord
    participant WhatchaDoinBot as WhatchaDoin Bot
    participant Moderator as Moderator

    WhatchaDoinBot ->> WhatchaDoinBot: 
    WhatchaDoinBot ->> User: Receive WhatchaDoin bot prompt notification
    activate WhatchaDoinBot
    activate User
    User -->> WhatchaDoinBot: Respond to prompt by taking a picture
    deactivate WhatchaDoinBot
    User -->> WhatchaDoinBot: Reply to the WhatchaDoin bot with the image
    activate WhatchaDoinBot
    WhatchaDoinBot ->> Moderator: Send user's response to moderator
    activate Moderator
    Moderator -->> WhatchaDoinBot: Send approval status
    deactivate Moderator
    WhatchaDoinBot ->> User: Display approval status
    deactivate WhatchaDoinBot
    deactivate User

```
<br/><br/>

**Use Case #3**: User Does Not Respond to a WhatchaDoin bot Prompt
<details>
<summary>
Use Case 3 Discription
</summary>
  
<p>1. The WhatchaDoinBot bot waits until timeout.</p>
<p>2. The WhatchaDoinBot bot sends a notification to the Discord user.</p>
<p>3. WhatchaDoinBot bot recognizes the user’s failure to respond, and sends a reminder notification to the users about the missed prompt.</p>
      
</details>

```mermaid

sequenceDiagram
    actor User as Discord User
    participant WhatchaDoinBot as WhatchaDoin Bot

    activate WhatchaDoinBot
    WhatchaDoinBot ->> WhatchaDoinBot: Wait until timeout
    WhatchaDoinBot ->> User: Send a notification
    activate User
    activate WhatchaDoinBot
    User ->> User: Receive notification
    User -->> WhatchaDoinBot: Acknowledge notification
    WhatchaDoinBot ->> WhatchaDoinBot: Recognize user's failure to respond
    WhatchaDoinBot ->> User: Send a reminder notification
    deactivate WhatchaDoinBot
    deactivate User


```
<br/><br/>

**Use Case #4**: User-Submission approved
<details>
<summary>
Use Case 4 Discription
</summary>

1. WhatchaDoinBot bot receives the approval decision.
2. WhatchaDoinBot bot posts the image with the caption and notifies the user.
3. WhatchaDoinBot bot logs emoji reactions, threaded replies, and comments from the community.
4. WhatchaDoinBot bot sends logs to the server.
    
</details>

```mermaid

sequenceDiagram
    actor User as Discord User
    participant Moderators as Moderators
    participant WhatchaDoinBot as WhatchaDoin Bot
    participant Server as Discord Server

    Moderators -->> WhatchaDoinBot: Approval decision
    activate User
    activate WhatchaDoinBot
    WhatchaDoinBot ->> WhatchaDoinBot: Process approval decision
    WhatchaDoinBot ->> WhatchaDoinBot: Retrieve image and caption
    WhatchaDoinBot ->> User: Post approved
    activate User
    WhatchaDoinBot ->> Server: Post image with caption
    deactivate WhatchaDoinBot
    User -->> Server: React with emoji, thread replies, and comment
    deactivate User
    WhatchaDoinBot ->> WhatchaDoinBot: Log emoji reactions, threaded replies, and comments
    WhatchaDoinBot ->> Server: Send logs

```
<br/><br/>

**Use Case #5**: User’s submission is denied
<details>
<summary>
Use Case 5 Discription
</summary>
  
<p>1. User receives a notification that the post was not approved and is asked to resubmit with feedback.</p>
<p>2. User resubmits the image.</p>
<p>3. User receives a notification that the post was approved and it was posted.</p>
    
</details>

```mermaid

sequenceDiagram
    actor User as Discord User
    participant WhatchaDoinBot as WhatchaDoin Bot
    participant Moderator as Moderator

    WhatchaDoinBot ->> User: Receives a notification that the post was not approved
    activate User
    activate WhatchaDoinBot
    WhatchaDoinBot ->> User: Notifies the user to resubmit the image with feedback
    User -->> WhatchaDoinBot: Resubmits the image with necessary changes
    deactivate WhatchaDoinBot
    WhatchaDoinBot ->> Moderator: Notifies the moderator about the resubmission
    activate WhatchaDoinBot
    activate Moderator
    Moderator -->> WhatchaDoinBot: Reviews the resubmitted image
    Moderator -->> WhatchaDoinBot: Approves the resubmitted image
    deactivate Moderator
    WhatchaDoinBot ->> User: Notifies the user that the post was approved and posted
    deactivate WhatchaDoinBot
    deactivate User

```
<br/><br/>

**Use Case #6**: User Reacts to a New Post Notification
<details>
<summary>
Use Case 6 Discription
</summary>

<p>1. A user in the Discord community is notified by the WhatchaDoinBot bot that another user has posted a response to a prompt.</p>
<p>2. User opens Discord to view the response in the Discord community channel.</p>
<p>3. User interacts with the post by leaving a comment or a reaction(likes, emojis, etc).</p>

</details>

```mermaid

sequenceDiagram
    actor User as Discord User
    participant WhatchaDoinBot as WhatchaDoin Bot
    participant Community as Discord Community

    WhatchaDoinBot ->> User: Receives a new post notification
    activate User
    activate WhatchaDoinBot
    WhatchaDoinBot ->> User: Displays the new post in the Discord channel
    deactivate WhatchaDoinBot
    User ->> Discord: Opens Discord to view the response
    User -->> Community: Interacts with the post (e.g., leaves a comment or reacts with emojis)
    activate Community
    Community ->> WhatchaDoinBot: Views reactions and comments on the post
    deactivate Community
    WhatchaDoinBot ->> WhatchaDoinBot: Collects data on reactions and comments
    deactivate User

```
<br/><br/>

**Use Case #7**: User ignores New Post Notification
<details>
<summary>
Use Case 7 Discription
</summary>
  
<p>1. A user in the Discord community goes to the settings of the WhatchaDoinBot bot.</p>
<p>2. User chooses an option to turn off new post notifications.</p>
<p>3. The user is no longer sent another post notification.</p>

</details>

```mermaid

sequenceDiagram
    actor User as Discord User
    participant DiscordInterface as Discord Interface
    participant WhatchaDoinBot as WhatchaDoin Bot
    participant NotificationSettings as Notification Settings

    User ->> DiscordInterface: Opens WhatchaDoin Bot settings
    activate User
    activate DiscordInterface
    DiscordInterface -->> User: Notification viewed
    deactivate DiscordInterface
    User ->> DiscordInterface: Accesses Settings
    activate DiscordInterface
    DiscordInterface ->> NotificationSettings: Turn Off Notification settings
    activate NotificationSettings
    NotificationSettings -->> WhatchaDoinBot: Sends updated notification settings
    activate WhatchaDoinBot
    deactivate NotificationSettings
    WhatchaDoinBot -->> DiscordInterface: Forwards the updated settings (OFF)
    deactivate WhatchaDoinBot
    DiscordInterface -->> User: Sent the new notification settings
    deactivate DiscordInterface
    deactivate User
    Note over DiscordInterface: User views notifications

```
<br/><br/>

**Use Case #8**: Moderator Accesses Reaction Data in Database
<details>
<summary>
Use Case 8 Discription
</summary>
Normal Flow:

1. Moderator logs into Discord.
2. Moderator runs a command to request reaction data in csv format.
3. Moderator exports reaction data for further analysis, if needed.

</details>

```mermaid

sequenceDiagram
    actor Moderator as Moderator
    participant Discord as Discord Server
    participant WhatchaDoinBot as WhatchaDoin Bot
    participant Database as Configuration Database

    Moderator ->> Discord: Log into Discord
    activate Moderator
    activate Discord
    Moderator ->> Discord: Run command to request reaction data in CSV format
    Discord ->> WhatchaDoinBot: Send data view command
    activate WhatchaDoinBot
    WhatchaDoinBot ->> Database: Retrieve reaction data
    activate Database
    Database -->> WhatchaDoinBot: Reaction data
    deactivate Database
    WhatchaDoinBot -->> Discord: Provide reaction data
    deactivate WhatchaDoinBot
    Discord -->> Moderator: Display reaction data
    deactivate Discord
    Moderator ->> Moderator: Exports reaction data for further analysis (if needed)
    deactivate Moderator

```
<details>
<summary>
Use Case 8 Alternate Discription
</summary>
  
Alternate Flow:

1. Moderator logs into Discord.
2. Moderator runs a command to see reaction data.
3. Moderator receives data visualizations from bot.

</details>

```mermaid

sequenceDiagram
    actor Moderator as Moderator
    participant Discord as Discord Server
    participant WhatchaDoinBot as WhatchaDoin Bot
    participant Database as Configuration Database

    Moderator ->> Discord: Log into Discord
    activate Moderator
    activate Discord
    Moderator ->> Discord: Run command to request reaction data in Graph format
    Discord ->> WhatchaDoinBot: Send data view command
    activate WhatchaDoinBot
    WhatchaDoinBot ->> Database: Retrieve reaction data
    activate Database
    Database -->> WhatchaDoinBot: Reaction data in CSV format
    deactivate Database
    WhatchaDoinBot -->> Discord: Provide reaction data in CSV format
    deactivate WhatchaDoinBot
    Discord -->> Moderator: Translate reaction data into graph form
    deactivate Discord
    Moderator ->> Moderator: Exports more reaction data for further analysis (if needed)
    deactivate Moderator

```
<br/><br/>

**Use Case #9**: Moderator makes approval status decision
<details>
<summary>
Use Case 9 Discription
</summary>
  
  <p>1. Moderator receives notification about a user submission.</p>
  <p>2. Moderator opens Discord.</p>
  <p>3. Moderator reviews submission using predefined criteria from community guidelines.</p>
  <p>4. Based on guidelines, moderators approves or rejects submissions.</p>
  <p>5. Moderator marks submissions as “Approved” or “Denied” to bot.</p>

</details>

```mermaid

sequenceDiagram
    actor Moderator as Moderator
    participant Discord as Discord Server
    participant WhatchaDoinBot as WhatchaDoin Bot

    WhatchaDoinBot -->> Discord: Sends user submission notification
    Discord -->> Moderator: Sends user submission notification
    Moderator ->> Discord: Log into Discord
    activate Moderator
    activate Discord
    Discord -->> Moderator: Shows users submission
    deactivate Discord
    Moderator ->> Discord: Fetches community guidelines to based submission review
    activate Discord
    Discord -->> Moderator: Provides predefined criteria
    deactivate Discord
    Moderator ->> Discord: Marks submission with appproed decision
    activate Discord
    Discord ->> WhatchaDoinBot: Sends approeved decision to post
    activate WhatchaDoinBot
    WhatchaDoinBot -->> Discord: Posting approved post to server
    deactivate WhatchaDoinBot
    Discord -->> Moderator: Notifying Moderator about posting
    deactivate Discord
    deactivate Moderator

```
<br/><br/>

**Use Case #10**: WhatchaDoin Bot bans user from prompting after mupltiple denails
<details>
<summary>
Use Case 10 Discription
</summary>
  
<p>1. WhatchaDoinBot counts DENIALS (strikes) recieved by users within the Discord community.</p>
<p>2. WhatchaDoinBot bot sends a warning notification to the user about strikes.</p>
<p>3. WhatchaDoinBot bot notifies moderator about the DENIALS and how close they are from the blacklist.</p>
<p>4. If the user continues to recieve DENIALS, WhatchaDoinBot adds the user to the blacklist.</p>
<p>5. WhatchaDoinBot bot logs the action to blacklist log.</p>

</details>

```mermaid

sequenceDiagram
    actor Moderator as Moderator
    participant WhatchaDoinBot as WhatchaDoin Bot
    participant User as User
    participant Discord as Discord Server
    participant Database as Database

    Moderator -->> WhatchaDoinBot: Sends commands to report blacklist
    activate Moderator
    activate WhatchaDoinBot
    WhatchaDoinBot ->> Database: Fetches user denail count
    deactivate WhatchaDoinBot
    activate Database
    Database ->> Discord: Fetches user denails count
    deactivate Database
    activate Discord
    Discord ->> WhatchaDoinBot: Sends user denail count for specific server
    activate WhatchaDoinBot
    deactivate Discord
    WhatchaDoinBot ->> User: Sends user warning notification about strikes
    WhatchaDoinBot ->> Moderator: Sends warning notification about user strikes
    deactivate WhatchaDoinBot
    Moderator -->> User: Denies post another time
    deactivate Moderator
    activate WhatchaDoinBot
    WhatchaDoinBot ->> WhatchaDoinBot: Logs another denial for specific user
    WhatchaDoinBot -->> Database: Adds user to the blacklist
    WhatchaDoinBot ->> User: Notify about blacklist addition
    deactivate WhatchaDoinBot

```
<br/><br/>

**Use Case #11**:  Moderator manages blacklist
<details>
<summary>
Use Case 11 Discription
</summary>
Normal Flow:

<p>1. Moderator chooses to add user to blacklist.</p>
<p>2. Moderator runs a command to view the blacklist and sees added user.</p>

</details>

```mermaid

sequenceDiagram
    actor Moderator as Moderator
    participant Discord as Discord Server
    participant WhatchaDoinBot as WhatchaDoin Bot
    participant Database as Database

    Moderator ->> Database: Add specific user to Blacklist
    activate Moderator
    Moderator -->> Discord: Run command to view Blacklist
    activate Discord
    Discord ->> WhatchaDoinBot: Fetch specific server Blacklist
    activate WhatchaDoinBot
    WhatchaDoinBot ->> Database: Query Blacklist
    activate Database
    Database -->> WhatchaDoinBot: Send server specific Blacklist
    deactivate Database
    WhatchaDoinBot -->> Discord: Send Blacklist
    deactivate WhatchaDoinBot
    Discord -->> Moderator: Display Blacklist
    deactivate Discord
    deactivate Moderator


```
<details>
<summary>
Use Case 11 Alternate Discription
</summary>
  
Alternate Flow:

<p>1. Moderator chooses not to add user to blacklist.</p>
<p>2. Moderator views the blacklist and sees another user they want to remove.</p>
<p>3. Moderator runs a command to remove the user from the blacklist.</p>
<p>4. Moderator views the blacklist and no longer sees removed user.</p>

</details>

```mermaid

sequenceDiagram
    actor Moderator as Moderator
    participant Discord as Discord Server
    participant WhatchaDoinBot as WhatchaDoin Bot
    participant Database as Database

    Moderator ->> Database: Does not add specific user to Blacklist
    activate Moderator
    Moderator -->> Discord: Run command to view Blacklist
    activate Discord
    Discord ->> WhatchaDoinBot: Fetch specific server Blacklist
    activate WhatchaDoinBot
    WhatchaDoinBot ->> Database: Query Blacklist
    activate Database
    Database -->> WhatchaDoinBot: Send server specific Blacklist
    deactivate Database
    WhatchaDoinBot -->> Discord: Send Blacklist
    deactivate WhatchaDoinBot
    Discord -->> Moderator: Display Blacklist
    deactivate Discord
    deactivate Moderator

    Moderator -->> Discord: Run command to remove a user from Blacklist
    activate Moderator
    activate Discord
    Discord ->> WhatchaDoinBot: Send command to remove specific user
    activate WhatchaDoinBot
    WhatchaDoinBot ->> Database: Remove user from Blacklist
    activate Database
    Database -->> WhatchaDoinBot: confirm removal of user
    deactivate Database
    WhatchaDoinBot -->> Discord: Send confirmation of removal of user
    deactivate WhatchaDoinBot
    Discord -->> Moderator: Display new Blacklist
    deactivate Discord
    deactivate Moderator


```
<br/><br/>
