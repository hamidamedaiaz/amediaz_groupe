/**
 * À propos : le fondateur, son parcours et ses références.
 * Contenu : data/home.ts (founder, references). Rien n'est ajouté au-delà des informations fournies.
 */

import { founder, references } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { Parallax } from "@/components/ui/Parallax";
import { Photo } from "@/components/ui/Photo";

export function About() {
  return (
    <section id="a-propos" className="section">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Visuel */}
          <div className="lg:col-span-5" data-reveal>
            <Parallax className="aspect-[4/5] bg-surface">
              <Photo id={founder.image} fill sizes="(min-width: 1024px) 40vw, 100vw" />
            </Parallax>
          </div>

          {/* Texte */}
          <div className="lg:col-span-7 lg:pt-10">
            <p className="eyebrow" data-reveal>
              À propos
            </p>
            <h2 className="h-section mt-6" data-reveal>
              {founder.title}
            </h2>

            <div className="mt-12 border-l border-gold pl-6 md:pl-8" data-reveal>
              <p className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{founder.name}</p>
              <ul className="mt-3 space-y-1 text-muted">
                {founder.roles.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>

            <div className="mt-10 grid gap-6 text-lg leading-relaxed text-ivory/85 md:grid-cols-2" data-reveal>
              <p>{founder.credential}</p>
              <p>{founder.text}</p>
            </div>

            <div className="mt-14" data-reveal>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-steel">Références</p>
              <ol className="mt-5 divide-y divide-line border-y border-line">
                {references.map((r, i) => (
                  <li key={r.title} className="flex items-baseline gap-5 py-4">
                    <span className="num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-display text-lg font-medium">{r.title}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
