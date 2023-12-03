---
sidebar_position: 1
description: Active Hours Utility Module Specification Document
---

Active Hours Utility Module Spec
=============================

## Methods


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

