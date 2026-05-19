import type { MetadataRoute } from "next";
import { getSiteUrl, hasPublicSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!hasPublicSiteUrl) {
    return [];
  }

  return [
    {
      url: getSiteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: getSiteUrl("/menu"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
