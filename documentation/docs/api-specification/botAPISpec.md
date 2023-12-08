---
sidebar_position: 2
---

Bot Api Spec
=============================

**Introduction**
This outlines the API specification for the Bot. It provides details on the methods available, their parameters, return values, and the usage.



## getRandom Methods
### `getRandomUser(guild)`

#### `getRandomUser(guild) → {string | null}`

Generates a random non-blacklisted, non-bot user ID from a guild's members.

##### Parameters:

| Name    | Type   | Description                           |
|---------|--------|---------------------------------------|
| `guild` | Object | The Discord guild object.             |

##### Returns:

- A string representing the user ID of a randomly selected non-blacklisted, non-bot user.
- Returns `null` if no eligible non-bot users are found.

  **Type:** `string | null`








## activeHours Methods

### `fetchActiveHoursFromDB(guildId)`

#### `(async) fetchActiveHoursFromDB(guildId) → {Promise.<{start_time: string, end_time: string}>}`

Fetches active operating hours for a guild from the database.

##### Parameters:

| Name      | Type   | Description                                   |
|-----------|--------|-----------------------------------------------|
| `guildId` | string | The ID of the Discord guild.                   |

##### Returns:

- A promise that resolves to an object containing `start_time` and `end_time` representing the active operating hours for the guild.

  **Type:** `Promise.<{start_time: string, end_time: string}>`






### `storeOperatingHours(guildId, startTime, endTime)`

#### `(async) storeOperatingHours(guildId, startTime, endTime) → {Promise.<void>}`

Stores or updates operating hours for a guild in the database.

##### Parameters:

| Name       | Type   | Description                              |
|------------|--------|------------------------------------------|
| `guildId`  | string | The ID of the Discord guild.              |
| `startTime`| string | The start time of the operating hours.    |
| `endTime`  | string | The end time of the operating hours.      |

##### Returns:

- A Promise that resolves when the operating hours are successfully stored or updated.

  **Type:** `Promise<void>`









### `getRandomHourWithinActiveHours(activeHoursData)`

#### `getRandomHourWithinActiveHours(activeHoursData) → {string}`

Generates a random hour within the active operating hours for a guild.

##### Parameters:

| Name               | Type   | Description                                           |
|--------------------|--------|-------------------------------------------------------|
| `activeHoursData`  | Object | An object containing `start_time` and `end_time`.      |

##### Returns:

- A formatted string representing a random hour within the active hours.

  **Type:** `string`



## dbConn Methods

### `createConnectionPoolLocal()`

#### `createConnectionPoolLocal() → {Object}`

Creates a connection pool for local database calls during testing.

##### Returns:

- MySQL connection pool object.

  **Type:** `Object`

### `createConnectionPoolCloud()`

#### `createConnectionPoolCloud() → {Object}`

Creates a connection pool for cloud database calls.

##### Returns:

- An object representing a MySQL connection pool.

  **Type:** `Object`



### `createPromiseConnectionPool()`

#### `createPromiseConnectionPool() → {Object}`

Creates a promise-based connection pool based on the specified environment flag.

##### Returns:

- A Promise-based MySQL connection pool.

  **Type:** `Object`



## promptTimeout Methods


### `setupPrompt(channelId, message, user, originalPrompt)`

#### `setupPrompt(channelId, message, user, originalPrompt) → {void}`

Sets up a timed prompt in a specific channel for user interaction.

##### Parameters:

| Name               | Type   | Description                                                   |
|--------------------|--------|---------------------------------------------------------------|
| `channelId`        | string | The ID of the Discord channel where the prompt is set up.      |
| `message`          | string | The message content for the prompt.                            |
| `user`             | Object | The Discord user object for whom the prompt is set up.         |
| `originalPrompt`   | Object | The original prompt object or content for reference.           |







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





## promptUtils Methods

### `getPrompts(guildId)`

#### `getPrompts(guildId) → {Promise<Array.<string>>}`

Retrieves a list of prompts for a specified guild from the database.

##### Parameters:

| Name      | Type   | Description                                   |
|-----------|--------|-----------------------------------------------|
| `guildId` | string | The ID of the Discord guild.                   |

##### Returns:

- A promise that resolves to an array of prompt texts.

  **Type:** `Promise<Array.<string>>`

---

### `addPrompt(guildId, prompt)`

#### `addPrompt(guildId, prompt) → {Promise<string>}`

Adds a new prompt to the database for a specified guild.

##### Parameters:

| Name       | Type   | Description                                   |
|------------|--------|-----------------------------------------------|
| `guildId`  | string | The ID of the Discord guild.                   |
| `prompt`   | string | The text of the prompt to be added.           |

##### Returns:

- A promise that resolves to a message confirming the addition of the prompt.

  **Type:** `Promise<string>`

---

### `deletePrompt(guildId, promptToDelete)`

#### `deletePrompt(guildId, promptToDelete) → {Promise<string>}`

Deletes a prompt from the database for a specified guild.

##### Parameters:

| Name              | Type   | Description                                           |
|-------------------|--------|-------------------------------------------------------|
| `guildId`         | string | The ID of the Discord guild.                           |
| `promptToDelete`  | string | The text of the prompt to be deleted or matched.       |

##### Returns:

- A promise that resolves to a message confirming the deletion or suggesting similar prompts.

  **Type:** `Promise<string>`

---

### `listPrompts(guildId)`

#### `listPrompts(guildId) → {Promise<string>}`

Retrieves and lists all prompts for a specified guild.

##### Parameters:

| Name      | Type   | Description                                   |
|-----------|--------|-----------------------------------------------|
| `guildId` | string | The ID of the Discord guild.                   |

##### Returns:

- A promise that resolves to a string listing all prompts.

  **Type:** `Promise<string>`

---

### `searchPrompts(guildId, query)`

#### `searchPrompts(guildId, query) → {Promise<string>}`

Searches for prompts that match a specified query for a specified guild.

##### Parameters:

| Name      | Type   | Description                                   |
|-----------|--------|-----------------------------------------------|
| `guildId` | string | The ID of the Discord guild.                   |
| `query`   | string | The search query.                             |

##### Returns:

- A promise that resolves to a string listing matching prompts or suggesting alternatives.

  **Type:** `Promise<string>`

---

### `getRandomPrompt(guildId)`

#### `getRandomPrompt(guildId) → {Promise<string | null>}`

Retrieves a random prompt for a specified guild from the database.

##### Parameters:

| Name      | Type   | Description                                   |
|-----------|--------|-----------------------------------------------|
| `guildId` | string | The ID of the Discord guild.                   |

##### Returns:

- A promise that resolves to a random prompt text or `null` if no prompts are found.

  **Type:** `Promise<string | null>`









### `getRandomHourWithinActiveHours(activeHoursData)`

#### `getRandomHourWithinActiveHours(activeHoursData) → {string}`

Generates a random hour within the active operating hours for a guild.

##### Parameters:

| Name             | Type   | Description                               |
|------------------|--------|-------------------------------------------|
| `activeHoursData`| Object | An object containing `start_time` and `end_time`. |

##### Returns:

- A formatted string representing a random hour within the active hours.

  **Type:** `string`





## saveDB Methods



### `fetchImageMessagesUntilPrompt(client, channelId)`

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

