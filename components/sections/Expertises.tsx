import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertises } from "@/lib/content";

export function Expertises() {
  return (
    <section id="expertises" className="section section-navy">
      <Container>
        <SectionHeading index="03" label="Nos expertises" title={expertises.title} />

        <ol className="mt-16 border-b border-white/15 md:mt-24">
          {expertises.items.map((item, i) => (
            <li
              key={item.title}
              className="group relative grid gap-3 border-t border-white/15 py-8 md:grid-cols-12 md:items-center md:gap-8 md:py-10"
              data-reveal
              style={{ "--delay": `${i * 0.08}s` } as React.CSSProperties}
            >
              <span
                className="absolute top-[-1px] left-0 h-px w-full origin-left scale-x-0 bg-teal transition-transform duration-500 group-hover:scale-x-100"
                aria-hidden
              />
              <span className="font-mono text-sm text-paper/40 md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-teal md:col-span-5 md:text-4xl">
                {item.title}
              </h3>
              <p className="text-paper/60 md:col-span-5">{item.text}</p>
              <span
                className="hidden text-2xl text-paper/40 transition-all group-hover:translate-x-1 group-hover:text-teal md:col-span-1 md:block md:justify-self-end"
                aria-hidden
              >
                →
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
