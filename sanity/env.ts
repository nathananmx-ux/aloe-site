export const studioProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "missingprojectid";
export const studioDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const studioApiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-02-19";

export const isStudioConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_DATASET
);
