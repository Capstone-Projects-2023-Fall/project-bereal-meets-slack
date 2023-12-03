---
sidebar_position: 9
description: Prompt Class Specification Document
---
Prompt Class Spec
=============================

## Description

A class representing a prompt with associated user and channel information.

## Properties

- `prompt`: The content of the prompt.
- `userId`: The ID of the user associated with the prompt.
- `channel`: The channel associated with the prompt.

## Methods**

##### `isUserIdMatch(userId)`

Checks if the provided user ID matches the user ID associated with the prompt.

###### Parameters:

| Name      | Type   | Description                         |
|-----------|--------|-------------------------------------|
| `userId`  | string | The user ID to compare with.         |

###### Returns:

- `true` if the provided user ID matches the user ID associated with the prompt; otherwise, `false`.

    **Type:**  `boolean`





##### `setPrompt(msg)`

Sets the content of the prompt.

###### Parameters:

| Name   | Type   | Description                     |
|--------|--------|---------------------------------|
| `msg`  | string | The content of the prompt.       |

##### `setUserId(userId)`

Sets the user ID associated with the prompt.

###### Parameters:

| Name      | Type   | Description                    |
|-----------|--------|--------------------------------|
| `userId`  | string | The ID of the associated user.  |

##### `setChannel(channel)`

Sets the channel associated with the prompt.

###### Parameters:

| Name       | Type   | Description                    |
|------------|--------|--------------------------------|
| `channel`  | string | The associated channel.         |

##### `getPrompt()`

Gets the content of the prompt.

###### Returns:

- The content of the prompt.

##**Type:**  `string`

##### `getUserId()`

Gets the user ID associated with the prompt.

###### Returns:

- The ID of the associated user.

##**Type:**  `string`



##### `getChannel()`

Gets the channel associated with the prompt.

###### Returns:

- The associated channel.

##**Type:**  `string`