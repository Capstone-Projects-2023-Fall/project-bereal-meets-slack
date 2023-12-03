---
sidebar_position: 6
description: Handle User Submission Utility Module Specification Document
---
Handle User Submission Utility Module Spec
=============================
## Methods

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