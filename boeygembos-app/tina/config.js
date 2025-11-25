import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "release";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || null, // Get this from tina.io
  token: process.env.TINA_TOKEN || null, // Get this from tina.io
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
        name: "page",
        label: "Pagina's",
        path: "content/pages",
        format: "md",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return `/`;
            }
            return `/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titel",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Beschrijving",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Afbeelding",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Inhoud",
            isBody: true,
          },
        ],
      },
      {
        name: "plant",
        label: "Planten & Dieren",
        path: "content/plants",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Naam",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "scientificName",
            label: "Wetenschappelijke Naam",
          },
          {
            type: "string",
            name: "category",
            label: "Categorie",
            options: ["Boom", "Plant", "Vogel", "Insect", "Zoogdier", "Fruit"],
          },
          {
            type: "image",
            name: "image",
            label: "Afbeelding",
          },
          {
            type: "string",
            name: "season",
            label: "Seizoen",
            options: ["Lente", "Zomer", "Herfst", "Winter", "Alle seizoenen"],
          },
          {
            type: "rich-text",
            name: "description",
            label: "Beschrijving",
            isBody: true,
          },
        ],
      },
      {
        name: "gallery",
        label: "Fotogalerij",
        path: "content",
        format: "json",
        match: {
          include: "gallery",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "photos",
            label: "Foto's",
            list: true,
            fields: [
              {
                type: "image",
                name: "src",
                label: "Foto",
                required: true,
              },
              {
                type: "string",
                name: "alt",
                label: "Omschrijving",
                required: true,
              },
              {
                type: "string",
                name: "caption",
                label: "Bijschrift",
              },
            ],
          },
        ],
      },
      {
        name: "bosklas",
        label: "Bosklas",
        path: "content",
        format: "json",
        match: {
          include: "bosklas",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titel",
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Beschrijving",
          },
          {
            type: "object",
            name: "features",
            label: "Kenmerken",
            list: true,
            fields: [
              {
                type: "string",
                name: "text",
                label: "Tekst",
              },
            ],
          },
          {
            type: "object",
            name: "photos",
            label: "Foto's",
            list: true,
            fields: [
              {
                type: "image",
                name: "src",
                label: "Foto",
              },
              {
                type: "string",
                name: "caption",
                label: "Bijschrift",
              },
            ],
          },
        ],
      },
      {
        name: "contact",
        label: "Contact",
        path: "content",
        format: "json",
        match: {
          include: "contact",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "address",
            label: "Adres",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "rules",
            label: "Regels",
            fields: [
              {
                type: "string",
                name: "allowed",
                label: "Mag Wel",
                list: true,
              },
              {
                type: "string",
                name: "notAllowed",
                label: "Mag Niet",
                list: true,
              },
            ],
          },
          {
            type: "string",
            name: "legalNotice",
            label: "Wettelijke Kennisgeving",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
    ],
  },
});
