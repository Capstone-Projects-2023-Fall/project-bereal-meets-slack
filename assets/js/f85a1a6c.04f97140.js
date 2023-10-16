"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1270],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),p=d(a),u=r,c=p["".concat(s,".").concat(u)]||p[u]||k[u]||l;return a?n.createElement(c,o(o({ref:e},m),{},{components:a})):n.createElement(c,o({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[p]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},770:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1},o="Unit Tests for BeRealMeets Discord Bot",i={unversionedId:"testing/unit-testing",id:"testing/unit-testing",title:"Unit Tests for BeRealMeets Discord Bot",description:"Tests to ensure each method of the classes bmsBot, database, and webServer works as expected based on the UML diagrams. External input should be provided via mock objects and results verified via mock objects. These tests should not require manual entry of data nor require manual interpretation of results.",source:"@site/docs/testing/unit-testing.md",sourceDirName:"testing",slug:"/testing/unit-testing",permalink:"/project-bereal-meets-slack/docs/testing/unit-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-bereal-meets-slack/edit/main/documentation/docs/testing/unit-testing.md",tags:[],version:"current",lastUpdatedBy:"SSunnydev",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Test Procedures",permalink:"/project-bereal-meets-slack/docs/category/test-procedures"},next:{title:"Integration Tests",permalink:"/project-bereal-meets-slack/docs/testing/integration-testing"}},s={},d=[],m={toc:d};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unit-tests-for-berealmeets-discord-bot"},"Unit Tests for BeRealMeets Discord Bot"),(0,r.kt)("p",null,"Tests to ensure each method of the classes ",(0,r.kt)("inlineCode",{parentName:"p"},"bmsBot"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"database"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"webServer")," works as expected based on the UML diagrams. External input should be provided via mock objects and results verified via mock objects. These tests should not require manual entry of data nor require manual interpretation of results."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Test Case ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Test Case Objective"),(0,r.kt)("th",{parentName:"tr",align:null},"Test Case Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Expected Result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Test ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot"),"'s ability to fetch CSV data."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getCSV()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot")," class without parameters."),(0,r.kt)("td",{parentName:"tr",align:null},"Properly formatted CSV data is returned.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Test ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot"),"'s ability to fetch visualization data."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getDataVis()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot")," class without parameters."),(0,r.kt)("td",{parentName:"tr",align:null},"Properly structured visualization data is returned.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," can set user roles."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide mock user and role data to the ",(0,r.kt)("inlineCode",{parentName:"td"},"setUserRoles()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"User roles in mock database are updated successfully.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Test ",(0,r.kt)("inlineCode",{parentName:"td"},"webServer"),"'s CSV generation."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide ",(0,r.kt)("inlineCode",{parentName:"td"},"generateCSV()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"webServer")," class with mock start and end times."),(0,r.kt)("td",{parentName:"tr",align:null},"A mock CSV is generated for the specified date range.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot")," can send prompts."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"sendPrompt()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"Assert that a prompt is sent to the mock Discord server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," can fetch bot settings."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getBotSettings()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"Assert that bot settings are fetched from the mock database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," can get user roles."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide mock user data to the ",(0,r.kt)("inlineCode",{parentName:"td"},"getUserRoles()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"User roles from mock database are returned successfully.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot")," can set operating hours."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide mock start and end times to ",(0,r.kt)("inlineCode",{parentName:"td"},"setOperatingHours()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"Operating hours are set and stored correctly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"Test ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot"),"'s ability to get a random prompt."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"generateRandomPrompt()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"A random prompt from the mock prompt list is returned.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot")," can get the operating hours."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getOperatingHours()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"Operating hours are fetched successfully.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot")," can retrieve a response delay."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getResponseDelay()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"Assert that the delay duration before a user responds is fetched.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot")," can set response for a user."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide mock user and response to ",(0,r.kt)("inlineCode",{parentName:"td"},"setResponse()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"User's response is set and stored correctly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," can set bot settings."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide mock settings data to ",(0,r.kt)("inlineCode",{parentName:"td"},"setBotSettings()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"Bot settings in mock database are updated successfully.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," can get reactions count."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getReactions()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"Assert that the count of reactions is fetched from the mock database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," can get response count."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getResponseTs()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"database")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"Assert that the count of responses is fetched from the mock database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot")," can set prompt list."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide a mock prompt list to ",(0,r.kt)("inlineCode",{parentName:"td"},"setPromptList()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"Prompt list is set and stored correctly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"17"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"webServer")," can generate data visualization."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide ",(0,r.kt)("inlineCode",{parentName:"td"},"generateDataVis()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"webServer")," class with mock start and end times."),(0,r.kt)("td",{parentName:"tr",align:null},"A mock data visualization is generated for the specified date range.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot")," can get the prompt list."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getPromptList()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"Prompt list is fetched successfully.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"19"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot")," can set a user's response comment."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide mock user and comment to ",(0,r.kt)("inlineCode",{parentName:"td"},"setResponsePostComment()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"User's comment is set and stored correctly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot")," can get blacklisted users."),(0,r.kt)("td",{parentName:"tr",align:null},"Invoke ",(0,r.kt)("inlineCode",{parentName:"td"},"getBlackList()")," method of ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot")," class."),(0,r.kt)("td",{parentName:"tr",align:null},"Blacklisted users list is fetched successfully.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"21"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot")," can add users to blacklist."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide a mock user to ",(0,r.kt)("inlineCode",{parentName:"td"},"addUserToBlackList()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"User is added to the blacklist correctly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"22"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot")," can remove users from blacklist."),(0,r.kt)("td",{parentName:"tr",align:null},"Provide a mock user to ",(0,r.kt)("inlineCode",{parentName:"td"},"removeUserFromBlackList()")," method."),(0,r.kt)("td",{parentName:"tr",align:null},"Remove user from blacklist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"23"),(0,r.kt)("td",{parentName:"tr",align:null},"Test if ",(0,r.kt)("inlineCode",{parentName:"td"},"bmsBot")," can selected a random user to prompt"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide a mock user to select from a mock list"),(0,r.kt)("td",{parentName:"tr",align:null},"Select a random user from the database to prompt")))))}p.isMDXComponent=!0}}]);