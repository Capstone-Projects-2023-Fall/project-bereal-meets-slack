---
sidebar_position: 11
---
Notify Moderators Utility Module Spec
=============================
## Methods

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

