"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,b=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return r?o.createElement(b,n(n({ref:t},p),{},{components:r})):o.createElement(b,n({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,n[1]=s;for(var l=2;l<i;l++)n[l]=r[l];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(7462),a=(r(7294),r(3905));const i={sidebar_position:2},n="System Block Diagram",s={unversionedId:"requirements/system-block-diagram",id:"requirements/system-block-diagram",title:"System Block Diagram",description:"Block Diagram",source:"@site/docs/requirements/system-block-diagram.md",sourceDirName:"requirements",slug:"/requirements/system-block-diagram",permalink:"/project-bereal-meets-slack/docs/requirements/system-block-diagram",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-bereal-meets-slack/edit/main/documentation/docs/requirements/system-block-diagram.md",tags:[],version:"current",lastUpdatedBy:"SSunnydev",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"System Overview",permalink:"/project-bereal-meets-slack/docs/requirements/system-overview"},next:{title:"General Requirements",permalink:"/project-bereal-meets-slack/docs/requirements/general-requirements"}},c={},l=[{value:"The BeReal bot uses 3 Microservices",id:"the-bereal-bot-uses-3-microservices",level:2},{value:"1. Discord Chat Application",id:"1-discord-chat-application",level:3},{value:"2. BeReal Bot",id:"2-bereal-bot",level:3},{value:"3. Server",id:"3-server",level:3}],p={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-block-diagram"},"System Block Diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1158176482569494568/1158176510864281670/BeReal_Block_Diagram.png?ex=651b4b6e&is=6519f9ee&hm=62360592131a751e85cd11d0414f710a81d8990f70bf611f2b6af5c1ba04224a&",alt:"Block Diagram"})),(0,a.kt)("h2",{id:"the-bereal-bot-uses-3-microservices"},"The BeReal bot uses 3 Microservices"),(0,a.kt)("h3",{id:"1-discord-chat-application"},"1. Discord Chat Application"),(0,a.kt)("p",null,"The user will interact with the bot using the Discord chat application, as the bot will send messages via the Discord API & recieve messages the same way. Moderators will be able to interface with slash commands from the Discord application to set configuration parameters from the bot, such as active hours or prompt list."),(0,a.kt)("h3",{id:"2-bereal-bot"},"2. BeReal Bot"),(0,a.kt)("p",null,"The BeReal bot will send prompts at its own randomly selected time and send out a prompt. Once a user responds to its prompt with an image it will send that to the server for review. Once approved it will recieve the approved image and post it to the Discord channel with the caption. If denied it will prompt the user to post a new image. The bot will also record post reactions & time till submission and send that data to the server for storage.  "),(0,a.kt)("h3",{id:"3-server"},"3. Server"),(0,a.kt)("p",null,"The server will store under review images and post reactions. It will send under review images to the Moderators who will send a review decision back to the server for it to send back to the BeReal bot to inform the user."))}m.isMDXComponent=!0}}]);