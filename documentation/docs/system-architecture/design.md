---
sidebar_position: 1
---
# BMS Bot Design Document

## Components

### Chat Application

The chat application acts as both the user portal for the bot and as the running environment for the bot. The chat application facilitates user interaction with the bot and allows for it to act like a psuedo user that can post and interact with messages. There will be a level of UI/UX design for the bot in slack using both its API & libraries for command and interaction formatting as well as block kit for formatting of modals, popups, and responses. The application will also act as the display for all data visualization that moderators ask for.

### BMS Bot 

The bot itself is a chatbot that is hosted on Google Cloud via cloud run, as mentioned previous it will act as a pseudo user posting messages and accepting/reacting to user responses with triggers. It interfaces with the slack API to send messages, and interfaces with the database to both store and pull user reaction data. When dealing with moderation the bot will opt to DM moderators and generate either popups, modals, or interfaceable actions for approvals, data requests, or moderation features. When logging data the bot will leverage the server to send data to firebase for storage.

### Google Cloud Webserver

The Google Cloud webserver provides a hosting point for the bot using the cloud run service. The server allows for two things, bot uptime and bot access to the database, through the server the bot can make calls to the firebase database both for logging and for acces of data. The webserver will also provide containers that host the firebase database for reaction data. The webserver will also be responsible for handling the formatting of data into visualizations when requested by the bot via a user.

### Google Firebase Database

The Firebase database is contained in the cloud webserver and acts as a means of storing and logging all reaction data. The database will contain data pertaining to prompts, approved submitted images, time to post, emoji reactions, threaded replies, and number of comments. All of this data will be exportable as a CSV or in a visualization done by the host webserver.

## Class Diagram

## Algorithms

## Database Diagrams

## Sequence Diagrams

<details>
  <summary>
    Usecase 1:
  </summary>
  1. Owner signs in to Slack  
  2. Owner opens the workspace "Preferences".  
  3. Owner selects "Apps and Integrations" and installs the BMS bot.  
  4. Owner assigns roles and privileges to users in the community.  
  5. Owner defines moderation and content guidelines.  
  6. Owner defines type of prompts for BMS bot to send properly suit the culture and vibe of their community.  
  7. Owner configures the schedule for BMS bot, defining the hours when the it will send prompts.  
  8. Owner sets the duration for prompt responses to remain in the chat.  
  9. Owner sets the amount of time users have to respond to prompt notification.  
  10. Owner saves the configuration settings.  
</details>

![Sequence Diagram 1](https://cdn.discordapp.com/attachments/1158176482569494568/1158237338221162556/Screen_Shot_2023-10-01_at_11.01.34_PM.png?ex=651b8414&is=651a3294&hm=64e7d144c9382697335076073cdd675565e9635a527c612978334f64166c7c1a&)

![Sequence Diagram 2](https://cdn.discordapp.com/attachments/1158176482569494568/1158237386623430796/Screen_Shot_2023-10-01_at_11.01.48_PM.png?ex=651b841f&is=651a329f&hm=a635eee997369eba307166f4ce3e27570a2a2153e721ea3f188f0677782cde91&)

![Sequence Diagram 3](https://cdn.discordapp.com/attachments/1158176482569494568/1158237435608707092/Screen_Shot_2023-10-01_at_11.02.00_PM.png?ex=651b842b&is=651a32ab&hm=2e797a3213ae347d91b4da7140a2f0793f467013deaf1b55e9b37dd0ff4645ca&)

![Sequence Diagram 4](https://cdn.discordapp.com/attachments/1158176482569494568/1158237490910597120/Screen_Shot_2023-10-01_at_11.02.13_PM.png?ex=651b8438&is=651a32b8&hm=94d1998b4b779cec3beddca54a8a0a63baa724b85b87767120bb5e82ad49a1df&)

![Sequence Diagram 5](https://cdn.discordapp.com/attachments/1158176482569494568/1158237540818620516/Screen_Shot_2023-10-01_at_11.02.25_PM.png?ex=651b8444&is=651a32c4&hm=d488e68106cb8d0857f6f22401cdcc93fec4ce58b5777e21fa4dc727e590c63b&)

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
