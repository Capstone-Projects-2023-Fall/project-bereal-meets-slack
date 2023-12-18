---
sidebar_position: 1
---

# Slash Commands

This document outlines the API specification for the Bot slash command modules.

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
