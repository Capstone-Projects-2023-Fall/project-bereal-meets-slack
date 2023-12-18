Command Modules Spec
=============================

**Introduction**
This outlines the API specification for the Bot slash command modules.

### `/submit`

#### Description:

A Discord slash command for users to submit posts.

##### Options:

- `file` (Required): Attach a file to the submission.
- `caption`: Provide a caption for the submission.


## `/activehours`

#### Description:

View and manage active hours for prompts.

### Subcommands:

### `/set`

Set the bot's active hours.

#### Options:

- `start-time` (Required): Enter the start time in HH:MM format.
- `end-time` (Required): Enter the end time in HH:MM format.

### `/list`

List the active hours.

##  /blacklist
#### Description:
A Discord slash command for moderators to manage the blacklist of users.

### Subcommands:
###  `/add`
Add a user to the blacklist.

#### Options:
- `user` (Required): The user ID you want to remove from the blacklist.

###  `/remove`
Remove a user from the blacklist.

#### Options:
- `user` (Required): The user ID you want to remove from the blacklist.

### `/list`
List users in the blacklist.


