import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectors } from "@/lib/content";

export function Sectors() {
  return (
    <section id="secteurs" className="section bg-white text-ink">
      <Container>
        <SectionHeading index="05" label="Secteurs d’intervention" title={sectors.title} />

        <ul className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 md:mt-24">
          {sectors.items.map((sector, i) => (
            <li
              key={sector}
              className="group flex items-baseline gap-5 border-t border-ink/15 py-6 pr-6"
              data-reveal
              style={{ "--delay": `${(i % 3) * 0.08}s` } as React.CSSProperties}
            >
              <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-xl font-semibold tracking-tight transition-colors group-hover:text-teal md:text-2xl">
                {sector}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
