/**
 * « AMEDIAZ en quelques chiffres » : chiffres clés animés au scroll (compteurs).
 * Minimaliste, sans cartes : grands chiffres ivoire séparés par de fins filets.
 * - Desktop / tablette : 3 colonnes égales, filets verticaux, contenus alignés en haut.
 * - Mobile : les chiffres s'empilent, séparés par des filets horizontaux.
 * Seul endroit du site où ces chiffres apparaissent (le hero ne les répète pas).
 */

import { keyFigures } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";

export function KeyFigures() {
  return (
    <section aria-labelledby="chiffres-titre" className="py-20 md:py-28 lg:py-32">
      <Container>
        <h2 id="chiffres-titre" className="eyebrow" data-reveal>
          AMEDIAZ en quelques chiffres
        </h2>

        <dl className="mt-10 grid divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:mt-12">
          {keyFigures.map((f, i) => (
            <div
              key={f.label}
              // Même gabarit pour chaque colonne ; la 1re s'aligne sur la marge du contenu
              className="flex flex-col-reverse justify-end py-10 sm:px-8 sm:py-14 sm:first:pl-0 lg:px-12 lg:py-16"
              data-reveal
              style={{ "--delay": `${i * 0.08}s` } as React.CSSProperties}
            >
              {/* dt avant dd (sémantique), affiché sous le chiffre via flex-col-reverse.
                  Hauteur réservée sur 2 lignes : les trois libellés occupent la même hauteur. */}
              <dt className="mt-5 max-w-[15rem] sm:min-h-[2.75em] text-[0.9375rem] leading-snug text-muted">{f.label}</dt>
              <dd className="font-display text-[clamp(3rem,6vw,5rem)] leading-none font-semibold tracking-tight">
                <Counter value={f.value} suffix={f.suffix} pad={f.pad} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
