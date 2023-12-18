[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=11810429)
<div align="center">

# WhatchaDoin Bot
## A community building bot that merges BeReal with Discord
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://applebaumian.github.io/tu-cis-4398-docs-template/)


</div>


## Keywords
Discord, Chatbot, Social, Research, Group Engagement, Resilient Research Communities

## Project Abstract

This document proposes a community building social media tool that is integrated into a Discord workspace. A discord bot will prompt users to post photos in a discord channel similar to the BeReal app. These images will be sent to the server and then to a moderation app where a mod can approve or deny the image and caption sent. The image will then be sent back to the discord where others can react and comment. This bot can be integrated into any discord workspace to promote lightweight community building.

## High Level Requirement

Communities should be able to install this, but into their discord channel. The bot will randomly prompt users at scheduled times to take a picture, with prompts such as “What are you having for lunch?”. When the user responds to the bot with an image, that image must be sent to a moderator which will then approve or deny the post to be publicly displayed in the discord channel. Responses and Reactions should be logged by the bot. 

## Conceptual Design

The bots behavior is detailed below in Figure 1. The discord bot will have choices of which prompts to use at any given time. Using the discord API, the bot will message the main channel directed towards a specific user privately. The user will click the “take picture” button triggering a modal with a camera to reply with an image. The image will then be sent to our backend server and then sent as a direct message to the moderator. If the moderator accepts the image, the image is sent back to the backend and then redistributed to the discord channel using the discord API. Any reactions and comments would be logged to the database. 

<img src="https://media.discordapp.net/attachments/1150951348754456610/1153014601722646698/c52816cd-0b4d-40e1-a4ed-4a51289db728.png"/>

Figure 1. Conceptual flow chart of bot behavior and user interaction

## Background

This photo sharing is similar to the BeReal app which prompts users to post photos once a day to share with people they have added as friends. Our project differs in the fact that it will be used in communities of people who may not already be friends. BeReal users can only see the photos of people they have added.

Required Resources

Virtual Private Server or Cloud

DiscordAPI

Backend Framework (Laravel PHP, or NodeJS)

SQL or NoSQL Database for logging


## Collaborators

[//]: # ( readme: collaborators -start )
<table>
<tr>
    <td align="center">
        <a href="https://github.com/RishiDuggal">
            <img src="https://avatars.githubusercontent.com/u/72986170?v=4" width="100;" alt="Rishi Duggal"/>
            <br />
            <sub><b>Rishi Duggal</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/vivekpatell3">
            <img src="https://avatars.githubusercontent.com/u/111992734?v=4" width="100;" alt="Vivek Patel"/>
            <br />
            <sub><b>Vivek Patel</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/tup31461">
            <img src="https://avatars.githubusercontent.com/u/123909507?v=4" width="100;" alt="Tara Feeley"/>
            <br />
            <sub><b>Tara Feeley</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/NTRachel">
            <img src="https://avatars.githubusercontent.com/u/73837312?v=4" width="100;" alt="Rachel To"/>
            <br />
            <sub><b>Rachel To</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/gevdram">
            <img src="https://avatars.githubusercontent.com/u/111989879?v=4" width="100;" alt="Gevork Dramagotchian"/>
            <br />
            <sub><b>Gevork Dramagotchian</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/SSunnydev">
            <img src="https://avatars.githubusercontent.com/u/70705060?v=4" width="100;" alt="Sojel Sunny"/>
            <br />
            <sub><b>Sojel Sunny</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/ChristianS2001">
            <img src="https://avatars.githubusercontent.com/u/97468890?v=4" width="100;" alt="Christian Smith"/>
            <br />
            <sub><b>Christian Smith</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://google.com">
            <img src="https://imgs.search.brave.com/MWlI8P3aJROiUDO9A-LqFyca9kSRIxOtCg_Vf1xd9BA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE1Lzg0LzQz/LzM2MF9GXzIxNTg0/NDMyNV90dFg5WWlJ/SXllYVI3TmU2RWFM/TGpNQW15NEd2UEM2/OS5qcGc" width="100;" alt="Nick Sowers"/>
            <br />
            <sub><b>Nick Sowers</b></sub>
        </a>
    </td>+
  </tr>
</table>

[//]: # ( readme: collaborators -end )
