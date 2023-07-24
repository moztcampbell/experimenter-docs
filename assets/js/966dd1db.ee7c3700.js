"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[5037],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(a,".").concat(m)]||f[m]||p[m]||c;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=m;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[f]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4862:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(4137));const c={id:"custom-configs",title:"Custom configs",slug:"/faq/custom-configs"},i=void 0,s={unversionedId:"faq/custom-configs/custom-configs",id:"faq/custom-configs/custom-configs",title:"Custom configs",description:"Question",source:"@site/docs/faq/custom-configs/custom-configs.mdx",sourceDirName:"faq/custom-configs",slug:"/faq/custom-configs",permalink:"/faq/custom-configs",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/faq/custom-configs/custom-configs.mdx",tags:[],version:"current",frontMatter:{id:"custom-configs",title:"Custom configs",slug:"/faq/custom-configs"},sidebar:"sidebar",previous:{title:"How many branches?",permalink:"/faq/how-many-branches"},next:{title:"Desktop prefs",permalink:"/desktop/desktop-prefs"}},a={},l=[{value:"Question",id:"question",level:3},{value:"Answer",id:"answer",level:3}],u={toc:l},f="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"question"},"Question"),(0,o.kt)("p",null,"If I create a custom config for an experiment, will I still results still be generated for the primary and secondary outcomes, if I select them? Or will the config completely overwrite those outcomes?"),(0,o.kt)("h3",{id:"answer"},"Answer"),(0,o.kt)("p",null,"You will still get the outcomes even with a custom config."))}p.isMDXComponent=!0}}]);