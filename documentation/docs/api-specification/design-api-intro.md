---
sidebar_position: 1
description: What should be in this section.
---

Server Api Spec
=============================

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

**Database Methods**

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