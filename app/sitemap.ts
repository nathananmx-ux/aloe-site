import type { MetadataRoute } from "next";
import { getBlogPostSlugs } from "@/lib/blog";

const base = "https://aloe-site.vercel.app";
const routes = ["", "/blog", "/administracao", "/implantacao", "/pequenos-condominios", "/troca-de-administradora", "/planos", "/area-do-cliente", "/boletos"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogSlugs = await getBlogPostSlugs();
  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: "monthly",
    priority: route ? 0.7 : 1
  }));
  const articles: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    changeFrequency: "monthly",
    priority: 0.6
  }));

  return [...pages, ...articles];
}
