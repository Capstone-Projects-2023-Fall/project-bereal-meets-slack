---
sidebar_position: 1
---

# System Overview
## Project Abstract
This document proposes a community building social media tool that is integrated into a slack workspace. A slackbot will prompt users to post photos in a slack channel similar to the BeReal app. These images will be sent to the server and then to a moderation app where a mod can approve or deny the image and caption sent. The image will then be sent back to the slack where others can react and comment. This bot can be integrated into any slack workspace to promote lightweight community building.
## Conceptual Design
The bots behavior is detailed below in Figure 1. The slack bot will have choices of which prompts to use at any given time. Using the slack API, the bot will message the main channel directed towards a specific user privately. The user will click the “take picture” button triggering a modal with a camera to reply with an image. The image will then be sent to our backend server and then sent as a direct message to the moderator. If the moderator accepts the image, the image is sent back to the backend and then redistributed to the slack channel using the Slack API. Any reactions and comments would be logged to the database.

![Figure 1](https://media.discordapp.net/attachments/1150951348754456610/1153014601722646698/c52816cd-0b4d-40e1-a4ed-4a51289db728.png)
  
#### Figure 1: Conceptual design Diagram

## High Level Requirement
Communities should be able to install this, but into their slack channel. The bot will randomly prompt users at scheduled times to take a picture, with prompts such as “What are you having for lunch?”. When the user responds to the bot with an image, that image must be sent to a moderator which will then approve or deny the post to be publicly displayed in the slack channel. Responses and Reactions should be logged by the bot.
## Background
This photo sharing is similar to the BeReal app which prompts users to post photos once a day to share with people they have added as friends. Our project differs in the fact that it will be used in communities of people who may not already be friends. BeReal users can only see the photos of people they have added
