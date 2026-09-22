import { Section } from "@/components/ui/Section";
import { about } from "@/lib/content";

export function About() {
  return (
    <Section id="a-propos" label="À propos" title={about.title} intro={about.text}>
      <dl className="grid gap-4 sm:grid-cols-3">
        {about.stats.map((stat, i) => (
          <div
            key={stat.label}
            className="card flex flex-col"
            data-reveal
            style={{ "--delay": `${i * 0.1}s` } as React.CSSProperties}
          >
            <dt className="order-2 mt-2 text-muted">{stat.label}</dt>
            <dd className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
              {stat.value}
              <span className="text-teal">{stat.unit}</span>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
