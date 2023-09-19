"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9617],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(b,i(i({ref:t},p),{},{components:r})):a.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:4},i="Features and Requirements",l={unversionedId:"requirements/features-and-requirements",id:"requirements/features-and-requirements",title:"Features and Requirements",description:"Functional Requirements",source:"@site/docs/requirements/features-and-requirements.md",sourceDirName:"requirements",slug:"/requirements/features-and-requirements",permalink:"/project-bereal-meets-slack/docs/requirements/features-and-requirements",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-bereal-meets-slack/edit/main/documentation/docs/requirements/features-and-requirements.md",tags:[],version:"current",lastUpdatedBy:"SSunnydev",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"General Requirements",permalink:"/project-bereal-meets-slack/docs/requirements/general-requirements"},next:{title:"Use Case Descriptions",permalink:"/project-bereal-meets-slack/docs/requirements/use-case-descriptions"}},s={},u=[{value:"Functional Requirements",id:"functional-requirements",level:2},{value:"Nonfunctional Requirements",id:"nonfunctional-requirements",level:2}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"features-and-requirements"},"Features and Requirements"),(0,n.kt)("h2",{id:"functional-requirements"},"Functional Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Users will be able to submit an image to the bot"),(0,n.kt)("li",{parentName:"ul"},"BMS bot will be able to randomly determine a time within its operating hours to send a prompt  "),(0,n.kt)("li",{parentName:"ul"},"BMS bot will be able to randomly determine an appropriate prompt from a pool based on time of day and previous sends  "),(0,n.kt)("li",{parentName:"ul"},"BMS bot will be able to send messages and tag users autonomously.  "),(0,n.kt)("li",{parentName:"ul"},"BMS bot will be able to log post reaction data and send it to a server  ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Emoji Reactions  "),(0,n.kt)("li",{parentName:"ul"},"Threaded Replies  "),(0,n.kt)("li",{parentName:"ul"},"Other comments  "))),(0,n.kt)("li",{parentName:"ul"},"BMS bot will be able to log the time it takes to respond and send it to a server  "),(0,n.kt)("li",{parentName:"ul"},"BMS bot will be able to reprompt a user or prompt a user after a set timeout  "),(0,n.kt)("li",{parentName:"ul"},"BMS bot will integrate with slack to provide a modal window for camera access  "),(0,n.kt)("li",{parentName:"ul"},"BMS bot will be able to receive user submissions and send them to a server to DM moderators & ask for approval  "),(0,n.kt)("li",{parentName:"ul"},"BMS bot will be able to receive moderator feedback and send a DM to the user asking them to retry  "),(0,n.kt)("li",{parentName:"ul"},"BMS bot will be able to receive moderator approval and send the submitted image back to the appropriate chat, with the initial caption  "),(0,n.kt)("li",{parentName:"ul"},"BMS bot will be linked to Slack and added to a Slack chat by moderators via the bot/applications page of Slack  "),(0,n.kt)("li",{parentName:"ul"},"Moderators can configure the operating hours & prompt pool via slash commands  "),(0,n.kt)("li",{parentName:"ul"},"Moderators can approve or deny user submissions  ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If approved image will be posted to a specific channel  "),(0,n.kt)("li",{parentName:"ul"},"If denied moderator will provide feedback about denied image  ")))),(0,n.kt)("h2",{id:"nonfunctional-requirements"},"Nonfunctional Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"BMS bot will have pop ups with prompts for users to respond"),(0,n.kt)("li",{parentName:"ul"},"BMS bot will format reaction data into a CSV in the server"),(0,n.kt)("li",{parentName:"ul"},"BMS bot will ask for submissions using a modal window/slack camera")))}m.isMDXComponent=!0}}]);