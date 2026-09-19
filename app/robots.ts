import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/", disallow: "/blog" }, sitemap: "https://aloe-site.vercel.app/sitemap.xml" };
}
