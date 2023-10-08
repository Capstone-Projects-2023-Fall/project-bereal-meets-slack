---
sidebar_position: 1
description: What should be in this section.
---

Server Api Spec
=============================

**Introduction**

This outlines the API specification for the server. It provides details on the methods available, their parameters, return values, and the usage.

**Server Methods**

generateCSV(int startTime, int endTime)  -

&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
Description: Generates a CSV file for a specified time range.    
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
Parameters:  
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
startTime (int): The start time for data collection.  
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
endTime (int): The end time for data collection.  
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
Return Value: CSV file.  


generateDataVis(int startTime, int endTime) -

&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
Description: Generates data visualization for a specified time range.  
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
Parameters:   
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
startTime (int): The start time for data visualization.  
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
endTime (int): The end time for data visualization.  
&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
Return Value: Data visualization object.  

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


