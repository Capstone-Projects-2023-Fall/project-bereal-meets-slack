"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:16},l="Set Default Channel Utility Module Spec",o={unversionedId:"api-specification/setDefaultChannelSpec",id:"api-specification/setDefaultChannelSpec",title:"Set Default Channel Utility Module Spec",description:"Methods",source:"@site/docs/api-specification/setDefaultChannelSpec.md",sourceDirName:"api-specification",slug:"/api-specification/setDefaultChannelSpec",permalink:"/project-bereal-meets-slack/docs/api-specification/setDefaultChannelSpec",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-bereal-meets-slack/edit/main/documentation/docs/api-specification/setDefaultChannelSpec.md",tags:[],version:"current",lastUpdatedBy:"tup31461",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"docsSidebar",previous:{title:"Save Database Utility Module Spec",permalink:"/project-bereal-meets-slack/docs/api-specification/saveDBSpec"},next:{title:"Timer Class Spec",permalink:"/project-bereal-meets-slack/docs/api-specification/TimerSpec"}},c={},p=[{value:"Methods",id:"methods",level:2},{value:"<code>setDefaultChannel(channelId, guildId)</code>",id:"setdefaultchannelchannelid-guildid",level:3},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:5},{value:"Returns:",id:"returns",level:5}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"set-default-channel-utility-module-spec"},"Set Default Channel Utility Module Spec"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"setdefaultchannelchannelid-guildid"},(0,r.kt)("inlineCode",{parentName:"h3"},"setDefaultChannel(channelId, guildId)")),(0,r.kt)("h4",{id:"description"},"Description:"),(0,r.kt)("p",null,"Sets the default channel for submissions in the database. If the channel and guild combination already exists, it updates the submission channel."),(0,r.kt)("h5",{id:"parameters"},"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"channelId")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the Discord channel.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"guildId")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the Discord guild.")))),(0,r.kt)("h5",{id:"returns"},"Returns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A promise that resolves to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," on success.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A promise that resolves to ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," on failure."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Type:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise.<number>")))))}d.isMDXComponent=!0}}]);