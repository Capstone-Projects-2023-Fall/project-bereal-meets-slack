---
sidebar_position: 2
---

Bot Api Spec
=============================

**Introduction**
This outlines the API specification for the Bot. It provides details on the methods available, their parameters, return values, and the usage.

<<<<<<< HEAD
=======

## activeHoursUtils.js Methods

#### (async) fetchActiveHoursFromDB(guildId) → {Promise.<{start\_time: string, end\_time: string}>}

Fetches active operating hours for a guild from the database.

##### Parameters:

### `fetchActiveHoursFromDB(guildId)`

Fetches active operating hours for a guild from the database.

#### Parameters:

| Name      | Type   | Description                           |
|-----------|--------|---------------------------------------|
| `guildId` | string | The ID of the Discord guild.           |

#### Returns:

A Promise that resolves to an object with `start_time` and `end_time` properties.


## `getRandomHourWithinActiveHours(activeHoursData) → {string}`

Generates a random hour within the active operating hours for a guild.

### Parameters:

| Name             | Type   | Description                               |
|------------------|--------|-------------------------------------------|
| `activeHoursData`| Object | An object containing `start_time` and `end_time`. |

### Returns:

- A formatted string representing a random hour within the active hours.

**Type:** `string`

## `storeOperatingHours(guildId, startTime, endTime) → {Promise.<void>}`

Stores or updates operating hours for a guild in the database.

### Parameters:

| Name         | Type   | Description                            |
|--------------|--------|----------------------------------------|
| `guildId`    | string | The ID of the Discord guild.            |
| `startTime`  | string | The starting time of operating hours.   |
| `endTime`    | string | The ending time of operating hours.     |

### Returns:

- A Promise that resolves when the operation is complete.

**Type:** `Promise.<void>`

## Database Conneection (dbconn.js)

## Members

## `pool`

### Type:

- **Object**

### Description:

The MySQL connection pool used throughout the Discord bot.


## Methods

## `createConnectionPoolCloud() → {Object}`

### Description:

Creates a connection pool for cloud database calls.

### Returns:

- MySQL connection pool.

  **Type:** `Object`

## `createConnectionPoolLocal() → {Object}`

### Description:

Creates a connection pool for local database calls during testing.

### Returns:

- MySQL connection pool.

  **Type:** `Object`

## `createPromiseConnectionPool() → {Object}`

### Description:

Creates a promise-based connection pool based on the specified environment flag.

### Returns:

- Promise-based MySQL connection pool.

  **Type:** `Object`





**Bot Methods**
>>>>>>> ebfa7b8 (active hours methods documented)

## activeHours Module
##### Methods


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









## blacklistUtils Methods

### `blacklistAddUser(guildId, dbuser)`

#### `blacklistAddUser(guildId, dbuser) → {Promise<number>}`

Adds a user to the blacklist for a guild.

##### Parameters:

| Name      | Type   | Description                             |
|-----------|--------|-----------------------------------------|
| `guildId` | string | The ID of the Discord guild.             |
| `dbuser`  | string | The user ID to be blacklisted.           |

##### Returns:

- A Promise resolving to:
  - `0` if the user was successfully added to the blacklist.
  - `1` if the user is already blacklisted.
  - `2` if an error occurred during the operation.

  **Type:** `Promise<number>`


### `blacklistDeleteUser(guildId, dbuser)`

#### `blacklistDeleteUser(guildId, dbuser) → {Promise.<number>}`

Deletes a user from the blacklist for a guild.

##### Parameters:

| Name      | Type   | Description                            |
|-----------|--------|----------------------------------------|
| `guildId` | string | The ID of the Discord guild.           |
| `dbuser`  | string | The user ID to be removed from the blacklist. |

##### Returns:

- A Promise resolving to:
  - `0` if the user is successfully deleted.
  - `1` if no user is deleted


  **Type:** `Promise.<number>`






### `blacklistListUsers(guildId)`

#### `blacklistListUsers(guildId) → {Promise.<Array.<string>>}`

Fetches and returns a list of blacklisted users in a guild.

##### Parameters:

| Name      | Type   | Description                                   |
|-----------|--------|-----------------------------------------------|
| `guildId` | string | The ID of the Discord guild.                   |

##### Returns:

- A promise that resolves to an array of formatted user mentions (`<@user_id>`).

  **Type:** `Promise.<Array.<string>>`




## dataGraph Methods

### `fetchDataForGraph(guildId)`

#### `fetchDataForGraph(guildId) → {Promise.<Array<Object>>}`

Fetches data for generating a graph based on reactions in a guild.

##### Parameters:

| Name      | Type   | Description                              |
|-----------|--------|------------------------------------------|
| `guildId` | string | The ID of the Discord guild.              |

##### Returns:

- A promise that resolves to an array of objects containing `prompt_text` and `num_reactions`.

  **Type:** `Promise.<Array<Object>>`


### `generateGraph(data)`

#### `generateGraph(data) → {Promise.<Buffer>}`

Generates a bar chart graph using Chart.js based on the provided data.

##### Parameters:

| Name  | Type   | Description                                |
|-------|--------|--------------------------------------------|
| `data`| Array  | An array of objects with `prompt_text` and `num_reactions`. |

##### Returns:

- A Promise that resolves to a Buffer containing the rendered graph image.

  **Type:** `Promise.<Buffer>`




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





## handleUserSubmission Methods


### `handleUserSubmission(attachment, caption, interaction)`

Handles user submissions for Discord bot prompts.

#### Parameters:

