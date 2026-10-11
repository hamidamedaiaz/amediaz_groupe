/**
 * Chiffres clés animés au scroll (compteurs).
 * Bandeau sans cartes : grands chiffres séparés par de fins filets.
 */

import { keyFigures } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";

export function KeyFigures() {
  return (
    <section aria-label="Chiffres clés" className="pt-12 md:pt-20">
      <Container>
        <dl className="grid gap-y-10 border-y border-line py-12 sm:grid-cols-3 md:py-16">
          {keyFigures.map((f, i) => (
            <div
              key={f.label}
              className={`flex flex-col-reverse justify-end px-4 sm:px-8 ${i > 0 ? "sm:border-l sm:border-line" : ""}`}
              data-reveal
              style={{ "--delay": `${i * 0.08}s` } as React.CSSProperties}
            >
              {/* dt avant dd (sémantique), affiché sous le chiffre via flex-col-reverse */}
              <dt className="mt-4 max-w-[14rem] text-sm leading-snug text-muted">{f.label}</dt>
              <dd className="font-display text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-none tracking-tight">
                <Counter value={f.value} suffix={f.suffix} pad={f.pad} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
