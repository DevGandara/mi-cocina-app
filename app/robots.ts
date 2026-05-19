import type { MetadataRoute } from "next";
import { hasPublicSiteUrl, siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: hasPublicSiteUrl ? `${siteUrl}/sitemap.xml` : undefined,
  };
}
