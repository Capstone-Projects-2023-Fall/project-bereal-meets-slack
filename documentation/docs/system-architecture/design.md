---
sidebar_position: 1
---
# BeReal Bot Design Document

## Components

### Chat Application

The chat application acts as both the user portal for the bot and as the running environment for the bot. The chat application facilitates user interaction with the bot and allows for it to act like a psuedo user that can post and interact with messages. There will be a level of UI/UX design for the bot in Discord using both its API & libraries for command and interaction formatting as well as block kit for formatting of modals, popups, and responses. The application will also act as the display for all data visualization that moderators ask for.

### BeReal Bot 

The bot itself is a chatbot that is hosted on Google Cloud via cloud run, as mentioned previous it will act as a pseudo user posting messages and accepting/reacting to user responses with triggers. It interfaces with the Discord API to send messages, and interfaces with the database to both store and pull user reaction data. When dealing with moderation the bot will opt to DM moderators and generate either popups, modals, or interfaceable actions for approvals, data requests, or moderation features. When logging data the bot will leverage the server to send data to firebase for storage.

### Google Cloud Webserver

The Google Cloud webserver provides a hosting point for the bot using the cloud run service. The server allows for two things, bot uptime and bot access to the database, through the server the bot can make calls to the firebase database both for logging and for acces of data. The webserver will also provide containers that host the firebase database for reaction data. The webserver will also be responsible for handling the formatting of data into visualizations when requested by the bot via a user.

### Google Firebase Database

The Firebase database is contained in the cloud webserver and acts as a means of storing and logging all reaction data. The database will contain data pertaining to prompts, approved submitted images, time to post, emoji reactions, threaded replies, and number of comments. All of this data will be exportable as a CSV or in a visualization done by the host webserver.

## Class Diagram
```mermaid
classDiagram
webServer --> BeRealBot
webServer --> database
class webServer{
  + generateCSV(int startTime, int endTime)
  + generateDataVis(int startTime, int endTime)
}
class BeRealBot{
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
## BeReal Bot
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
}

Responses {
  Int response_id PK
  Int numReaction
  Int timetoRespond
  Int prompt_id FK
}

Prompts ||--|{ Responses : ""

```
## Sequence Diagrams

**Use Case #1**: Owner of the Discord Server Configures the BeReal bot
<details>
<summary>
Use Case 1 Discription
</summary>
  
  1. Owner signs in to Discord.
  2. Owner opens the server "Preferences". 
  3. Owner selects "Apps and Integrations" and installs the BeReal bot.
  4. Owner assigns roles and privileges to users in the community.
  5. Owner defines moderation and content guidelines.
  6. Owner defines type of prompts for BeReal bot to send properly suit the culture and vibe of their community.  
  7. Owner configures the schedule for BeReal bot, defining the hours when the it will send prompts.
  8. Owner sets the duration for prompt responses to remain in the chat.
  9. Owner sets the amount of time users have to respond to prompt notification.
  10. Owner saves the configuration settings.
      
</details>

```mermaid

sequenceDiagram
    participant Owner as Owner
    participant Discord as Discord Server
    participant BeRealBot as BeReal Bot
    participant Database as Configuration Database

    Owner ->> Discord: Open server "Preferences"
    activate Discord
    Owner ->> Discord: Select "Apps and Integrations"
    Discord ->> BeRealBot: Install BeReal bot
    deactivate Discord
    activate BeRealBot
    Owner ->> BeRealBot: Assign roles and privileges
    Owner ->> BeRealBot: Define moderation and content guidelines
    Owner ->> BeRealBot: Define prompts culture and vibe
    Owner ->> BeRealBot: Configure schedule for prompts
    Owner ->> BeRealBot: Set duration for prompt responses
    Owner ->> BeRealBot: Set response time limit
    BeRealBot ->> Database: Save configuration settings
    deactivate BeRealBot
    Database -->> BeRealBot: Confirmation
    activate Database
    BeRealBot -->> Owner: Configuration settings saved
    deactivate Database

```
<br/><br/>

