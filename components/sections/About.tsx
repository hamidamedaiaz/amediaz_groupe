import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/lib/content";

export function About() {
  return (
    <section id="a-propos" className="section section-paper">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeading index="02" label="À propos" title={about.title} className="lg:col-span-7" />
          <p className="lead self-end text-muted lg:col-span-5" data-reveal>
            {about.text}
          </p>
        </div>

        <dl className="mt-20 grid gap-10 sm:grid-cols-3 md:mt-28">
          {about.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative flex flex-col pt-8"
              data-reveal
              style={{ "--delay": `${i * 0.12}s` } as React.CSSProperties}
            >
              <span className="absolute inset-x-0 top-0 h-px bg-ink/15" aria-hidden />
              <span className="line-grow absolute top-0 left-0 h-px w-16 bg-teal" aria-hidden />
              <dt className="order-2 mt-3 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                {stat.label}
              </dt>
              <dd className="-order-1 text-6xl font-semibold tracking-tight md:text-7xl">
                {stat.value}
                <span className="text-teal">{stat.unit}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
