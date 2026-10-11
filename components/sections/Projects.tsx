/**
 * « Des projets qui exigent de la précision » : la grande section forte (bleu marine) du site.
 * Titre et liste des références, puis chaîne de grandes photos de chantier
 * (défilement continu, clic = visionneuse plein écran).
 * Contenus : data/home.ts (projects, references, fieldGallery).
 */

import { Container } from "@/components/ui/Container";
import { PhotoChain } from "@/components/ui/PhotoChain";
import { fieldGallery, projects, references } from "@/data/home";

export function Projects() {
  return (
    <section id="projets" className="on-dark sheet section overflow-hidden">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="eyebrow" data-reveal>
              {projects.eyebrow}
            </p>
            <h2 className="h-section mt-4" data-reveal>
              {projects.title}
            </h2>
            <p className="lead mt-6" data-reveal>
              {projects.text}
            </p>
          </div>

          <ol className="self-end border-t border-line lg:col-span-6" data-reveal>
            {references.map((r, i) => (
              <li key={r.title} className="flex items-baseline gap-5 border-b border-line py-4">
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-lg font-medium text-white">{r.title}</span>
              </li>
            ))}
          </ol>
        </div>
      </Container>

      <div className="mt-14 md:mt-20" data-reveal>
        <PhotoChain items={fieldGallery} label="Photos de chantier" />
      </div>
    </section>
  );
}
