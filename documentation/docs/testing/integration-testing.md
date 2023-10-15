---
sidebar_position: 2
---
# Integration tests

Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.

| Test Case ID | Test Case Objective||Test Case Description||Expected Result|
| -------- | -------- |
|1 |1. Test moderator signing into slack
2. Owner accesses “preferences”
3. owner selects “apps and integration” Install BMS bot, verifies if installation is successful
4. Owner assigns roles and privileges within slack community, validates that assigned roles and privileges are correctly reflected
5. Owner defines moderation and content guidelines for community, test confirms guidelines are properly set
5. Test checks that prompts are correctly configured
6. Test validates schedule is correctly configured 
7. Test ensures that he specific duration is properly applied
8. Verifies time limit is correctly set
9. Confirms that settings are saved
| |Assert that actions taken by owner are successful and expected settings are configured and saved correctly

Overall BMS bot should be successfully configured in the workspace
|
|2| Row 2, Col 2 |
|3|
|4|
|5|
|6|
|7|
|8|
|9|
|10|
|11|