| Name           | Type        | Description                                                                                   |
|----------------|-------------|-----------------------------------------------------------------------------------------------|
| `attachment`   | Discord.Attachment | The file attached to the submission.                                                        |
| `caption`      | string      | The optional caption provided by the user.                                                  |
| `interaction`  | Discord.CommandInteraction | The interaction object representing the user's command interaction.                          |

#### Execution:

- Verifies if the user is prompted and if the prompt matches the user ID.
- Defers and then edits the user's reply to indicate the submission has been received.
- Checks if the attachment is an image.
- Notifies moderators about the submission and waits for their responses.

#### Deny Flow:

- If a moderator denies the submission, prompts the moderator for a reason and notifies the submitter.
- Tracks denial counts for users and issues warnings.
- If a user reaches a strike limit, adds them to the blacklist and notifies moderators.

#### Approval Flow:

- If a moderator approves the submission, edits messages accordingly and notifies moderators.
- Sends an embedded message to the specified channel containing the submission details.



 ## helpUtils Methods

 ### `getHelpMessageMod()`

#### `getHelpMessageMod() → {string}`

Returns a help message that explains how to use the Bot for Bot moderators.

##### Returns:

- A string containing the help message for moderators.

  **Type:** `string`



### `getHelpMessageUser()`

#### `getHelpMessageUser() → {string}`

Returns a help message that explains how to use the Bot for Bot users.

##### Returns:

- A string containing the help message for regular users.

  **Type:** `string`


## notifyMods Methods

### `notifyMods(guild, content, caption, author, attachments)`

#### `notifyMods(guild, content, caption, author, attachments) → {Object}`

Notifies moderators in a guild about a new submission and provides options to approve or deny.

##### Parameters:

| Name          | Type      | Description                                      |
|---------------|-----------|--------------------------------------------------|
| `guild`       | Object    | The Discord guild object.                        |
| `content`     | string    | The content or prompt associated with the submission. |
| `caption`     | string    | The caption provided for the submission. (Optional) |
| `author`      | Object    | The author of the submission.                     |
| `attachments` | Collection or Array | Attachments associated with the submission. |

##### Returns:

- An object with the following properties:
  - `responses`: An array of responses from moderators.
  - `moderators`: A collection of moderators who were notified.





## postPrompt Methods


### `postPrompt(guildId, client, callingUser)`

#### `postPrompt(guildId, client, callingUser) → {void}`

Posts a prompt in a specified channel for a user to submit content.

##### Parameters:

| Name           | Type          | Description                                       |
|----------------|---------------|---------------------------------------------------|
| `guildId`      | string        | The ID of the Discord guild.                       |
| `client`       | Object        | The Discord client object.                         |
| `callingUser`  | string (optional) | The ID of the user triggering the prompt.        |





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

### `schedulePost(activeHoursData, guildId, client)`

#### `schedulePost(activeHoursData, guildId, client) → {void}`

Schedules the posting of a prompt within active hours of a guild.

##### Parameters:

| Name               | Type    | Description                                           |
|--------------------|---------|-------------------------------------------------------|
| `activeHoursData`  | Object  | An object containing `start_time` and `end_time`.      |
| `guildId`          | string  | The ID of the Discord guild.                           |
| `client`           | Object  | The Discord client object.                             |



## Prompt Class

### `Prompt`

#### Description:

A class representing a prompt with associated user and channel information.

##### Properties:

- `prompt`: The content of the prompt.
- `userId`: The ID of the user associated with the prompt.
- `channel`: The channel associated with the prompt.

#### Methods:

##### `isUserIdMatch(userId)`

Checks if the provided user ID matches the user ID associated with the prompt.

###### Parameters:

| Name      | Type   | Description                         |
|-----------|--------|-------------------------------------|
| `userId`  | string | The user ID to compare with.         |

###### Returns:

- `true` if the provided user ID matches the user ID associated with the prompt; otherwise, `false`.

##**Type:**  `boolean`





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



## promptTimeout Class

### `PromptTimeout`

A utility class managing timeouts for prompts and reprompts.

### `constructor(client)`

#### Description:
Constructs a new instance of the class.

##### Parameters:
| Name       | Type   | Description                           |
|------------|--------|---------------------------------------|
| `client`   | Object | The Discord.js client instance.       |

---

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



## setDefaultChannel Methods

## Function

### `setDefaultChannel(channelId, guildId)`

#### Description:
Sets the default channel for submissions in the database. If the channel and guild combination already exists, it updates the submission channel.

##### Parameters:
| Name       | Type   | Description                        |
|------------|--------|------------------------------------|
| `channelId` | string | The ID of the Discord channel.      |
| `guildId`   | string | The ID of the Discord guild.        |

##### Returns:
- A promise that resolves to `0` on success.
- A promise that resolves to `1` on failure.

  **Type:** `Promise.<number>`


## `Timer`

### Constructor

#### `constructor()`

##### Description:
Constructs a new instance of the Timer class.

##### Properties:
- `startTime` (null|number): The timestamp when the timer started.
- `endTime` (null|number): The timestamp when the timer stopped.

---

### Methods

#### `start()`

##### Description:
Starts the timer by setting the `startTime` to the current timestamp.

#### `stop()`

##### Description:
Stops the timer by setting the `endTime` to the current timestamp. Calculates and returns the elapsed time in seconds.

##### Returns:
- `number`: Elapsed time in seconds.

##### Throws:
- Error: If the timer was stopped without being started.


#### `isRunning()`

##### Description:
Checks if the timer is currently running.

##### Returns:
- `boolean`: `true` if the timer is running; `false` otherwise.


