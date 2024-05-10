"use strict";(self.webpackChunkrelica_docs=self.webpackChunkrelica_docs||[]).push([[6464],{1345:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var t=i(4848),a=i(8453);const s={},r="Overview",l={id:"design/index",title:"Overview",description:"Relica is a data platform which serves a semantic knowledge graph based on Gellish Ontological Modelling Language.",source:"@site/docs/design/index.md",sourceDirName:"design",slug:"/design/",permalink:"/docs/design/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"designSidebar",next:{title:"Quintessential Semantic Modelling",permalink:"/docs/design/theory/quintessential-modelling/"}},c={},o=[{value:"Architectural Components",id:"architectural-components",level:2},{value:"Dataplex",id:"dataplex",level:3},{value:"Archivist",id:"archivist",level:3},{value:"The Clarity Core",id:"the-clarity-core",level:3},{value:"Heuristic Engine",id:"heuristic-engine",level:4}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"Relica is a data platform which serves a semantic knowledge graph based on Gellish Ontological Modelling Language."}),"\n",(0,t.jsx)(n.p,{children:"It enables:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Modelling of information within the semantic graph","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"creation of facts"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Revokation/dropping of facts"}),"\n",(0,t.jsxs)(n.li,{children:["manual insertion of facts","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"single fact"}),"\n",(0,t.jsx)(n.li,{children:"bulk xls/csv"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["mapping application domain to semantic model","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"create facts from existing data"}),"\n",(0,t.jsx)(n.li,{children:"derive data objects from facts"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"api access to Semantic Relation space"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"architectural-components",children:"Architectural Components"}),"\n",(0,t.jsx)(n.mermaid,{value:'C4Component\n    title Component diagram for Systema Relica\n\n    Container(archivist, "Archivist", "Gellish Relation Space Interface", "Allows")\n\n    Container_Boundary(dataplex, "Dataplex") {\n        ContainerDb(graph, "Neo4j", "Gellish", "Stores Gellish Facts + Metadata")\n        ContainerDb(cache, "Redis", "Various Schema", "Stores Cache Data")\n        ContainerDb(env, "PostgreSQL", "Various Schema", "Stores Env Data (auth, session-state)")\n    }\n\n    Container_Boundary(clarityCore, "Clarity-Core") {\n\n        Component(he, "Heuristic Engine", "foobar", "Allows")\n    }\n\n    Rel(archivist, graph, "uses")\n    Rel(archivist, cache, "uses")\n    Rel(archivist, env, "uses")'}),"\n",(0,t.jsx)(n.h3,{id:"dataplex",children:"Dataplex"}),"\n",(0,t.jsx)(n.p,{children:"Graph Database"}),"\n",(0,t.jsx)(n.p,{children:"Cache"}),"\n",(0,t.jsx)(n.p,{children:"Environment"}),"\n",(0,t.jsx)(n.h3,{id:"archivist",children:"Archivist"}),"\n",(0,t.jsx)(n.p,{children:"Interface to Graph Database and Cache's"}),"\n",(0,t.jsx)(n.p,{children:"Provides API access to Semantic Model Relation-Space"}),"\n",(0,t.jsx)(n.p,{children:"*Auth"}),"\n",(0,t.jsx)(n.p,{children:"*Access Control"}),"\n",(0,t.jsx)(n.h3,{id:"the-clarity-core",children:"The Clarity Core"}),"\n",(0,t.jsx)(n.p,{children:"Interface to Semantic Model Relation-Space(Archivist)"}),"\n",(0,t.jsx)(n.p,{children:"Provides runtime configurable mapping layer between Semantic Model Entities and users Application Domain (GraphQL)"}),"\n",(0,t.jsx)(n.h4,{id:"heuristic-engine",children:"Heuristic Engine"}),"\n",(0,t.jsx)(n.p,{children:"Stack-based recursively-calling heirarchical-state-machine management sub-component"}),"\n",(0,t.jsx)(n.p,{children:"Alongside comprehensive set of HSM definitions comprising essential Quintessential Modelling Heuristics"}),"\n",(0,t.jsx)(n.p,{children:"The term 'Heuristic' meaning our HSM definitions/interpretation specifically purposed for stepping through complex operations over the Semantic Model"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(6540);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);