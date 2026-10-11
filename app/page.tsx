/**
 * Accueil — alternance des sections :
 * Hero (blanc) → Chiffres (clair) → Projets (bleu marine) → À propos (blanc) → Contact (clair).
 * Services et secteurs sont présentés dans les mega-menus (panneau « Découvrir » pour les services).
 * Chaque section est un composant autonome (components/sections) alimenté par data/.
 */

import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { KeyFigures } from "@/components/sections/KeyFigures";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <KeyFigures />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
