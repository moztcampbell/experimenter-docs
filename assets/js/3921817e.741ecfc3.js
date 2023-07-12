"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[1197],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3993:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var n=a(3117),r=(a(7294),a(3905));const i={id:"operations",title:"Jetstream Architecture and Operations"},l=void 0,o={unversionedId:"jetstream/operations",id:"jetstream/operations",title:"Jetstream Architecture and Operations",description:"[Jetstream] is part of the Cirrus ecosystem and depends on some external services.",source:"@site/docs/jetstream/operations.md",sourceDirName:"jetstream",slug:"/jetstream/operations",permalink:"/jetstream/operations",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/jetstream/operations.md",tags:[],version:"current",frontMatter:{id:"operations",title:"Jetstream Architecture and Operations"},sidebar:"sidebar",previous:{title:"Jetstream Data Products",permalink:"/jetstream/data-products"},next:{title:"Troubleshooting Jetstream",permalink:"/jetstream/troubleshooting"}},s={},p=[{value:"Architecture for Scaling Jetstream",id:"architecture-for-scaling-jetstream",level:2},{value:"Parallelizing experiment analyses",id:"parallelizing-experiment-analyses",level:3},{value:"Parallelizing lower-level calculations",id:"parallelizing-lower-level-calculations",level:3},{value:"Installation",id:"installation",level:2},{value:"Argo Workflow UI",id:"argo-workflow-ui",level:2},{value:"Deleting Old Workflows",id:"deleting-old-workflows",level:3},{value:"Cluster Updates",id:"cluster-updates",level:2},{value:"Tooling and Metric Versioning",id:"tooling-and-metric-versioning",level:2},{value:"Keeping track of tooling versions",id:"keeping-track-of-tooling-versions",level:3},{value:"Keeping track of metric-hub versions",id:"keeping-track-of-metric-hub-versions",level:3}],m={toc:p},c="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/mozilla/jetstream"},"Jetstream"))," is part of the Cirrus ecosystem and depends on some external services."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cirrus overview",src:a(4898).Z,width:"2138",height:"868"}),"\n",(0,r.kt)("em",{parentName:"p"},"High-level overview of Cirrus")),(0,r.kt)("p",null,"Jetstream is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla/telemetry-airflow/blob/e5de501d8063cc366e9bb546135f3866136cb47d/dags/jetstream.py#L22"},"scheduled to run in Airflow")," daily. The daily runs will analyze all experiments that are currently active or just ended the day before and write metrics, statistics and errors for each experiment to BigQuery. Active V1 experiments and V6 experiments (Nimbus experiments) are retrieved from the ",(0,r.kt)("a",{parentName:"p",href:"https://experimenter.services.mozilla.com/api/v1/experiments/"},"Experimenter API"),"."),(0,r.kt)("p",null,"Jetstream also fetches custom experiment and outcome configs from the ",(0,r.kt)("inlineCode",{parentName:"p"},"jetstream/")," directory in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla/metric-hub/tree/main/jetstream"},"metric-hub")," for analysis. When a new custom config gets merged into metric-hub, the CI will trigger Jetstream to re-run all analyses for the experiment affected by the config. CircleCI will report on the status of the analysis run and link to the Cloud Logging logs."),(0,r.kt)("p",null,"After writing analyses results to BigQuery, statistics data is exported to the ",(0,r.kt)("inlineCode",{parentName:"p"},"mozanalysis")," bucket in GCS as JSON. The JSON data is accessed by the analysis dashboard to display results."),(0,r.kt)("h2",{id:"architecture-for-scaling-jetstream"},"Architecture for Scaling Jetstream"),(0,r.kt)("p",null,"To ensure analysis results are available in a timely manner, Jetstream implements two approaches for reducing the time required to run experiment analyses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parallelization of experiment analyses using ",(0,r.kt)("a",{parentName:"li",href:"https://argoproj.github.io/"},"Argo")),(0,r.kt)("li",{parentName:"ul"},"Parallelization of lower-level calculations (statistics, segments, ...) using ",(0,r.kt)("a",{parentName:"li",href:"https://dask.org/"},"Dask"))),(0,r.kt)("h3",{id:"parallelizing-experiment-analyses"},"Parallelizing experiment analyses"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://argoproj.github.io/"},"Argo")," is a light-weight workflow engine for orchestrating parallel jobs on Kubernetes and is capable of creating tasks dynamically that will be executed in parallel. Using Argo, the analyses for different experiments and analysis dates are split into separate jobs that run in parallel on the ",(0,r.kt)("inlineCode",{parentName:"p"},"jetstream")," Kubernetes cluster in the ",(0,r.kt)("inlineCode",{parentName:"p"},"moz-fx-data-experiment-analysis")," GCP project."),(0,r.kt)("p",null,"Argo expects each step in the workflow to be a container. The existing Jetstream container, which has the Jetstream CLI installed, can be used for each of these steps.\nThe full workflow definition is defined in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla/jetstream/blob/main/jetstream/workflows/run.yaml"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"workflows/run.yaml")," file"),"."),(0,r.kt)("p",null,"Depending on how Jetstream is invoked (",(0,r.kt)("inlineCode",{parentName:"p"},"rerun"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"run-argo"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"rerun_config_changed"),"), Jetstream will determine the dates and experiments that are to be analyzed and injects them as parameters into ",(0,r.kt)("inlineCode",{parentName:"p"},"run.yaml")," before launching the workflow. Argo will create separate jobs for each experiment and each analysis date. Once the analysis is complete, data gets exported as JSON to GCS."),(0,r.kt)("h3",{id:"parallelizing-lower-level-calculations"},"Parallelizing lower-level calculations"),(0,r.kt)("p",null,"In addition to running experiment analyses in parallel, ",(0,r.kt)("a",{parentName:"p",href:"https://dask.org/"},"Dask")," is used to parallelize lower-level calculations. The following steps could be executed in parallel:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Analyses for each analysis period (daily, 28day, weekly, overall)"),(0,r.kt)("li",{parentName:"ul"},"Analyses for different segments"),(0,r.kt)("li",{parentName:"ul"},"Calculating statistics defined for an experiment analysis")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.dask.org/en/latest/delayed.html"},(0,r.kt)("inlineCode",{parentName:"a"},"dask.delayed interface"))," is used to turn the functions executing these steps into tasks that are added to a task graph which executes these steps in parallel. Dask is configured to use as many cores as are available on the machine by default, with 1 worker for each core. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.dask.org/en/latest/scheduling.html#local-threads"},"Multi-threading being avoided, instead processes are used")," since the code is dominated by Python code, otherwise there wouldn't be any speedup due Python's Global Interpreter Lock. To manually restrict the number of processes, the ",(0,r.kt)("inlineCode",{parentName:"p"},"JETSTREAM_PROCESSES")," environment variable can be used."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Jetstream is executed on the ",(0,r.kt)("inlineCode",{parentName:"p"},"jetstream")," Kubernetes cluster in the ",(0,r.kt)("inlineCode",{parentName:"p"},"moz-fx-data-experiments")," project which is set up following ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/argoproj/argo/blob/master/docs/quick-start.md"},"Argo's installation guide"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When creating or re-creating the cluster, BigQuery and Compute Engine read/write permissions need to be enabled"),(0,r.kt)("li",{parentName:"ul"},"Installing Argo:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create an ",(0,r.kt)("inlineCode",{parentName:"li"},"argo")," namespace: ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl create ns argo")),(0,r.kt)("li",{parentName:"ul"},"Install commonly used components: ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl apply -n argo -f https://github.com/argoproj/argo-workflows/releases/download/v3.4.5/install.yaml")),(0,r.kt)("li",{parentName:"ul"},"Create new ",(0,r.kt)("inlineCode",{parentName:"li"},"clusterrole"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl create rolebinding default-admin --clusterrole=admin --serviceaccount=argo:default --namespace=argo")))),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mozilla/telemetry-airflow/blob/master/dags/jetstream.py"},(0,r.kt)("inlineCode",{parentName:"a"},"jetstream")," DAG in Airflow")," triggers the ",(0,r.kt)("inlineCode",{parentName:"li"},"run-argo")," job daily and either requires Compute Engine API access or the parameters ",(0,r.kt)("inlineCode",{parentName:"li"},"cluster_ip")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"cluster_cert")," need to be provided",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Currently the Airflow cluster does not have Compute Engine API access, so the cluster IP and certificate are stored as secrets and used for running Jetstream")))),(0,r.kt)("h2",{id:"argo-workflow-ui"},"Argo Workflow UI"),(0,r.kt)("p",null,"Argo provides a Web UI to access running workflows. Users need to authenticate using a Bearer token:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"set ",(0,r.kt)("inlineCode",{parentName:"li"},"export CLOUDSDK_CORE_PROJECT=moz-fx-data-experiments")),(0,r.kt)("li",{parentName:"ul"},"Get Bearer token and copy: ",(0,r.kt)("inlineCode",{parentName:"li"},"gcloud container clusters get-credentials jetstream --region=us-central1-a && kubectl -n argo exec $(kubectl get pod -n argo -l 'app=argo-server' -o jsonpath='{.items[0].metadata.name}') -- argo auth token")," "),(0,r.kt)("li",{parentName:"ul"},"Connect to the Workflow UI using port forwarding: ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl -n argo port-forward svc/argo-server 2746:2746")),(0,r.kt)("li",{parentName:"ul"},"Open ",(0,r.kt)("a",{parentName:"li",href:"https://localhost:2746"},"https://localhost:2746")),(0,r.kt)("li",{parentName:"ul"},"Use the generated Bearer token (including the word ",(0,r.kt)("inlineCode",{parentName:"li"},"Bearer"),") for authentication")),(0,r.kt)("h3",{id:"deleting-old-workflows"},"Deleting Old Workflows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Workflow UI might get less responsive the more workflows have been run in the past"),(0,r.kt)("li",{parentName:"ul"},"To delete workflows that are older than 4 days run:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get wf -o go-template -n argo --template '{{range .items}}{{.metadata.name}} {{.metadata.creationTimestamp}}{{\"\\n\"}}{{end}}' | awk '$2 <= \"'$(gdate -d '30 days ago' -Ins --utc | sed 's/+0000/Z/')'\" { print $1 }' | gxargs --no-run-if-empty kubectl delete wf -n argo\n")),(0,r.kt)("h2",{id:"cluster-updates"},"Cluster Updates"),(0,r.kt)("p",null,"Argo updates should be tested on a separate cluster before applying them to production. Jetstream has some custom logic to connect to clusters and issue workflows that might be incompatible with future versions of Argo."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setup a separate cluster, install most recent Argo version",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Optionally, push a custom docker image that should be tested",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docker build -t jetstream-test .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docker tag jetstream-test gcr.io/moz-fx-data-experiments/jetstream-test:latest")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gcloud auth configure-docker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"docker push gcr.io/moz-fx-data-experiments/jetstream-test:latest")),(0,r.kt)("li",{parentName:"ul"},"Update ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mozilla/jetstream/blob/main/jetstream/workflows/run.yaml"},"the workflow configuration file")," to point to the docker image to be tested"))))),(0,r.kt)("li",{parentName:"ul"},"To update Argo run:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Connect to cluster: ",(0,r.kt)("inlineCode",{parentName:"li"},"gcloud container clusters get-credentials jetstream --region=us-central1-a")),(0,r.kt)("li",{parentName:"ul"},"To install new release ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl apply -n argo -f https://github.com/argoproj/argo-workflows/releases/download/v3.4.5/install.yaml"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Change version number to most recent release"))))),(0,r.kt)("li",{parentName:"ul"},"The GKE cluster itself is updated automatically by GCP")),(0,r.kt)("h2",{id:"tooling-and-metric-versioning"},"Tooling and Metric Versioning"),(0,r.kt)("p",null,"Jetstream uses the same tooling and metric versions for an experiment across its entire analysis duration. This prevents inconsistent results, for example, when changes are made to how ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla/mozanalysis"},"mozanalysis")," computes results or new default metrics are added in metric-hub mid-experiment."),(0,r.kt)("h3",{id:"keeping-track-of-tooling-versions"},"Keeping track of tooling versions"),(0,r.kt)("p",null,"When a new version of jetstream is released, for example after some library updates, a new Docker container gets pushed to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/artifacts?project=moz-fx-data-experiments"},"Artifact Registry"),". The container installs a specific version of each library and can be uniquely identified by a SHA256 hash. A timestamp indicating when the container was uploaded is also available."),(0,r.kt)("p",null,"Every time Jetstream runs and writes computed results to BigQuery, it tags the result tables with a last updated timestamp. However, the enrollments table won't update on new Jetstream runs, giving us an anchor from which to identify a consistent Jetstream image hash. "),(0,r.kt)("p",null,"The last updated timestamp of the enrollments table is used to determine which Docker container was the most recently published one at that time. This container is then be used for all subsequent analyses."),(0,r.kt)("p",null,"The Artifact Registry API is used to access image information and to determine the container to use for the analysis based on the last updated timestamp of the experiments enrollment table."),(0,r.kt)("p",null,"Container hashes are passed to the Argo workflow config, which references docker containers used for execution."),(0,r.kt)("p",null,"Jetstream can be run using a specific image version using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--image_version")," parameter. The image can also be changed using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--image")," parameter."),(0,r.kt)("h3",{id:"keeping-track-of-metric-hub-versions"},"Keeping track of metric-hub versions"),(0,r.kt)("p",null,"Outcome and default configs can potentially change mid-experiment, leaving some experiments in an inconsistent state. Since these configs get pulled in dynamically and aren't installed as part of the Docker image the prior approach doesn't work here."),(0,r.kt)("p",null,"Instead, ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigCollection.as_of(<date>)")," is used to checkout an earlier version of the repo as of the provided date.\nThis date will again be based on the last updated timestamp of the enrollments table. Calling ",(0,r.kt)("inlineCode",{parentName:"p"},"as_of()")," will load the configs, defaults and outcomes that will subsequently be used for analysis. ",(0,r.kt)("inlineCode",{parentName:"p"},"as_of()")," iterates through the commit history until it finds the first commit from before the last updated timestamp. If this commit is in a broken state (i.e., configs cannot be successfully loaded), ",(0,r.kt)("inlineCode",{parentName:"p"},"as_of")," works forward from this point to find the closest working commit."),(0,r.kt)("p",null,"When making changes to experiment-specific configs, jetstream will automatically rerun the affected experiments which will result in the enrollments table getting updated and the most recent configs in metric-hub being used."),(0,r.kt)("p",null,"More information on how to use the most recent tooling and metric versions can be found ",(0,r.kt)("a",{parentName:"p",href:"/jetstream/jetstream/#how-to-use-the-latest-tooling-and-metric-definitions"},"here"),"."))}u.isMDXComponent=!0},4898:function(e,t,a){t.Z=a.p+"assets/images/cirrus-8bdea7b35470b1c920d0238d70ada0d2.png"}}]);