**Use Case #2**: User Responds to a BeReal bot Prompt
<details>
<summary>
Use Case 2 Discription
</summary>
  
  1. User in the Discord community receives a notification at a random time of day that they have received a prompt from the BeReal bot
  2. User opens Discord.
  3. User responds to the random prompt by taking a picture and uploading it.
  4. User replies to the BeReal bot with their response to the prompt, which is sent to the moderator.
  5. User waits for approval status from the BeReal bot.
      
</details>

```mermaid

sequenceDiagram
    participant User as Discord User
    participant BeRealBot as BeReal Bot
    participant Moderator as Moderator
    participant Database as Response Database

    User ->> User: Receive BeReal bot prompt notification
    User ->> User: Respond to prompt by taking a picture
    User ->> BeRealBot: Reply to the BeReal bot with the image
    BeRealBot ->> Moderator: Send user's response to moderator
    Moderator ->> Database: Review user's response
    Database -->> Moderator: Response approval status
    Moderator -->> BeRealBot: Send approval status
    BeRealBot -->> User: Display approval status

```
<br/><br/>

**Use Case #3**: User Does Not Respond to a BeReal bot Prompt
<details>
<summary>
Use Case 3 Discription
</summary>
  
  1. The BeReal bot waits until timeout The BeReal bot sends a notification to the Discord user
  2. BeReal bot recognizes the user’s failure to respond, and sends a reminder notification to the users about the missed prompt.
      
</details>

```mermaid

sequenceDiagram
    participant BeRealBot as BeReal Bot
    participant User as Discord User

    BeRealBot ->> BeRealBot: Wait until timeout
    BeRealBot ->> User: Send a notification
    User ->> User: Receive notification
    User -->> BeRealBot: Acknowledge notification
    BeRealBot ->> BeRealBot: Recognize user's failure to respond
    BeRealBot ->> User: Send a reminder notification

```
<br/><br/>

**Use Case #4**: User-Submission approved
<details>
<summary>
Use Case 4 Discription
</summary>
  
  1. BeReal bot receives the approval decision
  2. BeReal bot posts the image with the caption and notifies the user
  3. BeReal bot logs emoji reactions, threaded replies, and comments from the community
  4. BeReal bot sends logs to the server
      
</details>

```mermaid

sequenceDiagram
    participant BeRealBot as BeReal Bot
    participant Moderators as Moderators
    participant User as Discord User
    participant Server as Discord Server

    Moderators -->> BeRealBot: Approval decision
    BeRealBot ->> BeRealBot: Process approval decision
    BeRealBot ->> BeRealBot: Retrieve image and caption
    BeRealBot ->> BeRealBot: Notify user
    BeRealBot ->> User: Post image with caption
    User ->> Server: Post image with caption
    User ->> User: React with emoji, thread replies, and comment
    BeRealBot ->> BeRealBot: Log emoji reactions, threaded replies, and comments
    BeRealBot ->> Server: Send logs


```
<br/><br/>

**Use Case #5**: User’s submission is denied
<details>
<summary>
Use Case 5 Discription
</summary>
  
  1. User receives a notification that the post was not approved and is asked to resubmit with feedback
  2. User resubmits the image
  3. User receives a notification that the post was approved and it was posted
      
</details>

```mermaid

sequenceDiagram
    participant User as Discord User
    participant BeRealBot as BeReal Bot
    participant Moderator as Moderator

    User ->> BeRealBot: Receives a notification that the post was not approved
    BeRealBot -->> User: Notifies the user to resubmit the image with feedback
    User ->> User: Resubmits the image with necessary changes
    BeRealBot ->> Moderator: Notifies the moderator about the resubmission
    Moderator -->> BeRealBot: Reviews the resubmitted image
    Moderator -->> BeRealBot: Approves the resubmitted image
    BeRealBot -->> User: Notifies the user that the post was approved and posted


```
<br/><br/>

**Use Case #6**: User Reacts to a New Post Notification
<details>
<summary>
Use Case 6 Discription
</summary>
  
  1. A user in the Discord community is notified by the BeReal bot that another user has posted a response to a prompt.
  2. User opens Discord to view the response in the Discord community channel
  3. User interacts with the post by leaving a comment or a reaction(likes, emojis, etc)

</details>

