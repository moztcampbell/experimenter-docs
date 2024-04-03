"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[7143],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,d=c["".concat(l,".").concat(h)]||c[h]||m[h]||o;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(4137));const o={id:"2024-Q1",title:"What's New in Nimbus - Q1 2024",slug:"/whats-news/2024-Q1",sidebar_position:1,sidebar_label:"What's Newsletter Q1"},s=void 0,i={unversionedId:"whats-news/2024/2024-Q1",id:"whats-news/2024/2024-Q1",title:"What's New in Nimbus - Q1 2024",description:"Experimenter",source:"@site/docs/whats-news/2024/2024-q1.mdx",sourceDirName:"whats-news/2024",slug:"/whats-news/2024-Q1",permalink:"/whats-news/2024-Q1",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/whats-news/2024/2024-q1.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"2024-Q1",title:"What's New in Nimbus - Q1 2024",slug:"/whats-news/2024-Q1",sidebar_position:1,sidebar_label:"What's Newsletter Q1"},sidebar:"sidebar",previous:{title:"Features",permalink:"/capabilities"},next:{title:"What's Newsletter Q4 2023",permalink:"/whats-news/2023-Q4"}},l={},u=[{value:"Experimenter",id:"experimenter",level:2},{value:"Mobile",id:"mobile",level:2},{value:"Desktop",id:"desktop",level:2},{value:"Jetstream &amp; Results Analysis",id:"jetstream--results-analysis",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"experimenter"},"Experimenter"),(0,a.kt)("p",null,"\ud83d\udece\ufe0f Subscribe to notifications"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Non-owners can now ",(0,a.kt)("a",{parentName:"p",href:"/notifications"},"subscribe to notifications"),". Previously, these notifications were only being sent to experiment owners. This feature is available for all users and all experiments, and can be found in the Overview section on the Summary page of an experiment. (erichards) ",(0,a.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/browse/EXP-4229"},"EXP-4229"))),(0,a.kt)("p",null,"\ud83d\ude4c ",(0,a.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/browse/EXP-4187"},"Recipe branches are now available from the include/exclude dropdowns"),".  "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Not only can include and exclude running and previously run expeirments - but now you can specify specific branches.  "),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"An example use is to rollout a winning message to everyone EXCEPT people that were in the treatments branch of the experiment (so people don't get related message variants again)."))),(0,a.kt)("p",null,"\ud83d\udee0\ufe0f Audience overlap"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We now have warnings on Experimenter for three known cases of audience overlap. ",(0,a.kt)("a",{parentName:"p",href:"/faq/warnings"},"These warnings")," will prevent detectable cases of audience overlap, which generally result in under enrollment and can invalidate an experiment. (erichards) ",(0,a.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/browse/EXP-4180"},"EXP-4180"))),(0,a.kt)("p",null,"\ud83e\udd16\ud83c\udf4f\ud83d\udcbb  Helpful JSON Errors"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"As you are writing your JSON (the code that configures your feature in the Branches page), you may see ",(0,a.kt)("inlineCode",{parentName:"p"},"Feature Manifest errors occured during validation")," followed by details.   Experimenter is now comparing your feature manifest with the branch JSON you entered.  It compares for all versions your experiments is targeting, as defined in your experiments Audience page with minimum version and maximum versions.  This makes sure that the JSON you just typed will work for your feature on all the targeted firefox version.   If there is an error message, it will include the property that didn't match the feature manifest, possible valid values, the line where the error is, and the version where that error happened.  If you have an issue - to resolve first check the minumum versions your experiment targets (on the Audience page) and make sure it is as intended.  If that is correct, next look at the line to see what aspect of the JSON is having an issue and how to resolve.  ")),(0,a.kt)("h2",{id:"mobile"},"Mobile"),(0,a.kt)("p",null,"Coming soon..."),(0,a.kt)("h2",{id:"desktop"},"Desktop"),(0,a.kt)("p",null,"Coming soon..."),(0,a.kt)("h2",{id:"jetstream--results-analysis"},"Jetstream & Results Analysis"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'\ud83d\udcbb Pairwise branch comparisons now enable you to change the "reference branch".  By default, experiments compare the performance of treatments againt the control branch.  But what if multiple treatments all performed better than control?  ')),(0,a.kt)("p",null,'Now in the Results Config section - you can select one of the treatment branches to be the "reference branch".  In doing so you can see if there are stat sig differences between the branches and what those are.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'\ud83d\udcbb Analysis now defaults to EXPOSURE based instead of ENROLLMENTS\nThis does not change the available results (i.e., results for Enrollments are still available), and you can still select any available Analysis Basis via the "Results Config" radio buttons on the left of your results page.')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://experimenter.info/missing-exposure/"},"Click here")," for more information about Exposure events, including how to set up experiments that have exposure events analysis results."))}m.isMDXComponent=!0}}]);