/** robots.txt : tout est indexable, avec lien vers le sitemap. */

import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Requis par l'export statique (output: "export").
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", site.url).toString(),
  };
}
