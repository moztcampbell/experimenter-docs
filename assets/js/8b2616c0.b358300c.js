"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[1146],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5991:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var n=r(3117),o=(r(7294),r(3905));const a={id:"how-to-restart",title:"Is this supported?",slug:"/how-to-restart"},i=void 0,s={unversionedId:"faq/feature-requires-restart/how-to-restart",id:"faq/feature-requires-restart/how-to-restart",title:"Is this supported?",description:"This is how it works when a feature requires a restart:",source:"@site/docs/faq/feature-requires-restart/how-to-restart.mdx",sourceDirName:"faq/feature-requires-restart",slug:"/how-to-restart",permalink:"/how-to-restart",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/faq/feature-requires-restart/how-to-restart.mdx",tags:[],version:"current",frontMatter:{id:"how-to-restart",title:"Is this supported?",slug:"/how-to-restart"},sidebar:"sidebar",previous:{title:"What happens at experiment end?",permalink:"/experiment-end"},next:{title:"Feature metrics aren't there?",permalink:"/feature-metrics"}},u={},c=[],l={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is how it works when a feature requires a restart:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Session 1: Client enrolls, applies feature configuration, but the feature itself won't implement the changes until the next restart"),(0,o.kt)("li",{parentName:"ul"},"Session 2: Client is enrolled, feature configuration is applied, feature now shows changes")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"IMPORTANT:  Please share that this experiment needs a restart in your data science Jira ticket and that there is custom work needed at analysis to exlude the pre-restart data.")))}f.isMDXComponent=!0}}]);