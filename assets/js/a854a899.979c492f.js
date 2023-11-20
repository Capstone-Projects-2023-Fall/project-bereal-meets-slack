"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3196],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=i,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(h,a(a({ref:t},d),{},{components:r})):n.createElement(h,a({ref:t},d))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:1},a="System Overview",s={unversionedId:"requirements/system-overview",id:"requirements/system-overview",title:"System Overview",description:"Project Abstract",source:"@site/docs/requirements/system-overview.md",sourceDirName:"requirements",slug:"/requirements/system-overview",permalink:"/project-bereal-meets-slack/docs/requirements/system-overview",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-bereal-meets-slack/edit/main/documentation/docs/requirements/system-overview.md",tags:[],version:"current",lastUpdatedBy:"Christian Smith",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Requirements Specification",permalink:"/project-bereal-meets-slack/docs/category/requirements-specification"},next:{title:"System Block Diagram",permalink:"/project-bereal-meets-slack/docs/requirements/system-block-diagram"}},c={},l=[{value:"Project Abstract",id:"project-abstract",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"Figure 1: Conceptual design Diagram",id:"figure-1-conceptual-design-diagram",level:4},{value:"High Level Requirement",id:"high-level-requirement",level:2},{value:"Background",id:"background",level:2}],d={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-overview"},"System Overview"),(0,i.kt)("h2",{id:"project-abstract"},"Project Abstract"),(0,i.kt)("p",null,"This document proposes a community building social media tool that is integrated into a Discord server. A Discord bot will prompt users to post photos in a Discord channel similar to the BeReal app. These images will be sent to the server and then to a moderation app where a mod can approve or deny the image and caption sent. The image will then be sent back to the Discord where others can react and comment. This bot can be integrated into any Discord server to promote lightweight community building."),(0,i.kt)("h2",{id:"conceptual-design"},"Conceptual Design"),(0,i.kt)("p",null,"The BeReal bot's behavior is detailed below in Figure 1. The bot will have choices of which prompts to use at any given time. Using the Discord API, the bot will message the main channel directed towards a specific user privately. The user will click the \u201ctake picture\u201d button triggering a modal with a camera to reply with an image. The image will then be sent to our backend server and then sent as a direct message to the moderator. If the moderator accepts the image, the image is sent back to the backend and then redistributed to the Discord channel using the Discord API. Any reactions and comments would be logged to the database."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/1150951348754456610/1153014601722646698/c52816cd-0b4d-40e1-a4ed-4a51289db728.png",alt:"Figure 1"})),(0,i.kt)("h4",{id:"figure-1-conceptual-design-diagram"},"Figure 1: Conceptual design Diagram"),(0,i.kt)("h2",{id:"high-level-requirement"},"High Level Requirement"),(0,i.kt)("p",null,"Communities should be able to install this, but into their Discord channel. The bot will randomly prompt users at scheduled times to take a picture, with prompts such as \u201cWhat are you having for lunch?\u201d. When the user responds to the bot with an image, that image must be sent to a moderator which will then approve or deny the post to be publicly displayed in the Discord channel. Responses and Reactions should be logged by the bot."),(0,i.kt)("h2",{id:"background"},"Background"),(0,i.kt)("p",null,"This photo sharing is similar to the BeReal app which prompts users to post photos once a day to share with people they have added as friends. Our project differs in the fact that it will be used in communities of people who may not already be friends. BeReal users can only see the photos of people they have added"))}p.isMDXComponent=!0}}]);