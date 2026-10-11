/** sitemap.xml : pages du site (accueil et contact). */

import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, site.url).toString();
  const now = new Date();

  return [
    { url: url("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: url("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];
}
