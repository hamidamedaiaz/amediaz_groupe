import { Section } from "@/components/ui/Section";
import { expertises } from "@/lib/content";

export function Expertises() {
  return (
    <Section id="expertises" label="Expertises" title={expertises.title}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {expertises.items.map((item, i) => (
          <li
            key={item.title}
            className={`card group hover:bg-[#15304a] ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
            data-reveal
            style={{ "--delay": `${(i < 2 ? i : i - 2) * 0.08}s` } as React.CSSProperties}
          >
            <h3 className="h-sub transition-colors group-hover:text-teal">{item.title}</h3>
            <p className="mt-3 text-muted">{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
