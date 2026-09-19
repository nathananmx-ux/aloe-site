import type { MetadataRoute } from "next";

const base = "https://aloe-site.vercel.app";
const routes = ["", "/implantacao", "/pequenos-condominios", "/troca-de-administradora", "/planos", "/area-do-cliente", "/boletos"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${base}${route}`, changeFrequency: "monthly", priority: route ? 0.7 : 1 }));
}
