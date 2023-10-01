Bot Architecture Document

1. Intro
- Purpose: Describe architecture of BeReal Slack Bot
- Scope: Users will receive updates and notifications from Bot to upload and interact with photos

2. Overview
- Software: Bot integrates BeReal photo sharing into Slack channel
- Architecture: Python based bot using Slack SDK for slack integration and other APIs

3. Slack Integration
- The current bot prints a simple "Hello World" message using chat_postMessage through Slack SDK. The bot is able to post through a WebClient integration and a token. In the future, the bot will have integrated slash commands to interact with. 

4. Other
- Error Handling: Be able to provide feedback when an error occurs.
- Security: Ensuring user data is protected 
