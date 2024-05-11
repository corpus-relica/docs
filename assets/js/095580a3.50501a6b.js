"use strict";(self.webpackChunkrelica_docs=self.webpackChunkrelica_docs||[]).push([[5048],{1683:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>D,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var t=i(4848),o=i(8453);const s={},l="Definition Modelling",r={id:"design/theory/quintessential-modelling/modelling-procedures/physical-object/definition-model",title:"Definition Modelling",description:"",source:"@site/docs/design/theory/quintessential-modelling/modelling-procedures/physical-object/definition-model.md",sourceDirName:"design/theory/quintessential-modelling/modelling-procedures/physical-object",slug:"/design/theory/quintessential-modelling/modelling-procedures/physical-object/definition-model",permalink:"/docs/design/theory/quintessential-modelling/modelling-procedures/physical-object/definition-model",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"designSidebar",previous:{title:"Quintessential Semantic Modelling",permalink:"/docs/design/theory/quintessential-modelling/"},next:{title:"Knowledge Modelling",permalink:"/docs/design/theory/quintessential-modelling/modelling-procedures/physical-object/knowledge-model"}},c={},a=[];function d(e){const n={h1:"h1",mermaid:"mermaid",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"definition-modelling",children:"Definition Modelling"}),"\n",(0,t.jsx)(n.mermaid,{value:"stateDiagram-v2\n    BD: Base Definition\n    PO: Physical Object\n    PO.SDQA: Specify Defining Qualitative Aspect \n    DNQualA: Define new Qualitative Aspect\n    PO.SDNIA: Specify Defining Nature of Intrinsic Aspect\n    DNIntrA: Define new Intrinsic Aspect\n    SDVIA: Specify Defining Values of Intrinsic Aspects\n    DNQuantA: Define new Quantitative Aspect\n    PO.SIF: Specify Intent Function\n    DNKO: Define new Kind of Occurrence\n    PO.SC: Specify Composition\n    CCrPO: Create Container Physical Object\n    CCdPO: Create Contained Physical Object\n    DGO: Denotation by Graphical Object\n    DGO_UCIF: Upload/Create image File\n    DGO_DPS: Define Picture of Something\n    PO.DTO: Denotation by Textual Object\n    DTO_UCTF: Upload/Create Text File\n    DTO_DIS: Define Information about Something\n    PO.ITM: Inclusion of Text in Model\n    PO.H: History\n\n    [*] --\x3e BD\n    BD --\x3e PO\n    state PO {\n        PO.H\n        [*] --\x3e PO.SDQA\n        PO.SDQA --\x3e PO.SDNIA\n        PO.SDNIA --\x3e SDVIA\n        SDVIA --\x3e PO.SIF\n        PO.SIF --\x3e PO.SC\n        PO.SC --\x3e DGO\n        DGO --\x3e PO.DTO\n        PO.DTO --\x3e PO.ITM\n    }\n    PO.SDQA --\x3e DNQualA\n    DNQualA --\x3e PO.SDQA\n    PO.SDNIA --\x3e DNIntrA\n    DNIntrA --\x3e PO.SDNIA\n    SDVIA --\x3e DNQuantA\n    DNQuantA --\x3e SDVIA\n    PO.SIF --\x3e DNKO\n    DNKO --\x3e PO.SIF\n    PO.SC --\x3e CCrPO\n    CCrPO --\x3e PO.SC\n    PO.SC --\x3e CCdPO\n    CCdPO --\x3e PO.SC\n    DGO --\x3e DGO_UCIF\n    DGO_UCIF --\x3e DGO\n    DGO --\x3e DGO_DPS\n    DGO_DPS --\x3e DGO\n    PO.DTO --\x3e DTO_UCTF\n    DTO_UCTF --\x3e PO.DTO\n    PO.DTO --\x3e DTO_DIS\n    DTO_DIS --\x3e PO.H\n    PO.ITM --\x3e DTO_DIS\n    PO.ITM --\x3e [*]"})]})}function D(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var t=i(6540);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);