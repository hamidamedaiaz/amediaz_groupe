/**
 * « AMEDIAZ en quelques chiffres » (fond clair) : chiffres clés animés au scroll.
 * Grands chiffres bleu nuit, petits libellés gris-bleu, séparateurs fins, pas de cartes.
 * - Desktop / tablette : 3 colonnes égales séparées par des filets verticaux.
 * - Mobile : chiffres empilés, séparés par des filets horizontaux.
 */

import { keyFigures } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";

export function KeyFigures() {
  return (
    <section aria-labelledby="chiffres-titre" className="sheet section bg-paper">
      <Container>
        <div className="text-center">
          <h2 id="chiffres-titre" className="badge" data-reveal>
            AMEDIAZ en quelques chiffres
          </h2>
        </div>

        <dl className="mx-auto mt-12 grid max-w-[64rem] divide-y divide-rule sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:mt-14">
          {keyFigures.map((f, i) => (
            <div
              key={f.label}
              className="flex flex-col-reverse items-center justify-end py-9 text-center sm:px-6 sm:py-4"
              data-reveal
              style={{ "--delay": `${i * 0.08}s` } as React.CSSProperties}
            >
              {/* dt avant dd (sémantique), affiché sous le chiffre via flex-col-reverse */}
              <dt className="mt-3 max-w-[14rem] text-[0.9375rem] leading-snug text-body">{f.label}</dt>
              <dd className="font-display text-[clamp(2.75rem,4vw,3.75rem)] leading-none font-bold tracking-tight text-ink">
                <Counter value={f.value} suffix={f.suffix} pad={f.pad} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
