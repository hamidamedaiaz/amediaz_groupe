/** Page contact : /contact — réutilise la section Contact de l'accueil (titre en h1). */

import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & demande de devis",
  description: `Parlons de votre projet : ${site.contact.phone} · ${site.contact.email} · Témara, Maroc.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-28 md:pt-36">
      <Container>
        <Breadcrumbs items={[{ label: "Contact" }]} />
      </Container>
      <div className="-mt-10 md:-mt-16">
        <Contact as="h1" />
      </div>
    </div>
  );
}
