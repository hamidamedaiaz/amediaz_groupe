/**
 * Accueil — parcours : AMEDIAZ → Chiffres clés → Preuves terrain → À propos → Contact.
 * Chaque section est un composant autonome (components/sections) alimenté par data/.
 */

import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FieldGallery } from "@/components/sections/FieldGallery";
import { Hero } from "@/components/sections/Hero";
import { KeyFigures } from "@/components/sections/KeyFigures";

export default function Home() {
  return (
    <>
      <Hero />
      <KeyFigures />
      <FieldGallery />
      <About />
      <Contact />
    </>
  );
}
