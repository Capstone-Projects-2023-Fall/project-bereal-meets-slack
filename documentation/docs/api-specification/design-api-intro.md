---
sidebar_position: 1
description: Api Specification Document
---

Api Spec Document
=============================

This document details the methods for the BeReal ChatBot system


# Bot Api Spec

This outlines the API specification for the Bot itself. It provides details on the methods the bot uses in its own function.

**Bot Methods**

**getCSV()**  

Description: Gets the CSV fields

Parameters: None

Data Types: None

Return Value: CSV fields (e.g., a list or string)

Output Variables: None


**getDatavis()**

Description:Checks for CSV fields by parsing lines from a file

Parameters: None or a file path

Data Types: String (file path)

Return Value: Parsed CSV fields or data visualization

Output Variables: None


**getOperatingHours()**

Description:Gets the operation hours of the bot

Parameters: None

Data Types: None

Return Value: Operating hours (e.g., start and end times)

Output Variables: None

**sendPrompt()**

Description:Sends a prompt to a user

Parameters: User ID or message content

Data Types: String (User ID) or message data

Return Value: Status of the prompt being sent (e.g., success or failure)

Output Variables: None

**getResponseDelay()**

Description:Gets the time it takes when the bot has to resend a prompt to the user

Parameters: None

Data Types: None

Return Value: Response delay time (e.g., integer or float)

Output Variables: None

**getResponse()**

Description: Gets response from the user

Parameters: None

Data Types: None

Return Value: User response (e.g., string)

Output Variables: None

**setOperatingHours(int newStart, int newEnd)**

Description:Sets the operating hours

Parameters: New start and end times (integer)

Data Types: Integer (newStart and newEnd)

Return Value: Status of operating hours update

Output Variables: None

**generateRandomPromptTime()**

Description:Generates a random time for when prompts are assigned

Parameters: None

Data Types: None

Return Value: Random prompt assignment time (e.g., timestamp)

Output Variables: None

**generateRandomPrompt()**

Description:  Generates a random prompt

Parameters: None

Data Types: None

Return Value: Randomly generated prompt (e.g., string)

Output Variables: None

**getPromptList()**

Description: Gets the prompt list

Parameters: None

Data Types: None

Return Value: List of prompts

Output Variables: None

**setPromptList()**

Description: Sets the prompt list 

Parameters: List of prompts

Data Types: List of strings

Return Value: Status of prompt list update

Output Variables: None

**getResponsePostComment()**

Description: Gets and stores the response of a post comment

Parameters: None

Data Types: None

Return Value: User response to a post comment (e.g., string)

Output Variables: None

**setResponsePostComment()**

Description:  Sets a response of a post comment

Parameters: User response to a post comment (e.g., string)

Data Types: String

Return Value: Status of response update

Output Variables: None

**getBlackList()**

Description: Shows the blacklist

Parameters: None

Data Types: None

Return Value: List of blacklisted users

Output Variables: None

**addUserToBlackList()**

Description: Adds users to the blacklist

Parameters: User ID or username

Data Types: String

Return Value: Status of user addition to the blacklist

Output Variables: None

**removeUserFromBlackList()**

Description: Removes a user from the blacklist

Parameters: User ID or username

Data Types: String

Return Value: Status of user removal from the blacklist

Output Variables: None

**selectRandomUserToPrompt()**

Description: Selects a random user to assign a prompt to

Parameters: None

Data Types: None

Return Value: Selected user for prompt assignment (e.g., User ID or username)

Output Variables: None

**getApprovalStatus()**

Description:Gets the approval status after sending a user response to the moderator

Parameters: None

Data Types: None

Return Value: Approval status (e.g., boolean)

Output Variables: None

**setApprovalStatus()**

Description: Sets the approval status after sending a user response to a moderator

Parameters: Approval status (e.g., boolean)

Data Types: Boolean

Return Value: Status of approval status update

Output Variables: None

**sendToResponseToMod()**

Description: Sends a user response to a prompt to a moderator

Parameters: User response to a prompt

Data Types: String

Return Value: Status of sending to the moderator

Output Variables: None

**postResponseToChannel()**

Description: Posts the response of a moderator to a user to a channel

