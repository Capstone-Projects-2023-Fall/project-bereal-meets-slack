[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=11810429)
<div align="center">

# Project Name
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://applebaumian.github.io/tu-cis-4398-docs-template/)


</div>


## Keywords
Slack, Chatbot, Social, Research, Group Engagement, Resilient Research Communities

## Project Abstract

This document proposes a community building social media tool that is integrated into a slack workspace. A slackbot will prompt users to post photos in a slack channel similar to the BeReal app. These images will be sent to the server and then to a moderation app where a mod can approve or deny the image and caption sent. The image will then be sent back to the slack where others can react and comment. This bot can be integrated into any slack workspace to promote lightweight community building.

## High Level Requirement

Communities should be able to install this, but into their slack channel. The bot will randomly prompt users at scheduled times to take a picture, with prompts such as “What are you having for lunch?”. When the user responds to the bot with an image, that image must be sent to a moderator which will then approve or deny the post to be publicly displayed in the slack channel. Responses and Reactions should be logged by the bot. 

## Conceptual Design

The bots behavior is detailed below in Figure 1. The slack bot will have choices of which prompts to use at any given time. Using the slack API, the bot will message the main channel directed towards a specific user privately. The user will click the “take picture” button triggering a modal with a camera to reply with an image. The image will then be sent to our backend server and then sent as a direct message to the moderator. If the moderator accepts the image, the image is sent back to the backend and then redistributed to the slack channel using the Slack API. Any reactions and comments would be logged to the database. 

<img src="blob:https://temple-cis-projects-in-cs.atlassian.net/8d04bac0-76e4-4126-b499-b0cfa71d5c15#media-blob-url=true&id=b3c8800d-8b71-4b69-8e8a-b2353cf215d5&contextId=13850&collection="/>

Figure 1. Conceptual flow chart of bot behavior and user interaction

## Background

This photo sharing is similar to the BeReal app which prompts users to post photos once a day to share with people they have added as friends. Our project differs in the fact that it will be used in communities of people who may not already be friends. BeReal users can only see the photos of people they have added.

Required Resources

Virtual Private Server or Cloud

SlackAPI

Backend Framework (Laravel PHP, or NodeJS)

SQL or NoSQL Database for logging

## Collaborators

[//]: # ( readme: collaborators -start )
<table>
<tr>
    <td align="center">
        <a href="https://github.com/ApplebaumIan">
            <img src="https://avatars.githubusercontent.com/u/9451941?v=4" width="100;" alt="ApplebaumIan"/>
            <br />
            <sub><b>Ian Tyler Applebaum</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/leighflagg">
            <img src="https://avatars.githubusercontent.com/u/77810293?v=4" width="100;" alt="leighflagg"/>
            <br />
            <sub><b>Null</b></sub>
        </a>
    </td></tr>
</table>

[//]: # ( readme: collaborators -end )
