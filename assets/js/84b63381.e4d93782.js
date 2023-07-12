"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[8384],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),s=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return r?o.createElement(f,a(a({ref:t},p),{},{components:r})):o.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8048:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var o=r(3117),n=(r(7294),r(3905));const i={id:"intro",title:"Welcome",sidebar_label:"Introduction",slug:"/"},a=void 0,l={unversionedId:"homepage/intro",id:"homepage/intro",title:"Welcome",description:"Welcome to the Experimenter documentation hub, your central resource for A/B experiments and feature rollouts in Firefox Mobile and Desktop. You should find these documents helpful if you are:",source:"@site/docs/homepage/intro.md",sourceDirName:"homepage",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/homepage/intro.md",tags:[],version:"current",frontMatter:{id:"intro",title:"Welcome",sidebar_label:"Introduction",slug:"/"},sidebar:"sidebar",next:{title:"Finding Help",permalink:"/help"}},u={},s=[{value:"What is covered here?",id:"what-is-covered-here",level:2},{value:"What other tools exist",id:"what-other-tools-exist",level:2},{value:"About these docs",id:"about-these-docs",level:2}],p={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welcome to the ",(0,n.kt)("a",{parentName:"p",href:"https://experimenter.services.mozilla.com/nimbus/"},"Experimenter")," documentation hub, your central resource for A/B experiments and feature rollouts in Firefox Mobile and Desktop. You should find these documents helpful if you are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"product manager")," and you have a hypothesis you want to test or a feature you'd like to safely release."),(0,n.kt)("li",{parentName:"ul"},"An ",(0,n.kt)("strong",{parentName:"li"},"engineer")," who needs to implement an experiment or feature rollout in your client"),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"data scientist")," helping to design and interpret experiment results"),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("strong",{parentName:"li"},"Mozilla leader")," who would like insight into completed and ongoing experiments and rollouts.")),(0,n.kt)("h2",{id:"what-is-covered-here"},"What is covered here?"),(0,n.kt)("p",null,"These documents are specific to the Mozilla experimentation program known as ",(0,n.kt)("strong",{parentName:"p"},"Nimbus"),".  Nimbus experimentation and support is currently available for our Firefox Desktop and Mobile browser applications.  "),(0,n.kt)("p",null,"Our platform code is all open-source however, we do not offer support or services to 3rd party consumers. Some documentation links may only be available to Mozilla employees and NDA contributors."),(0,n.kt)("h2",{id:"what-other-tools-exist"},"What other tools exist"),(0,n.kt)("p",null,"The following projects have bespoke tools for experimentation.  These are not included as part of this documentation with the exception of a ",(0,n.kt)("a",{parentName:"p",href:"desktop-migration-guide"},"migration guide from Normandy to Nimbus")," for engineers."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Firefox Desktop (legacy experimentation): ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.mozilla.org/Firefox/Normandy/PreferenceRollout"},"Normandy")),(0,n.kt)("li",{parentName:"ul"},"Mozilla Websites (a/b experiments): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mozilla/bedrock"},"Bedrock")),(0,n.kt)("li",{parentName:"ul"},"Firefox Accounts (limited content server): ",(0,n.kt)("a",{parentName:"li",href:"https://mozilla.github.io/ecosystem-platform/reference/experiments-ab-testing"},"Fxa docs"))),(0,n.kt)("h2",{id:"about-these-docs"},"About these docs"),(0,n.kt)("p",null,"This website is built using ",(0,n.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/"},"Docusaurus"),". If you'd like to edit or add to them, check out the ",(0,n.kt)("a",{parentName:"p",href:"/contributing"},"Contributing")," page."))}m.isMDXComponent=!0}}]);