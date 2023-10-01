---
sidebar_position: 5
---

# Using Git as Our Version Control

## Branching Strategy: Branch by Branch Development

1. **Branch Creation**: Developers are expected to work on individual branches for every feature or bug fix. Each branch should be prefixed with `dev/` followed by the Jira Card/Ticket Name and Number. 

2. **Commit Message Convention**: When a developer makes their first commit to their branch, the commit message should include the Jira Card/Ticket Name and Number. This allows Jira to automatically link the branch to the corresponding ticket.

## Protecting the Main Branch

To ensure code quality and prevent accidental changes to our production code, the `main` branch is protected. Here are the measures in place:

1. **Merge Requests**: Direct pushes to the `main` branch are not allowed. Instead, developers must open a merge request (or pull request) to introduce their changes. This process ensures that all code changes are reviewed by peers before being merged into the main codebase.

2. **Code Reviews**: Before a merge request is approved, it must be reviewed by at least one other developer. This promotes a culture of code quality, knowledge sharing, and collective code ownership.

## Additional Important Information

1. **Commit Regularly**: To avoid large, hard-to-review code changes, developers are encouraged to commit their changes regularly. Small, incremental commits make it easier to track changes, review code, and identify bugs.

2. **Keep Branches Updated**: Developers should regularly pull changes from the `main` branch into their feature branches. This ensures that when it's time to merge, conflicts are minimized, and the code is up to date with the latest developments.

3. **Clean Up After Merging**: Once a branch has been merged into `main`, it's a good practice to delete the branch to keep the repository tidy.