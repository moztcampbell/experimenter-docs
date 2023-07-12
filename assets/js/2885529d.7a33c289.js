"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[9861],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(r),f=i,d=c["".concat(u,".").concat(f)]||c[f]||m[f]||a;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3134:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return p}});var n=r(3117),i=(r(7294),r(3905));const a={id:"capabilities",title:"Nimbus Features",sidebar_label:"Features",slug:"/capabilities"},l=void 0,o={unversionedId:"homepage/capabilities",id:"homepage/capabilities",title:"Nimbus Features",description:"Nimbus is a full-featured experimentation platform that provides configuration, analysis and client libraries for both experiments and rollouts.",source:"@site/docs/homepage/capabilities.md",sourceDirName:"homepage",slug:"/capabilities",permalink:"/capabilities",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/homepage/capabilities.md",tags:[],version:"current",frontMatter:{id:"capabilities",title:"Nimbus Features",sidebar_label:"Features",slug:"/capabilities"},sidebar:"sidebar",previous:{title:"Finding Help",permalink:"/help"},next:{title:"What's Newsletter March 2023",permalink:"/2023-03"}},u={},p=[{value:"Experimenter Console",id:"experimenter-console",level:2},{value:"Multiple language Client integrations",id:"multiple-language-client-integrations",level:2},{value:"Client-side functionality",id:"client-side-functionality",level:2},{value:"Current client integrations",id:"current-client-integrations",level:2},{value:"Current feature support",id:"current-feature-support",level:2},{value:"Requesting feature support",id:"requesting-feature-support",level:2}],s={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Nimbus is a full-featured experimentation platform that provides configuration, analysis and client libraries for both experiments and rollouts."),(0,i.kt)("h2",{id:"experimenter-console"},"Experimenter Console"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Simple experiment configuration UI"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://experimenter.info/workflow/preview"},"Pre-launch testing support")),(0,i.kt)("li",{parentName:"ul"},"Multifeature experiments"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/deep-dives/experimenter/rollouts"},"Rollouts")),(0,i.kt)("li",{parentName:"ul"},"Simple targeting"),(0,i.kt)("li",{parentName:"ul"},"Advanced customizable targeting"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://experimenter.info/faq/Metric%20Availability/non-guardrail-outcome"},"Adding Metrics to your Experiment")),(0,i.kt)("li",{parentName:"ul"},"Remote settings integration"),(0,i.kt)("li",{parentName:"ul"},"Experiment Review / Approval Workflow"),(0,i.kt)("li",{parentName:"ul"},"Dashboards"),(0,i.kt)("li",{parentName:"ul"},"Monitoring and Analysis")),(0,i.kt)("h2",{id:"multiple-language-client-integrations"},"Multiple language Client integrations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android (Kotlin)"),(0,i.kt)("li",{parentName:"ul"},"iOS (Swift)"),(0,i.kt)("li",{parentName:"ul"},"Firefox Desktop Frontend (JS)"),(0,i.kt)("li",{parentName:"ul"},"Firefox Platform (C++)")),(0,i.kt)("h2",{id:"client-side-functionality"},"Client-side functionality"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consumer opt-out"),(0,i.kt)("li",{parentName:"ul"},"Integration with console preview testing"),(0,i.kt)("li",{parentName:"ul"},"View experiments (about:studies)")),(0,i.kt)("h2",{id:"current-client-integrations"},"Current client integrations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Firefox Desktop",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Frontend via JS SDK"),(0,i.kt)("li",{parentName:"ul"},"Platform"),(0,i.kt)("li",{parentName:"ul"},"Windows installer"))),(0,i.kt)("li",{parentName:"ul"},"Firefox Mobile via Nimbus-SDK Rust Component",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Fenix"),(0,i.kt)("li",{parentName:"ul"},"Firefox iOS"),(0,i.kt)("li",{parentName:"ul"},"Focus Andriod"),(0,i.kt)("li",{parentName:"ul"},"Focus iOS")))),(0,i.kt)("h2",{id:"current-feature-support"},"Current feature support"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Documented here: ",(0,i.kt)("a",{parentName:"li",href:"https://experimenter.info/feature-definition"},"feature definitions"))),(0,i.kt)("h2",{id:"requesting-feature-support"},"Requesting feature support"),(0,i.kt)("p",null,"If you aren't sure we have what you need, pop into #ask-experimenter with your questions or ",(0,i.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/secure/CreateIssueDetails!init.jspa?pid=10203&issuetype=10097"},"file an issue")))}m.isMDXComponent=!0}}]);