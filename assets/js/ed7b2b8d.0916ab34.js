"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,g=d["".concat(p,".").concat(h)]||d[h]||m[h]||s;return a?n.createElement(g,o(o({ref:t},l),{},{components:a})):n.createElement(g,o({ref:t},l))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:1},o="BMS Bot Design Document",i={unversionedId:"system-architecture/design",id:"system-architecture/design",title:"BMS Bot Design Document",description:"Components",source:"@site/docs/system-architecture/design.md",sourceDirName:"system-architecture",slug:"/system-architecture/design",permalink:"/project-bereal-meets-slack/docs/system-architecture/design",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-bereal-meets-slack/edit/main/documentation/docs/system-architecture/design.md",tags:[],version:"current",lastUpdatedBy:"NTRachel",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-bereal-meets-slack/docs/category/system-architecture"},next:{title:"API Specification",permalink:"/project-bereal-meets-slack/docs/category/api-specification"}},p={},c=[{value:"Components",id:"components",level:2},{value:"Chat Application",id:"chat-application",level:3},{value:"BMS Bot",id:"bms-bot",level:3},{value:"Google Cloud Webserver",id:"google-cloud-webserver",level:3},{value:"Google Firebase Database",id:"google-firebase-database",level:3},{value:"Class Diagram",id:"class-diagram",level:2},{value:"Algorithms",id:"algorithms",level:2},{value:"Database Diagrams",id:"database-diagrams",level:2},{value:"Sequence Diagrams",id:"sequence-diagrams",level:2},{value:"Document Requirements",id:"document-requirements",level:2}],l={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bms-bot-design-document"},"BMS Bot Design Document"),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("h3",{id:"chat-application"},"Chat Application"),(0,r.kt)("p",null,"The chat application acts as both the user portal for the bot and as the running environment for the bot. The chat application facilitates user interaction with the bot and allows for it to act like a psuedo user that can post and interact with messages. There will be a level of UI/UX design for the bot in slack using both its API & libraries for command and interaction formatting as well as block kit for formatting of modals, popups, and responses. The application will also act as the display for all data visualization that moderators ask for."),(0,r.kt)("h3",{id:"bms-bot"},"BMS Bot"),(0,r.kt)("p",null,"The bot itself is a chatbot that is hosted on Google Cloud via cloud run, as mentioned previous it will act as a pseudo user posting messages and accepting/reacting to user responses with triggers. It interfaces with the slack API to send messages, and interfaces with the database to both store and pull user reaction data. When dealing with moderation the bot will opt to DM moderators and generate either popups, modals, or interfaceable actions for approvals, data requests, or moderation features. When logging data the bot will leverage the server to send data to firebase for storage."),(0,r.kt)("h3",{id:"google-cloud-webserver"},"Google Cloud Webserver"),(0,r.kt)("p",null,"The Google Cloud webserver provides a hosting point for the bot using the cloud run service. The server allows for two things, bot uptime and bot access to the database, through the server the bot can make calls to the firebase database both for logging and for acces of data. The webserver will also provide containers that host the firebase database for reaction data. The webserver will also be responsible for handling the formatting of data into visualizations when requested by the bot via a user."),(0,r.kt)("h3",{id:"google-firebase-database"},"Google Firebase Database"),(0,r.kt)("p",null,"The Firebase database is contained in the cloud webserver and acts as a means of storing and logging all reaction data. The database will contain data pertaining to prompts, approved submitted images, time to post, emoji reactions, threaded replies, and number of comments. All of this data will be exportable as a CSV or in a visualization done by the host webserver."),(0,r.kt)("h2",{id:"class-diagram"},"Class Diagram"),(0,r.kt)("mermaid",{value:"classDiagram\nwebServer --\x3e bmsBot\nwebServer --\x3e database\nclass webServer{\n  + generateCSV(int startTime, int endTime)\n  + generateDataVis(int startTime, int endTime)\n}\nclass bmsBot{\n  + String botName\n  + token botToken\n  - int startHour\n  - int endHour\n  - String [] promptList\n  - String [] blackList\n  - getCSV()\n  - getDatavis()\n  - getOperatingHours()\n  - sendPrompt()\n  - getResponseDelay()\n  - getResponse()\n  - setOperatingHours(int newStart, int newEnd)\n  - generateRandomPromptTime()\n  - generateRandomPrompt()\n  - getPromptList()\n  - setPromptList()\n  - getResponsePostComment()\n  - setReponsePostComment()\n  - getBlackList()\n  - addUserToBlackList()\n  - removeUserFromBlackList()\n  - selectRandomUserToPrompt()\n  - getApprovalStatus()\n  - setApprovalStatus()\n  - sendToReponseToMod()\n  - postReponseToChannel()\n  - deleteOriginalPromptFromChannel()\n  - setaUsersAlreadyPromptedList()\n}\nclass database{\n  + String Prompt\n  + String imageLink\n  + int numReactions\n  + int numReplies\n  + int timeToPost \n  + setUserRoles()\n  + setBotSettings()\n  + getBotSettings()\n  + updateTotalAverageTimeToPost()\n  + getReactionTS()\n  + getResponseTS()\n  + setPromptPostTS()\n  + updateUserTimeToPost()\n  + getUserTimeToPost()\n  + updateReactionsUsage()\n  + getReactionsUsage()\n  + updateUsersList()\n  + updateUserInfo()\n  + getUserInfo()\n  + createUser()\n  + getUser()\n\n}"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fields")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"-botName"),": Display name for the bot and how users and other members of the platform will recognize and refer to the bot\n",(0,r.kt)("strong",{parentName:"p"},"- botToken"),": Unique access token or authentication key that allows the bot to connect to the platform\u2019s API and perform actions\n",(0,r.kt)("strong",{parentName:"p"},"- startHour"),": Hour of when the bot will start\n",(0,r.kt)("strong",{parentName:"p"},"- endHour"),": Hour of when bot will end\n",(0,r.kt)("strong",{parentName:"p"},"- promptList"),": List of all the prompts the bot can choose from\n",(0,r.kt)("strong",{parentName:"p"},"- blackList"),": List of users on the blacklist"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"-getCSV()"),": Gets the CSV fields\n",(0,r.kt)("strong",{parentName:"p"},"-getDatavis()"),": Checks for CSV fields by parsing lines from a file\n",(0,r.kt)("strong",{parentName:"p"},"-getOperatingHours()"),": Gets the operation hours of the bot\n",(0,r.kt)("strong",{parentName:"p"},"-sendPrompt()"),": Sends a prompt to a user\n",(0,r.kt)("strong",{parentName:"p"},"-getResponseDelay()"),": Gets the time it takes when the bot has to resend a prompt to the user\n",(0,r.kt)("strong",{parentName:"p"},"-getResponse()"),": gets response from the user\n",(0,r.kt)("strong",{parentName:"p"},"-setOperatingHours(int newStart, int newEnd)"),": Sets the operating hours\n",(0,r.kt)("strong",{parentName:"p"},"-generateRandomPromptTime()"),": Generates a random time for when prompts are assigned\n",(0,r.kt)("strong",{parentName:"p"},"-generateRandomPrompt()"),": Generates a random prompt\n",(0,r.kt)("strong",{parentName:"p"},"-getPromptList()"),": Gets the prompt list\n",(0,r.kt)("strong",{parentName:"p"},"-setPromptList()"),": Sets the prompt list\n",(0,r.kt)("strong",{parentName:"p"},"-getResponsePostComment()"),": Gets and stores the response of a post comment\n",(0,r.kt)("strong",{parentName:"p"},"-setReponsePostComment()"),": Sets a response of a post comment\n",(0,r.kt)("strong",{parentName:"p"},"-getBlackList()"),": Shows the blacklist\n",(0,r.kt)("strong",{parentName:"p"},"-addUserToBlackList()"),": Adds users to the blacklist\n",(0,r.kt)("strong",{parentName:"p"},"-removeUserFromBlackList()"),": Removes a user from the blacklist\n",(0,r.kt)("strong",{parentName:"p"},"-selectRandomUserToPrompt()"),": Selects a random user to assign a prompt to\n",(0,r.kt)("strong",{parentName:"p"},"-getApprovalStatus()"),": Gets the approval status after sending a user response to the moderator\n",(0,r.kt)("strong",{parentName:"p"},"-setApprovalStatus()"),": Sets the approval status after sending a user response to a moderator\n",(0,r.kt)("strong",{parentName:"p"},"-sendToReponseToMod()"),":  Sends a user response to a prompt to a moderator\n",(0,r.kt)("strong",{parentName:"p"},"-postReponseToChannel()"),": Posts the response of a moderator to a user to a channel\n",(0,r.kt)("strong",{parentName:"p"},"-deleteOriginalPromptFromChannel()"),": Deletes a prompt from a certain channel\n",(0,r.kt)("strong",{parentName:"p"},"-setaUsersAlreadyPromptedList()"),": Sets a list of users that were already prompted by the bot"),(0,r.kt)("h2",{id:"algorithms"},"Algorithms"),(0,r.kt)("h2",{id:"database-diagrams"},"Database Diagrams"),(0,r.kt)("mermaid",{value:'erDiagram\nPrompts {\n  Int prompt_id PK\n  String text\n}\n\nResponses {\n  Int response_id PK\n  Int numReaction\n  Int timetoRespond\n  Int prompt_id FK\n}\n\nPrompts ||--|{ Responses : ""\n'}),(0,r.kt)("h2",{id:"sequence-diagrams"},"Sequence Diagrams"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Usecase 1:"),'1. Owner signs in to Slack 2. Owner opens the workspace "Preferences". 3. Owner selects "Apps and Integrations" and installs the BMS bot. 4. Owner assigns roles and privileges to users in the community. 5. Owner defines moderation and content guidelines. 6. Owner defines type of prompts for BMS bot to send properly suit the culture and vibe of their community. 7. Owner configures the schedule for BMS bot, defining the hours when the it will send prompts. 8. Owner sets the duration for prompt responses to remain in the chat. 9. Owner sets the amount of time users have to respond to prompt notification. 10. Owner saves the configuration settings.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158237338221162556/Screen_Shot_2023-10-01_at_11.01.34_PM.png?ex=651b8414&is=651a3294&hm=64e7d144c9382697335076073cdd675565e9635a527c612978334f64166c7c1a&",alt:"Sequence Diagram 1"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158237386623430796/Screen_Shot_2023-10-01_at_11.01.48_PM.png?ex=651b841f&is=651a329f&hm=a635eee997369eba307166f4ce3e27570a2a2153e721ea3f188f0677782cde91&",alt:"Sequence Diagram 2"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158237435608707092/Screen_Shot_2023-10-01_at_11.02.00_PM.png?ex=651b842b&is=651a32ab&hm=2e797a3213ae347d91b4da7140a2f0793f467013deaf1b55e9b37dd0ff4645ca&",alt:"Sequence Diagram 3"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158237490910597120/Screen_Shot_2023-10-01_at_11.02.13_PM.png?ex=651b8438&is=651a32b8&hm=94d1998b4b779cec3beddca54a8a0a63baa724b85b87767120bb5e82ad49a1df&",alt:"Sequence Diagram 4"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158237540818620516/Screen_Shot_2023-10-01_at_11.02.25_PM.png?ex=651b8444&is=651a32c4&hm=d488e68106cb8d0857f6f22401cdcc93fec4ce58b5777e21fa4dc727e590c63b&",alt:"Sequence Diagram 5"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158237782037237820/Screen_Shot_2023-10-01_at_11.03.21_PM.png?ex=651b847e&is=651a32fe&hm=fcf069c658390ca156bbed7c35e4d62131da2d5c69a67afddb15c99c53fef0b3&",alt:"Sequence Diagram 6"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158237840665227344/Screen_Shot_2023-10-01_at_11.03.36_PM.png?ex=651b848c&is=651a330c&hm=75954aae53a176a0f42a28b76db1fb4b644b5962383e82667911f434ef2c8822&",alt:"Sequence Diagram 7"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158237977969958982/Screen_Shot_2023-10-01_at_11.04.09_PM.png?ex=651b84ac&is=651a332c&hm=2c6a27091a0c972aeb5d295fafa13e9a426058b1e21895359df799a3e3c86fe9&",alt:"Sequence Diagram 8"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158238081594433686/Screen_Shot_2023-10-01_at_11.04.35_PM.png?ex=651b84c5&is=651a3345&hm=3a33061f226553ef3a82bb64ef9ebd11026cda3ea08b63fea1d7ecd5cdd712c1&",alt:"Sequence Diagram 8 Alt"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158246744417640588/image.png?ex=651b8cd7&is=651a3b57&hm=82005351873047d440493d7523197f984992051a6aee5cebcfba722b27dddc51&",alt:"Sequence Diagram 9"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158245639008817212/Screen_Shot_2023-10-01_at_11.34.34_PM.png?ex=651b8bcf&is=651a3a4f&hm=5b059721fd6e6a0fd52f4dc157ebf12eac0d255e54b4798ee34e8ac07f38d616&",alt:"Sequence Diagram 10"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158245675163734056/Screen_Shot_2023-10-01_at_11.34.45_PM.png?ex=651b8bd8&is=651a3a58&hm=7a1811a5cce04fe5100a891d4a4a89bca843f9cebf120e10a66cb7b74b3e298a&",alt:"Sequence Diagram 11"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158245708969811978/Screen_Shot_2023-10-01_at_11.34.53_PM.png?ex=651b8be0&is=651a3a60&hm=ea1ae6eebd6fdb5bce2dec8cd0e381bfd76e20541e8c73b85a343c59da5cd075&",alt:"Sequence Diagram 11 Alt"})),(0,r.kt)("h2",{id:"document-requirements"},"Document Requirements"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Purpose")),(0,r.kt)("p",null,"The Design Document - Part I Architecture describes the software architecture and how the requirements are mapped into the design. This document will be a combination of diagrams and text that describes what the diagrams are showing."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Requirements")),(0,r.kt)("p",null,"In addition to the general requirements the Design Document - Part I Architecture will contain:"),(0,r.kt)("p",null,"A description the different components and their interfaces. For example: client, server, database."),(0,r.kt)("p",null,"For each component provide class diagrams showing the classes to be developed (or used) and their relationship."),(0,r.kt)("p",null,"Sequence diagrams showing the data flow for ",(0,r.kt)("em",{parentName:"p"},"all")," use cases.\xa0One sequence diagram corresponds to one use case and different use cases should have different corresponding sequence diagrams."),(0,r.kt)("p",null,"Describe algorithms employed in your project, e.g. neural network paradigm, training and training data set, etc."),(0,r.kt)("p",null,"If there is a database:"),(0,r.kt)("p",null,"Entity-relation diagram."),(0,r.kt)("p",null,"Table design."),(0,r.kt)("p",null,"A check list for architecture design is attached here ",(0,r.kt)("a",{parentName:"p",href:"https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1",title:"architecture_design_checklist.pdf"},"architecture","_","design","_","checklist.pdf"),"\xa0 and should be used as a guidance."))}d.isMDXComponent=!0}}]);