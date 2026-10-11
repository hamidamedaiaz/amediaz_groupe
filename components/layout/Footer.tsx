/**
 * Pied de page bleu marine : AMEDIAZ GROUP (identité + navigation), Services, Secteurs, Contact.
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
      <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-ivory uppercase">{title}</p>
      <ul className="mt-5 space-y-2.5 text-sm text-mist">{children}</ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="on-dark">
      <Container className="pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* AMEDIAZ GROUP */}
          <div className="lg:col-span-4">
            <Link href="/" aria-label={`${site.name} — accueil`} className="inline-block">
              <Image src="/brand/logo-reverse.png" alt={site.name} width={1186} height={630} className="h-20 w-auto" />
            </Link>
            <p className="font-display mt-7 text-xl font-semibold tracking-tight">« {site.slogan} »</p>
            <p className="mt-2 text-sm text-mist">{site.tagline}</p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mist">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <FooterColumn title="Services">
              {missions.slice(0, 7).map((s) => (
                <li key={s.slug}>{s.shortTitle ?? s.title}</li>
              ))}
            </FooterColumn>

            <FooterColumn title="Secteurs">
              {sectors.slice(0, 7).map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </FooterColumn>

            <FooterColumn title="Contact">
              <li>
                <a href={site.contact.phoneHref} className="hover:text-white">
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className="break-all hover:text-white">
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
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {s.label}
                  </a>
                </li>
              ))}
            </FooterColumn>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-xs text-mist md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Tous droits réservés. Photos protégées : toute
            reproduction sans autorisation est interdite.
          </p>
          <p>ICE {site.ice}</p>
        </div>
      </Container>
    </footer>
  );
}
