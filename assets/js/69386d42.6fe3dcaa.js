"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[1376],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(6010),i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(3117),r=n(7294),i=n(6010),l=n(2466),o=n(6550),s=n(1980),u=n(7392),d=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=h({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=s??c;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var g=n(2389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==o&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,i.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},8731:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(3117),r=(n(7294),n(3905)),i=n(4866),l=n(5162);const o={id:"mobile-behavioral-targeting",title:"Behavioral Targeting",slug:"/mobile-behavioral-targeting"},s=void 0,u={unversionedId:"deep-dives/mobile/mobile-behavioral-targeting",id:"deep-dives/mobile/mobile-behavioral-targeting",title:"Behavioral Targeting",description:"Behavioral targeting is a term used to describe a set of jexl transforms which can be used to target specific user behaviors. User behaviors might be the user opened the app, the user logged in, the user navigated to a specific view, or any user-triggered event that has Glean metrics associated with it.",source:"@site/docs/deep-dives/mobile/behavioral-targeting.mdx",sourceDirName:"deep-dives/mobile",slug:"/mobile-behavioral-targeting",permalink:"/mobile-behavioral-targeting",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/deep-dives/mobile/behavioral-targeting.mdx",tags:[],version:"current",frontMatter:{id:"mobile-behavioral-targeting",title:"Behavioral Targeting",slug:"/mobile-behavioral-targeting"},sidebar:"sidebar",previous:{title:"Mobile Messaging",permalink:"/mobile-messaging"},next:{title:"Onboarding Feature for Android",permalink:"/onboarding-feature-android"}},d={},c=[{value:"Event Bucketing",id:"event-bucketing",level:2},{value:"Bucket Advancement &amp; Retention",id:"bucket-advancement--retention",level:3},{value:"Retention",id:"retention",level:4},{value:"Querying for User Behavior",id:"querying-for-user-behavior",level:2},{value:"Designing Experiments &amp; Behavior Triggers",id:"designing-experiments--behavior-triggers",level:2},{value:"Instrumented Events",id:"instrumented-events",level:2},{value:"Engineering",id:"engineering",level:2}],p={toc:c},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Behavioral targeting is a term used to describe a set of jexl transforms which can be used to target specific user behaviors. User behaviors might be ",(0,r.kt)("inlineCode",{parentName:"p"},"the user opened the app"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"the user logged in"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"the user navigated to a specific view"),", or any user-triggered event that has Glean metrics associated with it."),(0,r.kt)("p",null,"In order to maintain user privacy, this entire system lives in the Nimbus client launched by our mobile applications. Additionally, events are recorded and stored as counts in time interval-based buckets, allowing for a predictably small amount of disk spaceto be used for this event store."),(0,r.kt)("h2",{id:"event-bucketing"},"Event Bucketing"),(0,r.kt)("p",null,"Stored events are bucketed into time intervals. The time intervals are Minutes, Hours, Days, Weeks, Months, and Years. No additional setup is required for this bucketing process, it is handled entirely by the SDK. Buckets for each of the time intervals are created and stored whenever a new event is recorded."),(0,r.kt)("h3",{id:"bucket-advancement--retention"},"Bucket Advancement & Retention"),(0,r.kt)("p",null,"When buckets are created, they have a starting date. This date is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Jan 1 00:00:00 UTC")," of the current year. As time passes, the current time is incremented by the time difference in whole intervals and the buckets are advanced that many positions."),(0,r.kt)("p",null,"Bucket advancement occurs when an event is recorded, or when a query is performed. Buckets always advance based off whole increments of their time interval; ",(0,r.kt)("inlineCode",{parentName:"p"},"Minutes")," will advance by full minutes, ",(0,r.kt)("inlineCode",{parentName:"p"},"Hours")," by full hours, and so on. One exception to this rule is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Months")," time interval \u2013\xa0it advances in increments of 28 days."),(0,r.kt)("p",null,"Based on the current datetime, the buckets may not advance at all, or may advance so much that all the buckets are cleared. As an example, if the current date for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Hours")," bucket is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"May 1 10:00:00 UTC"),", and an event is recorded at ",(0,r.kt)("inlineCode",{parentName:"p"},"May 1 12:45:00 UTC"),", the buckets will be advanced 2 positions, the current date will be updated to ",(0,r.kt)("inlineCode",{parentName:"p"},"May 1 12:00:00 UTC"),", and the event will be recorded in the bucket for the 12pm hour."),(0,r.kt)("h4",{id:"retention"},"Retention"),(0,r.kt)("p",null,"Each time interval has a maximum number of buckets it retains. As the time intervals move forward, buckets are rotated off of the deque and new buckets are added. If a query is performed that would go beyond the bucket count, it instead is cut off at the bucket count."),(0,r.kt)("p",null,"The following is a list of the time intervals and their bucket counts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Minutes 60\nHours   24\nDays    56\nWeeks   52\nMonths  12\nYears   4\n")),(0,r.kt)("h2",{id:"querying-for-user-behavior"},"Querying for User Behavior"),(0,r.kt)("p",null,"User behaviors are recorded in the same way as Glean events, and there are a number of ways in which they can be queried."),(0,r.kt)("p",null,"The following is a list of jexl transforms that exist within the Nimbus targeting helper, and thus are usable on all projects that use the Nimbus Rust library."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Transform"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Args"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Returns"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventSum")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Calculates the sum of all bucket values within the range"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"interval, bucket_count, starting_bucket")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventCountNonZero")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Calculates the total number of buckets with a non-zero value within the range"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"interval, bucket_count, starting_bucket")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventAverage")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Calculates the average of all event bucket values within the range"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"interval, bucket_count, starting_bucket")),(0,r.kt)("td",{parentName:"tr",align:"left"},"float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventAveragePerNonZeroInterval")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Calculates the average of all buckets with a non-zero value within the range"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"interval, bucket_count, starting_bucket")),(0,r.kt)("td",{parentName:"tr",align:"left"},"float")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventLastSeen")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Returns the number of whole time intervals between the starting bucket and the first bucket with a non-zero value"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"interval, starting_bucket")),(0,r.kt)("td",{parentName:"tr",align:"left"},"int")))),(0,r.kt)("h2",{id:"designing-experiments--behavior-triggers"},"Designing Experiments & Behavior Triggers"),(0,r.kt)("p",null,"The following are the existing options for behavioral targeting as defined in Experimenter (found under ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced Targeting")," in the audience editor). In order to use these targeting options, the application must be Firefox or Focus for Android or iOS."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Targeting String"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Core Active Users"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A user who has used the application 21 out of the last 28 days."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"'app-opened-event'","|","eventCountNonZero('Days', 28, 0) >= 21")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Recently Logged In Users"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A user who has logged into Sync within the last 12 weeks."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"'sync-signin-event'","|","eventCountNonZero('Weeks', 12, 0) > 0")))))),(0,r.kt)("p",null,"There are many ways these queries could be used to our advantage when writing behavior-oriented code. One example could be to show a certain message to users after they have launched the app ",(0,r.kt)("em",{parentName:"p"},"n")," times, and after 12hrs has passed from when they first opened the application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"'app-opened-event'&#124;eventSum('Years', 4, 0) >= 3 &&      // The sum of app opened events within the last four years must be 3 or more\n(\n  'app-opened-event'&#124;eventSum('Hours', 12, 12) >= 1 ||  // The sum of app opened events within 12hrs, starting 12hrs ago\n  'app-opened-event'&#124;eventSum('Days', 7, 1) >= 1 ||     // The sum of app opened events within 7 days, starting 1 day ago\n  'app-opened-event'&#124;eventSum('Weeks', 52, 1) >= 1      // The sum of app opened events within 52 weeks, starting 1 week ago\n)                                                            // Any one of these results must have been 1 or more\n")),(0,r.kt)("h2",{id:"instrumented-events"},"Instrumented Events"),(0,r.kt)("p",null,"The following are the events that are currently instrumented in Firefox for iOS and Android, respectively:"),(0,r.kt)(i.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Event"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Application opened"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://dictionary.telemetry.mozilla.org/apps/fenix/metrics/events_app_opened"},"app_opened"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"User logged into Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://dictionary.telemetry.mozilla.org/apps/fenix/metrics/sync_auth_sign_in"},"sync_auth.sign_in")))))),(0,r.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Event"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Application opened"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://dictionary.telemetry.mozilla.org/apps/firefox_ios/metrics/app_cycle_foreground"},"app_cycle.foreground"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"User logged into Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://dictionary.telemetry.mozilla.org/apps/firefox_ios/metrics/sync_login_completed_view"},"sync.login_completed_view"))))))),(0,r.kt)("h2",{id:"engineering"},"Engineering"),(0,r.kt)("p",null,"In order to instrument a new behavior/event, an equivalent call to the Nimbus event recording method must be made alongside the call to record a Glean event."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"While this process is currently required, long-term we hope to have a hook in Glean that will record certain events automatically.")),(0,r.kt)(i.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,r.kt)("p",null,"On Firefox for Android, a call should be made to ",(0,r.kt)("inlineCode",{parentName:"p"},"components.analytics.experiments.recordEvent")," immediately following the Glean event being recorded. The argument should be the event name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="app/src/main/java/org/mozilla/fenix/HomeActivity.kt"',title:'"app/src/main/java/org/mozilla/fenix/HomeActivity.kt"'},'import org.mozilla.fenix.ext.components\n\n// ...\nopen class HomeActivity : LocaleAwareAppCompatActivity(), NavHostActivity {\n    // ...\n    final override fun onCreate(savedInstanceState: Bundle?) {\n        // ...\n        if (settings().isTelemetryEnabled) {\n            // ...\n            safeIntent\n                ?.let(::getIntentSource)\n                ?.also {\n                    Events.appOpened.record(Events.AppOpenedExtra(it))\n                    // This will record an event in Nimbus\' internal event store. Used for behavioral targeting\n                    components.analytics.experiments.recordEvent("app_opened")\n                }\n        }\n        // ...\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-mobile/fenix/pull/27934"},"Example in PR"))),(0,r.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,r.kt)("p",null,"On Firefox for iOS, there is a wrapper for telemetry which makes this process rather simple. In the switch case for the event you want to implement, add a call to ",(0,r.kt)("inlineCode",{parentName:"p"},"Experiments.shared.recordEvent"),". The argument should be the event name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="Client/Telemetry/TelemetryWrapper.swift"',title:'"Client/Telemetry/TelemetryWrapper.swift"'},'extension TelemetryWrapper {\n    // ...\n    static func gleanRecordEvent(category: EventCategory, method: EventMethod, object: EventObject, value: EventValue? = nil, extras: [String: Any]? = nil) {\n        switch (category, method, object, value, extras) {\n        // ...\n        case (.firefoxAccount, .view, .fxaLoginCompleteWebpage, _, _):\n            GleanMetrics.Sync.loginCompletedView.record()\n            // record the same event for Nimbus\' internal event store\n            Experiments.shared.recordEvent("sync.login_completed_view")\n        // ...\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-mobile/firefox-ios/pull/12560"},"Example in PR")))),(0,r.kt)("hr",null))}h.isMDXComponent=!0}}]);