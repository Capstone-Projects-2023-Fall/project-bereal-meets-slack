"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3961],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>u});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},d="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=l(a),m=o,u=d["".concat(c,".").concat(m)]||d[m]||h[m]||r;return a?n.createElement(u,s(s({ref:e},p),{},{components:a})):n.createElement(u,s({ref:e},p))}));function u(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[d]="string"==typeof t?t:o,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5531:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:1},s="WhatchaDoin Bot Design Document",i={unversionedId:"system-architecture/design",id:"system-architecture/design",title:"WhatchaDoin Bot Design Document",description:"Components",source:"@site/docs/system-architecture/design.md",sourceDirName:"system-architecture",slug:"/system-architecture/design",permalink:"/project-bereal-meets-slack/docs/system-architecture/design",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-bereal-meets-slack/edit/main/documentation/docs/system-architecture/design.md",tags:[],version:"current",lastUpdatedBy:"Vivek R Patel",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-bereal-meets-slack/docs/category/system-architecture"},next:{title:"Development Environment",permalink:"/project-bereal-meets-slack/docs/system-architecture/development-environment"}},c={},l=[{value:"Components",id:"components",level:2},{value:"Chat Application",id:"chat-application",level:3},{value:"WhatchaDoin Bot",id:"whatchadoin-bot",level:3},{value:"Google Cloud Web Server",id:"google-cloud-web-server",level:3},{value:"Google Firebase Database",id:"google-firebase-database",level:3},{value:"Class Diagram",id:"class-diagram",level:2},{value:"WhatchaDoin Bot",id:"whatchadoin-bot-1",level:2},{value:"Algorithms",id:"algorithms",level:2},{value:"Database Diagrams",id:"database-diagrams",level:2},{value:"Sequence Diagrams",id:"sequence-diagrams",level:2}],p={toc:l};function d(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"whatchadoin-bot-design-document"},"WhatchaDoin Bot Design Document"),(0,o.kt)("h2",{id:"components"},"Components"),(0,o.kt)("h3",{id:"chat-application"},"Chat Application"),(0,o.kt)("p",null,"The chat application acts as both the bot's user portal and the bot's running environment. The chat application facilitates user interaction with the bot and allows it to act like a pseudo-user that can post and interact with messages. There will be a level of UI/UX design for the bot in Discord using both its API & libraries for command and interaction formatting as well as a block kit for formatting of modals, popups, and responses. The application will also act as the display for all data visualization that moderators ask for."),(0,o.kt)("h3",{id:"whatchadoin-bot"},"WhatchaDoin Bot"),(0,o.kt)("p",null,"The bot itself is a chatbot that is hosted on Google Cloud via cloud run, as previously mentioned it will act as a pseudo-user posting messages and accepting and reacting to user responses with triggers. It interfaces with the Discord API to send messages and with the database to store and pull user reaction data. When dealing with moderation the bot will opt to DM moderators and generate either popups, modals, or interactive actions for approvals, data requests, or moderation features. When logging data the bot will leverage the server to send data to Firebase for storage."),(0,o.kt)("h3",{id:"google-cloud-web-server"},"Google Cloud Web Server"),(0,o.kt)("p",null,"The Google Cloud web server provides a hosting point for the bot using the cloud run service. The server allows for two things, bot uptime and bot access to the database, through the server, the bot can make calls to the Firebase database both for logging and for access to data. The web server will also provide containers that host the Firebase database for reaction data. The web server also will be responsible for formatting data into visualizations when requested by the bot via a user."),(0,o.kt)("h3",{id:"google-firebase-database"},"Google Firebase Database"),(0,o.kt)("p",null,"The Firebase database is contained in the cloud web server and acts as a means of storing and logging all reaction data. The database will contain data about prompts, approved submitted images, time to post, emoji reactions, threaded replies, and several comments. All of this data will be exportable as a CSV or in a visualization done by the host web server."),(0,o.kt)("h2",{id:"class-diagram"},"Class Diagram"),(0,o.kt)("mermaid",{value:'classDiagram\nclass WhatchaDoinBot{\n  + String botName\n  + token botToken\n  - int startHour\n  - int endHour\n  - String [] promptList\n  - String [] blackList\n  - activeEvents()\n  - activeHourUtils()\n  - blacklistutils()\n  - commandregistrar()\n  - dataGraph()\n  - dbconn()\n  - getRandom()\n  - handleUserSubmissions()\n  - helpUtils()\n  - notifyMods()\n  - postUtils()\n  - promptUtils()\n  - saveDB()\n  - setDefualtChannelUtils()\n}\n\nclass Timer {\n  - startTime: number\n  - endTime: number\n  + constructor()\n  + start(): void\n  + stop(): number\n  + isRunning(): boolean\n}\n\nclass PromptTimeout {\n  - client\n  - activePrompts: Map\n  - repromptTimeouts: Map\n  + setupPrompt(channelId, message, user, originalPrompt)\n  + setPromptTimeout(promptId, duration, message, user, originalPrompt, channelId)\n  + handleReprompt(user, originalPrompt, channelId, originalMessage)\n}\n\nclass Prompt {\n  - prompt: string\n  - userId: string\n  - channel: string\n  + isUserIdMatch(userId: string): boolean\n  + setPrompt(msg: string): void\n  + setUserId(userId: string): void\n  + setChannel(channel: string): void\n  + getPrompt(): string\n  + getUserId(): string\n  + getChannel(): string\n}\n\nWhatchaDoinBot "1" --\x3e "*" Timer\nWhatchaDoinBot "1" --\x3e "*" PromptTimeout\nWhatchaDoinBot "1" --\x3e "*" Prompt'}),(0,o.kt)("h2",{id:"whatchadoin-bot-1"},"WhatchaDoin Bot"),(0,o.kt)("p",null,"This class will contain methods that allow the bot to interact with the users and moderator"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Fields")),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-botName"),": Display name for the bot and how users and other members of the platform will recognize and refer to the bot"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"- botToken"),": Unique access token or authentication key that allows the bot to connect to the platform\u2019s API and perform actions"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"- startHour"),": Hour of when the bot will start "),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"- endHour"),": Hour of when bot will end"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"- promptList"),": List of all the prompts the bot can choose from"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"- blackList"),": List of users on the blacklist"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Methods")),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-getCSV()"),": Gets the CSV fields"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-getDatavis()"),": Checks for CSV fields by parsing lines from a file"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-getOperatingHours()"),": Gets the operation hours of the bot"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-sendPrompt()"),": Sends a prompt to a user"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-getResponseDelay()"),": Gets the time it takes when the bot has to resend a prompt to the user"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-getResponse()"),": gets response from the user"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-setOperatingHours(int newStart, int newEnd)"),": Sets the operating hours"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-generateRandomPromptTime()"),": Generates a random time for when prompts are assigned"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-generateRandomPrompt()"),": Generates a random prompt"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-getPromptList()"),": Gets the prompt list"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-setPromptList()"),": Sets the prompt list "),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-getResponsePostComment()"),": Gets and stores the response of a post comment"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-setReponsePostComment()"),": Sets a response of a post comment"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-getBlackList()"),": Shows the blacklist"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-addUserToBlackList()"),": Adds users to the blacklist"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-removeUserFromBlackList()"),": Removes a user from the blacklist"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-selectRandomUserToPrompt()"),": Selects a random user to assign a prompt to"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-getApprovalStatus()"),": Gets the approval status after sending a user response to the moderator"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-setApprovalStatus()"),": Sets the approval status after sending a user response to a moderator"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-sendToReponseToMod()"),":  Sends a user response to a prompt to a moderator"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-postReponseToChannel()"),": Posts the response of a moderator to a user to a channel"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-deleteOriginalPromptFromChannel()"),": Deletes a prompt from a certain channel"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-setaUsersAlreadyPromptedList()"),": Sets a list of users that were already prompted by the bot"),(0,o.kt)("h2",{id:"algorithms"},"Algorithms"),(0,o.kt)("h2",{id:"database-diagrams"},"Database Diagrams"),(0,o.kt)("mermaid",{value:'erDiagram\nPrompts {\n  Int prompt_id PK\n  String text\n  Int guild_id\n}\n\nResponses {\n  Int response_id PK\n  String response_image\n  Int numReactions\n  Int numReplies\n  Int timetoRespond\n  Int prompt_id FK\n}\n\nBlacklist{\n  Int blacklist_id PK\n  Int user_id\n  Int guild_id\n}\n\nHours{\n  Int hour_id PK\n  Int start_time\n  Int end_time\n  Int guild_id\n}\n\nPrompts ||--|{ Responses : ""\n'}),(0,o.kt)("h2",{id:"sequence-diagrams"},"Sequence Diagrams"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Case #1"),": Owner of the Discord Server Configures the WhatchaDoin bot"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 1 Discription"),(0,o.kt)("p",null,"1. Owner signs in to Discord."),(0,o.kt)("p",null,'2. Owner opens the server "Preferences".'),(0,o.kt)("p",null,'3. Owner selects "Apps and Integrations" and installs the WhatchaDoin bot.'),(0,o.kt)("p",null,"4. Owner assigns roles and privileges to users in the community."),(0,o.kt)("p",null,"5. Owner defines moderation and content guidelines."),(0,o.kt)("p",null,"6. Owner defines type of prompts for WhatchaDoin bot to send properly suit the culture and vibe of their community."),(0,o.kt)("p",null,"7. Owner configures the schedule for WhatchaDoin bot, defining the hours when the it will send prompts."),(0,o.kt)("p",null,"8. Owner sets the duration for prompt responses to remain in the chat."),(0,o.kt)("p",null,"9. Owner sets the amount of time users have to respond to prompt notification."),(0,o.kt)("p",null,"10. Owner saves the configuration settings.")),(0,o.kt)("mermaid",{value:'\nsequenceDiagram\n    participant Owner as Owner\n    participant Discord as Discord Server\n    participant WhatchaDoinBot as WhatchaDoin Bot\n    participant Database as Configuration Database\n\n    Owner ->> Discord: Open server "Preferences"\n    activate Discord\n    Owner ->> Discord: Select "Apps and Integrations"\n    Discord ->> WhatchaDoinBot: Install WhatchaDoin bot\n    deactivate Discord\n    activate WhatchaDoinBot\n    Owner ->> WhatchaDoinBot: Assign roles and privileges\n    Owner ->> WhatchaDoinBot: Define moderation and content guidelines\n    Owner ->> WhatchaDoinBot: Define prompts culture and vibe\n    Owner ->> WhatchaDoinBot: Configure schedule for prompts\n    Owner ->> WhatchaDoinBot: Set duration for prompt responses\n    Owner ->> WhatchaDoinBot: Set response time limit\n    WhatchaDoinBot ->> Database: Save configuration settings\n    deactivate WhatchaDoinBot\n    Database --\x3e> WhatchaDoinBot: Confirmation\n    activate Database\n    WhatchaDoinBot --\x3e> Owner: Configuration settings saved\n    deactivate Database\n'}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Case #2"),": User Responds to a WhatchaDoin bot Prompt"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 2 Discription"),"1. User in the Discord community receives a notification at a random time of day that they have received a prompt from the BeReal bot 2. User opens Discord. 3. User responds to the random prompt by taking a picture and uploading it. 4. User replies to the BeReal bot with their response to the prompt, which is sent to the moderator. 5. User waits for approval status from the BeReal bot."),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    participant User as Discord User\n    participant WhatchaDoinBot as WhatchaDoin Bot\n    actor Moderator as Moderator\n    participant Database as Response Database\n\n    User ->> WhatchaDoinBot: Receive WhatchaDoin bot prompt notification\n    activate User\n    User ->> WhatchaDoinBot: Respond to prompt by taking a picture\n    User ->> WhatchaDoinBot: Reply to the WhatchaDoin bot with the image\n    WhatchaDoinBot ->> Moderator: Send user's response to moderator\n    Moderator ->> Database: Review user's response\n    Database --\x3e> Moderator: Response approval status\n    Moderator --\x3e> WhatchaDoinBot: Send approval status\n    WhatchaDoinBot --\x3e> User: Display approval status\n    deactivate User\n"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Case #3"),": User Does Not Respond to a WhatchaDoin bot Prompt"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 3 Discription"),"1. The BeReal bot waits until timeout The BeReal bot sends a notification to the Discord user 2. BeReal bot recognizes the user\u2019s failure to respond, and sends a reminder notification to the users about the missed prompt."),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    participant WhatchaDoinBot as WhatchaDoin Bot\n    participant User as Discord User\n\n    activate WhatchaDoinBot\n    WhatchaDoinBot ->> WhatchaDoinBot: Wait until timeout\n    WhatchaDoinBot ->> User: Send a notification\n    activate User\n    User ->> User: Receive notification\n    User --\x3e> WhatchaDoinBot: Acknowledge notification\n    deactivate User\n    WhatchaDoinBot ->> WhatchaDoinBot: Recognize user's failure to respond\n    WhatchaDoinBot ->> User: Send a reminder notification\n"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Case #4"),": User-Submission approved"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 4 Discription"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"BeReal bot receives the approval decision"),(0,o.kt)("li",{parentName:"ol"},"BeReal bot posts the image with the caption and notifies the user"),(0,o.kt)("li",{parentName:"ol"},"BeReal bot logs emoji reactions, threaded replies, and comments from the community"),(0,o.kt)("li",{parentName:"ol"},"BeReal bot sends logs to the server"))),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    participant WhatchaDoinBot as WhatchaDoin Bot\n    participant Moderators as Moderators\n    participant User as Discord User\n    participant Server as Discord Server\n\n    Moderators --\x3e> WhatchaDoinBot: Approval decision\n    WhatchaDoinBot ->> WhatchaDoinBot: Process approval decision\n    WhatchaDoinBot ->> WhatchaDoinBot: Retrieve image and caption\n    WhatchaDoinBot ->> WhatchaDoinBot: Notify user\n    WhatchaDoinBot ->> User: Post image with caption\n    User ->> Server: Post image with caption\n    User ->> User: React with emoji, thread replies, and comment\n    WhatchaDoinBot ->> WhatchaDoinBot: Log emoji reactions, threaded replies, and comments\n    WhatchaDoinBot ->> Server: Send logs\n"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Case #5"),": User\u2019s submission is denied"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 5 Discription"),"1. User receives a notification that the post was not approved and is asked to resubmit with feedback 2. User resubmits the image 3. User receives a notification that the post was approved and it was posted"),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    participant User as Discord User\n    participant WhatchaDoinBot as WhatchaDoin Bot\n    participant Moderator as Moderator\n\n    User ->> WhatchaDoinBot: Receives a notification that the post was not approved\n    WhatchaDoinBot --\x3e> User: Notifies the user to resubmit the image with feedback\n    User ->> User: Resubmits the image with necessary changes\n    WhatchaDoinBot ->> Moderator: Notifies the moderator about the resubmission\n    Moderator --\x3e> WhatchaDoinBot: Reviews the resubmitted image\n    Moderator --\x3e> WhatchaDoinBot: Approves the resubmitted image\n    WhatchaDoinBot --\x3e> User: Notifies the user that the post was approved and posted\n"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Case #6"),": User Reacts to a New Post Notification"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 6 Discription"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A user in the Discord community is notified by the BeReal bot that another user has posted a response to a prompt."),(0,o.kt)("li",{parentName:"ol"},"User opens Discord to view the response in the Discord community channel"),(0,o.kt)("li",{parentName:"ol"},"User interacts with the post by leaving a comment or a reaction(likes, emojis, etc)"))),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    participant User as Discord User\n    participant WhatchaDoinBot as WhatchaDoin Bot\n    participant Community as Discord Community\n\n    activate User\n    User ->> WhatchaDoinBot: Receives a new post notification\n    User ->> Discord: Opens Discord to view the response\n    WhatchaDoinBot --\x3e> User: Displays the new post in the Discord channel\n    User ->> WhatchaDoinBot: Interacts with the post (e.g., leaves a comment or reacts with emojis)\n    WhatchaDoinBot ->> Community: Updates the post with user interactions\n    Community --\x3e> WhatchaDoinBot: Views reactions and comments on the post\n    WhatchaDoinBot ->> WhatchaDoinBot: Collects data on reactions and comments\n    deactivate User\n"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Case #7"),": User ignores New Post Notification"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 7 Discription"),"1. A user in the Discord community goes to the settings of the BeReal bot 2. User chooses an option to turn off new post notifications. 3. The user is no longer sent another post notification."),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    participant User as Discord User\n    participant DiscordInterface as Discord Interface\n    participant WhatchaDoinBot as WhatchaDoin Bot\n    participant NotificationSettings as Notification Settings\n\n    User ->> DiscordInterface: Opens WhatchaDoin Bot settings\n    DiscordInterface --\x3e> User: Notification viewed\n    User ->> DiscordInterface: Accesses Settings\n    DiscordInterface ->> NotificationSettings: Turn Off Notification settings\n    NotificationSettings --\x3e> WhatchaDoinBot: Sends updated notification settings\n    WhatchaDoinBot --\x3e> DiscordInterface: Forwards the updated settings (OFF)\n    DiscordInterface --\x3e> User: Sent the new notification settings\n    Note over DiscordInterface: User views notifications\n"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Case #8"),": Moderator Accesses Reaction Data in Database"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 8 Discription"),"Normal Flow:",(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Moderator logs into Discord"),(0,o.kt)("li",{parentName:"ol"},"Moderator runs a command to request reaction data in csv format"),(0,o.kt)("li",{parentName:"ol"},"Moderator exports reaction data for further analysis, if needed"))),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    participant Moderator as Moderator\n    participant Discord as Discord Server\n    participant WhatchaDoinBot as WhatchaDoin Bot\n    participant Database as Configuration Database\n\n    Moderator ->> Discord: Log into Discord\n    activate Discord\n    Moderator ->> Discord: Run command to request reaction data in CSV format\n    Discord ->> WhatchaDoinBot: Send data view command\n    WhatchaDoinBot ->> Database: Retrieve reaction data\n    activate WhatchaDoinBot\n    Database --\x3e> WhatchaDoinBot: Reaction data\n    WhatchaDoinBot --\x3e> Discord: Provide reaction data\n    Discord --\x3e> Moderator: Display reaction data\n    deactivate WhatchaDoinBot\n    Moderator ->> Moderator: Exports reaction data for further analysis (if needed)\n    deactivate Discord\n"}),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 8 Alternate Discription"),"Alternate Flow:",(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Moderator logs into Discord"),(0,o.kt)("li",{parentName:"ol"},"Moderator runs a command to see reaction data"),(0,o.kt)("li",{parentName:"ol"},"Moderator receives data visualizations from bot"))),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    participant Moderator as Moderator\n    participant Discord as Discord Server\n    participant WhatchaDoinBot as WhatchaDoin Bot\n    participant Database as Configuration Database\n\n    Moderator ->> Discord: Log into Discord\n    activate Discord\n    Moderator ->> Discord: Run command to request reaction data in CSV format\n    Discord ->> WhatchaDoinBot: Send data view command\n    WhatchaDoinBot ->> Database: Retrieve reaction data\n    activate WhatchaDoinBot\n    Database --\x3e> WhatchaDoinBot: Reaction data in CSV format\n    WhatchaDoinBot --\x3e> Discord: Provide reaction data in CSV format\n    Discord --\x3e> Moderator: Display reaction data CSV\n    deactivate WhatchaDoinBot\n    Moderator ->> Moderator: Exports reaction data for further analysis (if needed)\n    deactivate Discord\n"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158246744417640588/image.png?ex=651b8cd7&is=651a3b57&hm=82005351873047d440493d7523197f984992051a6aee5cebcfba722b27dddc51&",alt:"Sequence Diagram 9"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158245639008817212/Screen_Shot_2023-10-01_at_11.34.34_PM.png?ex=651b8bcf&is=651a3a4f&hm=5b059721fd6e6a0fd52f4dc157ebf12eac0d255e54b4798ee34e8ac07f38d616&",alt:"Sequence Diagram 10"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158245675163734056/Screen_Shot_2023-10-01_at_11.34.45_PM.png?ex=651b8bd8&is=651a3a58&hm=7a1811a5cce04fe5100a891d4a4a89bca843f9cebf120e10a66cb7b74b3e298a&",alt:"Sequence Diagram 11"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158245708969811978/Screen_Shot_2023-10-01_at_11.34.53_PM.png?ex=651b8be0&is=651a3a60&hm=ea1ae6eebd6fdb5bce2dec8cd0e381bfd76e20541e8c73b85a343c59da5cd075&",alt:"Sequence Diagram 11 Alt"})))}d.isMDXComponent=!0}}]);