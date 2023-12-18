"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[6619],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(a),m=n,h=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return a?r.createElement(h,l(l({ref:t},d),{},{components:a})):r.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:n,l[1]=p;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3479:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:6},l="Data Graph Utility Module Spec",p={unversionedId:"api-specification/dataGraphSpec",id:"api-specification/dataGraphSpec",title:"Data Graph Utility Module Spec",description:"Methods",source:"@site/docs/api-specification/dataGraphSpec.md",sourceDirName:"api-specification",slug:"/api-specification/dataGraphSpec",permalink:"/project-bereal-meets-slack/docs/api-specification/dataGraphSpec",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-bereal-meets-slack/edit/main/documentation/docs/api-specification/dataGraphSpec.md",tags:[],version:"current",lastUpdatedBy:"Tara Feeley",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Blacklist Utility Module Spec",permalink:"/project-bereal-meets-slack/docs/api-specification/blacklistUtilsSpec"},next:{title:"Database Connecttion Utility Module Spec",permalink:"/project-bereal-meets-slack/docs/api-specification/dbConnSpec"}},o={},c=[{value:"<code>fetchDataForGraph(guildId)</code>",id:"fetchdataforgraphguildid",level:3},{value:"<code>fetchDataForGraph(guildId) \u2192 {Promise.&lt;Array&lt;Object&gt;&gt;}</code>",id:"fetchdataforgraphguildid--promisearrayobject",level:4},{value:"Parameters:",id:"parameters",level:5},{value:"Returns:",id:"returns",level:5},{value:"<code>generateGraph(data)</code>",id:"generategraphdata",level:3},{value:"<code>generateGraph(data) \u2192 {Promise.&lt;Buffer&gt;}</code>",id:"generategraphdata--promisebuffer",level:4},{value:"Parameters:",id:"parameters-1",level:5},{value:"Returns:",id:"returns-1",level:5}],d={toc:c};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data-graph-utility-module-spec"},"Data Graph Utility Module Spec"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Methods")),(0,n.kt)("h3",{id:"fetchdataforgraphguildid"},(0,n.kt)("inlineCode",{parentName:"h3"},"fetchDataForGraph(guildId)")),(0,n.kt)("h4",{id:"fetchdataforgraphguildid--promisearrayobject"},(0,n.kt)("inlineCode",{parentName:"h4"},"fetchDataForGraph(guildId) \u2192 {Promise.<Array<Object>>}")),(0,n.kt)("p",null,"Fetches data for generating a graph based on reactions in a guild."),(0,n.kt)("h5",{id:"parameters"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"guildId")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The ID of the Discord guild.")))),(0,n.kt)("h5",{id:"returns"},"Returns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A promise that resolves to an array of objects containing ",(0,n.kt)("inlineCode",{parentName:"p"},"prompt_text")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"num_reactions"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise.<Array<Object>>")))),(0,n.kt)("h3",{id:"generategraphdata"},(0,n.kt)("inlineCode",{parentName:"h3"},"generateGraph(data)")),(0,n.kt)("h4",{id:"generategraphdata--promisebuffer"},(0,n.kt)("inlineCode",{parentName:"h4"},"generateGraph(data) \u2192 {Promise.<Buffer>}")),(0,n.kt)("p",null,"Generates a bar chart graph using Chart.js based on the provided data."),(0,n.kt)("h5",{id:"parameters-1"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:null},"Array"),(0,n.kt)("td",{parentName:"tr",align:null},"An array of objects with ",(0,n.kt)("inlineCode",{parentName:"td"},"prompt_text")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"num_reactions"),".")))),(0,n.kt)("h5",{id:"returns-1"},"Returns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A Promise that resolves to a Buffer containing the rendered graph image."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise.<Buffer>")))))}s.isMDXComponent=!0}}]);