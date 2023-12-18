---
sidebar_position: 8
---
Get Random User Utility Module Spec
=============================
## Methods

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
