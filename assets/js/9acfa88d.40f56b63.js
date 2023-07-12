"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[8429],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),h=i,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6947:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var r=n(3117),i=(n(7294),n(3905));const a={id:"mobile-surveys",title:"Surveys",slug:"/mobile-surveys"},o="Mobile Survey Workflow",s={unversionedId:"deep-dives/mobile/mobile-surveys",id:"deep-dives/mobile/mobile-surveys",title:"Surveys",description:"The required general steps to launch a mobile survey are:",source:"@site/docs/deep-dives/mobile/mobile-surveys.md",sourceDirName:"deep-dives/mobile",slug:"/mobile-surveys",permalink:"/mobile-surveys",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/deep-dives/mobile/mobile-surveys.md",tags:[],version:"current",frontMatter:{id:"mobile-surveys",title:"Surveys",slug:"/mobile-surveys"},sidebar:"sidebar",previous:{title:"First Run Experiments",permalink:"/mobile-first-run-experiments"},next:{title:"Introduction",permalink:"/nimbus-cli"}},l={},u=[{value:"Create the survey",id:"create-the-survey",level:2},{value:"Invitation message copy",id:"invitation-message-copy",level:2},{value:"Determine the audience",id:"determine-the-audience",level:2},{value:"Configure in Nimbus",id:"configure-in-nimbus",level:2},{value:"QA",id:"qa",level:2},{value:"Launch",id:"launch",level:2},{value:"End",id:"end",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mobile-survey-workflow"},"Mobile Survey Workflow"),(0,i.kt)("p",null,"The required general steps to launch a mobile survey are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#create-the-survey"},"Create the survey in the survey provider")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#invitation-message-copy"},"Determine the survey invitation message copy")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#determine-the-audience"},"Determine the audience (targeting and sizing)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#configure-in-nimbus"},"Configure the survey in Nimbus")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#qa"},"QA")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#launch"},"Launch")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#end"},"End"))),(0,i.kt)("p",null,"Below, we'll elaborate on each step."),(0,i.kt)("h2",{id:"create-the-survey"},"Create the survey"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure the survey is configured to listen for URL parameters."),(0,i.kt)("li",{parentName:"ul"},"Get the survey link, perhaps something like ",(0,i.kt)("inlineCode",{parentName:"li"},"https://qsurvey.mozilla.com/s3/<survey_name>?app=android&userid={uuid}"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Note that some URL parameters are added to the end, make sure your survey provider supports these (Alchemer does)."),(0,i.kt)("li",{parentName:"ul"},"Note also the special formatting around the ",(0,i.kt)("inlineCode",{parentName:"li"},"userid={uuid}")," parameter, this is used to generate a unique identifier for each message click which allows survey responses to be linked to telemetry. See ",(0,i.kt)("a",{parentName:"li",href:"/mobile-messaging#actions"},"the docs"))))),(0,i.kt)("h2",{id:"invitation-message-copy"},"Invitation message copy"),(0,i.kt)("p",null,"The following copy elements are generally available for surveys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Text (required), historically we've used ",(0,i.kt)("inlineCode",{parentName:"li"},"Please help Firefox by taking this short survey")),(0,i.kt)("li",{parentName:"ul"},"Title (optional), historically this was not used"),(0,i.kt)("li",{parentName:"ul"},"Button Label (optional), historically we've used ",(0,i.kt)("inlineCode",{parentName:"li"},"Take survey"))),(0,i.kt)("p",null,"The full docs are ",(0,i.kt)("a",{parentName:"p",href:"/mobile-messaging#message-content"},"available here")),(0,i.kt)("h2",{id:"determine-the-audience"},"Determine the audience"),(0,i.kt)("p",null,"Audience composition for surveys has two parts: the targeting criteria (who are eligible to be enrolled) and the sizing (what fraction of eligible clients will be invited)"),(0,i.kt)("p",null,"Targeting for surveys is either done through Nimbus or through the ",(0,i.kt)("a",{parentName:"p",href:"/mobile-messaging#triggers"},"messaging system"),". Note that if custom targeting must be implemented, it should be done now and prior to the sizing calculations."),(0,i.kt)("p",null,"For sizing, the formula for a single survey branch is: ",(0,i.kt)("inlineCode",{parentName:"p"},"desired responses")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"assumed response rate")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"fraction viewing invitation")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"estimated active users in enrollment period")),(0,i.kt)("p",null,"To elaborate on each item:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Desired responses: the number of desired survey responses, e.g. 1000. This is determined by the survey owner."),(0,i.kt)("li",{parentName:"ul"},"Assumed response rate: what proportion of users who see the survey invitation are expected to click on it. Generally values around ~2% (1%-5% range) have been observed historically."),(0,i.kt)("li",{parentName:"ul"},"Fraction viewing invitation: what proportion of users enrolled in the experiment are expected to see the survey invitation. In the absence of specific targeting, this is expected to be around 50%, due to the large number of new and bouncing users on mobile (many users download the app, are enrolled, but then do not open again). If the targeting for this survey is more specific, this fraction may be wildly different. Reach out to data science for assistance in this case."),(0,i.kt)("li",{parentName:"ul"},"Estimated active users in enrollment period: this is the estimated number of clients that will be active at all during the enrollment period. For a 1-week enrollment period, this is equivalent to current WAU. For other enrollment periods, custom calculations are necessary.")),(0,i.kt)("p",null,"Example calculation:"),(0,i.kt)("p",null,"Using 1000 desired responses, 2% click-through-rate, 50% viewing the invitation, and 1M estimated active clients during the period, the sizing for this survey would be 10%."),(0,i.kt)("p",null,"Note that this calculation was done for a single survey branch. If you're running multiple branches in Nimbus (this is not the same thing as multiple branches in the survey provider!) then you'll need to scale this value by the number of branches."),(0,i.kt)("h2",{id:"configure-in-nimbus"},"Configure in Nimbus"),(0,i.kt)("p",null,"Prerequisite: at least one person on the team will have to have gone through ",(0,i.kt)("a",{parentName:"p",href:"/access#onboarding-for-new-authors-l2"},"experiment owner training"),"."),(0,i.kt)("p",null,"If you want to run surveys both on Android and iOS, you'll need to configure a separate delivery for each one as deliveries are client-specific."),(0,i.kt)("p",null,"The schema for the JSON value is below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "actions": {},\n  "message-under-experiment": "<GIVE YOUR MESSAGE A NAME>",\n  "messages": {\n    "<USE THE SAME NAME AS message-under-experiment>": {\n      "action": "<SURVEY LINK GOES HERE>",\n      "button-label": "<BOTTON LABEL COPY GOES HERE>",\n      "style": "SURVEY",\n      "text": "<TEXT COPY GOES HERE>",\n      "trigger": ["LIST", "OF", "TARGETING"]\n    }\n  },\n  "on-control": "show-next-message",\n  "styles": {},\n  "triggers": {}\n}\n')),(0,i.kt)("p",null,"See below for an example (from the Viewpoint survey):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "actions": {},\n  "message-under-experiment": "viewpoint-invitation-message",\n  "messages": {\n    "viewpoint-invitation-message": {\n      "action": "https://qsurvey.mozilla.com/s3/302e5c853d63?app=android&userid={uuid}",\n      "button-label": "Take survey",\n      "style": "SURVEY",\n      "text": "Please help Firefox by taking this short survey",\n      "trigger": ["USER_EN_SPEAKER"]\n    }\n  },\n  "on-control": "show-next-message",\n  "styles": {},\n  "triggers": {}\n}\n')),(0,i.kt)("h2",{id:"qa"},"QA"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"QA will test to make sure that users see the message, that tapping the button leads to the survey"),(0,i.kt)("li",{parentName:"ul"},"In addition, you\u2019ll probably want to check the survey results to confirm that you see QA's answers in the responses (and so you can exclude QA responses from your analysis)"),(0,i.kt)("li",{parentName:"ul"},"If you're using the ",(0,i.kt)("inlineCode",{parentName:"li"},"{uuid}")," URL parameter to link surveys with telemetry, you'll want to confirm that this is configured correctly and that you can find the appropriate telemetry (message clicked event) matching the QA responses.")),(0,i.kt)("h2",{id:"launch"},"Launch"),(0,i.kt)("p",null,"Once QA is complete, the survey can be launched. The survey owner should request to launch and then post a message in ",(0,i.kt)("a",{parentName:"p",href:"https://mozilla.slack.com/archives/CF94YGE03"},"#ask-experimenter")," asking for an approver. As of the time of writing these docs, Rosanne Scholl & Daniel Berry are qualified reviewers for mobile surveys. If your team plans to run many surveys, it's recommended to have some members go through ",(0,i.kt)("a",{parentName:"p",href:"/access#onboarding-for-new-reviewers-l3"},"reviewer training")," so that the team can self-review their configurations without having to wait on external reviewers. Again, reach out in ",(0,i.kt)("a",{parentName:"p",href:"https://mozilla.slack.com/archives/CF94YGE03"},"#ask-experimenter")," for help with this."),(0,i.kt)("h2",{id:"end"},"End"),(0,i.kt)("p",null,"Once the survey has reached the end of the scheduled enrollment period, one of two things should happen. If there is sufficient volume of responses, the delivery should be ended (not just enrollment, the entire delivery should be ended). To do this, request to end and find a reviewer (see ",(0,i.kt)("a",{parentName:"p",href:"#launch"},"here"),") to approve. If there aren't enough responses, the survey can be left open to gather more. It's recommended to extend the invitation period in units of whole weeks, to avoid biasing responses."))}c.isMDXComponent=!0}}]);