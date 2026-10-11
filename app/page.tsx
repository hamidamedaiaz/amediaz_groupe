/**
 * Accueil — alternance claire des sections :
 * Hero (marine) → Chiffres (ivoire) → Expertises (blanc) → Secteurs (ivoire)
 * → Projets (marine) → À propos (blanc) → Contact (ivoire).
 * Chaque section est un composant autonome (components/sections) alimenté par data/.
 */

import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Expertises } from "@/components/sections/Expertises";
import { Hero } from "@/components/sections/Hero";
import { KeyFigures } from "@/components/sections/KeyFigures";
import { Projects } from "@/components/sections/Projects";
import { Sectors } from "@/components/sections/Sectors";

export default function Home() {
  return (
    <>
      <Hero />
      <KeyFigures />
      <Expertises />
      <Sectors />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
