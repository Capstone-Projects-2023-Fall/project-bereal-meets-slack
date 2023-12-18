
Blacklist Utility Module Spec
=============================

## Methods

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