```mermaid

sequenceDiagram
    participant User as Discord User
    participant BeRealBot as BeReal Bot
    participant Community as Discord Community

    User ->> BeRealBot: Receives a new post notification
    User ->> Discord: Opens Discord to view the post
    BeRealBot -->> User: Displays the new post in the Discord channel
    User ->> BeRealBot: Interacts with the post (e.g., leaves a comment or reacts with emojis)
    BeRealBot ->> Community: Updates the post with user interactions
    Community -->> BeRealBot: Views reactions and comments on the post
    BeRealBot ->> BeRealBot: Collects data on reactions and comments



```
<br/><br/>

![Sequence Diagram 6](https://cdn.discordapp.com/attachments/1158176482569494568/1158237782037237820/Screen_Shot_2023-10-01_at_11.03.21_PM.png?ex=651b847e&is=651a32fe&hm=fcf069c658390ca156bbed7c35e4d62131da2d5c69a67afddb15c99c53fef0b3&)

![Sequence Diagram 7](https://cdn.discordapp.com/attachments/1158176482569494568/1158237840665227344/Screen_Shot_2023-10-01_at_11.03.36_PM.png?ex=651b848c&is=651a330c&hm=75954aae53a176a0f42a28b76db1fb4b644b5962383e82667911f434ef2c8822&)

![Sequence Diagram 8](https://cdn.discordapp.com/attachments/1158176482569494568/1158237977969958982/Screen_Shot_2023-10-01_at_11.04.09_PM.png?ex=651b84ac&is=651a332c&hm=2c6a27091a0c972aeb5d295fafa13e9a426058b1e21895359df799a3e3c86fe9&)

![Sequence Diagram 8 Alt](https://cdn.discordapp.com/attachments/1158176482569494568/1158238081594433686/Screen_Shot_2023-10-01_at_11.04.35_PM.png?ex=651b84c5&is=651a3345&hm=3a33061f226553ef3a82bb64ef9ebd11026cda3ea08b63fea1d7ecd5cdd712c1&)

![Sequence Diagram 9](https://cdn.discordapp.com/attachments/1158176482569494568/1158246744417640588/image.png?ex=651b8cd7&is=651a3b57&hm=82005351873047d440493d7523197f984992051a6aee5cebcfba722b27dddc51&)

![Sequence Diagram 10](https://cdn.discordapp.com/attachments/1158176482569494568/1158245639008817212/Screen_Shot_2023-10-01_at_11.34.34_PM.png?ex=651b8bcf&is=651a3a4f&hm=5b059721fd6e6a0fd52f4dc157ebf12eac0d255e54b4798ee34e8ac07f38d616&)

![Sequence Diagram 11](https://cdn.discordapp.com/attachments/1158176482569494568/1158245675163734056/Screen_Shot_2023-10-01_at_11.34.45_PM.png?ex=651b8bd8&is=651a3a58&hm=7a1811a5cce04fe5100a891d4a4a89bca843f9cebf120e10a66cb7b74b3e298a&)

![Sequence Diagram 11 Alt](https://cdn.discordapp.com/attachments/1158176482569494568/1158245708969811978/Screen_Shot_2023-10-01_at_11.34.53_PM.png?ex=651b8be0&is=651a3a60&hm=ea1ae6eebd6fdb5bce2dec8cd0e381bfd76e20541e8c73b85a343c59da5cd075&)


## Document Requirements

**Purpose**

The Design Document - Part I Architecture describes the software architecture and how the requirements are mapped into the design. This document will be a combination of diagrams and text that describes what the diagrams are showing.

**Requirements**

In addition to the general requirements the Design Document - Part I Architecture will contain:

A description the different components and their interfaces. For example: client, server, database.

For each component provide class diagrams showing the classes to be developed (or used) and their relationship.

Sequence diagrams showing the data flow for _all_ use cases. One sequence diagram corresponds to one use case and different use cases should have different corresponding sequence diagrams.

Describe algorithms employed in your project, e.g. neural network paradigm, training and training data set, etc.

If there is a database:

Entity-relation diagram.

Table design.

A check list for architecture design is attached here [architecture\_design\_checklist.pdf](https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1 "architecture_design_checklist.pdf")  and should be used as a guidance.
