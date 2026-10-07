import "server-only";

import { createClient, type QueryParams } from "next-sanity";

const projectId =
  process.env.SANITY_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset =
  process.env.SANITY_DATASET ||
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  "production";
const apiVersion =
  process.env.SANITY_API_VERSION ||
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ||
  "2025-02-19";
const token = process.env.SANITY_READ_TOKEN;

export const isSanityConfigured = Boolean(projectId && dataset);

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: projectId as string,
      dataset,
      apiVersion,
      perspective: "published",
      useCdn: !token,
      token
    })
  : null;

export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
}): Promise<T | null> {
  if (!sanityClient) return null;

  try {
    return await sanityClient.fetch<T>(query, params, {
      next: { revalidate }
    });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Não foi possível consultar o Sanity.", error);
    }
    return null;
  }
}
