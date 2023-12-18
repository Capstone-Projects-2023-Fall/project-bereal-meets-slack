"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1650],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),p=c(n),u=r,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2233:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},i="Acceptance test",s={unversionedId:"testing/acceptence-testing",id:"testing/acceptence-testing",title:"Acceptance test",description:"Demonstration of all of the functional and non-functional requirements. This can be a combination of automated tests derived from the use-cases (user stories) and manual tests with recorded observation of the results.",source:"@site/docs/testing/acceptence-testing.md",sourceDirName:"testing",slug:"/testing/acceptence-testing",permalink:"/project-bereal-meets-slack/docs/testing/acceptence-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-bereal-meets-slack/edit/main/documentation/docs/testing/acceptence-testing.md",tags:[],version:"current",lastUpdatedBy:"tup31461",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Integration Tests",permalink:"/project-bereal-meets-slack/docs/testing/integration-testing"}},l={},c=[],d={toc:c};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"acceptance-test"},"Acceptance test"),(0,r.kt)("p",null,"Demonstration of all of the functional and non-functional requirements. This can be a combination of automated tests derived from the use-cases (user stories) and manual tests with recorded observation of the results."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Test ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Action/Steps"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes/Expected Result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Configure WhatchaDoin bot:"),"  Download and sign in to discord configure the WhatchaDoin bot to your discord app"),(0,r.kt)("td",{parentName:"tr",align:null},"Discord should be corredctly downloaded and WhatchaDoin bot should be configured.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Response to WhatchaDoin bot Prompt:"),"   Open the discord notification received Take pictue/ upload picture to discord bot which is sent to the moderator."),(0,r.kt)("td",{parentName:"tr",align:null},"The image should be confirmed and approved by the WhatchaDoin bot.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"No Response to WhatchaDoin bot Prompt:"),"   User fails to respond to WhatchaDoin bots prompt within set time frame."),(0,r.kt)("td",{parentName:"tr",align:null},"WhatchaDoin bot recognizes the users failure to respond and sends a reminder notification about the missed interval")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Submission Approved:"),"   WhatchaDoin bot recieves approval from decision from moderator."),(0,r.kt)("td",{parentName:"tr",align:null},"WhatchaDoin bot send logs to server database and posts the image with caption along with notifying user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Submission Denied:"),"   Image is denied by moderators due to not following content guidelines."),(0,r.kt)("td",{parentName:"tr",align:null},"User recieves notification that image was not approves and is given vhnce to resubmit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Reaction to New Post Notification:"),"   A notification is received about a new post."),(0,r.kt)("td",{parentName:"tr",align:null},"User is able to go into notification to see the new post and react to it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Ignore New Post Notification:"),"   User is sent a notification that is not wanted. User then goes to settings and chooses to turn off the new post notifications."),(0,r.kt)("td",{parentName:"tr",align:null},"User no longer recieves new post notifications.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Moderator Access Reaction Data:"),"   Moderator logs into WhatchaDoin bot and runs commands to request data in csv format."),(0,r.kt)("td",{parentName:"tr",align:null},"Data is received and available to be downloaded in csv format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Moderator Makes Approval:"),'   A user submission is posted. Moderator then reviews the submission using the guidelines and marks as "Approved" or "Denied".'),(0,r.kt)("td",{parentName:"tr",align:null},"The submission is sucessfully approved or denied due to the moderators input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"WhatchaDoin bot Bans User:"),"   User inputs bad behavior in community. User is warned by WhatchaDoin bot via notifccation. User contiunes behavior."),(0,r.kt)("td",{parentName:"tr",align:null},"WhatchaDoin bot adds user to blacklist and the user becomes ban from community. WhatchaDoin bot logs action.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Moderator Manages Blacklist:"),"   Moderator chooses a user to add to blacklist. Moderator then goes into blacklist and removes user."),(0,r.kt)("td",{parentName:"tr",align:null},"User becomes banned from community then unbanned from community and no longer is present on blacklist.")))))}p.isMDXComponent=!0}}]);