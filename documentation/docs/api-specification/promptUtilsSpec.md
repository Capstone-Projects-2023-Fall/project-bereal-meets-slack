---
sidebar_position: 11
description: Prompt Utility Module Specification Document
---
Prompt Utility Module Spec
=============================
## Methods


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