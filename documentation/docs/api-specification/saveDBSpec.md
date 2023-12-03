---
sidebar_position: 12
description: Save Database Utility Module Specification Document
---
Save Database Utility Module Spec
=============================
## Methods
## `fetchImageMessagesUntilPrompt(client, channelId)`

#### `fetchImageMessagesUntilPrompt(client, channelId) → {Promise.<Array.<Object>>}`

Fetches image messages from a Discord channel until a message containing "Prompt" is found.

##### Parameters:

| Name        | Type   | Description                                      |
|-------------|--------|--------------------------------------------------|
| `client`    | Object | The Discord client object.                       |
| `channelId` | string | The ID of the Discord channel to fetch messages. |

##### Returns:

- A promise that resolves to an array of Discord message objects containing images.

  **Type:** `Promise.<Array.<Object>>`


  

### `countReactions(message)`

#### `countReactions(message) → {number}`

Counts the total number of reactions on a Discord message.

##### Parameters:

| Name      | Type     | Description                               |
|-----------|----------|-------------------------------------------|
| `message` | Object   | The Discord message object.               |

##### Returns:

- The total count of reactions on the message.

  **Type:** `number`





### `getImageLinkFromMessage(message)`

#### `getImageLinkFromMessage(message) → {string | null}`

Extracts the image link from a Discord message, considering both attachments and embeds.

##### Parameters:

| Name      | Type   | Description                   |
|-----------|--------|-------------------------------|
| `message` | Object | The Discord message object.   |

##### Returns:

- A string representing the image link if found; otherwise, returns `null`.

  **Type:** `string | null`




### `insertResponseData(messageData)`

#### `(async) insertResponseData(messageData) → {void}`

Inserts response data into the database, avoiding duplicates based on the message ID.

##### Parameters:

| Name          | Type   | Description                        |
|---------------|--------|------------------------------------|
| `messageData` | Object | Data object for the response.       |



### `findTimeDifferenceToPrompt(client, channelId, referenceMessage)`

#### `(async) findTimeDifferenceToPrompt(client, channelId, referenceMessage) → {number | null}`

Finds the time difference in seconds between a reference message and the first message containing the word "Prompt" within the last 100 messages in a channel.

##### Parameters:

| Name               | Type     | Description                                     |
|--------------------|----------|-------------------------------------------------|
| `client`           | Object   | The Discord client object.                      |
| `channelId`        | string   | The ID of the channel.                          |
| `referenceMessage` | Object   | The reference message object.                   |

##### Returns:

- A number representing the time difference in seconds if a prompt message is found; otherwise, returns `null`.

  **Type:** `number | null`





### `saveDB(client, channelId)`

#### `(async) saveDB(client, channelId) → {Array}`

Saves data to the database, including information about image messages, reactions, and time differences to prompts.

##### Parameters:

| Name        | Type   | Description                    |
|-------------|--------|--------------------------------|
| `client`    | Object | The Discord client object.     |
| `channelId` | string | The ID of the channel.          |

##### Returns:

- An array containing data for each saved message.

  **Type:** `Array`


  

### `insertResponseData(messageData)`

#### `(async) insertResponseData(messageData) → {void}`

Inserts response data into the database, avoiding duplicates based on the message ID.

##### Parameters:

| Name          | Type   | Description                        |
|---------------|--------|------------------------------------|
| `messageData` | Object | Data object for the response.       |
