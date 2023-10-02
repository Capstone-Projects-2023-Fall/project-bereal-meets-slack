"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(a),u=n,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||s;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const s={sidebar_position:1},o="BMS Bot Design Document",i={unversionedId:"system-architecture/design",id:"system-architecture/design",title:"BMS Bot Design Document",description:"Components",source:"@site/docs/system-architecture/design.md",sourceDirName:"system-architecture",slug:"/system-architecture/design",permalink:"/project-bereal-meets-slack/docs/system-architecture/design",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-bereal-meets-slack/edit/main/documentation/docs/system-architecture/design.md",tags:[],version:"current",lastUpdatedBy:"Rishi Duggal",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-bereal-meets-slack/docs/category/system-architecture"},next:{title:"API Specification",permalink:"/project-bereal-meets-slack/docs/category/api-specification"}},c={},l=[{value:"Components",id:"components",level:2},{value:"Chat Application",id:"chat-application",level:3},{value:"BMS Bot",id:"bms-bot",level:3},{value:"Google Cloud Webserver",id:"google-cloud-webserver",level:3},{value:"Google Firebase Database",id:"google-firebase-database",level:3},{value:"Class Diagram",id:"class-diagram",level:2},{value:"Algorithms",id:"algorithms",level:2},{value:"Database Diagrams",id:"database-diagrams",level:2},{value:"Sequence Diagrams",id:"sequence-diagrams",level:2},{value:"Document Requirements",id:"document-requirements",level:2}],d={toc:l};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bms-bot-design-document"},"BMS Bot Design Document"),(0,n.kt)("h2",{id:"components"},"Components"),(0,n.kt)("h3",{id:"chat-application"},"Chat Application"),(0,n.kt)("p",null,"The chat application acts as both the user portal for the bot and as the running environment for the bot. The chat application facilitates user interaction with the bot and allows for it to act like a psuedo user that can post and interact with messages. There will be a level of UI/UX design for the bot in slack using both its API & libraries for command and interaction formatting as well as block kit for formatting of modals, popups, and responses. The application will also act as the display for all data visualization that moderators ask for."),(0,n.kt)("h3",{id:"bms-bot"},"BMS Bot"),(0,n.kt)("p",null,"The bot itself is a chatbot that is hosted on Google Cloud via cloud run, as mentioned previous it will act as a pseudo user posting messages and accepting/reacting to user responses with triggers. It interfaces with the slack API to send messages, and interfaces with the database to both store and pull user reaction data. When dealing with moderation the bot will opt to DM moderators and generate either popups, modals, or interfaceable actions for approvals, data requests, or moderation features. When logging data the bot will leverage the server to send data to firebase for storage."),(0,n.kt)("h3",{id:"google-cloud-webserver"},"Google Cloud Webserver"),(0,n.kt)("p",null,"The Google Cloud webserver provides a hosting point for the bot using the cloud run service. The server allows for two things, bot uptime and bot access to the database, through the server the bot can make calls to the firebase database both for logging and for acces of data. The webserver will also provide containers that host the firebase database for reaction data. The webserver will also be responsible for handling the formatting of data into visualizations when requested by the bot via a user."),(0,n.kt)("h3",{id:"google-firebase-database"},"Google Firebase Database"),(0,n.kt)("p",null,"The Firebase database is contained in the cloud webserver and acts as a means of storing and logging all reaction data. The database will contain data pertaining to prompts, approved submitted images, time to post, emoji reactions, threaded replies, and number of comments. All of this data will be exportable as a CSV or in a visualization done by the host webserver."),(0,n.kt)("h2",{id:"class-diagram"},"Class Diagram"),(0,n.kt)("h2",{id:"algorithms"},"Algorithms"),(0,n.kt)("h2",{id:"database-diagrams"},"Database Diagrams"),(0,n.kt)("h2",{id:"sequence-diagrams"},"Sequence Diagrams"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158237338221162556/Screen_Shot_2023-10-01_at_11.01.34_PM.png?ex=651b8414&is=651a3294&hm=64e7d144c9382697335076073cdd675565e9635a527c612978334f64166c7c1a&",alt:"Sequence Diagram 1"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158237386623430796/Screen_Shot_2023-10-01_at_11.01.48_PM.png?ex=651b841f&is=651a329f&hm=a635eee997369eba307166f4ce3e27570a2a2153e721ea3f188f0677782cde91&",alt:"Sequence Diagram 2"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158237435608707092/Screen_Shot_2023-10-01_at_11.02.00_PM.png?ex=651b842b&is=651a32ab&hm=2e797a3213ae347d91b4da7140a2f0793f467013deaf1b55e9b37dd0ff4645ca&",alt:"Sequence Diagram 3"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158237490910597120/Screen_Shot_2023-10-01_at_11.02.13_PM.png?ex=651b8438&is=651a32b8&hm=94d1998b4b779cec3beddca54a8a0a63baa724b85b87767120bb5e82ad49a1df&",alt:"Sequence Diagram 4"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158237540818620516/Screen_Shot_2023-10-01_at_11.02.25_PM.png?ex=651b8444&is=651a32c4&hm=d488e68106cb8d0857f6f22401cdcc93fec4ce58b5777e21fa4dc727e590c63b&",alt:"Sequence Diagram 5"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158237782037237820/Screen_Shot_2023-10-01_at_11.03.21_PM.png?ex=651b847e&is=651a32fe&hm=fcf069c658390ca156bbed7c35e4d62131da2d5c69a67afddb15c99c53fef0b3&",alt:"Sequence Diagram 6"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158237840665227344/Screen_Shot_2023-10-01_at_11.03.36_PM.png?ex=651b848c&is=651a330c&hm=75954aae53a176a0f42a28b76db1fb4b644b5962383e82667911f434ef2c8822&",alt:"Sequence Diagram 7"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158237977969958982/Screen_Shot_2023-10-01_at_11.04.09_PM.png?ex=651b84ac&is=651a332c&hm=2c6a27091a0c972aeb5d295fafa13e9a426058b1e21895359df799a3e3c86fe9&",alt:"Sequence Diagram 8"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158238081594433686/Screen_Shot_2023-10-01_at_11.04.35_PM.png?ex=651b84c5&is=651a3345&hm=3a33061f226553ef3a82bb64ef9ebd11026cda3ea08b63fea1d7ecd5cdd712c1&",alt:"Sequence Diagram 8 Alt"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158246744417640588/image.png?ex=651b8cd7&is=651a3b57&hm=82005351873047d440493d7523197f984992051a6aee5cebcfba722b27dddc51&",alt:"Sequence Diagram 9"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158245639008817212/Screen_Shot_2023-10-01_at_11.34.34_PM.png?ex=651b8bcf&is=651a3a4f&hm=5b059721fd6e6a0fd52f4dc157ebf12eac0d255e54b4798ee34e8ac07f38d616&",alt:"Sequence Diagram 10"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158245675163734056/Screen_Shot_2023-10-01_at_11.34.45_PM.png?ex=651b8bd8&is=651a3a58&hm=7a1811a5cce04fe5100a891d4a4a89bca843f9cebf120e10a66cb7b74b3e298a&",alt:"Sequence Diagram 11"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158245708969811978/Screen_Shot_2023-10-01_at_11.34.53_PM.png?ex=651b8be0&is=651a3a60&hm=ea1ae6eebd6fdb5bce2dec8cd0e381bfd76e20541e8c73b85a343c59da5cd075&",alt:"Sequence Diagram 11 Alt"})),(0,n.kt)("h2",{id:"document-requirements"},"Document Requirements"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Purpose")),(0,n.kt)("p",null,"The Design Document - Part I Architecture describes the software architecture and how the requirements are mapped into the design. This document will be a combination of diagrams and text that describes what the diagrams are showing."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Requirements")),(0,n.kt)("p",null,"In addition to the general requirements the Design Document - Part I Architecture will contain:"),(0,n.kt)("p",null,"A description the different components and their interfaces. For example: client, server, database."),(0,n.kt)("p",null,"For each component provide class diagrams showing the classes to be developed (or used) and their relationship."),(0,n.kt)("p",null,"Sequence diagrams showing the data flow for ",(0,n.kt)("em",{parentName:"p"},"all")," use cases.\xa0One sequence diagram corresponds to one use case and different use cases should have different corresponding sequence diagrams."),(0,n.kt)("p",null,"Describe algorithms employed in your project, e.g. neural network paradigm, training and training data set, etc."),(0,n.kt)("p",null,"If there is a database:"),(0,n.kt)("p",null,"Entity-relation diagram."),(0,n.kt)("p",null,"Table design."),(0,n.kt)("p",null,"A check list for architecture design is attached here ",(0,n.kt)("a",{parentName:"p",href:"https://templeu.instructure.com/courses/106563/files/16928870/download?wrap=1",title:"architecture_design_checklist.pdf"},"architecture","_","design","_","checklist.pdf"),"\xa0 and should be used as a guidance."))}p.isMDXComponent=!0}}]);