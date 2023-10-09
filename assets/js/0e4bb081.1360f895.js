"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[971],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=l.createContext({}),s=function(e){var t=l.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(d,".").concat(m)]||p[m]||c[m]||o;return n?l.createElement(h,i(i({ref:t},u),{},{components:n})):l.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[p]="string"==typeof e?e:r,i[1]=a;for(var s=2;s<o;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var l=n(7462),r=(n(7294),n(4137));const o={id:"mobile-enrollment-state-machine",title:"Enrollment State Machine",slug:"/mobile-enrollment-state-machine"},i=void 0,a={unversionedId:"deep-dives/mobile/mobile-enrollment-state-machine",id:"deep-dives/mobile/mobile-enrollment-state-machine",title:"Enrollment State Machine",description:"Possible States",source:"@site/docs/deep-dives/mobile/enrollment-state-machine.md",sourceDirName:"deep-dives/mobile",slug:"/mobile-enrollment-state-machine",permalink:"/mobile-enrollment-state-machine",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/deep-dives/mobile/enrollment-state-machine.md",tags:[],version:"current",frontMatter:{id:"mobile-enrollment-state-machine",title:"Enrollment State Machine",slug:"/mobile-enrollment-state-machine"},sidebar:"sidebar",previous:{title:"Behavioral Targeting",permalink:"/mobile-behavioral-targeting"},next:{title:"Feature API",permalink:"/mobile-feature-api"}},d={},s=[{value:"Possible States",id:"possible-states",level:2},{value:"Enrolled",id:"enrolled",level:3},{value:"Qualified",id:"qualified",level:4},{value:"Opt In",id:"opt-in",level:4},{value:"Not Enrolled",id:"not-enrolled",level:3},{value:"Not Selected",id:"not-selected",level:4},{value:"Not Targeted",id:"not-targeted",level:4},{value:"Opt Out",id:"opt-out",level:4},{value:"EnrollmentsPaused",id:"enrollmentspaused",level:4},{value:"Feature Conflict",id:"feature-conflict",level:4},{value:"Disqualified",id:"disqualified",level:3},{value:"Not Targeted",id:"not-targeted-1",level:4},{value:"Not Selected",id:"not-selected-1",level:4},{value:"Opt Out",id:"opt-out-1",level:4},{value:"Error",id:"error",level:4},{value:"Was Enrolled",id:"was-enrolled",level:3},{value:"Error",id:"error-1",level:3},{value:"Notes",id:"notes",level:3},{value:"State Diagrams",id:"state-diagrams",level:2},{value:"Experiments",id:"experiments",level:3}],u={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"possible-states"},"Possible States"),(0,r.kt)("p",null,'Within the Nimbus SDK there are multiple states, most of which have a "reason" associated with them.\nThe reason field functions as a child state, and is required for parent states that have reasons.'),(0,r.kt)("h3",{id:"enrolled"},"Enrolled"),(0,r.kt)("h4",{id:"qualified"},"Qualified"),(0,r.kt)("p",null,"The client is not already enrolled in a recipe of the same type that would result in a feature conflict, and matched targeting and bucketing criteria for this recipe",(0,r.kt)("sup",null,(0,r.kt)("a",{href:"#notes"},"[1]")),"."),(0,r.kt)("h4",{id:"opt-in"},"Opt In"),(0,r.kt)("p",null,"The client explicitly opted into this recipe",(0,r.kt)("sup",null,(0,r.kt)("a",{href:"#notes"},"[2]")),"."),(0,r.kt)("h3",{id:"not-enrolled"},"Not Enrolled"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This state and its reasons are for enrollments that have never been enrolled, and did not enroll.")),(0,r.kt)("h4",{id:"not-selected"},"Not Selected"),(0,r.kt)("p",null,"The client did not fall into the bucketing selected for this recipe."),(0,r.kt)("h4",{id:"not-targeted"},"Not Targeted"),(0,r.kt)("p",null,"The client did not match the criteria set forth by the targeting string."),(0,r.kt)("h4",{id:"opt-out"},"Opt Out"),(0,r.kt)("p",null,"The client has opted out of experimentation at the application level."),(0,r.kt)("h4",{id:"enrollmentspaused"},"EnrollmentsPaused"),(0,r.kt)("p",null,"The recipe has paused enrollments."),(0,r.kt)("h4",{id:"feature-conflict"},"Feature Conflict"),(0,r.kt)("p",null,"The feature(s) the recipe targets a) are being experimented on by another recipe of the same type in which the client is already enrolled",(0,r.kt)("sup",null,(0,r.kt)("a",{href:"#notes"},"[3]")),", and b) are not enabled for coenrollment."),(0,r.kt)("h3",{id:"disqualified"},"Disqualified"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This state and its reasons are for enrollments that were previously in one of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Enrolled")," states, but are no longer enrolled.")),(0,r.kt)("h4",{id:"not-targeted-1"},"Not Targeted"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See ",(0,r.kt)("a",{parentName:"em",href:"#not-targeted"},"NotEnrolled::NotTargeted"))),(0,r.kt)("h4",{id:"not-selected-1"},"Not Selected"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See ",(0,r.kt)("a",{parentName:"em",href:"#not-selected"},"NotEnrolled::NotSelected"))),(0,r.kt)("h4",{id:"opt-out-1"},"Opt Out"),(0,r.kt)("p",null,"The client manually opted out of the recipe",(0,r.kt)("sup",null,(0,r.kt)("a",{href:"#notes"},"[2]")),"."),(0,r.kt)("h4",{id:"error"},"Error"),(0,r.kt)("p",null,"The client threw an error during enrollment re-evaluation."),(0,r.kt)("h3",{id:"was-enrolled"},"Was Enrolled"),(0,r.kt)("p",null,"The recipe has ended, and the client was enrolled at some point.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Enrolled")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Disqualified")," statuses end up here when a recipe ends."),(0,r.kt)("h3",{id:"error-1"},"Error"),(0,r.kt)("p",null,"The client threw an error during enrollment evaluation",(0,r.kt)("sup",null,(0,r.kt)("a",{href:"#notes"},"[4]")),"."),(0,r.kt)("h3",{id:"notes"},"Notes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The explicit order in which recipe criteria are evaluated is as follows:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Feature conflicts"),(0,r.kt)("li",{parentName:"ol"},"Targeting"),(0,r.kt)("li",{parentName:"ol"},"Bucketing"))),(0,r.kt)("li",{parentName:"ol"},"This state can be reached via Firefox mobile's secret menu."),(0,r.kt)("li",{parentName:"ol"},"Experiments and rollouts do not share feature conflicts.\nA client can be enrolled in up to one rollout and one experiment for a given feature, unless that feature has been enabled for coenrollment."),(0,r.kt)("li",{parentName:"ol"},"This status will only contain enrollments for recipes in which the client has never been enrolled.\nIf the client is enrolled but throws an error during enrollment re-evaluation it will be moved to ",(0,r.kt)("a",{parentName:"li",href:"#error"},"Disqualified::Error"))),(0,r.kt)("h2",{id:"state-diagrams"},"State Diagrams"),(0,r.kt)("p",null,"The following state diagrams describe the interactions between states for the enrollment state machine in the mobile Nimbus SDK."),(0,r.kt)("h3",{id:"experiments"},"Experiments"),(0,r.kt)("mermaid",{value:"stateDiagram-v2\n    direction LR\n\n    [*] --\x3e enrolled\n    [*] --\x3e not_enrolled\n\n    enrolled: Enrolled\n    not_enrolled: Not Enrolled\n    disqualified: Disqualified\n    was_enrolled: Was Enrolled\n    error: Error\n\n    enrolled --\x3e disqualified\n\n    state on_experiment_ended <<join>>\n    enrolled --\x3e on_experiment_ended\n    disqualified --\x3e on_experiment_ended\n    on_experiment_ended --\x3e was_enrolled: on experiment ended\n    \n    disqualified --\x3e enrolled: rollouts only\n\n    was_enrolled --\x3e [*]: on garbage\\ncollect (1yr)\n\n    not_enrolled --\x3e enrolled: if enrollment is not paused\n    error --\x3e enrolled: if enrollment is not paused\n\n    not_enrolled --\x3e error: on error\n    enrolled --\x3e error: on error"}))}c.isMDXComponent=!0}}]);