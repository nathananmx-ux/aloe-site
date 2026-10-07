import "server-only";

import {
  fallbackBlogPosts,
  type BlogPost
} from "@/data/blog";
import { sanityFetch } from "./sanity.client";
import {
  postBySlugQuery,
  postSlugsQuery,
  postsQuery
} from "./sanity.queries";

type CmsPost = Omit<BlogPost, "source" | "fallbackBody">;

const fromCms = (post: CmsPost): BlogPost => ({
  ...post,
  author: post.author || "Aloe Condomínios",
  featured: Boolean(post.featured),
  source: "sanity"
});

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await sanityFetch<CmsPost[]>({ query: postsQuery });

  if (posts?.length) return posts.map(fromCms);

  return fallbackBlogPosts;
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const post = await sanityFetch<CmsPost>({
    query: postBySlugQuery,
    params: { slug }
  });

  if (post) return fromCms(post);

  return fallbackBlogPosts.find((item) => item.slug === slug) || null;
}

export async function getBlogPostSlugs(): Promise<string[]> {
  const cmsSlugs = await sanityFetch<Array<{ slug: string }>>({
    query: postSlugsQuery
  });
  const slugs = new Set(fallbackBlogPosts.map((post) => post.slug));

  cmsSlugs?.forEach(({ slug }) => slug && slugs.add(slug));

  return Array.from(slugs);
}
