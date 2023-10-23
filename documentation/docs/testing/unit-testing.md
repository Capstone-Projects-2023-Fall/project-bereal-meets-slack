---
sidebar_position: 1
---
# Unit Tests for BeRealMeets Discord Bot

Tests to ensure each method of the classes `beRealBot`, `database`, and `webServer` works as expected based on the UML diagrams. External input should be provided via mock objects and results verified via mock objects. These tests should not require manual entry of data nor require manual interpretation of results.

| Test Case ID | Test Case Objective                                           | Test Case Description                                      | Expected Result                                       |
|--------------|-------------------------------------------------------------|-----------------------------------------------------------|--------------------------------------------------------|
| 1            | Test `beRealBot`'s ability to fetch CSV data.                  | Invoke `getCSV()` method of `beRealBot` class without parameters.  | Properly formatted CSV data is returned. |
| 2            | Test `beRealBot`'s ability to fetch visualization data.        | Invoke `getDataVis()` method of `beRealBot` class without parameters. | Properly structured visualization data is returned. |
| 3            | Test if `database` can set user roles.                      | Provide mock user and role data to the `setUserRoles()` method. | User roles in mock database are updated successfully. |
| 4            | Test `webServer`'s CSV generation.                          | Provide `generateCSV()` method of `webServer` class with mock start and end times. | A mock CSV is generated for the specified date range. |
| 5            | Test if `beRealBot` can send prompts.                          | Invoke `sendPrompt()` method of `beRealBot` class. | Assert that a prompt is sent to the mock Discord server. |
| 6            | Test if `database` can fetch bot settings.                  | Invoke `getBotSettings()` method of `database` class. | Assert that bot settings are fetched from the mock database. |
| 7            | Test if `database` can get user roles.                      | Provide mock user data to the `getUserRoles()` method. | User roles from mock database are returned successfully. |
| 8            | Test if `beRealBot` can set operating hours.                   | Provide mock start and end times to `setOperatingHours()` method. | Operating hours are set and stored correctly. |
| 9            | Test `beRealBot`'s ability to get a random prompt.             | Invoke `generateRandomPrompt()` method of `beRealBot` class. | A random prompt from the mock prompt list is returned. |
| 10           | Test if `beRealBot` can get the operating hours.               | Invoke `getOperatingHours()` method of `beRealBot` class. | Operating hours are fetched successfully. |
| 11           | Test if `beRealBot` can retrieve a response delay.             | Invoke `getResponseDelay()` method of `beRealBot` class. | Assert that the delay duration before a user responds is fetched. |
| 12           | Test if `beRealBot` can set response for a user.               | Provide mock user and response to `setResponse()` method. | User's response is set and stored correctly. |
| 13           | Test if `database` can set bot settings.                    | Provide mock settings data to `setBotSettings()` method. | Bot settings in mock database are updated successfully. |
| 14           | Test if `database` can get reactions count.                 | Invoke `getReactions()` method of `database` class. | Assert that the count of reactions is fetched from the mock database. |
| 15           | Test if `database` can get response count.                  | Invoke `getResponseTs()` method of `database` class. | Assert that the count of responses is fetched from the mock database. |
| 16           | Test if `beRealBot` can set prompt list.                       | Provide a mock prompt list to `setPromptList()` method. | Prompt list is set and stored correctly. |
| 17           | Test if `webServer` can generate data visualization.        | Provide `generateDataVis()` method of `webServer` class with mock start and end times. | A mock data visualization is generated for the specified date range. |
| 18           | Test if `beRealBot` can get the prompt list.                   | Invoke `getPromptList()` method of `beRealBot` class. | Prompt list is fetched successfully. |
| 19           | Test if `beRealBot` can set a user's response comment.         | Provide mock user and comment to `setResponsePostComment()` method. | User's comment is set and stored correctly. |
| 20           | Test if `beRealBot` can get blacklisted users.                 | Invoke `getBlackList()` method of `beRealBot` class. | Blacklisted users list is fetched successfully. |
| 21           | Test if `beRealBot` can add users to blacklist.                | Provide a mock user to `addUserToBlackList()` method. | User is added to the blacklist correctly. |
| 22           | Test if `beRealBot` can remove users from blacklist.           | Provide a mock user to `removeUserFromBlackList()` method. | Remove user from blacklist |
| 23           | Test if `beRealBot` can selected a random user to prompt       | Provide a mock user to select from a mock list | Select a random user from the database to prompt |
| 24           | Test if `database` can update total average time to post.   | Provide mock data to `updateTotalAverageTimeToPost()` method. | Total average time to post in the mock database is updated correctly. |
| 25           | Test if `database` can get reaction timestamps.             | Invoke `getReactionTS()` method of `database` class. | Reaction timestamps are fetched from the mock database. |
| 26           | Test if `database` can get response timestamps.             | Invoke `getResponseTS()` method of `database` class. | Response timestamps are fetched from the mock database. |
| 27           | Test if `database` can set prompt post timestamps.          | Provide mock data to `setPromptPostTS()` method. | Prompt post timestamps are set in the mock database. |
| 28           | Test if `database` can update user's time to post.          | Provide mock user data to `updateUserTimeToPost()` method. | User's time to post is updated in the mock database. |
| 29           | Test if `database` can get user's time to post.             | Invoke `getUserTimeToPost()` method of `database` class. | User's time to post is fetched from the mock database. |
| 30           | Test if `database` can update reactions usage.              | Provide mock data to `updateReactionsUsage()` method. | Reactions usage is updated in the mock database. |