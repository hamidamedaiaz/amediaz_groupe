/**
 * Pied de page : identité, navigation, services, secteurs, coordonnées, mentions.
 * Toutes les données viennent de data/ (aucun texte en dur à maintenir ici).
 */

import Image from "next/image";
import Link from "next/link";
import { sectors } from "@/data/sectors";
import { missions } from "@/data/services";
import { navLinks, site } from "@/data/site";
import { Container } from "@/components/ui/Container";

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-steel">{title}</p>
      <ul className="mt-5 space-y-2.5 text-sm text-muted">{children}</ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep">
      <Container className="pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Identité */}
          <div className="lg:col-span-4">
            <Link href="/" aria-label={`${site.name} — accueil`} className="inline-block">
              <Image src="/brand/logo-reverse.png" alt={site.name} width={1186} height={630} className="h-24 w-auto" />
            </Link>
            <p className="font-display mt-8 text-2xl font-semibold tracking-tight">« {site.slogan} »</p>
            <p className="mt-3 text-sm text-muted">{site.tagline}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            <FooterColumn title="Navigation">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-ivory">
                    {item.label}
                  </Link>
                </li>
              ))}
            </FooterColumn>

            <FooterColumn title="Services">
              {missions.slice(0, 6).map((s) => (
                <li key={s.title}>{s.shortTitle ?? s.title}</li>
              ))}
            </FooterColumn>

            <FooterColumn title="Secteurs">
              {sectors.slice(0, 6).map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </FooterColumn>

            <FooterColumn title="Contact">
              <li>
                <a href={site.contact.phoneHref} className="hover:text-ivory">
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className="break-all hover:text-ivory">
                  {site.contact.email}
                </a>
              </li>
              <li>
                <address className="not-italic">
                  {site.contact.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
                    {s.label}
                  </a>
                </li>
              ))}
            </FooterColumn>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-line pt-8 text-xs text-steel md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Tous droits réservés. Photos protégées : toute
            reproduction sans autorisation est interdite.
          </p>
          <p>ICE {site.ice}</p>
          <p>{site.city}</p>
        </div>
      </Container>
    </footer>
  );
}
