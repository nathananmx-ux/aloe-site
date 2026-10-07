import { defineArrayMember, defineField, defineType } from "sanity";

const categories = [
  "Gestão condominial",
  "Síndico profissional",
  "Financeiro",
  "Inadimplência",
  "Regularização",
  "Assembleia",
  "Implantação",
  "Dia a dia do condomínio"
] as const;

export const postType = defineType({
  name: "post",
  title: "Post do Blog",
  type: "document",
  orderings: [
    {
      title: "Data de publicação, mais recentes",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }]
    }
  ],
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required().min(8).max(110)
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "Endereço do artigo. Clique em Gerar após preencher o título.",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "excerpt",
      title: "Resumo",
      description: "Texto curto exibido na listagem do Blog.",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required().min(40).max(260)
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      options: {
        list: categories.map((category) => ({ title: category, value: category })),
        layout: "dropdown"
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "mainImage",
      title: "Imagem principal",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          description: "Descreva a imagem para acessibilidade.",
          type: "string",
          validation: (rule) => rule.required()
        })
      ]
    }),
    defineField({
      name: "publishedAt",
      title: "Data de publicação",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "string",
      initialValue: "Aloe Condomínios",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "featured",
      title: "Post em destaque",
      type: "boolean",
      initialValue: false
    }),
    defineField({
      name: "body",
      title: "Conteúdo",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Texto", value: "normal" },
            { title: "Título 2", value: "h2" },
            { title: "Título 3", value: "h3" },
            { title: "Citação", value: "blockquote" }
          ],
          lists: [
            { title: "Marcadores", value: "bullet" },
            { title: "Numeração", value: "number" }
          ],
          marks: {
            decorators: [
              { title: "Negrito", value: "strong" },
              { title: "Itálico", value: "em" }
            ],
            annotations: [
              {
                name: "link",
                title: "Link",
                type: "object",
                fields: [
                  defineField({
                    name: "href",
                    title: "Endereço",
                    type: "url",
                    validation: (rule) =>
                      rule.uri({ scheme: ["http", "https", "mailto", "tel"] })
                  })
                ]
              }
            ]
          }
        }),
        defineArrayMember({
          type: "image",
          title: "Imagem",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Texto alternativo",
              type: "string",
              validation: (rule) => rule.required()
            })
          ]
        })
      ],
      validation: (rule) => rule.required().min(1)
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "mainImage"
    }
  }
});
