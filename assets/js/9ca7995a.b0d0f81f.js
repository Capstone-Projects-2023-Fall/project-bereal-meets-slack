"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1996],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return a?o.createElement(h,s(s({ref:t},p),{},{components:a})):o.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<n;c++)s[c]=a[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2680:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var o=a(7462),r=(a(7294),a(3905));const n={sidebar_position:2},s="Integration Tests",i={unversionedId:"testing/integration-testing",id:"testing/integration-testing",title:"Integration Tests",description:"Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.",source:"@site/docs/testing/integration-testing.md",sourceDirName:"testing",slug:"/testing/integration-testing",permalink:"/project-bereal-meets-slack/docs/testing/integration-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-bereal-meets-slack/edit/main/documentation/docs/testing/integration-testing.md",tags:[],version:"current",lastUpdatedBy:"Rishi Duggal",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Unit Tests for BeRealMeets Discord Bot",permalink:"/project-bereal-meets-slack/docs/testing/unit-testing"},next:{title:"Acceptance test",permalink:"/project-bereal-meets-slack/docs/testing/acceptence-testing"}},l={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integration-tests"},"Integration Tests"),(0,r.kt)("p",null,"Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Test Case ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Test Case Objective"),(0,r.kt)("th",{parentName:"tr",align:null},"Test Case Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Expected Result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if owner successful adds bot into the workspace"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Test that all the guidelines, roles, and settings of server are configured and saved correctly"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                                                                                                                                                                                                                                                                              | 1.  Test moderator signing into workspace\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Owner accesses \u201cpreferences\u201d"),(0,r.kt)("li",{parentName:"ol"},"owner selects \u201capps and integration\u201d Install the bot, verifies if installation is successful"),(0,r.kt)("li",{parentName:"ol"},"Owner assigns roles and privileges within the community, validates that assigned roles and privileges are correctly reflected"),(0,r.kt)("li",{parentName:"ol"},"Owner defines moderation and content guidelines for community, test confirms guidelines are properly set"),(0,r.kt)("li",{parentName:"ol"},"Test checks that prompts are correctly configured"),(0,r.kt)("li",{parentName:"ol"},"Test validates schedule is correctly configured\xa0"),(0,r.kt)("li",{parentName:"ol"},"Test ensures that he specific duration is properly applied"),(0,r.kt)("li",{parentName:"ol"},"Verifies time limit is correctly set"),(0,r.kt)("li",{parentName:"ol"},"Confirms that settings are saved | Assert that actions taken by owner are successful and expected settings are configured and saved correctly")),(0,r.kt)("p",null,"Overall bot should be successfully configured in the workspace"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                                                                                                                                                                                                                                       |\n")),(0,r.kt)("p",null,"| 2            | Test if the bot successfully prompted user\xa0"),(0,r.kt)("p",null,"Test If user responded, If bot got user response and if it is sent to the moderator"),(0,r.kt)("p",null,"Test If user can get approval status from the bot                                                                                                                                                                                                                                                   | 1.  Stimulate of notification sent and user receiving notification"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"User opens app"),(0,r.kt)("li",{parentName:"ol"},"User responds to random prompt by taking a photo and uploading it"),(0,r.kt)("li",{parentName:"ol"},"User sends text response to bot"),(0,r.kt)("li",{parentName:"ol"},"Moderator is sent the user\u2019s response via the bot, for review"),(0,r.kt)("li",{parentName:"ol"},"User waits for approval status from bot, to see whether response was approved or not (test waits for reasonable time and checks for arrival of this status)                                                                                                                                                                                                                                                                       | Assert that moderator receive user\u2019s response for review")),(0,r.kt)("p",null,"User receives approval status or feedback from the bot within reasonable time"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                                                                                                                                                                                                                                                                          |\n")),(0,r.kt)("p",null,"| 3            | Test that the bot is able to wait for the user until timeout"),(0,r.kt)("p",null,"That the bot will send a notification to remind user after timeout time"),(0,r.kt)("p",null,"That the bot can recognize the user\u2019s failure to respond, and if it can successfully send a reminder notification to users about the missed prompt                                                                                                                                             | 1.  User did not answer bot prompt"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Bot waits for user until timeout"),(0,r.kt)("li",{parentName:"ol"},"Bot sends notification to user after timeout","\\"),(0,r.kt)("li",{parentName:"ol"},"Bot sees that user failed to respond and will send a reminder to users about the missed prompt                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Asserts that the bot can send a notification to users after confirming that the user failed to respond to the prompt in a certain time frame")),(0,r.kt)("p",null,"Confirm that the bot can recognize the user\u2019s failure to respond"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                                                                                                                                                                                                   |\n")),(0,r.kt)("p",null,"| 4            | Test that the bot can receive message from moderator"),(0,r.kt)("p",null,"That the bot can post the image with caption and notify the user"),(0,r.kt)("p",null,"Bot can log emoji reactions, threaded replies, and comments from the community                                                                                                                                                                                                                              | 1.  Bot receives approval decision"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Bot post approved image with caption"),(0,r.kt)("li",{parentName:"ol"},"Bot notified user about posted image"),(0,r.kt)("li",{parentName:"ol"},"Logs reaction, threaded replies, comments from community                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Assert that the bot successfully receives approval decision")),(0,r.kt)("p",null,"Bot can post approved image with caption and notify user"),(0,r.kt)("p",null,"Bot can correctly log emoji reactions, threaded replies, and comments and can send logs to the server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                                                                                                                                                                           |\n")),(0,r.kt)("p",null,"| 5            | Test that a notification with feedback and tells the user to resubmit is sent to user if their post was denied"),(0,r.kt)("p",null,"That the user is able to resubmit their image"),(0,r.kt)("p",null,"If they receive a notification that the post was approved and posted                                                                                                                                                                                                   | 1.  User receives notification that their post was not approved and asked to resubmit with feedback"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"User resubmits image"),(0,r.kt)("li",{parentName:"ol"},"User receives notification that post was approved and it was posted                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Assert that the user indeed received a notification with feedback and is able to resubmit image")),(0,r.kt)("p",null,"That the user received a notification that their post was approved and posted"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                                                                                                                                                                                                                                   |\n")),(0,r.kt)("p",null,"| 6            | Test that users are able to receive notifications when other users have posted a response to a prompt"),(0,r.kt)("p",null,"That the notifications take users to the post are they able to view the response of other users in the server\xa0"),(0,r.kt)("p",null,"That the user is able to leave comments and reactions to posts                                                                                                                                                 | 1.  A user in the community is notified by the the bot that another user has posted a response to a prompt."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"User opens app to view the response in the community channel"),(0,r.kt)("li",{parentName:"ol"},"User interacts with the post by leaving a comment or a reaction(likes, emojis, etc)                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Asserts that the user can receive notification when others post, as well as the notification being able to take users to the correct post")),(0,r.kt)("p",null,"Comments and reactions that the user posts are saved on other user\u2019s posts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                                                                                                                                                                                            |\n")),(0,r.kt)("p",null,"| 7            | Test that the user can use settings of the bot and can successfully choose the option to turn off new post notifications                                                                                                                                                                                                                                                                                                                          | 1.  User goes to setting of bot"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"User chooses option to turn off new post notification"),(0,r.kt)("li",{parentName:"ol"},"User is no longer sent any post notification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Assert that the user is able to turn off new post notifications of the bot, and that the user no longer receives those notifications                                                                                                                                                                                                                                                                                                     |\n| 8            | Test that the moderator can log into the app, is able to run a command to request data in csv format, and is able to export reaction data for further analysis")),(0,r.kt)("p",null,"That the moderator can run a command to see reaction data, as well as being able to receive data visualizations from the bot                                                                                                                                                | Normal Flow:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Moderator logs into app"),(0,r.kt)("li",{parentName:"ol"},"Moderator runs a command to request reaction data in csv format"),(0,r.kt)("li",{parentName:"ol"},"Moderator exports reaction data for further analysis, if needed")),(0,r.kt)("p",null,"Alternate Flow:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Moderator logs into app"),(0,r.kt)("li",{parentName:"ol"},"Moderator runs a command to see reaction data"),(0,r.kt)("li",{parentName:"ol"},"Moderator receives data visualizations from bot                                                                                                                                                                                                                                                                                                                                                                   | Assert that the moderator can log in and run a command to request data in csv format")),(0,r.kt)("p",null,"The moderator can successfully export reaction data"),(0,r.kt)("p",null,"The moderator can run a command to see reaction data and is able to receive data visualizations from the bot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                                                                                                                                                |\n")),(0,r.kt)("p",null,"| 9            | Test that the moderator is able to receive notifications about a user\u2019s submission and that the moderator can successfully mark submissions as \u201cApproved\u201d or \u201cDenied\u201d to the bot                                                                                                                                                                                                                                                                  | 1.  Moderator receives notification about a user submission"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Moderator opens app"),(0,r.kt)("li",{parentName:"ol"},"Moderator reviews submission using predefined criteria from community guidelines"),(0,r.kt)("li",{parentName:"ol"},"Based on guidelines, moderators approves or rejects submissions"),(0,r.kt)("li",{parentName:"ol"},"Moderator marks submissions as \u201cApproved\u201d or \u201cDenied\u201d to bot                                                                                                                                                                                                                                                                                                                                                                                                | Asserts that the moderator can receive notifications from users and is able to approve or deny submissions")),(0,r.kt)("p",null,"Confirms that moderators can mark submissions as \u201cApproved\u201d or \u201cDenied\u201d to the bot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                                                                                                                                                                                                                   |\n")),(0,r.kt)("p",null,"| 10           | Test that the bot can recognize bad behavior within the community"),(0,r.kt)("p",null,"That the bot can send a warning notification to the user about bad behavior"),(0,r.kt)("p",null,"That the bot can notify the moderator about the bad behavior and ask if they want the moderator to add the user to the blacklist"),(0,r.kt)("p",null,"That the bot can add the user to the blacklist themselves if the user continues the bad behavior, the bot should be able to log this action | 1.  The bot recognizes bad user behavior within the app community."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Bot sends a warning notification to the user about the bad behavior."),(0,r.kt)("li",{parentName:"ol"},"Bot notifies the moderator about the bad behavior and asks if they want to add the user to the blacklist."),(0,r.kt)("li",{parentName:"ol"},"If the user continues with bad behavior, bot adds the user to the blacklist."),(0,r.kt)("li",{parentName:"ol"},"Bot logs the action.                                                                                                                                                                                                                                                                                                                                          | Asserts that the bot can recognize bad behavior within the community\xa0")),(0,r.kt)("p",null,"The bot can successfully send a warning notification to the user about bad behavior"),(0,r.kt)("p",null,"The bot is able to notify the moderator and ask if the moderator wants to add the user to the blacklist\xa0"),(0,r.kt)("p",null,"The bot itself will be able to successfully add a user to the blacklist in the behavior continues and will log this action"),(0,r.kt)("p",null," |\n| 11           | Test that the moderator can choose not to add the user to the blacklist"),(0,r.kt)("p",null,"The moderator can view the blacklist and remove users from the blacklist"),(0,r.kt)("p",null,"The moderator can run a command to remove a user from the blacklist, and make sure that the user is no longer on the blacklist"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                                                                                                                                       | Normal Flow:\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Moderator chooses to add the user to the blacklist."),(0,r.kt)("li",{parentName:"ol"},"Moderator runs a command to view the blacklist and sees added users.")),(0,r.kt)("p",null,"Alternate Flow:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Moderator chooses not to add users to the blacklist."),(0,r.kt)("li",{parentName:"ol"},"Moderator views the blacklist and sees another user they want to remove."),(0,r.kt)("li",{parentName:"ol"},"Moderator runs a command to remove the user from the blacklist."),(0,r.kt)("li",{parentName:"ol"},"Moderator views the blacklist and no longer sees removed users.                                                                                                                                                                                                                                                          | Assert that the moderator can choose not to add a user to the blacklist, can view the blacklist as well as remove users from the blacklist")),(0,r.kt)("p",null,"Can successfully run a command to remove a user from the blacklist and make sure the user is no longer on the blacklist"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                                                                                                                                              |\n")))}u.isMDXComponent=!0}}]);