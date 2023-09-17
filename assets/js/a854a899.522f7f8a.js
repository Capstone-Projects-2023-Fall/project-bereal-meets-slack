"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3196],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="System Overview",s={unversionedId:"requirements/system-overview",id:"requirements/system-overview",title:"System Overview",description:"Project Abstract",source:"@site/docs/requirements/system-overview.md",sourceDirName:"requirements",slug:"/requirements/system-overview",permalink:"/project-bereal-meets-slack/docs/requirements/system-overview",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-bereal-meets-slack/edit/main/documentation/docs/requirements/system-overview.md",tags:[],version:"current",lastUpdatedBy:"NTRachel",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Requirements Specification",permalink:"/project-bereal-meets-slack/docs/category/requirements-specification"},next:{title:"System Block Diagram",permalink:"/project-bereal-meets-slack/docs/requirements/system-block-diagram"}},c={},l=[{value:"Project Abstract",id:"project-abstract",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"High Level Requirement",id:"high-level-requirement",level:2},{value:"Background",id:"background",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system-overview"},"System Overview"),(0,o.kt)("h2",{id:"project-abstract"},"Project Abstract"),(0,o.kt)("p",null,"This document proposes a community building social media tool that is integrated into a slack workspace. A slackbot will prompt users to post photos in a slack channel similar to the BeReal app. These images will be sent to the server and then to a moderation app where a mod can approve or deny the image and caption sent. The image will then be sent back to the slack where others can react and comment. This bot can be integrated into any slack workspace to promote lightweight community building."),(0,o.kt)("h2",{id:"conceptual-design"},"Conceptual Design"),(0,o.kt)("p",null,"The bots behavior is detailed below in Figure 1. The slack bot will have choices of which prompts to use at any given time. Using the slack API, the bot will message the main channel directed towards a specific user privately. The user will click the \u201ctake picture\u201d button triggering a modal with a camera to reply with an image. The image will then be sent to our backend server and then sent as a direct message to the moderator. If the moderator accepts the image, the image is sent back to the backend and then redistributed to the slack channel using the Slack API. Any reactions and comments would be logged to the database."),(0,o.kt)("h2",{id:"high-level-requirement"},"High Level Requirement"),(0,o.kt)("p",null,"Communities should be able to install this, but into their slack channel. The bot will randomly prompt users at scheduled times to take a picture, with prompts such as \u201cWhat are you having for lunch?\u201d. When the user responds to the bot with an image, that image must be sent to a moderator which will then approve or deny the post to be publicly displayed in the slack channel. Responses and Reactions should be logged by the bot."),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"This photo sharing is similar to the BeReal app which prompts users to post photos once a day to share with people they have added as friends. Our project differs in the fact that it will be used in communities of people who may not already be friends. BeReal users can only see the photos of people they have added"))}u.isMDXComponent=!0}}]);