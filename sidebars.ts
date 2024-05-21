import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  // backgroundSidebar: [{ type: "autogenerated", dirName: "background" }],
  backgroundSidebar: [
    { type: "doc", id: "background/index", label: "Introduction" },
    {
      type: "doc",
      id: "background/facts-v-relations",
      label: "Facts v. Relations",
    },
  ],

  designSidebar: [
    { type: "doc", id: "design/index", label: "Overview" },
    {
      type: "category",
      label: "Theory",
      items: [
        {
          type: "category",
          label: "Quentessential Modelling",
          items: [
            {
              type: "doc",
              id: "design/theory/quintessential-modelling/index",
              label: "Intro",
            },
            {
              type: "category",
              label: "Modelling Procedures",
              items: [
                {
                  type: "category",
                  label: "Definition Modelling",
                  items: [
                    {
                      type: "doc",
                      id: "design/theory/quintessential-modelling/modelling-procedures/base-definition-model",
                      label: "Base",
                    },
                    {
                      type: "doc",
                      id: "design/theory/quintessential-modelling/modelling-procedures/physical-object-definition-model",
                      label: "Physical Object",
                    },
                    {
                      type: "doc",
                      id: "design/theory/quintessential-modelling/modelling-procedures/aspect-definition-model",
                      label: "Aspect",
                    },
                    {
                      type: "doc",
                      id: "design/theory/quintessential-modelling/modelling-procedures/role-definition-model",
                      label: "Role",
                    },
                    {
                      type: "doc",
                      id: "design/theory/quintessential-modelling/modelling-procedures/relation-definition-model",
                      label: "Relation",
                    },
                    {
                      type: "doc",
                      id: "design/theory/quintessential-modelling/modelling-procedures/occurrence-definition-model",
                      label: "Occurrence",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Knowledge Modelling",
                  items: [
                    {
                      type: "doc",
                      id: "design/theory/quintessential-modelling/modelling-procedures/physical-object-knowledge-model",
                      label: "Physical Object",
                    },
                  ],
                },
                // {
                //   type: "category",
                //   label: "Aspect",
                //   items: [
                //     {
                //       type: "doc",
                //       id: "design/theory/quintessential-modelling/modelling-procedures/aspect/definition-model",
                //       label: "Definition Model",
                //     },
                //   ],
                // },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Implementation",
      items: [
        {
          type: "doc",
          id: "design/implementation/semantic-transaction-engine",
          label: "Semantic Transaction Engine",
        },
      ],
    },
  ],

  documentationSidebar: [{ type: "autogenerated", dirName: "documentation" }],
};

export default sidebars;
