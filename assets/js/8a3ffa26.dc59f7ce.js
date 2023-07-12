"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[9395],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=u(n),l=s,f=g["".concat(p,".").concat(l)]||g[l]||m[l]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=l;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:s,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},7426:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return u}});var r=n(3117),s=(n(7294),n(3905));const a={id:"groups-and-campaigns",title:"Groups & Campaigns",slug:"/messaging/groups-and-campaigns"},i=void 0,o={unversionedId:"messaging/groups-and-campaigns",id:"messaging/groups-and-campaigns",title:"Groups & Campaigns",description:"Message Groups",source:"@site/docs/messaging/groups-and-campaigns.md",sourceDirName:"messaging",slug:"/messaging/groups-and-campaigns",permalink:"/messaging/groups-and-campaigns",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/messaging/groups-and-campaigns.md",tags:[],version:"current",frontMatter:{id:"groups-and-campaigns",title:"Groups & Campaigns",slug:"/messaging/groups-and-campaigns"},sidebar:"sidebar",previous:{title:"Telemetry",permalink:"/messaging/telemetry"},next:{title:"Experiments & User Messaging",permalink:"/messaging/experiments-and-user-messaging"}},p={},u=[{value:"Message Groups",id:"message-groups",level:3},{value:"Campaigns",id:"campaigns",level:3}],c={toc:u},g="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(g,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"message-groups"},"Message Groups"),(0,s.kt)("p",null,"There is the possibility to make further fine grained configuration that can set impression limits between multiple messages."),(0,s.kt)("p",null,"Example: we have two messages using 2 different messaging surfaces but the messages have a similar theme or content. We can use the ",(0,s.kt)("strong",{parentName:"p"},"groups")," field in the message configuration to point two separate messages to the same frequency and lifetime configuration. When multiple messages point to the same group configuration any impression from one of the messages counts against the total allowed for the group. If the group frequency is set to 1 per day then whichever message is shown first will prevent all the other messages in the group from appearing for the next 24 hours. When a single message is part of multiple groups, it will not display if either of the groups would not display (i.e. is disabled by preference or frequency capped)."),(0,s.kt)("h3",{id:"campaigns"},"Campaigns"),(0,s.kt)("p",null,'Campaigns are similar to groups but are used to block messages. If two messages reference the same campaign, blocking any of the messages will prevent the others from ever showing up. This was implemented for snippets, and as of December 22 2022, that is the only place they have been used. For example, all snippets mentioning "FxA accounts" would be grouped together in the same campaign. Block one snippet and it blocks the entire campaign.'))}m.isMDXComponent=!0}}]);