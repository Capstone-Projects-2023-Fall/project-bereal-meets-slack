---
sidebar_position: 16
---
Set Default Channel Utility Module Spec
=============================
## Methods
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