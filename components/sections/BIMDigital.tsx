import { Section } from "@/components/ui/Section";
import { bim } from "@/lib/content";

export function BIMDigital() {
  return (
    <Section id="bim-digital" label="BIM & Digital" title={bim.title} intro={bim.text}>
      <div className="grid gap-4 lg:grid-cols-12">
        <ul className="card flex flex-wrap content-start gap-3 lg:col-span-8" data-reveal>
          {bim.items.map((item) => (
            <li key={item} className="tag bg-navy! hover:bg-teal!">
              {item}
            </li>
          ))}
        </ul>

        <div className="card bg-teal! text-white lg:col-span-4" data-reveal>
          <p className="font-display text-5xl font-semibold tracking-tight">{bim.highlight.value}</p>
          <p className="mt-2 text-white/85">{bim.highlight.label}</p>
        </div>
      </div>
    </Section>
  );
}
