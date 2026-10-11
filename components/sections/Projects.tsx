/**
 * « Des projets qui exigent de la précision » : la grande section forte (bleu marine) du site.
 * 1. En-tête : badge, titre, texte d'introduction.
 * 2. Liste éditoriale des références (aperçu photo au survol, visionneuse au clic).
 * 3. Chaîne de grandes photos de chantier (défilement continu, clic = visionneuse).
 * Contenus : data/home.ts (projects, references, fieldGallery).
 */

import { Container } from "@/components/ui/Container";
import { PhotoChain } from "@/components/ui/PhotoChain";
import { ReferenceList } from "@/components/ui/ReferenceList";
import { fieldGallery, projects, references } from "@/data/home";

export function Projects() {
  return (
    <section id="projets" className="on-dark sheet section overflow-hidden">
      <Container>
        {/* En-tête */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow" data-reveal>
              {projects.eyebrow}
            </p>
            <h2 className="h-section mt-5 max-w-[34rem] text-[clamp(2rem,2vw+1.4rem,3rem)]" data-reveal>
              {projects.title}
            </h2>
          </div>
          <div className="lg:col-span-5" data-reveal>
            <p className="lead">{projects.text}</p>
            <p className="mt-6 flex items-center gap-3 text-sm text-mist">
              <span className="font-display text-2xl font-bold text-white">
                {String(references.length).padStart(2, "0")}
              </span>
              projets de référence
            </p>
          </div>
        </div>

        {/* Références */}
        <div className="mt-14 md:mt-16">
          <ReferenceList items={references} />
        </div>
      </Container>

      {/* Photos de chantier */}
      <div className="mt-16 md:mt-24" data-reveal>
        <PhotoChain items={fieldGallery} label="Photos de chantier" />
      </div>
    </section>
  );
}
