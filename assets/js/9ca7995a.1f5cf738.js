"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1996],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>b});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},l=Object.keys(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=o.createContext({}),u=function(t){var e=o.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=u(t.components);return o.createElement(i.Provider,{value:e},t.children)},d="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},k=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),d=u(n),k=r,b=d["".concat(i,".").concat(k)]||d[k]||h[k]||l;return n?o.createElement(b,s(s({ref:e},c),{},{components:n})):o.createElement(b,s({ref:e},c))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,s=new Array(l);s[0]=k;var a={};for(var i in e)hasOwnProperty.call(e,i)&&(a[i]=e[i]);a.originalType=t,a[d]="string"==typeof t?t:r,s[1]=a;for(var u=2;u<l;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2680:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const l={sidebar_position:2},s="Integration Tests",a={unversionedId:"testing/integration-testing",id:"testing/integration-testing",title:"Integration Tests",description:"Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.",source:"@site/docs/testing/integration-testing.md",sourceDirName:"testing",slug:"/testing/integration-testing",permalink:"/project-bereal-meets-slack/docs/testing/integration-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-bereal-meets-slack/edit/main/documentation/docs/testing/integration-testing.md",tags:[],version:"current",lastUpdatedBy:"Vivek R Patel",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Unit Tests for BeRealMeets Discord Bot",permalink:"/project-bereal-meets-slack/docs/testing/unit-testing"},next:{title:"Acceptance test",permalink:"/project-bereal-meets-slack/docs/testing/acceptence-testing"}},i={},u=[],c={toc:u};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integration-tests"},"Integration Tests"),(0,r.kt)("p",null,"Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results."),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Test Case ID"),(0,r.kt)("th",null,"Test Case Objective"),(0,r.kt)("th",null,"Test Case Description"),(0,r.kt)("th",null,"Expected Value")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"Test if owner successful adds bot into the server. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," Test that all the guidelines, roles, and settings of server are configured and saved correctly. "),(0,r.kt)("td",null,(0,r.kt)("ol",null,(0,r.kt)("li",null,"Test moderator signing into server "),(0,r.kt)("li",null,"Owner accesses \u201cpreferences\u201d"),(0,r.kt)("li",null,"Owner selects \u201capps and integration\u201d Install the bot, verifies if installation is successful"),(0,r.kt)("li",null,"Owner assigns roles and privileges within the community, validates that assigned roles and privileges are correctly reflected"),(0,r.kt)("li",null,"Owner defines moderation and content guidelines for community, test confirms guidelines are properly set"),(0,r.kt)("li",null,"Test checks that prompts are correctly configured"),(0,r.kt)("li",null,"Test validates schedule is correctly configured\xa0"),(0,r.kt)("li",null,"Test ensures that he specific duration is properly applied"),(0,r.kt)("li",null,"Verifies time limit is correctly set"),(0,r.kt)("li",null,"Confirms that settings are saved | Assert that actions taken by owner are successful and expected settings are configured and saved correctly"))),(0,r.kt)("td",null," Assert that actions taken by owner are successful and expected settings are configured and saved correctly ",(0,r.kt)("br",null),(0,r.kt)("br",null)," Overall bot should be successfully configured in the server ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"2"),(0,r.kt)("td",null,"Test if BeReal bot successfully prompted user ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Test If user responded, If bot got user response and if it is sent to the moderator ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Test If user can get approval status from BeReal bot"),(0,r.kt)("td",null,(0,r.kt)("ol",null,(0,r.kt)("li",null,"Stimulate of notification sent and user receiving notification"),(0,r.kt)("li",null,"User opens Discord"),(0,r.kt)("li",null,"User responds to random prompt by taking a photo and uploading it"),(0,r.kt)("li",null,"User sends text response to BeReal bot"),(0,r.kt)("li",null,"Moderator is sent the user\u2019s response via the bot, for review"),(0,r.kt)("li",null,"Discord user waits for approval status from bot, to see whether response was approved or not (test waits for reasonable time and checks for arrival of this status)"))),(0,r.kt)("td",null,"Assert that moderator receive user\u2019s response for review ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Discord user receives approval status or feedback from BeReal bot within reasonable time")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"3"),(0,r.kt)("td",null,"Test that the bot is able to wait for the user until timeout ",(0,r.kt)("br",null),(0,r.kt)("br",null),"That the bot will send a notification to remind user after timeout time ",(0,r.kt)("br",null),(0,r.kt)("br",null),"That the bot can recognize the user\u2019s failure to respond, and if it can successfully send a reminder notification to users about the missed prompt"),(0,r.kt)("td",null,(0,r.kt)("ol",null,(0,r.kt)("li",null,"User did not answer bot prompt"),(0,r.kt)("li",null,"Bot waits for user until timeout"),(0,r.kt)("li",null,"Bot sends notification to user after timeout"),(0,r.kt)("li",null,"Bot sees that user failed to respond and will send a reminder to users about the missed prompt"))),(0,r.kt)("td",null,"Asserts that the bot can send a notification to users after confirming that the user failed to respond to the prompt in a certain time frame ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Confirm that the bot can recognize the user\u2019s failure to respond")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"4"),(0,r.kt)("td",null,"Test that the bot can receive message from moderator ",(0,r.kt)("br",null),(0,r.kt)("br",null),"That the bot can post the image with caption and notify the user ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Bot can log emoji reactions, threaded replies, and comments from the community"),(0,r.kt)("td",null,(0,r.kt)("ol",null,(0,r.kt)("li",null,"Bot receives approval decision "),(0,r.kt)("li",null,"Bot post approved image with caption"),(0,r.kt)("li",null,"Bot notified user about posted image"),(0,r.kt)("li",null,"Logs reaction, threaded replies, comments from community"))),(0,r.kt)("td",null,"Assert that the bot successfully receives approval decision ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Bot can post approved image with caption and notify user ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Bot can correctly log emoji reactions, threaded replies, and comments and can send logs to the server")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"5"),(0,r.kt)("td",null,"Test that a notification with feedback and tells the user to resubmit is sent to user if their post was denied ",(0,r.kt)("br",null),(0,r.kt)("br",null),"That the user is able to resubmit their image ",(0,r.kt)("br",null),(0,r.kt)("br",null),"If they receive a notification that the post was approved and posted"),(0,r.kt)("td",null,(0,r.kt)("ol",null,(0,r.kt)("li",null,"User receives notification that their post was not approved and asked to resubmit with feedback"),(0,r.kt)("li",null,"User resubmits image"),(0,r.kt)("li",null,"User receives notification that post was approved and it was posted"))),(0,r.kt)("td",null,"Assert that the user indeed received a notification with feedback and is able to resubmit image ",(0,r.kt)("br",null),(0,r.kt)("br",null),"That the user received a notification that their post was approved and posted")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"6"),(0,r.kt)("td",null,"Test that users are able to receive notifications when other users have posted a response to a prompt ",(0,r.kt)("br",null),(0,r.kt)("br",null),"That the notifications take users to the post are they able to view the response of other users in the server  ",(0,r.kt)("br",null),(0,r.kt)("br",null),"That the user is able to leave comments and reactions to posts"),(0,r.kt)("td",null,(0,r.kt)("ol",null,(0,r.kt)("li",null,"A user in the Discord community is notified by the BeReal bot that another user has posted a response to a prompt. "),(0,r.kt)("li",null,"User opens Discord to view the response in the Discord community channel"),(0,r.kt)("li",null,"User interacts with the post by leaving a comment or a reaction(likes, emojis, etc)"))),(0,r.kt)("td",null,"Asserts that the user can receive notification when others post, as well as the notification being able to take users to the correct post ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Comments and reactions that the user posts are saved on other user\u2019s posts")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"7"),(0,r.kt)("td",null,"Test that the user can use settings of the bot and can successfully choose the option to turn off new post notifications"),(0,r.kt)("td",null,(0,r.kt)("ol",null,(0,r.kt)("li",null,"User goes to setting of bot"),(0,r.kt)("li",null,"User chooses option to turn off new post notification"),(0,r.kt)("li",null,"User is no longer sent any post notification"))),(0,r.kt)("td",null,"Assert that the user is able to turn off new post notifications of the bot, and that the user no longer receives those notifications")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"8"),(0,r.kt)("td",null,"Test that the moderator can log into Discord, is able to run a command to request data in csv format, and is able to export reaction data for further analysis ",(0,r.kt)("br",null),(0,r.kt)("br",null),"That the moderator can run a command to see reaction data, as well as being able to receive data visualizations from the bot"),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Main Testing Flow"),(0,r.kt)("ol",null,(0,r.kt)("li",null,"Moderator logs into Discord"),(0,r.kt)("li",null,"Moderator runs datacsv command from bot"),(0,r.kt)("li",null,"Moderator exports reaction data, and recieves a CSV")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h4",null,"Alternate Testing Flow"),(0,r.kt)("ol",null,(0,r.kt)("li",null,"Moderator logs into Discord"),(0,r.kt)("li",null,"Moderator runs datavis command from bot"),(0,r.kt)("li",null,"Moderator receives data visualizations from bot"))),(0,r.kt)("td",null,"Assert that the moderator can log in and run a command to request data in csv format ",(0,r.kt)("br",null),(0,r.kt)("br",null),"The moderator can successfully export reaction data ",(0,r.kt)("br",null),(0,r.kt)("br",null),"The moderator can run a command to see reaction data and is able to receive data visualizations from the bot")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"9"),(0,r.kt)("td",null,"Test that the moderator is able to receive notifications about a user\u2019s submission and that the moderator can successfully mark submissions as \u201cApproved\u201d or \u201cDenied\u201d to the bot"),(0,r.kt)("td",null,(0,r.kt)("ol",null,(0,r.kt)("li",null,"Moderator receives notification about a user submission"),(0,r.kt)("li",null,"Moderator opens Discord"),(0,r.kt)("li",null,"Marks Submission as approved or denied"),(0,r.kt)("li",null,"Recieves a confirmation"))),(0,r.kt)("td",null,"Asserts that the moderator can receive notifications from users and is able to approve or deny submissions ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Confirms that moderators can mark submissions as \u201cApproved\u201d or \u201cDenied\u201d to the bot")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"10"),(0,r.kt)("td",null,"Test that the bot can recognize bad behavior within the community ",(0,r.kt)("br",null),(0,r.kt)("br",null),"That the bot can send a warning notification to the user about bad behavior ",(0,r.kt)("br",null),(0,r.kt)("br",null),"That the bot can notify the moderator about the bad behavior and ask if they want the moderator to add the user to the blacklist ",(0,r.kt)("br",null),(0,r.kt)("br",null),"That the bot can add the user to the blacklist themselves if the user continues the bad behavior, the bot should be able to log this action"),(0,r.kt)("td",null,(0,r.kt)("ol",null,(0,r.kt)("li",null,"Bot is repeatedly ignored to a set limit"),(0,r.kt)("li",null,"BeReal bot sends a warning notification about the bad behavior."),(0,r.kt)("li",null,"BeReal bot notifies moderators about the bad behavior and asks if they want to add the user to the blacklist."),(0,r.kt)("li",null,"BeReal bot logs the action."))),(0,r.kt)("td",null,"Asserts that the bot can recognize bad behavior within the community ",(0,r.kt)("br",null),(0,r.kt)("br",null),"The bot can successfully send a warning notification to the user about bad behavior ",(0,r.kt)("br",null),(0,r.kt)("br",null),"The bot is able to notify the moderator and ask if the moderator wants to add the user to the blacklist ",(0,r.kt)("br",null),(0,r.kt)("br",null),"The bot itself will be able to successfully add a user to the blacklist in the behavior continues and will log this action")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"11"),(0,r.kt)("td",null,"Test that the moderator can choose not to add the user to the blacklist ",(0,r.kt)("br",null),(0,r.kt)("br",null),"The moderator can view the blacklist and remove users from the blacklist ",(0,r.kt)("br",null),(0,r.kt)("br",null),"The moderator can run a command to remove a user from the blacklist, and make sure that the user is no longer on the blacklist"),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Main Testing Flow"),(0,r.kt)("ol",null,(0,r.kt)("li",null,"Moderator chooses to add the user to the blacklist."),(0,r.kt)("li",null,"Moderator runs a command to view the blacklist and sees added users.")),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("h4",null,"Alternative Testing Flow"),(0,r.kt)("ol",null,(0,r.kt)("li",null,"Moderator chooses not to add users to the blacklist "),(0,r.kt)("li",null,"Moderator views the blacklist and sees another user they want to remove."),(0,r.kt)("li",null,"Moderator runs a command to remove the user from the blacklist."),(0,r.kt)("li",null,"Moderator views the blacklist and no longer sees removed user."))),(0,r.kt)("td",null,"Assert that the moderator can choose not to add a user to the blacklist, can view the blacklist as well as remove users from the blacklist ",(0,r.kt)("br",null),(0,r.kt)("br",null),"Can successfully run a command to remove a user from the blacklist and make sure the user is no longer on the blacklist"))))}d.isMDXComponent=!0}}]);