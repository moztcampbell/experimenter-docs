"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[7799],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(4137));const i={id:"monitoring",title:"Monitoring Your Experiment",sidebar_label:"Monitoring",slug:"/monitoring"},a=void 0,l={unversionedId:"workflow/monitoring/monitoring",id:"workflow/monitoring/monitoring",title:"Monitoring Your Experiment",description:'Once your experiment has launched, from your experimenter page you will now have a "Live Monitoring Dashboard" link on the left hand gray sidebar.',source:"@site/docs/workflow/monitoring/monitoring.md",sourceDirName:"workflow/monitoring",slug:"/monitoring",permalink:"/monitoring",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/workflow/monitoring/monitoring.md",tags:[],version:"current",frontMatter:{id:"monitoring",title:"Monitoring Your Experiment",sidebar_label:"Monitoring",slug:"/monitoring"},sidebar:"sidebar",previous:{title:"Launching",permalink:"/launching"},next:{title:"Ending",permalink:"/ending"}},c={},u=[],p={toc:u},m="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Once your experiment has launched, from your experimenter page you will now have a "Live Monitoring Dashboard" link on the left hand gray sidebar.  '),(0,o.kt)("p",null,"When to check here:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Soon after launch, check that your experiment is enrolling users as you'd expect."),(0,o.kt)("li",{parentName:"ol"},"Anytime during your experiment you can check that you don't have excessive unenrollments."),(0,o.kt)("li",{parentName:"ol"},"Before you Close Enrollment, check that you enrolled the amount of users expected.")),(0,o.kt)("p",null,"What the different charts mean:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Cummulative Population Estimate")," is the total number of people enrolled in your experiment.  This is the chart you most frequently use.")))}s.isMDXComponent=!0}}]);