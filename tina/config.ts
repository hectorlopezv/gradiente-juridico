import { defineConfig, type TinaField } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const bilingual = (
  name: string,
  labelEs: string,
  labelEn: string,
  textarea = false
): TinaField => ({
  type: "object",
  name,
  label: labelEs.replace(" (ES)", ""),
  fields: [
    {
      type: "string",
      name: "es",
      label: labelEs,
      required: true,
      ui: textarea ? { component: "textarea" } : undefined,
    },
    {
      type: "string",
      name: "en",
      label: labelEn,
      required: true,
      ui: textarea ? { component: "textarea" } : undefined,
    },
  ],
});

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "local",
  token: process.env.TINA_TOKEN || "local",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "insight",
        label: "Insights",
        path: "content/insights",
        format: "json",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) =>
              String(values?.name || "")
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, ""),
          },
          router: ({ document }) => `/insight/${document._sys.filename}`,
        },
        fields: [
          {
            type: "string",
            name: "name",
            label: "Slug",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "publishedAt",
            label: "Fecha de publicación",
            required: true,
            ui: { dateFormat: "YYYY-MM-DD" },
          },
          {
            type: "image",
            name: "image",
            label: "Imagen",
            required: true,
          },
          bilingual("kicker", "Kicker (ES)", "Kicker (EN)"),
          bilingual("title", "Título (ES)", "Title (EN)"),
          bilingual("summary", "Resumen (ES)", "Summary (EN)", true),
          bilingual(
            "dateLabel",
            "Etiqueta de fecha (ES)",
            "Date label (EN)"
          ),
          {
            type: "object",
            name: "sections",
            label: "Secciones",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.title?.es || "Sección",
              }),
            },
            fields: [
              bilingual(
                "title",
                "Título de sección (ES)",
                "Section title (EN)"
              ),
              {
                type: "object",
                name: "paragraphs",
                label: "Párrafos",
                list: true,
                ui: {
                  itemProps: (item) => ({
                    label: String(item?.es || "Párrafo").slice(0, 48),
                  }),
                },
                fields: [
                  {
                    type: "string",
                    name: "es",
                    label: "Párrafo (ES)",
                    required: true,
                    ui: { component: "textarea" },
                  },
                  {
                    type: "string",
                    name: "en",
                    label: "Paragraph (EN)",
                    required: true,
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "takeaways",
            label: "Para llevar",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: String(item?.es || "Item").slice(0, 48),
              }),
            },
            fields: [
              {
                type: "string",
                name: "es",
                label: "Para llevar (ES)",
                required: true,
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "en",
                label: "Takeaway (EN)",
                required: true,
                ui: { component: "textarea" },
              },
            ],
          },
        ],
      },
    ],
  },
});
