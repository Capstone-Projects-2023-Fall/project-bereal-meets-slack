[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=11810429)
<div align="center">

# WhatchaDoin Bot
## A community building bot that merges BeReal with Discord
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://applebaumian.github.io/tu-cis-4398-docs-template/)


</div>

## Background

This photo sharing is similar to the BeReal app which prompts users to post photos once a day to share with people they have added as friends. Our project differs in the fact that it will be used in communities of people who may not already be friends. BeReal users can only see the photos of people they have added.

Required Resources

Virtual Private Server or Cloud

DiscordAPI

Backend Framework (Laravel PHP, or NodeJS)

SQL or NoSQL Database for logging




# Installation Instructions
* Make Sure you have nodeJs installed (any ver 18+ works)
* Clone the repo and open in vs code
* install the env file in the main folder and rename it to .env
* in the same terminal run npm install
* to run use npm run startdev
* to test use node test

# WhatchaDoin' Bot Slash Commands

## `/submit`

### Description

A Discord slash command for users to submit posts.

#### Options:

- `file` (Required): Attach a file to the submission.
- `caption`: Provide a caption for the submission.

## `/activehours`

### Description

View and manage active hours for prompts.

#### Subcommands:

#### `/set`

Set the bot's active hours.

##### Options:

- `start-time` (Required): Enter the start time in HH:MM format.
- `end-time` (Required): Enter the end time in HH:MM format.

#### `/list`

List the active hours.

## `/blacklist`

### Description

A Discord slash command for moderators to manage the blacklist of users.

#### Subcommands:

#### `/add`

Add a user to the blacklist.

##### Options:

- `user` (Required): The user you want to add to the blacklist.

#### `/remove`

Remove a user from the blacklist.

##### Options:

- `user` (Required): The user you want to remove from the blacklist.

#### `/list`

List users in the blacklist.

## `/exportcsv`

### Description

Discord slash command to export and save data to a CSV file, and then uploading it to the chat.

#### Permissions

- **Required Role**: `bot mod` (Only moderators can use this command)

## `/graphdata`

### Description

Displays a graph based on the provided data.

#### Permissions

- **Required Role**: `bot mod` (Only moderators can use this command)

## `/help`

### Description

A Discord slash command to display help information.

## `/post`

### Description

A Discord slash command to send a prompted post.

#### Subcommands:

#### `/random`

Prompt a random user.

#### `/someone`

Prompt a specified user.

##### Options:

- `user` (Required): Prompt a specific user.

#### Permissions

- **Required Role**: `bot mod` (Only moderators can use this command)

## `/toggle_private`

### Description

A Discord slash command to toggle between public and private responses.

#### Description

Toggles the bot to send direct messages (DMs) to the user instead of public replies.

## `/prompts`

### Description

A Discord slash command to manage prompts.

#### Subcommands:

#### `/add`

Add a new prompt.

##### Options:

- `prompt` (Required): Enter a new prompt.
- `channel` (Optional): Select the channel for the prompt.

#### `/delete`

Delete a prompt from the list. The command includes an autocomplete function that provides suggestions based on user input.

#### Permissions

- **Required Role**: `bot mod` (Only moderators can use this command)
##### Options:

- `prompt` (Required): Enter the prompt to delete.

#### `/list`

List all prompts.



## `/setsubmissionchannel`

### Description

A Discord slash command to set the submission channel for the guild.

#### Options:

- `channel` (Required): The channel for submissions.

#### Permissions

- **Required Role**: `bot mod` (Only moderators can use this command)

## `/notifications`

### Description

A Discord slash command to toggle bot notifications on and off.


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
