import { Section } from "@/components/ui/Section";
import { sectors } from "@/lib/content";

export function Sectors() {
  return (
    <Section id="secteurs" label="Secteurs d’intervention" title={sectors.title}>
      <ul className="flex flex-wrap gap-3" data-reveal>
        {sectors.items.map((sector) => (
          <li key={sector} className="tag">
            {sector}
          </li>
        ))}
      </ul>
    </Section>
  );
}
