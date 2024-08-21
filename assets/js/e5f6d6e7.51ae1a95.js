"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[5646],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),g=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=g(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=g(n),u=s,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:s,i[1]=o;for(var g=2;g<a;g++)i[g]=n[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>g});var r=n(7462),s=(n(7294),n(4137));const a={id:"groups-and-campaigns",title:"Groups & Campaigns",slug:"/messaging/groups-and-campaigns"},i=void 0,o={unversionedId:"workflow/implementing/messaging/groups-and-campaigns",id:"workflow/implementing/messaging/groups-and-campaigns",title:"Groups & Campaigns",description:"Message Groups",source:"@site/docs/workflow/implementing/messaging/groups-and-campaigns.md",sourceDirName:"workflow/implementing/messaging",slug:"/messaging/groups-and-campaigns",permalink:"/messaging/groups-and-campaigns",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/workflow/implementing/messaging/groups-and-campaigns.md",tags:[],version:"current",frontMatter:{id:"groups-and-campaigns",title:"Groups & Campaigns",slug:"/messaging/groups-and-campaigns"},sidebar:"sidebar",previous:{title:"Mobile Messaging",permalink:"/messaging/mobile-messaging"},next:{title:"Limitations",permalink:"/messaging/limitations"}},p={},g=[{value:"Message Groups",id:"message-groups",level:3},{value:"Campaigns",id:"campaigns",level:3}],l={toc:g},m="wrapper";function c(e){let{components:t,...n}=e;return(0,s.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"message-groups"},"Message Groups"),(0,s.kt)("p",null,"There is the possibility to make further fine grained configuration that can set impression limits between multiple messages."),(0,s.kt)("p",null,"Example: we have two messages using 2 different messaging surfaces but the messages have a similar theme or content. We can use the ",(0,s.kt)("strong",{parentName:"p"},"groups")," field in the message configuration to point two separate messages to the same frequency and lifetime configuration. When multiple messages point to the same group configuration any impression from one of the messages counts against the total allowed for the group. If the group frequency is set to 1 per day then whichever message is shown first will prevent all the other messages in the group from appearing for the next 24 hours. When a single message is part of multiple groups, it will not display if either of the groups would not display (i.e. is disabled by preference or frequency capped)."),(0,s.kt)("h3",{id:"campaigns"},"Campaigns"),(0,s.kt)("p",null,'Campaigns are similar to groups but are used to block messages. If two messages reference the same campaign, blocking any of the messages will prevent the others from ever showing up. This was implemented for snippets, and as of December 22 2022, that is the only place they have been used. For example, all snippets mentioning "FxA accounts" would be grouped together in the same campaign. Block one snippet and it blocks the entire campaign.'))}c.isMDXComponent=!0}}]);