"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[3034],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(r),u=a,c=m["".concat(p,".").concat(u)]||m[u]||f[u]||o;return r?n.createElement(c,i(i({ref:t},s),{},{components:r})):n.createElement(c,i({ref:t},s))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5982:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(4137));const o={id:"adding-a-platform",sidebar_position:10,title:"Adding a Platform",slug:"adding-a-platform"},i=void 0,l={unversionedId:"deep-dives/jetstream/adding-a-platform",id:"deep-dives/jetstream/adding-a-platform",title:"Adding a Platform",description:"Jetstream runs analyses for experiments launched on several different platforms, such as Fenix or Firefox Desktop. When adding a new platform in Experimenter, the new platform also needs to be configured in Jetstream to enable automated analyses for launched experiments.",source:"@site/docs/deep-dives/jetstream/adding-a-platform.md",sourceDirName:"deep-dives/jetstream",slug:"/deep-dives/jetstream/adding-a-platform",permalink:"/deep-dives/jetstream/adding-a-platform",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/deep-dives/jetstream/adding-a-platform.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"adding-a-platform",sidebar_position:10,title:"Adding a Platform",slug:"adding-a-platform"},sidebar:"sidebar",previous:{title:"Testing Jetstream Configs",permalink:"/deep-dives/jetstream/testing"},next:{title:"Bucketing",permalink:"/bucketing"}},p={},d=[{value:"Add support for platform in jetstream",id:"add-support-for-platform-in-jetstream",level:2},{value:"Configuration breakdown",id:"configuration-breakdown",level:3}],s={toc:d},m="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Jetstream runs analyses for experiments launched on several different platforms, such as Fenix or Firefox Desktop. When adding a new platform in Experimenter, the new platform also needs to be configured in Jetstream to enable automated analyses for launched experiments."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"add-support-for-platform-in-jetstream"},"Add support for platform in jetstream"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Inside ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mozilla/jetstream/blob/main/platform_config.toml"},"platform_config.toml")," add the configuration for the new platform")),(0,a.kt)("p",null,"An example of desktop configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[platform.firefox_desktop]\nenrollments_query_type = "normandy"\napp_id = "firefox-desktop"\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"configuration-breakdown"},"Configuration breakdown"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[platform.platform_name]")," - Specify platform name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enrollments_query_type")," - whether enrollments should be determined based on Glean events (",(0,a.kt)("inlineCode",{parentName:"li"},"glean-event"),") data or Normandy data (",(0,a.kt)("inlineCode",{parentName:"li"},"normandy"),") (default: ",(0,a.kt)("inlineCode",{parentName:"li"},"glean-event"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"app_id")," - application ID as defined in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mozilla/probe-scraper/blob/main/repositories.yaml"},"probe-scraper repository.yaml"))))}f.isMDXComponent=!0}}]);