"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3961],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var n=a(7294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var c=n.createContext({}),l=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},d=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},h="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),h=l(a),u=o,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||i;return a?n.createElement(m,r(r({ref:e},d),{},{components:a})):n.createElement(m,r({ref:e},d))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[h]="string"==typeof t?t:o,r[1]=s;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5531:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const i={sidebar_position:1},r="WhatchaDoin Bot Design Document",s={unversionedId:"system-architecture/design",id:"system-architecture/design",title:"WhatchaDoin Bot Design Document",description:"Components",source:"@site/docs/system-architecture/design.md",sourceDirName:"system-architecture",slug:"/system-architecture/design",permalink:"/project-bereal-meets-slack/docs/system-architecture/design",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-bereal-meets-slack/edit/main/documentation/docs/system-architecture/design.md",tags:[],version:"current",lastUpdatedBy:"Tara Feeley",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-bereal-meets-slack/docs/category/system-architecture"},next:{title:"Development Environment",permalink:"/project-bereal-meets-slack/docs/system-architecture/development-environment"}},c={},l=[{value:"Components",id:"components",level:2},{value:"Chat Application",id:"chat-application",level:3},{value:"WhatchaDoin Bot",id:"whatchadoin-bot",level:3},{value:"Google Cloud Web Server",id:"google-cloud-web-server",level:3},{value:"Google Firebase Database",id:"google-firebase-database",level:3},{value:"Class Diagram",id:"class-diagram",level:2},{value:"WhatchaDoin Bot",id:"whatchadoin-bot-1",level:2},{value:"Algorithms",id:"algorithms",level:2},{value:"Database Diagrams",id:"database-diagrams",level:2},{value:"Sequence Diagrams",id:"sequence-diagrams",level:2}],d={toc:l};function h(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"whatchadoin-bot-design-document"},"WhatchaDoin Bot Design Document"),(0,o.kt)("h2",{id:"components"},"Components"),(0,o.kt)("h3",{id:"chat-application"},"Chat Application"),(0,o.kt)("p",null,"The chat application acts as both the bot's user portal and the bot's running environment. The chat application facilitates user interaction with the bot and allows it to act like a pseudo-user that can post and interact with messages. There will be a level of UI/UX design for the bot in Discord using both its API & libraries for command and interaction formatting as well as a block kit for formatting of modals, popups, and responses. The application will also act as the display for all data visualization that moderators ask for."),(0,o.kt)("h3",{id:"whatchadoin-bot"},"WhatchaDoin Bot"),(0,o.kt)("p",null,"The bot itself is a chatbot that is hosted on Google Cloud via cloud run, as previously mentioned it will act as a pseudo-user posting messages and accepting and reacting to user responses with triggers. It interfaces with the Discord API to send messages and with the database to store and pull user reaction data. When dealing with moderation the bot will opt to DM moderators and generate either popups, modals, or interactive actions for approvals, data requests, or moderation features. When logging data the bot will leverage the server to send data to Firebase for storage."),(0,o.kt)("h3",{id:"google-cloud-web-server"},"Google Cloud Web Server"),(0,o.kt)("p",null,"The Google Cloud web server provides a hosting point for the bot using the cloud run service. The server allows for two things, bot uptime and bot access to the database, through the server, the bot can make calls to the Firebase database both for logging and for access to data. The web server will also provide containers that host the Firebase database for reaction data. The web server also will be responsible for formatting data into visualizations when requested by the bot via a user."),(0,o.kt)("h3",{id:"google-firebase-database"},"Google Firebase Database"),(0,o.kt)("p",null,"The Firebase database is contained in the cloud web server and acts as a means of storing and logging all reaction data. The database will contain data about prompts, approved submitted images, time to post, emoji reactions, threaded replies, and several comments. All of this data will be exportable as a CSV or in a visualization done by the host web server."),(0,o.kt)("h2",{id:"class-diagram"},"Class Diagram"),(0,o.kt)("mermaid",{value:'classDiagram\nclass WhatchaDoinBot{\n  + String botName\n  + token botToken\n  - int startHour\n  - int endHour\n  - String [] promptList\n  - String [] blackList\n  - activeEvents()\n  - activeHourUtils()\n  - blacklistutils()\n  - commandregistrar()\n  - dataGraph()\n  - dbconn()\n  - getRandom()\n  - handleUserSubmissions()\n  - helpUtils()\n  - notifyMods()\n  - postUtils()\n  - promptUtils()\n  - saveDB()\n  - setDefualtChannelUtils()\n}\n\nclass Timer {\n  - startTime: number\n  - endTime: number\n  + constructor()\n  + start(): void\n  + stop(): number\n  + isRunning(): boolean\n}\n\nclass PromptTimeout {\n  - client\n  - activePrompts: Map\n  - repromptTimeouts: Map\n  + setupPrompt(channelId, message, user, originalPrompt)\n  + setPromptTimeout(promptId, duration, message, user, originalPrompt, channelId)\n  + handleReprompt(user, originalPrompt, channelId, originalMessage)\n}\n\nclass Prompt {\n  - prompt: string\n  - userId: string\n  - channel: string\n  + isUserIdMatch(userId: string): boolean\n  + setPrompt(msg: string): void\n  + setUserId(userId: string): void\n  + setChannel(channel: string): void\n  + getPrompt(): string\n  + getUserId(): string\n  + getChannel(): string\n}\n\nWhatchaDoinBot "1" --\x3e "*" Timer\nWhatchaDoinBot "1" --\x3e "*" PromptTimeout\nWhatchaDoinBot "1" --\x3e "*" Prompt'}),(0,o.kt)("h2",{id:"whatchadoin-bot-1"},"WhatchaDoin Bot"),(0,o.kt)("p",null,"This class will contain methods that allow the bot to interact with the users and moderator"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Fields")),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-botName"),": Display name for the bot and how users and other members of the platform will recognize and refer to the bot"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"- botToken"),": Unique access token or authentication key that allows the bot to connect to the platform\u2019s API and perform actions"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"- startHour"),": Hour of when the bot will start "),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"- endHour"),": Hour of when bot will end"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"- promptList"),": List of all the prompts the bot can choose from"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"- blackList"),": List of users on the blacklist"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Methods")),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-getCSV()"),": Gets the CSV fields"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-getDatavis()"),": Checks for CSV fields by parsing lines from a file"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-getOperatingHours()"),": Gets the operation hours of the bot"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-sendPrompt()"),": Sends a prompt to a user"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-getResponseDelay()"),": Gets the time it takes when the bot has to resend a prompt to the user"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-getResponse()"),": gets response from the user"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-setOperatingHours(int newStart, int newEnd)"),": Sets the operating hours"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-generateRandomPromptTime()"),": Generates a random time for when prompts are assigned"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-generateRandomPrompt()"),": Generates a random prompt"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-getPromptList()"),": Gets the prompt list"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-setPromptList()"),": Sets the prompt list "),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-getResponsePostComment()"),": Gets and stores the response of a post comment"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-setReponsePostComment()"),": Sets a response of a post comment"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-getBlackList()"),": Shows the blacklist"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-addUserToBlackList()"),": Adds users to the blacklist"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-removeUserFromBlackList()"),": Removes a user from the blacklist"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-selectRandomUserToPrompt()"),": Selects a random user to assign a prompt to"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-getApprovalStatus()"),": Gets the approval status after sending a user response to the moderator"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-setApprovalStatus()"),": Sets the approval status after sending a user response to a moderator"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-sendToReponseToMod()"),":  Sends a user response to a prompt to a moderator"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-postReponseToChannel()"),": Posts the response of a moderator to a user to a channel"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-deleteOriginalPromptFromChannel()"),": Deletes a prompt from a certain channel"),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"-setaUsersAlreadyPromptedList()"),": Sets a list of users that were already prompted by the bot"),(0,o.kt)("h2",{id:"algorithms"},"Algorithms"),(0,o.kt)("h2",{id:"database-diagrams"},"Database Diagrams"),(0,o.kt)("mermaid",{value:'erDiagram\n    PROMPTS ||--|{ RESPONSES : "includes"\n\n    PROMPTS {\n        int prompt_id PK "Unique identifier for the prompt"\n        varchar prompt_text "Text of the prompt"\n        bigint guild_id FK "References the guild"\n        bigint channel_id FK "References the channel"\n    }\n\n    RESPONSES {\n        int response_id PK "Unique identifier for the response"\n        varchar response_image "URL of the response image"\n        int num_reactions "Number of reactions to the response"\n        int time_to_respond "Time taken to respond"\n        bigint message_id FK "References the message"\n        bigint prompt_id FK "References the prompt"\n        bigint user_id FK "References the user"\n        bigint guild_id FK "References the guild"\n    }\n\n    OPERATING_HOURS {\n        bigint guild_id PK "Unique identifier for the guild"\n        time start_time "Start time for bot activity"\n        time end_time "End time for bot activity"\n    }\n\n    BLACKLIST {\n        int blacklist_id PK "Unique identifier for the blacklist entry"\n        bigint user_id "References the user"\n        bigint guild_id "References the guild"\n    }\n\n    SETTINGS {\n        bigint submission_channel_id PK "Unique identifier for the submission channel"\n        bigint guild_id PK "Unique identifier for the guild"\n    }'}),(0,o.kt)("h2",{id:"sequence-diagrams"},"Sequence Diagrams"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Case #1"),": Owner of the Discord Server Configures the WhatchaDoin bot"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 1 Discription"),(0,o.kt)("p",null,"1. Owner signs in to Discord."),(0,o.kt)("p",null,'2. Owner opens the server "Preferences".'),(0,o.kt)("p",null,'3. Owner selects "Apps and Integrations" and installs the WhatchaDoin bot.'),(0,o.kt)("p",null,"4. Owner assigns roles and privileges to users in the community."),(0,o.kt)("p",null,"5. Owner defines moderation and content guidelines."),(0,o.kt)("p",null,"6. Owner defines type of prompts for WhatchaDoin bot to send properly suit the culture and vibe of their community."),(0,o.kt)("p",null,"7. Owner configures the schedule for WhatchaDoin bot, defining the hours when the it will send prompts."),(0,o.kt)("p",null,"8. Owner sets the duration for prompt responses to remain in the chat."),(0,o.kt)("p",null,"9. Owner sets the amount of time users have to respond to prompt notification."),(0,o.kt)("p",null,"10. Owner saves the configuration settings.")),(0,o.kt)("mermaid",{value:'\nsequenceDiagram\n    actor Owner as Owner\n    participant Discord as Discord Server\n    participant WhatchaDoinBot as WhatchaDoin Bot\n    participant Database as Configuration Database\n\n    Owner ->> Discord: Open server "Preferences"\n    activate Owner\n    activate Discord\n    Owner ->> Discord: Select "Apps and Integrations"\n    Discord ->> WhatchaDoinBot: Install WhatchaDoin bot\n    deactivate Discord\n    activate WhatchaDoinBot\n    Owner ->> WhatchaDoinBot: Assign roles and privileges\n    Owner ->> WhatchaDoinBot: Define moderation and content guidelines\n    Owner ->> WhatchaDoinBot: Define prompts culture and vibe\n    Owner ->> WhatchaDoinBot: Configure schedule for prompts\n    Owner ->> WhatchaDoinBot: Set duration for prompt responses\n    Owner ->> WhatchaDoinBot: Set response time limit\n    WhatchaDoinBot ->> Database: Save configuration settings\n    deactivate WhatchaDoinBot\n    activate Database\n    Database --\x3e> WhatchaDoinBot: Confirmation\n    deactivate Database\n    WhatchaDoinBot --\x3e> Owner: Configuration settings saved\n    deactivate Owner\n'}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Case #2"),": User Responds to a WhatchaDoin bot Prompt"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 2 Discription"),(0,o.kt)("p",null,"1. User in the Discord community receives a notification at a random time of day that they have received a prompt from the WhatchaDoinBot bot."),(0,o.kt)("p",null,"2. User opens Discord."),(0,o.kt)("p",null,"3. User responds to the random prompt by taking a picture and uploading it."),(0,o.kt)("p",null,"4. User replies to the WhatchaDoinBot bot with their response to the prompt, which is sent to the moderator."),(0,o.kt)("p",null,"5. User waits for approval status from the WhatchaDoinBot bot.")),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    actor User as Discord User\n    participant Discord as Discord\n    participant WhatchaDoinBot as WhatchaDoin Bot\n    participant Moderator as Moderator\n\n    WhatchaDoinBot ->> WhatchaDoinBot: \n    WhatchaDoinBot ->> User: Receive WhatchaDoin bot prompt notification\n    activate WhatchaDoinBot\n    activate User\n    User --\x3e> WhatchaDoinBot: Respond to prompt by taking a picture\n    deactivate WhatchaDoinBot\n    User --\x3e> WhatchaDoinBot: Reply to the WhatchaDoin bot with the image\n    activate WhatchaDoinBot\n    WhatchaDoinBot ->> Moderator: Send user's response to moderator\n    activate Moderator\n    Moderator --\x3e> WhatchaDoinBot: Send approval status\n    deactivate Moderator\n    WhatchaDoinBot ->> User: Display approval status\n    deactivate WhatchaDoinBot\n    deactivate User\n"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Case #3"),": User Does Not Respond to a WhatchaDoin bot Prompt"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 3 Discription"),(0,o.kt)("p",null,"1. The WhatchaDoinBot bot waits until timeout."),(0,o.kt)("p",null,"2. The WhatchaDoinBot bot sends a notification to the Discord user."),(0,o.kt)("p",null,"3. WhatchaDoinBot bot recognizes the user\u2019s failure to respond, and sends a reminder notification to the users about the missed prompt.")),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    actor User as Discord User\n    participant WhatchaDoinBot as WhatchaDoin Bot\n\n    activate WhatchaDoinBot\n    WhatchaDoinBot ->> WhatchaDoinBot: Wait until timeout\n    WhatchaDoinBot ->> User: Send a notification\n    activate User\n    activate WhatchaDoinBot\n    User ->> User: Receive notification\n    User --\x3e> WhatchaDoinBot: Acknowledge notification\n    WhatchaDoinBot ->> WhatchaDoinBot: Recognize user's failure to respond\n    WhatchaDoinBot ->> User: Send a reminder notification\n    deactivate WhatchaDoinBot\n    deactivate User\n\n"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Case #4"),": User-Submission approved"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 4 Discription"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"WhatchaDoinBot bot receives the approval decision."),(0,o.kt)("li",{parentName:"ol"},"WhatchaDoinBot bot posts the image with the caption and notifies the user."),(0,o.kt)("li",{parentName:"ol"},"WhatchaDoinBot bot logs emoji reactions, threaded replies, and comments from the community."),(0,o.kt)("li",{parentName:"ol"},"WhatchaDoinBot bot sends logs to the server."))),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    actor User as Discord User\n    participant Moderators as Moderators\n    participant WhatchaDoinBot as WhatchaDoin Bot\n    participant Server as Discord Server\n\n    Moderators --\x3e> WhatchaDoinBot: Approval decision\n    activate User\n    activate WhatchaDoinBot\n    WhatchaDoinBot ->> WhatchaDoinBot: Process approval decision\n    WhatchaDoinBot ->> WhatchaDoinBot: Retrieve image and caption\n    WhatchaDoinBot ->> User: Post approved\n    activate User\n    WhatchaDoinBot ->> Server: Post image with caption\n    deactivate WhatchaDoinBot\n    User --\x3e> Server: React with emoji, thread replies, and comment\n    deactivate User\n    WhatchaDoinBot ->> WhatchaDoinBot: Log emoji reactions, threaded replies, and comments\n    WhatchaDoinBot ->> Server: Send logs\n"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Case #5"),": User\u2019s submission is denied"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 5 Discription"),(0,o.kt)("p",null,"1. User receives a notification that the post was not approved and is asked to resubmit with feedback."),(0,o.kt)("p",null,"2. User resubmits the image."),(0,o.kt)("p",null,"3. User receives a notification that the post was approved and it was posted.")),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    actor User as Discord User\n    participant WhatchaDoinBot as WhatchaDoin Bot\n    participant Moderator as Moderator\n\n    WhatchaDoinBot ->> User: Receives a notification that the post was not approved\n    activate User\n    activate WhatchaDoinBot\n    WhatchaDoinBot ->> User: Notifies the user to resubmit the image with feedback\n    User --\x3e> WhatchaDoinBot: Resubmits the image with necessary changes\n    deactivate WhatchaDoinBot\n    WhatchaDoinBot ->> Moderator: Notifies the moderator about the resubmission\n    activate WhatchaDoinBot\n    activate Moderator\n    Moderator --\x3e> WhatchaDoinBot: Reviews the resubmitted image\n    Moderator --\x3e> WhatchaDoinBot: Approves the resubmitted image\n    deactivate Moderator\n    WhatchaDoinBot ->> User: Notifies the user that the post was approved and posted\n    deactivate WhatchaDoinBot\n    deactivate User\n"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Case #6"),": User Reacts to a New Post Notification"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 6 Discription"),(0,o.kt)("p",null,"1. A user in the Discord community is notified by the WhatchaDoinBot bot that another user has posted a response to a prompt."),(0,o.kt)("p",null,"2. User opens Discord to view the response in the Discord community channel."),(0,o.kt)("p",null,"3. User interacts with the post by leaving a comment or a reaction(likes, emojis, etc).")),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    actor User as Discord User\n    participant WhatchaDoinBot as WhatchaDoin Bot\n    participant Community as Discord Community\n\n    WhatchaDoinBot ->> User: Receives a new post notification\n    activate User\n    activate WhatchaDoinBot\n    WhatchaDoinBot ->> User: Displays the new post in the Discord channel\n    deactivate WhatchaDoinBot\n    User ->> Discord: Opens Discord to view the response\n    User --\x3e> Community: Interacts with the post (e.g., leaves a comment or reacts with emojis)\n    activate Community\n    Community ->> WhatchaDoinBot: Views reactions and comments on the post\n    deactivate Community\n    WhatchaDoinBot ->> WhatchaDoinBot: Collects data on reactions and comments\n    deactivate User\n"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Case #7"),": User ignores New Post Notification"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 7 Discription"),(0,o.kt)("p",null,"1. A user in the Discord community goes to the settings of the WhatchaDoinBot bot."),(0,o.kt)("p",null,"2. User chooses an option to turn off new post notifications."),(0,o.kt)("p",null,"3. The user is no longer sent another post notification.")),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    actor User as Discord User\n    participant DiscordInterface as Discord Interface\n    participant WhatchaDoinBot as WhatchaDoin Bot\n    participant NotificationSettings as Notification Settings\n\n    User ->> DiscordInterface: Opens WhatchaDoin Bot settings\n    activate User\n    activate DiscordInterface\n    DiscordInterface --\x3e> User: Notification viewed\n    deactivate DiscordInterface\n    User ->> DiscordInterface: Accesses Settings\n    activate DiscordInterface\n    DiscordInterface ->> NotificationSettings: Turn Off Notification settings\n    activate NotificationSettings\n    NotificationSettings --\x3e> WhatchaDoinBot: Sends updated notification settings\n    activate WhatchaDoinBot\n    deactivate NotificationSettings\n    WhatchaDoinBot --\x3e> DiscordInterface: Forwards the updated settings (OFF)\n    deactivate WhatchaDoinBot\n    DiscordInterface --\x3e> User: Sent the new notification settings\n    deactivate DiscordInterface\n    deactivate User\n    Note over DiscordInterface: User views notifications\n"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Case #8"),": Moderator Accesses Reaction Data in Database"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 8 Discription"),"Normal Flow:",(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Moderator logs into Discord."),(0,o.kt)("li",{parentName:"ol"},"Moderator runs a command to request reaction data in csv format."),(0,o.kt)("li",{parentName:"ol"},"Moderator exports reaction data for further analysis, if needed."))),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    actor Moderator as Moderator\n    participant Discord as Discord Server\n    participant WhatchaDoinBot as WhatchaDoin Bot\n    participant Database as Configuration Database\n\n    Moderator ->> Discord: Log into Discord\n    activate Moderator\n    activate Discord\n    Moderator ->> Discord: Run command to request reaction data in CSV format\n    Discord ->> WhatchaDoinBot: Send data view command\n    activate WhatchaDoinBot\n    WhatchaDoinBot ->> Database: Retrieve reaction data\n    activate Database\n    Database --\x3e> WhatchaDoinBot: Reaction data\n    deactivate Database\n    WhatchaDoinBot --\x3e> Discord: Provide reaction data\n    deactivate WhatchaDoinBot\n    Discord --\x3e> Moderator: Display reaction data\n    deactivate Discord\n    Moderator ->> Moderator: Exports reaction data for further analysis (if needed)\n    deactivate Moderator\n"}),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 8 Alternate Discription"),"Alternate Flow:",(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Moderator logs into Discord."),(0,o.kt)("li",{parentName:"ol"},"Moderator runs a command to see reaction data."),(0,o.kt)("li",{parentName:"ol"},"Moderator receives data visualizations from bot."))),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    actor Moderator as Moderator\n    participant Discord as Discord Server\n    participant WhatchaDoinBot as WhatchaDoin Bot\n    participant Database as Configuration Database\n\n    Moderator ->> Discord: Log into Discord\n    activate Moderator\n    activate Discord\n    Moderator ->> Discord: Run command to request reaction data in Graph format\n    Discord ->> WhatchaDoinBot: Send data view command\n    activate WhatchaDoinBot\n    WhatchaDoinBot ->> Database: Retrieve reaction data\n    activate Database\n    Database --\x3e> WhatchaDoinBot: Reaction data in CSV format\n    deactivate Database\n    WhatchaDoinBot --\x3e> Discord: Provide reaction data in CSV format\n    deactivate WhatchaDoinBot\n    Discord --\x3e> Moderator: Translate reaction data into graph form\n    deactivate Discord\n    Moderator ->> Moderator: Exports more reaction data for further analysis (if needed)\n    deactivate Moderator\n"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Case #9"),": Moderator makes approval status decision"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 9 Discription"),(0,o.kt)("p",null,"1. Moderator receives notification about a user submission."),(0,o.kt)("p",null,"2. Moderator opens Discord."),(0,o.kt)("p",null,"3. Moderator reviews submission using predefined criteria from community guidelines."),(0,o.kt)("p",null,"4. Based on guidelines, moderators approves or rejects submissions."),(0,o.kt)("p",null,"5. Moderator marks submissions as \u201cApproved\u201d or \u201cDenied\u201d to bot.")),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    actor Moderator as Moderator\n    participant Discord as Discord Server\n    participant WhatchaDoinBot as WhatchaDoin Bot\n\n    WhatchaDoinBot --\x3e> Discord: Sends user submission notification\n    Discord --\x3e> Moderator: Sends user submission notification\n    Moderator ->> Discord: Log into Discord\n    activate Moderator\n    activate Discord\n    Discord --\x3e> Moderator: Shows users submission\n    deactivate Discord\n    Moderator ->> Discord: Fetches community guidelines to based submission review\n    activate Discord\n    Discord --\x3e> Moderator: Provides predefined criteria\n    deactivate Discord\n    Moderator ->> Discord: Marks submission with appproed decision\n    activate Discord\n    Discord ->> WhatchaDoinBot: Sends approeved decision to post\n    activate WhatchaDoinBot\n    WhatchaDoinBot --\x3e> Discord: Posting approved post to server\n    deactivate WhatchaDoinBot\n    Discord --\x3e> Moderator: Notifying Moderator about posting\n    deactivate Discord\n    deactivate Moderator\n"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Case #10"),": WhatchaDoin Bot bans user from prompting after mupltiple denails"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 10 Discription"),(0,o.kt)("p",null,"1. WhatchaDoinBot counts DENIALS (strikes) recieved by users within the Discord community."),(0,o.kt)("p",null,"2. WhatchaDoinBot bot sends a warning notification to the user about strikes."),(0,o.kt)("p",null,"3. WhatchaDoinBot bot notifies moderator about the DENIALS and how close they are from the blacklist."),(0,o.kt)("p",null,"4. If the user continues to recieve DENIALS, WhatchaDoinBot adds the user to the blacklist."),(0,o.kt)("p",null,"5. WhatchaDoinBot bot logs the action to blacklist log.")),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    actor Moderator as Moderator\n    participant WhatchaDoinBot as WhatchaDoin Bot\n    participant User as User\n    participant Discord as Discord Server\n    participant Database as Database\n\n    Moderator --\x3e> WhatchaDoinBot: Sends commands to report blacklist\n    activate Moderator\n    activate WhatchaDoinBot\n    WhatchaDoinBot ->> Database: Fetches user denail count\n    deactivate WhatchaDoinBot\n    activate Database\n    Database ->> Discord: Fetches user denails count\n    deactivate Database\n    activate Discord\n    Discord ->> WhatchaDoinBot: Sends user denail count for specific server\n    activate WhatchaDoinBot\n    deactivate Discord\n    WhatchaDoinBot ->> User: Sends user warning notification about strikes\n    WhatchaDoinBot ->> Moderator: Sends warning notification about user strikes\n    deactivate WhatchaDoinBot\n    Moderator --\x3e> User: Denies post another time\n    deactivate Moderator\n    activate WhatchaDoinBot\n    WhatchaDoinBot ->> WhatchaDoinBot: Logs another denial for specific user\n    WhatchaDoinBot --\x3e> Database: Adds user to the blacklist\n    WhatchaDoinBot ->> User: Notify about blacklist addition\n    deactivate WhatchaDoinBot\n"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Case #11"),":  Moderator manages blacklist"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 11 Discription"),"Normal Flow:",(0,o.kt)("p",null,"1. Moderator chooses to add user to blacklist."),(0,o.kt)("p",null,"2. Moderator runs a command to view the blacklist and sees added user.")),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    actor Moderator as Moderator\n    participant Discord as Discord Server\n    participant WhatchaDoinBot as WhatchaDoin Bot\n    participant Database as Database\n\n    Moderator ->> Database: Add specific user to Blacklist\n    activate Moderator\n    Moderator --\x3e> Discord: Run command to view Blacklist\n    activate Discord\n    Discord ->> WhatchaDoinBot: Fetch specific server Blacklist\n    activate WhatchaDoinBot\n    WhatchaDoinBot ->> Database: Query Blacklist\n    activate Database\n    Database --\x3e> WhatchaDoinBot: Send server specific Blacklist\n    deactivate Database\n    WhatchaDoinBot --\x3e> Discord: Send Blacklist\n    deactivate WhatchaDoinBot\n    Discord --\x3e> Moderator: Display Blacklist\n    deactivate Discord\n    deactivate Moderator\n\n"}),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Use Case 11 Alternate Discription"),"Alternate Flow:",(0,o.kt)("p",null,"1. Moderator chooses not to add user to blacklist."),(0,o.kt)("p",null,"2. Moderator views the blacklist and sees another user they want to remove."),(0,o.kt)("p",null,"3. Moderator runs a command to remove the user from the blacklist."),(0,o.kt)("p",null,"4. Moderator views the blacklist and no longer sees removed user.")),(0,o.kt)("mermaid",{value:"\nsequenceDiagram\n    actor Moderator as Moderator\n    participant Discord as Discord Server\n    participant WhatchaDoinBot as WhatchaDoin Bot\n    participant Database as Database\n\n    Moderator ->> Database: Does not add specific user to Blacklist\n    activate Moderator\n    Moderator --\x3e> Discord: Run command to view Blacklist\n    activate Discord\n    Discord ->> WhatchaDoinBot: Fetch specific server Blacklist\n    activate WhatchaDoinBot\n    WhatchaDoinBot ->> Database: Query Blacklist\n    activate Database\n    Database --\x3e> WhatchaDoinBot: Send server specific Blacklist\n    deactivate Database\n    WhatchaDoinBot --\x3e> Discord: Send Blacklist\n    deactivate WhatchaDoinBot\n    Discord --\x3e> Moderator: Display Blacklist\n    deactivate Discord\n    deactivate Moderator\n\n    Moderator --\x3e> Discord: Run command to remove a user from Blacklist\n    activate Moderator\n    activate Discord\n    Discord ->> WhatchaDoinBot: Send command to remove specific user\n    activate WhatchaDoinBot\n    WhatchaDoinBot ->> Database: Remove user from Blacklist\n    activate Database\n    Database --\x3e> WhatchaDoinBot: confirm removal of user\n    deactivate Database\n    WhatchaDoinBot --\x3e> Discord: Send confirmation of removal of user\n    deactivate WhatchaDoinBot\n    Discord --\x3e> Moderator: Display new Blacklist\n    deactivate Discord\n    deactivate Moderator\n\n"}),(0,o.kt)("br",null),(0,o.kt)("br",null))}h.isMDXComponent=!0}}]);