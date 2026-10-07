import "server-only";

import imageUrlBuilder, { type SanityImageSource } from "@sanity/image-url";
import { sanityClient } from "./sanity.client";

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlForImage(source: unknown) {
  if (!builder || !source) return null;
  return builder.image(source as SanityImageSource);
}
