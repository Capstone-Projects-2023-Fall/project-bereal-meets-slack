"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:1},o="BeReal Bot Design Document",i={unversionedId:"system-architecture/design",id:"system-architecture/design",title:"BeReal Bot Design Document",description:"Components",source:"@site/docs/system-architecture/design.md",sourceDirName:"system-architecture",slug:"/system-architecture/design",permalink:"/project-bereal-meets-slack/docs/system-architecture/design",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-bereal-meets-slack/edit/main/documentation/docs/system-architecture/design.md",tags:[],version:"current",lastUpdatedBy:"NTRachel",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-bereal-meets-slack/docs/category/system-architecture"},next:{title:"API Specification",permalink:"/project-bereal-meets-slack/docs/category/api-specification"}},l={},p=[{value:"Components",id:"components",level:2},{value:"Chat Application",id:"chat-application",level:3},{value:"BeReal Bot",id:"bereal-bot",level:3},{value:"Google Cloud Webserver",id:"google-cloud-webserver",level:3},{value:"Google Firebase Database",id:"google-firebase-database",level:3},{value:"Class Diagram",id:"class-diagram",level:2},{value:"BeReal Bot",id:"bereal-bot-1",level:2},{value:"Algorithms",id:"algorithms",level:2},{value:"Database Diagrams",id:"database-diagrams",level:2},{value:"Sequence Diagrams",id:"sequence-diagrams",level:2},{value:"Document Requirements",id:"document-requirements",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bereal-bot-design-document"},"BeReal Bot Design Document"),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("h3",{id:"chat-application"},"Chat Application"),(0,r.kt)("p",null,"The chat application acts as both the user portal for the bot and as the running environment for the bot. The chat application facilitates user interaction with the bot and allows for it to act like a psuedo user that can post and interact with messages. There will be a level of UI/UX design for the bot in Discord using both its API & libraries for command and interaction formatting as well as block kit for formatting of modals, popups, and responses. The application will also act as the display for all data visualization that moderators ask for."),(0,r.kt)("h3",{id:"bereal-bot"},"BeReal Bot"),(0,r.kt)("p",null,"The bot itself is a chatbot that is hosted on Google Cloud via cloud run, as mentioned previous it will act as a pseudo user posting messages and accepting/reacting to user responses with triggers. It interfaces with the Discord API to send messages, and interfaces with the database to both store and pull user reaction data. When dealing with moderation the bot will opt to DM moderators and generate either popups, modals, or interfaceable actions for approvals, data requests, or moderation features. When logging data the bot will leverage the server to send data to firebase for storage."),(0,r.kt)("h3",{id:"google-cloud-webserver"},"Google Cloud Webserver"),(0,r.kt)("p",null,"The Google Cloud webserver provides a hosting point for the bot using the cloud run service. The server allows for two things, bot uptime and bot access to the database, through the server the bot can make calls to the firebase database both for logging and for acces of data. The webserver will also provide containers that host the firebase database for reaction data. The webserver will also be responsible for handling the formatting of data into visualizations when requested by the bot via a user."),(0,r.kt)("h3",{id:"google-firebase-database"},"Google Firebase Database"),(0,r.kt)("p",null,"The Firebase database is contained in the cloud webserver and acts as a means of storing and logging all reaction data. The database will contain data pertaining to prompts, approved submitted images, time to post, emoji reactions, threaded replies, and number of comments. All of this data will be exportable as a CSV or in a visualization done by the host webserver."),(0,r.kt)("h2",{id:"class-diagram"},"Class Diagram"),(0,r.kt)("mermaid",{value:"classDiagram\nwebServer --\x3e BeRealBot\nwebServer --\x3e database\nclass webServer{\n  + generateCSV(int startTime, int endTime)\n  + generateDataVis(int startTime, int endTime)\n}\nclass BeRealBot{\n  + String botName\n  + token botToken\n  - int startHour\n  - int endHour\n  - String [] promptList\n  - String [] blackList\n  - getCSV()\n  - getDatavis()\n  - getOperatingHours()\n  - sendPrompt()\n  - getResponseDelay()\n  - getResponse()\n  - setOperatingHours(int newStart, int newEnd)\n  - generateRandomPromptTime()\n  - generateRandomPrompt()\n  - getPromptList()\n  - setPromptList()\n  - getResponsePostComment()\n  - setReponsePostComment()\n  - getBlackList()\n  - addUserToBlackList()\n  - removeUserFromBlackList()\n  - selectRandomUserToPrompt()\n  - getApprovalStatus()\n  - setApprovalStatus()\n  - sendToReponseToMod()\n  - postReponseToChannel()\n  - deleteOriginalPromptFromChannel()\n  - setaUsersAlreadyPromptedList()\n}\nclass database{\n  + String Prompt\n  + String imageLink\n  + int numReactions\n  + int numReplies\n  + int timeToPost \n  + setUserRoles()\n  + setBotSettings()\n  + getBotSettings()\n  + updateTotalAverageTimeToPost()\n  + getReactionTS()\n  + getResponseTS()\n  + setPromptPostTS()\n  + updateUserTimeToPost()\n  + getUserTimeToPost()\n  + updateReactionsUsage()\n  + getReactionsUsage()\n  + updateUsersList()\n  + updateUserInfo()\n  + getUserInfo()\n  + createUser()\n  + getUser()\n\n}"}),(0,r.kt)("h2",{id:"bereal-bot-1"},"BeReal Bot"),(0,r.kt)("p",null,"This class will contain methods that allow the bot to interact with the users and moderator"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fields")),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-botName"),": Display name for the bot and how users and other members of the platform will recognize and refer to the bot"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"- botToken"),": Unique access token or authentication key that allows the bot to connect to the platform\u2019s API and perform actions"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"- startHour"),": Hour of when the bot will start "),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"- endHour"),": Hour of when bot will end"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"- promptList"),": List of all the prompts the bot can choose from"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"- blackList"),": List of users on the blacklist"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods")),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-getCSV()"),": Gets the CSV fields"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-getDatavis()"),": Checks for CSV fields by parsing lines from a file"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-getOperatingHours()"),": Gets the operation hours of the bot"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-sendPrompt()"),": Sends a prompt to a user"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-getResponseDelay()"),": Gets the time it takes when the bot has to resend a prompt to the user"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-getResponse()"),": gets response from the user"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-setOperatingHours(int newStart, int newEnd)"),": Sets the operating hours"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-generateRandomPromptTime()"),": Generates a random time for when prompts are assigned"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-generateRandomPrompt()"),": Generates a random prompt"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-getPromptList()"),": Gets the prompt list"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-setPromptList()"),": Sets the prompt list "),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-getResponsePostComment()"),": Gets and stores the response of a post comment"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-setReponsePostComment()"),": Sets a response of a post comment"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-getBlackList()"),": Shows the blacklist"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-addUserToBlackList()"),": Adds users to the blacklist"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-removeUserFromBlackList()"),": Removes a user from the blacklist"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-selectRandomUserToPrompt()"),": Selects a random user to assign a prompt to"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-getApprovalStatus()"),": Gets the approval status after sending a user response to the moderator"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-setApprovalStatus()"),": Sets the approval status after sending a user response to a moderator"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-sendToReponseToMod()"),":  Sends a user response to a prompt to a moderator"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-postReponseToChannel()"),": Posts the response of a moderator to a user to a channel"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-deleteOriginalPromptFromChannel()"),": Deletes a prompt from a certain channel"),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"-setaUsersAlreadyPromptedList()"),": Sets a list of users that were already prompted by the bot"),(0,r.kt)("h2",{id:"algorithms"},"Algorithms"),(0,r.kt)("h2",{id:"database-diagrams"},"Database Diagrams"),(0,r.kt)("mermaid",{value:'erDiagram\nPrompts {\n  Int prompt_id PK\n  String text\n}\n\nResponses {\n  Int response_id PK\n  Int numReaction\n  Int timetoRespond\n  Int prompt_id FK\n}\n\nPrompts ||--|{ Responses : ""\n'}),(0,r.kt)("h2",{id:"sequence-diagrams"},"Sequence Diagrams"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use Case #1"),": Owner of the Discord Server Configures the BeReal bot"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Use Case 1 Discription"),'1. Owner signs in to Discord. 2. Owner opens the server "Preferences". 3. Owner selects "Apps and Integrations" and installs the BeReal bot. 4. Owner assigns roles and privileges to users in the community. 5. Owner defines moderation and content guidelines. 6. Owner defines type of prompts for BeReal bot to send properly suit the culture and vibe of their community. 7. Owner configures the schedule for BeReal bot, defining the hours when the it will send prompts. 8. Owner sets the duration for prompt responses to remain in the chat. 9. Owner sets the amount of time users have to respond to prompt notification. 10. Owner saves the configuration settings.'),(0,r.kt)("mermaid",{value:'\nsequenceDiagram\n    participant Owner as Owner\n    participant Discord as Discord Server\n    participant BeRealBot as BeReal Bot\n    participant Database as Configuration Database\n\n    Owner ->> Discord: Open server "Preferences"\n    activate Discord\n    Owner ->> Discord: Select "Apps and Integrations"\n    Discord ->> BeRealBot: Install BeReal bot\n    deactivate Discord\n    activate BeRealBot\n    Owner ->> BeRealBot: Assign roles and privileges\n    Owner ->> BeRealBot: Define moderation and content guidelines\n    Owner ->> BeRealBot: Define prompts culture and vibe\n    Owner ->> BeRealBot: Configure schedule for prompts\n    Owner ->> BeRealBot: Set duration for prompt responses\n    Owner ->> BeRealBot: Set response time limit\n    BeRealBot ->> Database: Save configuration settings\n    deactivate BeRealBot\n    Database --\x3e> BeRealBot: Confirmation\n    activate Database\n    BeRealBot --\x3e> Owner: Configuration settings saved\n    deactivate Database\n'}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use Case #2"),": User Responds to a BeReal bot Prompt"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Use Case 2 Discription"),"1. User in the Discord community receives a notification at a random time of day that they have received a prompt from the BeReal bot 2. User opens Discord. 3. User responds to the random prompt by taking a picture and uploading it. 4. User replies to the BeReal bot with their response to the prompt, which is sent to the moderator. 5. User waits for approval status from the BeReal bot."),(0,r.kt)("mermaid",{value:"\nsequenceDiagram\n    participant User as Discord User\n    participant BeRealBot as BeReal Bot\n    participant Moderator as Moderator\n    participant Database as Response Database\n\n    User ->> User: Receive BeReal bot prompt notification\n    User ->> User: Respond to prompt by taking a picture\n    User ->> BeRealBot: Reply to the BeReal bot with the image\n    BeRealBot ->> Moderator: Send user's response to moderator\n    Moderator ->> Database: Review user's response\n    Database --\x3e> Moderator: Response approval status\n    Moderator --\x3e> BeRealBot: Send approval status\n    BeRealBot --\x3e> User: Display approval status\n"}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use Case #3"),": User Does Not Respond to a BeReal bot Prompt"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Use Case 3 Discription"),"1. The BeReal bot waits until timeout The BeReal bot sends a notification to the Discord user 2. BeReal bot recognizes the user\u2019s failure to respond, and sends a reminder notification to the users about the missed prompt."),(0,r.kt)("mermaid",{value:"\nsequenceDiagram\n    participant BeRealBot as BeReal Bot\n    participant User as Discord User\n\n    BeRealBot ->> BeRealBot: Wait until timeout\n    BeRealBot ->> User: Send a notification\n    User ->> User: Receive notification\n    User --\x3e> BeRealBot: Acknowledge notification\n    BeRealBot ->> BeRealBot: Recognize user's failure to respond\n    BeRealBot ->> User: Send a reminder notification\n"}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use Case #4"),": User-Submission approved"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Use Case 4 Discription"),"1. BeReal bot receives the approval decision 2. BeReal bot posts the image with the caption and notifies the user 3. BeReal bot logs emoji reactions, threaded replies, and comments from the community 4. BeReal bot sends logs to the server"),(0,r.kt)("mermaid",{value:"\nsequenceDiagram\n    participant BeRealBot as BeReal Bot\n    participant Moderators as Moderators\n    participant User as Discord User\n    participant Server as Discord Server\n\n    Moderators --\x3e> BeRealBot: Approval decision\n    BeRealBot ->> BeRealBot: Process approval decision\n    BeRealBot ->> BeRealBot: Retrieve image and caption\n    BeRealBot ->> BeRealBot: Notify user\n    BeRealBot ->> User: Post image with caption\n    User ->> Server: Post image with caption\n    User ->> User: React with emoji, thread replies, and comment\n    BeRealBot ->> BeRealBot: Log emoji reactions, threaded replies, and comments\n    BeRealBot ->> Server: Send logs\n\n"}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use Case #5"),": User\u2019s submission is denied"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Use Case 5 Discription"),"1. User receives a notification that the post was not approved and is asked to resubmit with feedback 2. User resubmits the image 3. User receives a notification that the post was approved and it was posted"),(0,r.kt)("mermaid",{value:"\nsequenceDiagram\n    participant User as Discord User\n    participant BeRealBot as BeReal Bot\n    participant Moderator as Moderator\n\n    User ->> BeRealBot: Receives a notification that the post was not approved\n    BeRealBot --\x3e> User: Notifies the user to resubmit the image with feedback\n    User ->> User: Resubmits the image with necessary changes\n    BeRealBot ->> Moderator: Notifies the moderator about the resubmission\n    Moderator --\x3e> BeRealBot: Reviews the resubmitted image\n    Moderator --\x3e> BeRealBot: Approves the resubmitted image\n    BeRealBot --\x3e> User: Notifies the user that the post was approved and posted\n\n"}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use Case #6"),": User Reacts to a New Post Notification"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Use Case 6 Discription"),"1. A user in the Discord community is notified by the BeReal bot that another user has posted a response to a prompt. 2. User opens Discord to view the response in the Discord community channel 3. User interacts with the post by leaving a comment or a reaction(likes, emojis, etc)"),(0,r.kt)("mermaid",{value:"\nsequenceDiagram\n    participant User as Discord User\n    participant BeRealBot as BeReal Bot\n    participant Community as Discord Community\n\n    User ->> BeRealBot: Receives a new post notification\n    User ->> Discord: Opens Discord to view the post\n    BeRealBot --\x3e> User: Displays the new post in the Discord channel\n    User ->> BeRealBot: Interacts with the post (e.g., leaves a comment or reacts with emojis)\n    BeRealBot ->> Community: Updates the post with user interactions\n    Community --\x3e> BeRealBot: Views reactions and comments on the post\n    BeRealBot ->> BeRealBot: Collects data on reactions and comments\n\n\n"}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158237782037237820/Screen_Shot_2023-10-01_at_11.03.21_PM.png?ex=651b847e&is=651a32fe&hm=fcf069c658390ca156bbed7c35e4d62131da2d5c69a67afddb15c99c53fef0b3&",alt:"Sequence Diagram 6"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158237840665227344/Screen_Shot_2023-10-01_at_11.03.36_PM.png?ex=651b848c&is=651a330c&hm=75954aae53a176a0f42a28b76db1fb4b644b5962383e82667911f434ef2c8822&",alt:"Sequence Diagram 7"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158237977969958982/Screen_Shot_2023-10-01_at_11.04.09_PM.png?ex=651b84ac&is=651a332c&hm=2c6a27091a0c972aeb5d295fafa13e9a426058b1e21895359df799a3e3c86fe9&",alt:"Sequence Diagram 8"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158238081594433686/Screen_Shot_2023-10-01_at_11.04.35_PM.png?ex=651b84c5&is=651a3345&hm=3a33061f226553ef3a82bb64ef9ebd11026cda3ea08b63fea1d7ecd5cdd712c1&",alt:"Sequence Diagram 8 Alt"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158246744417640588/image.png?ex=651b8cd7&is=651a3b57&hm=82005351873047d440493d7523197f984992051a6aee5cebcfba722b27dddc51&",alt:"Sequence Diagram 9"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158245639008817212/Screen_Shot_2023-10-01_at_11.34.34_PM.png?ex=651b8bcf&is=651a3a4f&hm=5b059721fd6e6a0fd52f4dc157ebf12eac0d255e54b4798ee34e8ac07f38d616&",alt:"Sequence Diagram 10"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158245675163734056/Screen_Shot_2023-10-01_at_11.34.45_PM.png?ex=651b8bd8&is=651a3a58&hm=7a1811a5cce04fe5100a891d4a4a89bca843f9cebf120e10a66cb7b74b3e298a&",alt:"Sequence Diagram 11"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158245708969811978/Screen_Shot_2023-10-01_at_11.34.53_PM.png?ex=651b8be0&is=651a3a60&hm=ea1ae6eebd6fdb5bce2dec8cd0e381bfd76e20541e8c73b85a343c59da5cd075&",alt:"Sequence Diagram 11 Alt"})),(0,r.kt)("h2",{id:"document-requirements"},"Document Requirements"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose")),(0,r.kt)("p",null,"The Design Document - Part I Architecture describes the software architecture and how the requirements are mapped into the design. This document will be a combination of diagrams and text that describes what the diagrams are showing."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requirements")),(0,r.kt)("p",null,"In addition to the general requirements the Design Document - Part I Architecture will contain:"),(0,r.kt)("p",null,"A description the different components and their interfaces. For example: client, server, database."),(0,r.kt)("p",null,"For each component provide class diagrams showing the classes to be developed (or used) and their relationship."),(0,r.kt)("p",null,"Sequence diagrams showing the data flow for ",(0,r.kt)("em",{parentName:"p"},"all")," use cases.\xa0One sequence diagram corresponds to one use case and different use cases should have different corresponding sequence diagrams."),(0,r.kt)("p",null,"Describe algorithms employed in your project, e.g. neural network paradigm, training and training data set, etc."),(0,r.kt)("p",null,"If there is a database:"),(0,r.kt)("p",null,"Entity-relation diagram."),(0,r.kt)("p",null,"Table design."),(0,r.kt)("p",null,"A check list for architecture design is attached here ",(0,r.kt)("a",{parentName:"p",href:"https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1",title:"architecture_design_checklist.pdf"},"architecture","_","design","_","checklist.pdf"),"\xa0 and should be used as a guidance."))}d.isMDXComponent=!0}}]);