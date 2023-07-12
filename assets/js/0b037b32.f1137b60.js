"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[6330],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},535:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return p}});var i=n(3117),a=(n(7294),n(3905));const r={id:"auto-sizing-cli",title:"Experiment Sizing Command-line Interface",slug:"/auto-sizing-cli"},o=void 0,s={unversionedId:"getting-started/data-scientists/auto-sizing-cli",id:"getting-started/data-scientists/auto-sizing-cli",title:"Experiment Sizing Command-line Interface",description:"The sample size calculation functionality contained in the [Mozanalysis] library is accessible via a command-line interface (CLI), [auto-sizing]. This CLI is intended to enable rapid analyses for simple experiments or experiments with targeting similar to past experiments.",source:"@site/docs/getting-started/data-scientists/auto-sizing-cli.md",sourceDirName:"getting-started/data-scientists",slug:"/auto-sizing-cli",permalink:"/auto-sizing-cli",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/getting-started/data-scientists/auto-sizing-cli.md",tags:[],version:"current",frontMatter:{id:"auto-sizing-cli",title:"Experiment Sizing Command-line Interface",slug:"/auto-sizing-cli"},sidebar:"sidebar",previous:{title:"Experiment Reviewers",permalink:"/access"},next:{title:"Experimentation for data scientists",permalink:"/data-scientists"}},l={},p=[{value:"Sizing job configuration",id:"sizing-job-configuration",level:2},{value:"TOML file layout",id:"toml-file-layout",level:3},{value:"CLI commands",id:"cli-commands",level:2},{value:"CLI output",id:"cli-output",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The sample size calculation functionality contained in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/mozanalysis"},"Mozanalysis")," library is accessible via a command-line interface (CLI), ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/mozilla/auto-sizing"},"auto-sizing")),". This CLI is intended to enable rapid analyses for simple experiments or experiments with targeting similar to past experiments."),(0,a.kt)("h2",{id:"sizing-job-configuration"},"Sizing job configuration"),(0,a.kt)("p",null,"The sizing CLI relies on a local TOML file to configure the job. This TOML file contains the metrics, segments, and parameters used to carry out the analysis. Sample sizes based on these parameters are calculated using the ",(0,a.kt)("a",{parentName:"p",href:"https://mozilla.github.io/mozanalysis/api/frequentist_stats/sample_size.html#mozanalysis.frequentist_stats.sample_size.z_or_t_ind_sample_size_calc"},(0,a.kt)("inlineCode",{parentName:"a"},"mozanalysis.frequentist_stats.sample_size.z_or_t_ind_sample_size_calc"))," method. Note that segments in Mozanalysis refer to the filters used to identify clients that will satisfy targeting for an experiment (whereas segments in Jetstream denote groups of clients to examine during post-hoc analysis)."),(0,a.kt)("h3",{id:"toml-file-layout"},"TOML file layout"),(0,a.kt)("p",null,"The TOML configuration file must contain a ",(0,a.kt)("inlineCode",{parentName:"p"},"metrics"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"data_sources"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"segments"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"segments.data_sources")," section, each containing the definitions for those of interest for the experiments. The definition of each of these follows the same patterns as ",(0,a.kt)("a",{parentName:"p",href:"/jetstream/jetstream"},"Jetstream"),", and details on how to define your own inside of the TOML file can be found ",(0,a.kt)("a",{parentName:"p",href:"https://experimenter.info/jetstream/configuration#defining-metrics"},"here"),"."),(0,a.kt)("p",null,"The TOML file can also contain references to metrics, segments, data sources, and segment data sources that are already contained in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/metric-hub"},"metric-hub"),". To reference these pre-defined objects, an ",(0,a.kt)("inlineCode",{parentName:"p"},"import_from_metric_hub")," list can be included in the TOML file. For instance, to import the ",(0,a.kt)("inlineCode",{parentName:"p"},"active_hours")," metric for Firefox Desktop, the following is included in the TOML config file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[metrics.import_from_metric_hub]\nfirefox_desktop = ["active_hours"]\n')),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"parameters")," section in the TOML file is used to define the data collection period for the analysis and the parameters used to calculate sample sizes. This section consists of two subsections: ",(0,a.kt)("inlineCode",{parentName:"p"},"parameters.sizing")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"parameters.dates"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"parameters.sizing"),": Contains two tags, ",(0,a.kt)("inlineCode",{parentName:"li"},"power")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"effect_size"),". These tags should contain lists of values for each parameter, and a sample size will be calculated for all metrics provided in the TOML file for each combination of power and effect size in those lists."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"parameters.dates"),": Contains the ",(0,a.kt)("inlineCode",{parentName:"li"},"start_date"),' (in "%Y-%m-%d" format, e.g. "2023-01-01"), ',(0,a.kt)("inlineCode",{parentName:"li"},"num_dates_enrollment"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"analysis_length")," values. For details on how those values are used to query historical data, see the ",(0,a.kt)("a",{parentName:"li",href:"https://experimenter.info/experiment-sizing"},"Mozanalysis documentation"),".")),(0,a.kt)("h2",{id:"cli-commands"},"CLI commands"),(0,a.kt)("p",null,"The sizing CLI is invoked using the command ",(0,a.kt)("inlineCode",{parentName:"p"},"auto_sizing run"),". The following options are available at invocation:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--project_id"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"--project-id")),(0,a.kt)("td",{parentName:"tr",align:null},"BigQuery project to write metrics table to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--dataset_id"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"--dataset-id")),(0,a.kt)("td",{parentName:"tr",align:null},"BigQuery dataset to write metrics table to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--bucket")),(0,a.kt)("td",{parentName:"tr",align:null},"GCP bucket to write output JSON to. If not provided, JSON will be saved to the same directory as the config TOML")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--target_slug")),(0,a.kt)("td",{parentName:"tr",align:null},"Name for the experiment. Used when naming metrics table and output file")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--local_config")),(0,a.kt)("td",{parentName:"tr",align:null},"Path to the configuration TOML file")))),(0,a.kt)("h2",{id:"cli-output"},"CLI output"),(0,a.kt)("p",null,"Results for experiment sizing are saved in JSON format. If a GCP bucket is provided in the ",(0,a.kt)("inlineCode",{parentName:"p"},"--bucket")," option at invocation, this JSON file is saved in a ",(0,a.kt)("inlineCode",{parentName:"p"},"sample_sizes")," folder in that bucket. If no bucket is provided, the JSON results are saved to the same folder as the TOML configuration file. "),(0,a.kt)("p",null,"The results JSON will include an entry for each combination of power and effect size provided in the config file. Each of these has an entry for each metric, where the required population percent and sample size per branch to achieve that power with that effect size is recorded. A final tag is included with a parameters dictionary, storing the power and effect size values. The following example shows the results for a sizing job with the metrics ",(0,a.kt)("inlineCode",{parentName:"p"},"uri_count")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"active_hours"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{"Power0.8EffectSize0.01": {\n        "uri_count": {"sample_size_per_branch": 475269, "population_percent_per_branch": 6.25}, \n        "active_hours": {"sample_size_per_branch": 327233, "population_percent_per_branch": 4.3}, \n        "parameters": {"power": 0.8, "effect_size": 0.01}}, \n"Power0.8EffectSize0.02": {\n        "uri_count": {"sample_size_per_branch": 118817, "population_percent_per_branch": 1.56}, \n        "active_hours": {"sample_size_per_branch": 81808, "population_percent_per_branch": 1.08}, \n        "parameters": {"power": 0.8, "effect_size": 0.02}}}\n')))}d.isMDXComponent=!0}}]);