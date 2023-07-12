"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[6060],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=o,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return t?i.createElement(g,r(r({ref:n},u),{},{components:t})):i.createElement(g,r({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},561:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var i=t(3117),o=(t(7294),t(3905));const a={id:"nimbus-cli-working-with-logs",title:"Working with Logs",slug:"/nimbus-cli/working-with-logs"},r=void 0,l={unversionedId:"deep-dives/mobile/nimbus-cli/nimbus-cli-working-with-logs",id:"deep-dives/mobile/nimbus-cli/nimbus-cli-working-with-logs",title:"Working with Logs",description:"Log files are especially helpful to developers, but not always very easy to access.",source:"@site/docs/deep-dives/mobile/nimbus-cli/60-working-with-logs.mdx",sourceDirName:"deep-dives/mobile/nimbus-cli",slug:"/nimbus-cli/working-with-logs",permalink:"/nimbus-cli/working-with-logs",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/deep-dives/mobile/nimbus-cli/60-working-with-logs.mdx",tags:[],version:"current",sidebarPosition:60,frontMatter:{id:"nimbus-cli-working-with-logs",title:"Working with Logs",slug:"/nimbus-cli/working-with-logs"},sidebar:"sidebar",previous:{title:"Working with Files",permalink:"/nimbus-cli/working-with-files"},next:{title:"Working with Feature Manifests",permalink:"/nimbus-cli/fml"}},s={},p=[{value:"<code>capture-logs</code>",id:"capture-logs",level:2},{value:"<code>tail-logs</code>",id:"tail-logs",level:2},{value:"<code>log-state</code>",id:"log-state",level:2}],u={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Log files are especially helpful to developers, but not always very easy to access."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"nimbus-cli")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"adb logcat")," on Android, and on iOS it uses the Unix commands ",(0,o.kt)("inlineCode",{parentName:"p"},"find")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"tail"),"."),(0,o.kt)("p",null,"These logs are useful when examining the internal state of the app, or attaching to bug reports."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For iOS the logs that are displayed and captured are the app's logs.\nFor Android, the logs are for the whole device.\nFor Android devices also used for personal usage, you should probably not upload such logs anywhere.")),(0,o.kt)("h2",{id:"capture-logs"},(0,o.kt)("inlineCode",{parentName:"h2"},"capture-logs")),(0,o.kt)("p",null,"Capturing a device log"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app firefox_ios --channel developer \\\n    capture-logs logs.txt\n")),(0,o.kt)("h2",{id:"tail-logs"},(0,o.kt)("inlineCode",{parentName:"h2"},"tail-logs")),(0,o.kt)("p",null,"You can set up a different terminal window to watch the logs as they are generated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app firefox_ios --channel developer tail-logs\n")),(0,o.kt)("p",null,"If you know of any keywords you may be interested in, you can filter piping the output to the ",(0,o.kt)("inlineCode",{parentName:"p"},"grep")," command."),(0,o.kt)("p",null,"For example, the following outputs any log entry containing the word ",(0,o.kt)("inlineCode",{parentName:"p"},"send-tab"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app firefox_ios --channel developer tail-logs | grep -i send-tab\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"On iOS, because the ",(0,o.kt)("inlineCode",{parentName:"p"},"reset-app")," command deletes the app contaner, the ",(0,o.kt)("inlineCode",{parentName:"p"},"tail-logs")," command is only available after the first run after a reset, and stops after a reset.")),(0,o.kt)("h2",{id:"log-state"},(0,o.kt)("inlineCode",{parentName:"h2"},"log-state")),(0,o.kt)("p",null,"This command is an analog for the experiments menu in the secret settings of Fenix and Firefox for iOS."),(0,o.kt)("p",null,"It relaunches the app, then asks the SDK to dump the state of the Nimbus SDK to the logs. For example:"),(0,o.kt)("p",null,"For example, this is a section of logs captured on an Android device shortly after ",(0,o.kt)("inlineCode",{parentName:"p"},"log-state"),", and an enrollment into the ",(0,o.kt)("inlineCode",{parentName:"p"},"viewpoint-rolling-week-2-expansion-android")," experiment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"06-05 12:12:47.177 12737 12737 D nimbus::nimbus_client: nimbus_18d_NimbusClient_dump_state_to_log\n06-05 12:12:47.177 12737 12737 I nimbus::nimbus_client: Slug                                                             | Features                      | Branch\n06-05 12:12:47.177 12737 12737 I nimbus::nimbus_client: viewpoint-rolling-week-2-expansion-android                       | messaging                     | treatment\n06-05 12:12:47.177 12737 12841 D nimbus::nimbus_client: nimbus_18d_NimbusClient_set_fetch_enabled\n")),(0,o.kt)("p",null,"It is useful to use in conjunction with other logging commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app fenix --channel developer log-state\nnimbus-cli --app fenix --channel developer tail-log | grep -i nimbus\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"nimbus-cli --app fenix --channel developer log-state\nnimbus-cli --app fenix --channel developer capture-logs logs.txt\n")),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"log-state")," is called at the same time as the ",(0,o.kt)("inlineCode",{parentName:"p"},"enroll")," command."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For iOS, it can be a bit tricky to see the state of logs at the beginning of a just-installed but not yet opened app."),(0,o.kt)("p",{parentName:"admonition"},"You can do the same as ",(0,o.kt)("inlineCode",{parentName:"p"},"enroll")," then ",(0,o.kt)("inlineCode",{parentName:"p"},"tail-logs")," with by adding ",(0,o.kt)("a",{parentName:"p",href:"/nimbus-cli/opening-and-resetting#leading-parameters"},(0,o.kt)("inlineCode",{parentName:"a"},"-- --console-pty {}"))," to the end of the enroll command."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ nimbus-cli --app firefox_ios --channel developer \\\n    enroll \\\n    ios-search-bar-placement-v2-treatment-a-rollout --branch treatment-a \\\n    -- --console-pty {}\n")),(0,o.kt)("p",{parentName:"admonition"},"2023-06-15 17:06:29.611 \ud83d\udc99 INFO ","[sync]"," Profile - ","[RUST][nimbus::nimbus_client]"," ","[Nimbus]"," Days since update: 0\n2023-06-15 17:06:29.644 \ud83d\udc99 INFO ","[sync]"," Profile - ","[RUST][nimbus::nimbus_client]"," Slug                                                             | Features                      | Branch\n2023-06-15 17:06:29.645 \ud83d\udc99 INFO ","[sync]"," Profile - ","[RUST][nimbus::nimbus_client]"," ios-search-bar-placement-v2-treatment-a-rollout                  | search                        | treatment-a\n2023-06-15 17:06:29.645 \ud83d\udc99 INFO ","[experiments]"," Experiments - Nimbus is ready!")))}m.isMDXComponent=!0}}]);