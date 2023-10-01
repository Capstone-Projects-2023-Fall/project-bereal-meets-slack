---
sidebar_position: 5
---

# Version Control Methodology

For the project we will be using Git versioning & Github as our central version control service.

## Branching Strategy: Branch by Branch Development

1. **Branch Creation**: Developers are expected to work on individual branches for every feature or bug fix. Each branch should be prefixed with `dev/` followed by the Jira Card/Ticket Name and Number. 

2. **Commit Message Convention**: When a developer makes their first commit to their branch, the commit message should include the Jira Card/Ticket Name and Number. This allows Jira to automatically link the branch to the corresponding ticket.

## Protecting the Main Branch

To ensure code quality and prevent accidental changes to our production code, the `main` branch is protected. Here are the measures in place:

1. **Merge Requests**: Direct pushes to the `main` branch are not allowed. Instead, developers must open a merge request (or pull request) to introduce their changes. This process ensures that all code changes are reviewed by peers before being merged into the main codebase.

2. **Code Reviews**: Before a merge request is approved, it must be reviewed by at least one other developer in order to prevent merge conflicts or catch unnoticed bugs.
