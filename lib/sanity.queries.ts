import { defineQuery } from "next-sanity";

const postFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  mainImage{asset, alt, crop, hotspot},
  publishedAt,
  author,
  featured,
  body[]{...}
`;

export const postsQuery = defineQuery(`
  *[
    _type == "post" &&
    !(_id in path("drafts.**")) &&
    defined(slug.current) &&
    defined(publishedAt) &&
    publishedAt <= now()
  ] | order(featured desc, publishedAt desc) {
    ${postFields}
  }
`);

export const postBySlugQuery = defineQuery(`
  *[
    _type == "post" &&
    !(_id in path("drafts.**")) &&
    slug.current == $slug &&
    defined(publishedAt) &&
    publishedAt <= now()
  ][0] {
    ${postFields}
  }
`);

export const postSlugsQuery = defineQuery(`
  *[
    _type == "post" &&
    !(_id in path("drafts.**")) &&
    defined(slug.current) &&
    defined(publishedAt) &&
    publishedAt <= now()
  ]{"slug": slug.current}
`);
