import Link from "next/link";
import { site } from "@/data/site";

export type Crumb = { label: string; href?: string };

/** Fil d'Ariane accessible + données structurées schema.org pour le SEO. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Accueil", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: new URL(c.href, site.url).toString() } : {}),
    })),
  };

  return (
    <nav aria-label="Fil d’Ariane">
      <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.8125rem] text-steel">
        {all.map((c, i) => (
          <li key={c.label} className="flex items-center gap-3">
            {i > 0 && <span aria-hidden>/</span>}
            {c.href && i < all.length - 1 ? (
              <Link href={c.href} className="hover:text-ivory">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-muted">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}