Parameters: Moderator's response to a user

Data Types: String

Return Value: Status of posting to a channel

Output Variables: None

**deleteOriginalPromptFromChannel()**

Description:Deletes a prompt from a certain channel

Parameters: Channel or prompt ID

Data Types: String or identifier

Return Value: Status of prompt deletion from the channel

Output Variables: None

**setUsersAlreadyPromptedList()**

Description:  Sets a list of users that were already prompted by the bot

Parameters: List of users

Data Types: List of user IDs or usernames

Return Value: Status of updating the list

Output Variables: None


# Server Api Spec

**Introduction**

This outlines the API specification for the server. It provides details on the methods available, their parameters, return values, and the usage.

**Server Methods**

#### `generateCSV(startTime, endTime)`
- **Description:** Generates a CSV file for a specified time range.
- **Parameters:**
  - `startTime` (int): The start time for data collection.
  - `endTime` (int): The end time for data collection.
- **Return Value:** CSV file.

#### `generateDataVis(startTime, endTime)`
- **Description:** Generates data visualization for a specified time range.
- **Parameters:**
  - `startTime` (int): The start time for data visualization.
  - `endTime` (int): The end time for data visualization.
- **Return Value:** Data visualization object.  

# Database Methods

### Prompt API Methods 
 
#### `get_prompt(prompt_id, partial_text)`
- **Description:** Retrieve a prompt by its ID or partial text match.
- **Parameters:**
  - `prompt_id` - ID of the prompt to be retrieved. (Optional)
  - `partial_text` - Partial text of the prompt to perform a partial match. (Optional)
- **Returns:**
  - `prompt_id` - ID of the prompt.
  - `text` - The text of the prompt.

#### `set_prompt(prompt_id, text)`
- **Description:** Set or update the text of a prompt.
- **Parameters:**
  - `prompt_id` - ID of the prompt to be updated.
  - `text` - Updated text for the prompt.
- **Returns:**
  - `return_code` - Code indicating success or failure.

#### `add_prompt(text)`
- **Description:** Add a new prompt.
- **Parameters:**
  - `text` - Text of the new prompt.
- **Returns:**
  - `prompt_id` - ID of the newly added prompt.
  - `return_code` - Code indicating success or failure.

#### `delete_prompt(prompt_id)`
- **Description:** Delete a prompt by its ID.
- **Parameters:**
  - `prompt_id` - ID of the prompt to be deleted.
- **Returns:**
  - `return_code` - Code indicating success or failure.

### Response API Methods

#### `get_response(response_id, user_id)`
- **Description:** Get the user response to a BMS bot prompt.
- **Parameters:**
  - `response_id` - ID of the response to be retrieved (Optional)
  - `user_id` - ID for the user who who posted the response. (Optional)
- **Returns:**
  - `return_code` - Code indicating success or failure.
  - `response_id` - ID of the response.
  - `num_reactions` - Number of reactions.
  - `time_to_respond` - Time taken for user to respond.
  - `user_id` - ID for the user who who posted the response.
  - `image_link` - Link to the response in Discord chat.
  - `prompt_id` - Foreign key to the Prompt data table.

#### `set_response(num_reactions, time_to_respond, prompt_id, user_id, image_link)`
- **Description:** Set or update a user response to a BMS bot prompt.
- **Parameters:**
  - `num_reactions` - Number of reactions.
  - `time_to_respond` - Time taken for user to respond.
  - `prompt_id` - Foreign key to the Prompt data table.
  - `user_id` - ID for the user who who posted the response. 
  - `image_link` - Link to the response in Discord channel.
- **Returns:**
  - `return_code` - Code indicating success or failure.

#### `add_response(num_reactions, time_to_respond, prompt_id, user_id, image_link)`
- **Description:** Add a new user response to a BMS bot prompt.
- **Parameters:**
  - `num_reactions` - Number of reactions.
  - `time_to_respond` - Time taken for user to respond.
  - `prompt_id` - Foreign key to the Prompt data table.
  - `user_id` - ID for the user who who posted the response.
  - `image_link` - Link to the response in Discord channel.
- **Returns:**
  - `return_code` - Code indicating success or failure.
