(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[1441],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},5064:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(7294),r=a(9443);var i=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(6010),s="tabItem_1uMI",o="tabItemActive_2DSg";var u=function(e){var t,a=e.lazy,r=e.block,u=e.defaultValue,p=e.values,c=e.groupId,d=e.className,m=n.Children.toArray(e.children),f=null!=p?p:m.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=u?u:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,b=i(),g=b.tabGroupChoices,v=b.setTabGroupChoices,k=(0,n.useState)(h),y=k[0],N=k[1],w=[];if(null!=c){var x=g[c];null!=x&&x!==y&&f.some((function(e){return e.value===x}))&&N(x)}var T=function(e){var t=e.currentTarget,a=w.indexOf(t),n=f[a].value;N(n),null!=c&&(v(c,n),setTimeout((function(){var e,a,n,r,i,l,s,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,l=window,s=l.innerHeight,u=l.innerWidth,a>=0&&i<=u&&r<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.target)+1;a=w[n]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.target)-1;a=w[r]||w[w.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},d)},f.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,l.Z)("tabs__item",s,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:I,onFocus:T,onClick:T},null!=a?a:t)}))),a?(0,n.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},604:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l=a(5064),s=a(8215),o={id:"desktop-feature-api",title:"Desktop Feature API (JS and C++)",slug:"/desktop-feature-api"},u=void 0,p={unversionedId:"getting-started/engineers/desktop-feature-api",id:"getting-started/engineers/desktop-feature-api",isDocsHomePage:!1,title:"Desktop Feature API (JS and C++)",description:"This guide will help you use the Nimbus Feature API in Desktop Firefox to run experiments, set values remotely, and manage user preferences. If you are familiar with Normandy and are trying to migrate a feature, you may want to check out the Migration Guide for Pref Experiments.",source:"@site/docs/getting-started/engineers/desktop-feature-api.mdx",sourceDirName:"getting-started/engineers",slug:"/desktop-feature-api",permalink:"/desktop-feature-api",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/getting-started/engineers/desktop-feature-api.mdx",tags:[],version:"current",frontMatter:{id:"desktop-feature-api",title:"Desktop Feature API (JS and C++)",slug:"/desktop-feature-api"},sidebar:"sidebar",previous:{title:"Getting Started for Android Engineers",permalink:"/getting-started/engineers/getting-started-for-android-engineers"},next:{title:"Desktop Migration Guide (JS)",permalink:"/desktop-migration-guide"}},c=[{value:"About the Feature API",id:"about-the-feature-api",children:[{value:"Can I use this?",id:"can-i-use-this",children:[]},{value:"What is a feature?",id:"what-is-a-feature",children:[]}]},{value:"Configuration sources",id:"configuration-sources",children:[]},{value:"Registering a new feature",id:"registering-a-new-feature",children:[]},{value:"Importing the Feature API",id:"importing-the-feature-api",children:[]},{value:"API Reference Guide",id:"api-reference-guide",children:[{value:"<code>getVariable()</code>",id:"getvariable",children:[]},{value:"<code>getAllVariables()</code>",id:"getallvariables",children:[]},{value:"<code>recordExposureEvent()</code>",id:"recordexposureevent",children:[]},{value:"<code>ready()</code>",id:"ready",children:[]},{value:"<code>onUpdate()</code>",id:"onupdate",children:[]},{value:"<code>off()</code>",id:"off",children:[]}]},{value:"Experiment Metadata",id:"experiment-metadata",children:[]}],d={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide will help you use the Nimbus Feature API in Desktop Firefox to run experiments, set values remotely, and manage user preferences. If you are familiar with Normandy and are trying to migrate a feature, you may want to check out the ",(0,i.kt)("a",{parentName:"p",href:"/desktop-migration-guide"},"Migration Guide for Pref Experiments"),"."),(0,i.kt)("h2",{id:"about-the-feature-api"},"About the Feature API"),(0,i.kt)("h3",{id:"can-i-use-this"},"Can I use this?"),(0,i.kt)("p",null,"For the JS implementation you can import ",(0,i.kt)("inlineCode",{parentName:"p"},"ExperimentAPI.jsm")," in the parent process or a privileged child process. We ",(0,i.kt)("em",{parentName:"p"},"do")," support First run experiments on Windows, holdbacks, and rollouts."),(0,i.kt)("p",null,"For the C++ implementation you can import ",(0,i.kt)("inlineCode",{parentName:"p"},'#include "mozilla/browser/NimbusFeatures.h"')," and we support early startup experiments and holdbacks."),(0,i.kt)("p",null,"If you have a usecase that isn't supported, please reach out in #ask-experimenter on Slack."),(0,i.kt)("h3",{id:"what-is-a-feature"},"What is a feature?"),(0,i.kt)("p",null,"In the Nimbus ecosystem, a ",(0,i.kt)("inlineCode",{parentName:"p"},"feature")," is an area of code instrumented for experiments and remote configuration. It can be as small as a single function or as complex as a whole about: page. Some examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aboutwelcome"),", The about:welcome page in Desktop"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"newtab"),", The about:newtab page in Desktop")),(0,i.kt)("p",null,"In your code, you will use the Nimbus SDK to access variables associated with those features. e.g."),(0,i.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { screens, skipFocus } = NimbusFeatures.aboutwelcome.getAllVariables();\n"))),(0,i.kt)(s.Z,{value:"cpp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'NimbusFeatures::GetBool("aboutwelcome"_ns, "enabled"_ns, false);\n')))),(0,i.kt)("h2",{id:"configuration-sources"},"Configuration sources"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section is relevant only for the JS API."))),(0,i.kt)("p",null,"The Nimbus Feature API will return the correct configuration for a feature given a few different inputs ",(0,i.kt)("strong",{parentName:"p"},"in this order"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Experiment value"),": First, we check if a Nimbus experiment is activated that changes the feature."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Remotely-configured value"),": If no experiment is set, we check if there is a remotely-defined value. This is a mechanism that allows us to roll-out changes quickly between releases."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Local default"),": Finally, we will return the current value of preferences in the manifest, if they are defined in ",(0,i.kt)("a",{parentName:"li",href:"https://searchfox.org/mozilla-central/source/browser/app/profile/firefox.js"},"firefox.js"),".")),(0,i.kt)("h2",{id:"registering-a-new-feature"},"Registering a new feature"),(0,i.kt)("p",null,"To register a new feature, you will need to choose an identifier and add it to the manifest in ",(0,i.kt)("a",{parentName:"p",href:"https://searchfox.org/mozilla-central/source/toolkit/components/nimbus/FeatureManifest.yaml"},"FeatureManifest.yaml"),":\nAfter adding the feature a build step is required to update the appropriate header file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# In FeatureManifest.yaml\n# Our feature name\naboutwelcome:\n  description: The about:welcome page\n  # Include this if you need synchronous access / very early access at startup\n  # or if you are registering this to use for platform experiments.\n  isEarlyStartup: true\n  variables:\n    # Additional (optional) values that we can control\n    # The name of these variables is up to you\n    enabled:\n      type: boolean\n      fallbackPref: browser.aboutwelcome.enabled\n    skipFocus:\n      type: boolean\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// In firefox.js\npref("browser.aboutwelcome.enabled", true);\n')),(0,i.kt)("h2",{id:"importing-the-feature-api"},"Importing the Feature API"),(0,i.kt)("p",null,"Import the ",(0,i.kt)("inlineCode",{parentName:"p"},"NimbusFeatures")," module:"),(0,i.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'XPCOMUtils.defineLazyModuleGetters(this, {\n  NimbusFeatures: "resource://nimbus/ExperimentAPI.jsm",\n});\n'))),(0,i.kt)(s.Z,{value:"cpp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "mozilla/browser/NimbusFeatures.h"\n')))),(0,i.kt)("h2",{id:"api-reference-guide"},"API Reference Guide"),(0,i.kt)("h3",{id:"getvariable"},(0,i.kt)("inlineCode",{parentName:"h3"},"getVariable()")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getVariable(variableName: string): FeatureValue")),(0,i.kt)("p",null,"Returns the value of a single feature variable."),(0,i.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// Warning: **This function will throw in Nightly and CI build** if you do not define `variableName` in the Nimbus manifest.\n\nconst foo = NimbusFeatures.myFeature.getVariable("foo");\n\n// notAVariable is not defined in the manifest, so this will throw in CI\nconst baz = NimbusFeatures.myFeature.getVariable("notAVariable");\n'))),(0,i.kt)(s.Z,{value:"cpp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// feature name and variable name to retrieve the value\nNimbusFeatures::GetInt("aboutwelcome"_ns, "skipFocus"_ns, false);\n')))),(0,i.kt)("h3",{id:"getallvariables"},(0,i.kt)("inlineCode",{parentName:"h3"},"getAllVariables()")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getAllVariables({ defaultValues }): FeatureValue")," (JS Only)"),(0,i.kt)("p",null,"Returns the value of all variables for a feature. Note that ",(0,i.kt)("strong",{parentName:"p"},"variables will be merged between sources"),"."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"options.defaultValues")," is defined, it will be preferred before default branch fallback values but after experiment, remote, and user-set preference values."),(0,i.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { foo, bar } = NimbusFeatures.myFeature.getAllVariables({\n  defaultValues: { foo: true, bar: false },\n});\n"))),(0,i.kt)(s.Z,{value:"cpp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// There is no equivalent for this in C++. Instead you can use\n// NimbusFeatures::GetInt("featurename"_ns, "variablename"_ns, 0)\n// NimbusFeatures::GetBool("featurename"_ns, "variablename"_ns, false)\n// To access a single variable value at a time\n')))),(0,i.kt)("h3",{id:"recordexposureevent"},(0,i.kt)("inlineCode",{parentName:"h3"},"recordExposureEvent()")),(0,i.kt)("p",null,"Use this to send an ",(0,i.kt)("a",{parentName:"p",href:"/jetstream/jetstream/#enrollment-vs-exposure"},"exposure event"),". By default this will send one exposure event per function call, but you can add an options object of ",(0,i.kt)("inlineCode",{parentName:"p"},"{once: true}")," to only send it once per session."),(0,i.kt)("p",null,"Note that you should add an ",(0,i.kt)("inlineCode",{parentName:"p"},"exposureDescription")," to the manifest describing when/how this event is sent."),(0,i.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"NimbusFeatures.myFeature.recordExposureEvent();\n\n// Only sends once per session, even if this function is called multiple times\nNimbusFeatures.myFeature.recordExposureEvent({ once: true });\n"))),(0,i.kt)(s.Z,{value:"cpp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// aOnce=true specifies that we only want to send this event once per browsing\n// session\nNimbusFeatures::RecordExposureEvent("featurename"_ns, true);\n')))),(0,i.kt)("h3",{id:"ready"},(0,i.kt)("inlineCode",{parentName:"h3"},"ready()")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ready(): Promise")," (JS Only)"),(0,i.kt)("p",null,"Wait for the remote experiment and defaults stores to be synced before checking values."),(0,i.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await NimbusFeatures.myFeature.ready();\nconst { foo } = NimbusFeatures.myFeature.getAllVariables();\n"))),(0,i.kt)(s.Z,{value:"cpp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"// This is not needed by the C++ API and has no equivalent, instead by\n// registering your feature as `isEarlyStartup` you can ensure that `GetBool`\n// and `GetInt` will return the experiment value at startup\n")))),(0,i.kt)("h3",{id:"onupdate"},(0,i.kt)("inlineCode",{parentName:"h3"},"onUpdate()")),(0,i.kt)("p",null,"Listen for changes, include to remote defaults or pref values."),(0,i.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"NimbusFeatures.myFeature.onUpdate((event, reason) => {\n  /**\n   * `reason` is a string that can be used to identify the source\n   * of the update event.\n   * This list of reasons:\n   * 1. `feature-experiment-loaded` or `feature-rollout-loaded` this\n   * is triggered when the Nimbus feature has finished loading\n   * (when .ready() resolves). It is not relevant for isEarlyStartup=true features\n   * 2. `experiment-updated` or `rollout-updated` client recipe for this\n   * feature was changed (activated or deactivated)\n   * 3. `pref-updated` the value of the fallback pref for the feature\n   * variable was changed\n   */\n  const newValue = NimbusFeatures.myFeature.getAllVariables();\n  updateUI(newValue);\n});\n"))),(0,i.kt)(s.Z,{value:"cpp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'NimbusFeatures::OnUpdate("aboutwelcome"_ns, "skipFocus"_ns,\n  [](const char*, void*){}, void*);\n')))),(0,i.kt)("h3",{id:"off"},(0,i.kt)("inlineCode",{parentName:"h3"},"off()")),(0,i.kt)("p",null,"Stop listening for changes."),(0,i.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"NimbusFeatures.myFeature.onUpdate(aListener);\n\n// Later\nNimbusFeatures.myFeature.off(aListener);\n"))),(0,i.kt)(s.Z,{value:"cpp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Provide feature name and value to watch for changes\nNimbusFeatures::OnUpdate("aboutwelcome"_ns, "skipFocus"_ns,\n  [](const char*, void*){}, void*);\n\n\n// Later\nNimbusFeatures::OffUpdate("aboutwelcome"_ns, "skipFocus"_ns,\n  [](const char*, void*){}, void*);\n')))),(0,i.kt)("h2",{id:"experiment-metadata"},"Experiment Metadata"),(0,i.kt)("p",null,"If you need to know whether an experiment is active or get access to the experiment or branch identifier (for example, to report in ",(0,i.kt)("inlineCode",{parentName:"p"},"utm_params"),"), you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"ExperimentAPI.getExperimentMetaData"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'XPCOMUtils.defineLazyModuleGetters(this, {\n  ExperimentAPI: "resource://nimbus/ExperimentAPI.jsm",\n});\n\nconst data = ExperimentAPI.getExperimentMetaData({ featureId: "myFeature" });\n\n// If there is no experiment, data will be null.\nconst slug = data?.slug;\nconst branchSlug = data?.branch?.slug;\n\nif (experimentSlug && branchSlug) {\n  sendSomeTelemetry(\n    `The experiment identifier is ${slug} and the branch identifier is ${branchSlug}`,\n  );\n}\n')))}m.isMDXComponent=!0},6010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);