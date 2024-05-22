"use strict";(self.webpackChunkrelica_docs=self.webpackChunkrelica_docs||[]).push([[2190],{2530:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var t=i(4848),o=i(8453);const l={},s="Aspect Definition Modelling",d={id:"design/theory/quintessential-modelling/modelling-procedures/aspect-definition-model",title:"Aspect Definition Modelling",description:"",source:"@site/docs/design/theory/quintessential-modelling/modelling-procedures/aspect-definition-model.md",sourceDirName:"design/theory/quintessential-modelling/modelling-procedures",slug:"/design/theory/quintessential-modelling/modelling-procedures/aspect-definition-model",permalink:"/docs/design/theory/quintessential-modelling/modelling-procedures/aspect-definition-model",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"designSidebar",previous:{title:"Physical Object Definition Modelling",permalink:"/docs/design/theory/quintessential-modelling/modelling-procedures/physical-object-definition-model"},next:{title:"Role Definition Modelling",permalink:"/docs/design/theory/quintessential-modelling/modelling-procedures/role-definition-model"}},r={},c=[];function a(e){const n={h1:"h1",mermaid:"mermaid",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"aspect-definition-modelling",children:"Aspect Definition Modelling"}),"\n",(0,t.jsx)(n.mermaid,{value:'flowchart TD\n    S([...from Base Def])\n    SRPA[Specify Role Player Aspect]\n    SPPO[Specify Possessing Physical Object]\n    DNKPO[Define New Kind of Physical Object]\n    DNKA[Define New Kind of Aspect]\n    HIST((H))\n    E([End])\n\n    S:::external ==> SRPA\n    subgraph IA[Intrinsic Aspect]\n        SRPA ==>|next| SPPO\n        HIST\n    end\n\n    SPPO -.->|y| DNKPO\n    DNKPO:::external -.->|return| HIST\n    SRPA -.->|x| DNKA\n    DNKA:::external -.->|return| HIST\n    SPPO ==>|finalize| E\n    \n    click S "/docs/design/theory/quintessential-modelling/modelling-procedures/base-definition-model" "This is a tooltip for a link"\n    click DNKA "/docs/design/theory/quintessential-modelling/modelling-procedures/aspect-definition-model" "This is a tooltip for a link"\n    click DNKPO "/docs/design/theory/quintessential-modelling/modelling-procedures/physical-object-definition-model" "This is a tooltip for a link"\n    \n    classDef external fill:#f96'})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var t=i(6540);const o={},l=t.createContext(o);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);