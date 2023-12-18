"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[607],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),d=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(r),g=n,c=s["".concat(o,".").concat(g)]||s[g]||u[g]||i;return r?a.createElement(c,l(l({ref:t},m),{},{components:r})):a.createElement(c,l({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:n,l[1]=p;for(var d=2;d<i;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},546:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:14},l="Prompt Utility Module Spec",p={unversionedId:"api-specification/promptUtilsSpec",id:"api-specification/promptUtilsSpec",title:"Prompt Utility Module Spec",description:"Methods",source:"@site/docs/api-specification/promptUtilsSpec.md",sourceDirName:"api-specification",slug:"/api-specification/promptUtilsSpec",permalink:"/project-bereal-meets-slack/docs/api-specification/promptUtilsSpec",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-bereal-meets-slack/edit/main/documentation/docs/api-specification/promptUtilsSpec.md",tags:[],version:"current",lastUpdatedBy:"Tara Feeley",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"docsSidebar",previous:{title:"Prompt Timeout Class Spec",permalink:"/project-bereal-meets-slack/docs/api-specification/promptTimeoutSpec"},next:{title:"Timer Class Spec",permalink:"/project-bereal-meets-slack/docs/api-specification/TimerSpec"}},o={},d=[{value:"Methods",id:"methods",level:2},{value:"<code>getPrompts(guildId)</code>",id:"getpromptsguildid",level:3},{value:"<code>getPrompts(guildId) \u2192 {Promise&lt;Array.&lt;string&gt;&gt;}</code>",id:"getpromptsguildid--promisearraystring",level:4},{value:"Parameters:",id:"parameters",level:5},{value:"Returns:",id:"returns",level:5},{value:"<code>addPrompt(guildId, prompt)</code>",id:"addpromptguildid-prompt",level:3},{value:"<code>addPrompt(guildId, prompt) \u2192 {Promise&lt;string&gt;}</code>",id:"addpromptguildid-prompt--promisestring",level:4},{value:"Parameters:",id:"parameters-1",level:5},{value:"Returns:",id:"returns-1",level:5},{value:"<code>deletePrompt(guildId, promptToDelete)</code>",id:"deletepromptguildid-prompttodelete",level:3},{value:"<code>deletePrompt(guildId, promptToDelete) \u2192 {Promise&lt;string&gt;}</code>",id:"deletepromptguildid-prompttodelete--promisestring",level:4},{value:"Parameters:",id:"parameters-2",level:5},{value:"Returns:",id:"returns-2",level:5},{value:"<code>listPrompts(guildId)</code>",id:"listpromptsguildid",level:3},{value:"<code>listPrompts(guildId) \u2192 {Promise&lt;string&gt;}</code>",id:"listpromptsguildid--promisestring",level:4},{value:"Parameters:",id:"parameters-3",level:5},{value:"Returns:",id:"returns-3",level:5},{value:"<code>searchPrompts(guildId, query)</code>",id:"searchpromptsguildid-query",level:3},{value:"<code>searchPrompts(guildId, query) \u2192 {Promise&lt;string&gt;}</code>",id:"searchpromptsguildid-query--promisestring",level:4},{value:"Parameters:",id:"parameters-4",level:5},{value:"Returns:",id:"returns-4",level:5},{value:"<code>getRandomPrompt(guildId)</code>",id:"getrandompromptguildid",level:3},{value:"<code>getRandomPrompt(guildId) \u2192 {Promise&lt;string | null&gt;}</code>",id:"getrandompromptguildid--promisestring--null",level:4},{value:"Parameters:",id:"parameters-5",level:5},{value:"Returns:",id:"returns-5",level:5},{value:"<code>getRandomHourWithinActiveHours(activeHoursData)</code>",id:"getrandomhourwithinactivehoursactivehoursdata",level:3},{value:"<code>getRandomHourWithinActiveHours(activeHoursData) \u2192 {string}</code>",id:"getrandomhourwithinactivehoursactivehoursdata--string",level:4},{value:"Parameters:",id:"parameters-6",level:5},{value:"Returns:",id:"returns-6",level:5}],m={toc:d};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"prompt-utility-module-spec"},"Prompt Utility Module Spec"),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"getpromptsguildid"},(0,n.kt)("inlineCode",{parentName:"h3"},"getPrompts(guildId)")),(0,n.kt)("h4",{id:"getpromptsguildid--promisearraystring"},(0,n.kt)("inlineCode",{parentName:"h4"},"getPrompts(guildId) \u2192 {Promise<Array.<string>>}")),(0,n.kt)("p",null,"Retrieves a list of prompts for a specified guild from the database."),(0,n.kt)("h5",{id:"parameters"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"guildId")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The ID of the Discord guild.")))),(0,n.kt)("h5",{id:"returns"},"Returns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A promise that resolves to an array of prompt texts."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise<Array.<string>>")))),(0,n.kt)("h3",{id:"addpromptguildid-prompt"},(0,n.kt)("inlineCode",{parentName:"h3"},"addPrompt(guildId, prompt)")),(0,n.kt)("h4",{id:"addpromptguildid-prompt--promisestring"},(0,n.kt)("inlineCode",{parentName:"h4"},"addPrompt(guildId, prompt) \u2192 {Promise<string>}")),(0,n.kt)("p",null,"Adds a new prompt to the database for a specified guild."),(0,n.kt)("h5",{id:"parameters-1"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"guildId")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The ID of the Discord guild.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"prompt")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The text of the prompt to be added.")))),(0,n.kt)("h5",{id:"returns-1"},"Returns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A promise that resolves to a message confirming the addition of the prompt."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise<string>")))),(0,n.kt)("h3",{id:"deletepromptguildid-prompttodelete"},(0,n.kt)("inlineCode",{parentName:"h3"},"deletePrompt(guildId, promptToDelete)")),(0,n.kt)("h4",{id:"deletepromptguildid-prompttodelete--promisestring"},(0,n.kt)("inlineCode",{parentName:"h4"},"deletePrompt(guildId, promptToDelete) \u2192 {Promise<string>}")),(0,n.kt)("p",null,"Deletes a prompt from the database for a specified guild."),(0,n.kt)("h5",{id:"parameters-2"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"guildId")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The ID of the Discord guild.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"promptToDelete")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The text of the prompt to be deleted or matched.")))),(0,n.kt)("h5",{id:"returns-2"},"Returns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A promise that resolves to a message confirming the deletion or suggesting similar prompts."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise<string>")))),(0,n.kt)("h3",{id:"listpromptsguildid"},(0,n.kt)("inlineCode",{parentName:"h3"},"listPrompts(guildId)")),(0,n.kt)("h4",{id:"listpromptsguildid--promisestring"},(0,n.kt)("inlineCode",{parentName:"h4"},"listPrompts(guildId) \u2192 {Promise<string>}")),(0,n.kt)("p",null,"Retrieves and lists all prompts for a specified guild."),(0,n.kt)("h5",{id:"parameters-3"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"guildId")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The ID of the Discord guild.")))),(0,n.kt)("h5",{id:"returns-3"},"Returns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A promise that resolves to a string listing all prompts."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise<string>")))),(0,n.kt)("h3",{id:"searchpromptsguildid-query"},(0,n.kt)("inlineCode",{parentName:"h3"},"searchPrompts(guildId, query)")),(0,n.kt)("h4",{id:"searchpromptsguildid-query--promisestring"},(0,n.kt)("inlineCode",{parentName:"h4"},"searchPrompts(guildId, query) \u2192 {Promise<string>}")),(0,n.kt)("p",null,"Searches for prompts that match a specified query for a specified guild."),(0,n.kt)("h5",{id:"parameters-4"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"guildId")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The ID of the Discord guild.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"query")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The search query.")))),(0,n.kt)("h5",{id:"returns-4"},"Returns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A promise that resolves to a string listing matching prompts or suggesting alternatives."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise<string>")))),(0,n.kt)("h3",{id:"getrandompromptguildid"},(0,n.kt)("inlineCode",{parentName:"h3"},"getRandomPrompt(guildId)")),(0,n.kt)("h4",{id:"getrandompromptguildid--promisestring--null"},(0,n.kt)("inlineCode",{parentName:"h4"},"getRandomPrompt(guildId) \u2192 {Promise<string | null>}")),(0,n.kt)("p",null,"Retrieves a random prompt for a specified guild from the database."),(0,n.kt)("h5",{id:"parameters-5"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"guildId")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The ID of the Discord guild.")))),(0,n.kt)("h5",{id:"returns-5"},"Returns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A promise that resolves to a random prompt text or ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," if no prompts are found."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise<string | null>")))),(0,n.kt)("h3",{id:"getrandomhourwithinactivehoursactivehoursdata"},(0,n.kt)("inlineCode",{parentName:"h3"},"getRandomHourWithinActiveHours(activeHoursData)")),(0,n.kt)("h4",{id:"getrandomhourwithinactivehoursactivehoursdata--string"},(0,n.kt)("inlineCode",{parentName:"h4"},"getRandomHourWithinActiveHours(activeHoursData) \u2192 {string}")),(0,n.kt)("p",null,"Generates a random hour within the active operating hours for a guild."),(0,n.kt)("h5",{id:"parameters-6"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"activeHoursData")),(0,n.kt)("td",{parentName:"tr",align:null},"Object"),(0,n.kt)("td",{parentName:"tr",align:null},"An object containing ",(0,n.kt)("inlineCode",{parentName:"td"},"start_time")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"end_time"),".")))),(0,n.kt)("h5",{id:"returns-6"},"Returns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A formatted string representing a random hour within the active hours."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"string")))))}s.isMDXComponent=!0}}]);