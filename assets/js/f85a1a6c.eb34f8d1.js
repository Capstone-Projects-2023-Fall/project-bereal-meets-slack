"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1270],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},p="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),p=s(a),u=r,c=p["".concat(d,".").concat(u)]||p[u]||k[u]||l;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[p]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},770:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1},i="Unit Tests for BeRealMeets Discord Bot",o={unversionedId:"testing/unit-testing",id:"testing/unit-testing",title:"Unit Tests for BeRealMeets Discord Bot",description:"Tests to ensure each method of the classes beRealBot, database, and webServer works as expected based on the UML diagrams. External input should be provided via mock objects and results verified via mock objects. These tests should not require manual entry of data nor require manual interpretation of results.",source:"@site/docs/testing/unit-testing.md",sourceDirName:"testing",slug:"/testing/unit-testing",permalink:"/project-bereal-meets-slack/docs/testing/unit-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-bereal-meets-slack/edit/main/documentation/docs/testing/unit-testing.md",tags:[],version:"current",lastUpdatedBy:"NTRachel",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Test Procedures",permalink:"/project-bereal-meets-slack/docs/category/test-procedures"},next:{title:"Integration Tests",permalink:"/project-bereal-meets-slack/docs/testing/integration-testing"}},d={},s=[],m={toc:s};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unit-tests-for-berealmeets-discord-bot"},"Unit Tests for BeRealMeets Discord Bot"),(0,r.kt)("p",null,"Tests to ensure each method of the classes ",(0,r.kt)("inlineCode",{parentName:"p"},"beRealBot"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"database"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"webServer")," works as expected based on the UML diagrams. External input should be provided via mock objects and results verified via mock objects. These tests should not require manual entry of data nor require manual interpretation of results."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Test Case ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Test Case Objective"),(0,r.kt)("th",{parentName:"tr",align:null},"Test Case Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Expected Result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Test ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot"),"'s ability to fetch CSV data."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getCSV()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot")," class without parameters."),(0,r.kt)("td",{parentName:"tr",align:null},"Properly formatted CSV data is returned.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Test ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot"),"'s ability to fetch visualization data."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getDataVis()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot")," class without parameters."),(0,r.kt)("td",{parentName:"tr",align:null},"Properly structured visualization data is returned.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," can set user roles."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide mock user and role data to the ",(0,r.kt)("inlineCode",{parentName:"td"},"setUserRoles()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"User roles in mock database are updated successfully.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Test ",(0,r.kt)("inlineCode",{parentName:"td"},"webServer"),"'s CSV generation."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide ",(0,r.kt)("inlineCode",{parentName:"td"},"generateCSV()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"webServer")," class with mock start and end times."),(0,r.kt)("td",{parentName:"tr",align:null},"A mock CSV is generated for the specified date range.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot")," can send prompts."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"sendPrompt()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"Assert that a prompt is sent to the mock Discord server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," can fetch bot settings."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getBotSettings()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"Assert that bot settings are fetched from the mock database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," can get user roles."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide mock user data to the ",(0,r.kt)("inlineCode",{parentName:"td"},"getUserRoles()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"User roles from mock database are returned successfully.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot")," can set operating hours."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide mock start and end times to ",(0,r.kt)("inlineCode",{parentName:"td"},"setOperatingHours()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"Operating hours are set and stored correctly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"Test ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot"),"'s ability to get a random prompt."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"generateRandomPrompt()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"A random prompt from the mock prompt list is returned.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot")," can get the operating hours."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getOperatingHours()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"Operating hours are fetched successfully.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot")," can retrieve a response delay."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getResponseDelay()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"Assert that the delay duration before a user responds is fetched.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot")," can set response for a user."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide mock user and response to ",(0,r.kt)("inlineCode",{parentName:"td"},"setResponse()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"User's response is set and stored correctly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," can set bot settings."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide mock settings data to ",(0,r.kt)("inlineCode",{parentName:"td"},"setBotSettings()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"Bot settings in mock database are updated successfully.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," can get reactions count."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getReactions()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"Assert that the count of reactions is fetched from the mock database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," can get response count."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getResponseTs()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"Assert that the count of responses is fetched from the mock database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot")," can set prompt list."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide a mock prompt list to ",(0,r.kt)("inlineCode",{parentName:"td"},"setPromptList()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"Prompt list is set and stored correctly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"17"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"webServer")," can generate data visualization."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide ",(0,r.kt)("inlineCode",{parentName:"td"},"generateDataVis()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"webServer")," class with mock start and end times."),(0,r.kt)("td",{parentName:"tr",align:null},"A mock data visualization is generated for the specified date range.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot")," can get the prompt list."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getPromptList()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"Prompt list is fetched successfully.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"19"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot")," can set a user's response comment."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide mock user and comment to ",(0,r.kt)("inlineCode",{parentName:"td"},"setResponsePostComment()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"User's comment is set and stored correctly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot")," can get blacklisted users."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getBlackList()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"Blacklisted users list is fetched successfully.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"21"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot")," can add users to blacklist."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide a mock user to ",(0,r.kt)("inlineCode",{parentName:"td"},"addUserToBlackList()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"User is added to the blacklist correctly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"22"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot")," can remove users from blacklist."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide a mock user to ",(0,r.kt)("inlineCode",{parentName:"td"},"removeUserFromBlackList()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"Remove user from blacklist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"23"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"beRealBot")," can selected a random user to prompt"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide a mock user to select from a mock list"),(0,r.kt)("td",{parentName:"tr",align:null},"Select a random user from the database to prompt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"24"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," can update total average time to post."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide mock data to ",(0,r.kt)("inlineCode",{parentName:"td"},"updateTotalAverageTimeToPost()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"Total average time to post in the mock database is updated correctly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," can get reaction timestamps."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getReactionTS()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"Reaction timestamps are fetched from the mock database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"26"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," can get response timestamps."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getResponseTS()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"Response timestamps are fetched from the mock database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"27"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," can set prompt post timestamps."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide mock data to ",(0,r.kt)("inlineCode",{parentName:"td"},"setPromptPostTS()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"Prompt post timestamps are set in the mock database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"28"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," can update user's time to post."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide mock user data to ",(0,r.kt)("inlineCode",{parentName:"td"},"updateUserTimeToPost()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"User's time to post is updated in the mock database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"29"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," can get user's time to post."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getUserTimeToPost()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"User's time to post is fetched from the mock database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"30"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," can update reactions usage."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide mock data to ",(0,r.kt)("inlineCode",{parentName:"td"},"updateReactionsUsage()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"Reactions usage is updated in the mock database.")))))}p.isMDXComponent=!0}}]);