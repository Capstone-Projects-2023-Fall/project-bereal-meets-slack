---
sidebar_position: 10
description: Prompt Timeout Class Specification Document
---
Prompt Timeout Class Spec
=============================

## Description

A utility class managing timeouts for prompts and reprompts.

## Properties
        this.client = client;
        this.activePrompts = new Map();
        this.repromptTimeouts = new Map();

- `client`: The Discord.js client instance. 
- `activePrompts`: The prompts that have been sent in the channel.
- `repromptTimeouts`: The duration before a prompt is resent.

## Methods


### `setupPrompt(channelId, message, user, originalPrompt)`

#### `setupPrompt(channelId, message, user, originalPrompt) → {void}`

#### Description:
This method sets up the timeout and message for a prompt.

##### Parameters:
| Name             | Type   | Description                                   |
|------------------|--------|-----------------------------------------------|
| `channelId`      | string | The ID of the Discord channel.                |
| `message`        | string | The message content for the prompt.           |
| `user`           | Object | The Discord user associated with the prompt.  |
| `originalPrompt` | string | The original prompt content.                  |

##### Parameters:
| Name             | Type   | Description                                   |
|------------------|--------|-----------------------------------------------|
| `channelId`      | string | The ID of the Discord channel.                |
| `message`        | string | The message content for the prompt.           |
| `user`           | Object | The Discord user associated with the prompt.  |
| `originalPrompt` | string | The original prompt content.                  |




### `setPromptTimeout(promptId, duration, message, expiredContent, user, originalPrompt, channelId)`

#### `setPromptTimeout(promptId, duration, message, expiredContent, user, originalPrompt, channelId) → {void}`

Sets a timeout for a prompt identified by `promptId`.

##### Parameters:

| Name               | Type      | Description                                           |
|--------------------|-----------|-------------------------------------------------------|
| `promptId`         | any       | Identifier for the prompt.                             |
| `duration`         | number    | Duration of the timeout in milliseconds.               |
| `message`          | Object    | Discord message object associated with the prompt.    |
| `expiredContent`   | string    | Content to display when the prompt expires.            |
| `user`             | Object    | Discord user object associated with the prompt.       |
| `originalPrompt`   | any       | Original prompt content.                               |
| `channelId`        | string    | ID of the Discord channel where the prompt is active. |




### `handleReprompt(user, originalPrompt, channelId, originalMessage)`

#### `handleReprompt(user, originalPrompt, channelId, originalMessage)`

Handles reprompting the user.

##### Parameters:

| Name              | Type     | Description                                                           |
|-------------------|----------|-----------------------------------------------------------------------|
| `user`            | Object   | The user object.                                                      |
| `originalPrompt`  | string   | The original prompt message.                                          |
| `channelId`       | string   | The ID of the channel where the reprompt message will be sent.        |
| `originalMessage` | Object   | The original message that triggered the reprompt.                     |