"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[2602],{3905:(t,e,n)=>{n.d(e,{Zo:()=>i,kt:()=>d});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},p=Object.keys(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},i=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},k="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,p=t.originalType,o=t.parentName,i=s(t,["components","mdxType","originalType","parentName"]),k=u(n),m=a,d=k["".concat(o,".").concat(m)]||k[m]||c[m]||p;return n?r.createElement(d,l(l({ref:e},i),{},{components:n})):r.createElement(d,l({ref:e},i))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=n.length,l=new Array(p);l[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[k]="string"==typeof t?t:a,l[1]=s;for(var u=2;u<p;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3019:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const p={sidebar_position:2},l="Bot Api Spec",s={unversionedId:"api-specification/botAPISpec",id:"api-specification/botAPISpec",title:"Bot Api Spec",description:"Introduction",source:"@site/docs/api-specification/botAPISpec.md",sourceDirName:"api-specification",slug:"/api-specification/botAPISpec",permalink:"/project-bereal-meets-slack/docs/api-specification/botAPISpec",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-bereal-meets-slack/edit/main/documentation/docs/api-specification/botAPISpec.md",tags:[],version:"current",lastUpdatedBy:"NTRachel",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Api Spec Document",permalink:"/project-bereal-meets-slack/docs/api-specification/design-api-intro"},next:{title:"API 1 - Swagger Petstore",permalink:"/project-bereal-meets-slack/docs/api-specification/openapi-spec"}},o={},u=[],i={toc:u};function k(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bot-api-spec"},"Bot Api Spec"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Introduction"),"\nThis outlines the API specification for the Bot. It provides details on the methods available, their parameters, return values, and the usage."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Bot Methods")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"getCSV()"),"  "),(0,a.kt)("p",null,"Description: Gets the CSV fields"),(0,a.kt)("p",null,"Parameters: None"),(0,a.kt)("p",null,"Data Types: None"),(0,a.kt)("p",null,"Return Value: CSV fields (e.g., a list or string)"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"getDatavis()")),(0,a.kt)("p",null,"Description:Checks for CSV fields by parsing lines from a file"),(0,a.kt)("p",null,"Parameters: None or a file path"),(0,a.kt)("p",null,"Data Types: String (file path)"),(0,a.kt)("p",null,"Return Value: Parsed CSV fields or data visualization"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"getOperatingHours()")),(0,a.kt)("p",null,"Description:Gets the operation hours of the bot"),(0,a.kt)("p",null,"Parameters: None"),(0,a.kt)("p",null,"Data Types: None"),(0,a.kt)("p",null,"Return Value: Operating hours (e.g., start and end times)"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sendPrompt()")),(0,a.kt)("p",null,"Description:Sends a prompt to a user"),(0,a.kt)("p",null,"Parameters: User ID or message content"),(0,a.kt)("p",null,"Data Types: String (User ID) or message data"),(0,a.kt)("p",null,"Return Value: Status of the prompt being sent (e.g., success or failure)"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"getResponseDelay()")),(0,a.kt)("p",null,"Description:Gets the time it takes when the bot has to resend a prompt to the user"),(0,a.kt)("p",null,"Parameters: None"),(0,a.kt)("p",null,"Data Types: None"),(0,a.kt)("p",null,"Return Value: Response delay time (e.g., integer or float)"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"getResponse()")),(0,a.kt)("p",null,"Description: Gets response from the user"),(0,a.kt)("p",null,"Parameters: None"),(0,a.kt)("p",null,"Data Types: None"),(0,a.kt)("p",null,"Return Value: User response (e.g., string)"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"setOperatingHours(int newStart, int newEnd)")),(0,a.kt)("p",null,"Description:Sets the operating hours"),(0,a.kt)("p",null,"Parameters: New start and end times (integer)"),(0,a.kt)("p",null,"Data Types: Integer (newStart and newEnd)"),(0,a.kt)("p",null,"Return Value: Status of operating hours update"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"generateRandomPromptTime()")),(0,a.kt)("p",null,"Description:Generates a random time for when prompts are assigned"),(0,a.kt)("p",null,"Parameters: None"),(0,a.kt)("p",null,"Data Types: None"),(0,a.kt)("p",null,"Return Value: Random prompt assignment time (e.g., timestamp)"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"generateRandomPrompt()")),(0,a.kt)("p",null,"Description:  Generates a random prompt"),(0,a.kt)("p",null,"Parameters: None"),(0,a.kt)("p",null,"Data Types: None"),(0,a.kt)("p",null,"Return Value: Randomly generated prompt (e.g., string)"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"getPromptList()")),(0,a.kt)("p",null,"Description: Gets the prompt list"),(0,a.kt)("p",null,"Parameters: None"),(0,a.kt)("p",null,"Data Types: None"),(0,a.kt)("p",null,"Return Value: List of prompts"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"setPromptList()")),(0,a.kt)("p",null,"Description: Sets the prompt list "),(0,a.kt)("p",null,"Parameters: List of prompts"),(0,a.kt)("p",null,"Data Types: List of strings"),(0,a.kt)("p",null,"Return Value: Status of prompt list update"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"getResponsePostComment()")),(0,a.kt)("p",null,"Description: Gets and stores the response of a post comment"),(0,a.kt)("p",null,"Parameters: None"),(0,a.kt)("p",null,"Data Types: None"),(0,a.kt)("p",null,"Return Value: User response to a post comment (e.g., string)"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"setResponsePostComment()")),(0,a.kt)("p",null,"Description:  Sets a response of a post comment"),(0,a.kt)("p",null,"Parameters: User response to a post comment (e.g., string)"),(0,a.kt)("p",null,"Data Types: String"),(0,a.kt)("p",null,"Return Value: Status of response update"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"getBlackList()")),(0,a.kt)("p",null,"Description: Shows the blacklist"),(0,a.kt)("p",null,"Parameters: None"),(0,a.kt)("p",null,"Data Types: None"),(0,a.kt)("p",null,"Return Value: List of blacklisted users"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"addUserToBlackList()")),(0,a.kt)("p",null,"Description: Adds users to the blacklist"),(0,a.kt)("p",null,"Parameters: User ID or username"),(0,a.kt)("p",null,"Data Types: String"),(0,a.kt)("p",null,"Return Value: Status of user addition to the blacklist"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"removeUserFromBlackList()")),(0,a.kt)("p",null,"Description: Removes a user from the blacklist"),(0,a.kt)("p",null,"Parameters: User ID or username"),(0,a.kt)("p",null,"Data Types: String"),(0,a.kt)("p",null,"Return Value: Status of user removal from the blacklist"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"selectRandomUserToPrompt()")),(0,a.kt)("p",null,"Description: Selects a random user to assign a prompt to"),(0,a.kt)("p",null,"Parameters: None"),(0,a.kt)("p",null,"Data Types: None"),(0,a.kt)("p",null,"Return Value: Selected user for prompt assignment (e.g., User ID or username)"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"getApprovalStatus()")),(0,a.kt)("p",null,"Description:Gets the approval status after sending a user response to the moderator"),(0,a.kt)("p",null,"Parameters: None"),(0,a.kt)("p",null,"Data Types: None"),(0,a.kt)("p",null,"Return Value: Approval status (e.g., boolean)"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"setApprovalStatus()")),(0,a.kt)("p",null,"Description: Sets the approval status after sending a user response to a moderator"),(0,a.kt)("p",null,"Parameters: Approval status (e.g., boolean)"),(0,a.kt)("p",null,"Data Types: Boolean"),(0,a.kt)("p",null,"Return Value: Status of approval status update"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sendToResponseToMod()")),(0,a.kt)("p",null,"Description: Sends a user response to a prompt to a moderator"),(0,a.kt)("p",null,"Parameters: User response to a prompt"),(0,a.kt)("p",null,"Data Types: String"),(0,a.kt)("p",null,"Return Value: Status of sending to the moderator"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"postResponseToChannel()")),(0,a.kt)("p",null,"Description: Posts the response of a moderator to a user to a channel"),(0,a.kt)("p",null,"Parameters: Moderator's response to a user"),(0,a.kt)("p",null,"Data Types: String"),(0,a.kt)("p",null,"Return Value: Status of posting to a channel"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"deleteOriginalPromptFromChannel()")),(0,a.kt)("p",null,"Description:Deletes a prompt from a certain channel"),(0,a.kt)("p",null,"Parameters: Channel or prompt ID"),(0,a.kt)("p",null,"Data Types: String or identifier"),(0,a.kt)("p",null,"Return Value: Status of prompt deletion from the channel"),(0,a.kt)("p",null,"Output Variables: None"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"setUsersAlreadyPromptedList()")),(0,a.kt)("p",null,"Description:  Sets a list of users that were already prompted by the bot"),(0,a.kt)("p",null,"Parameters: List of users"),(0,a.kt)("p",null,"Data Types: List of user IDs or usernames"),(0,a.kt)("p",null,"Return Value: Status of updating the list"),(0,a.kt)("p",null,"Output Variables: None"))}k.isMDXComponent=!0}}]);