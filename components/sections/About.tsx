/**
 * À propos (fond blanc, section « feuille ») : le fondateur et son parcours.
 * Contenu : data/home.ts (founder). Les références sont présentées dans la section Projets.
 */

import { founder } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { Parallax } from "@/components/ui/Parallax";
import { Photo } from "@/components/ui/Photo";

export function About() {
  return (
    <section id="a-propos" className="sheet section bg-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Visuel */}
          <div className="lg:col-span-5" data-reveal>
            <Parallax className="aspect-[4/5] rounded-2xl border border-rule bg-tint">
              <Photo id={founder.image} fill sizes="(min-width: 1024px) 40vw, 100vw" />
            </Parallax>
          </div>

          {/* Texte */}
          <div className="lg:col-span-7">
            <p className="eyebrow" data-reveal>
              {founder.eyebrow}
            </p>
            <h2 className="h-section mt-4" data-reveal>
              {founder.title}
            </h2>

            <div className="card mt-10 max-w-[30rem] p-6" data-reveal>
              <p className="font-display text-xl font-bold tracking-tight text-ink">{founder.name}</p>
              <ul className="mt-2 space-y-0.5 text-body">
                {founder.roles.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 grid max-w-[40rem] gap-x-10 gap-y-3 sm:grid-cols-2" data-reveal>
              <p className="leading-relaxed text-body">{founder.credential}</p>
              <p className="leading-relaxed text-body">{founder.text}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
