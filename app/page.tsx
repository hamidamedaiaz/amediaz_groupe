import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <section id="hero" className="section-navy flex min-h-svh items-center">
        <Container>
          <p className="eyebrow">{site.location}</p>
          <h1 className="h-display mt-6">{site.name}</h1>
          <p className="mt-6 text-lg text-white/70 md:text-xl">{site.tagline}</p>
          <p className="mt-16 border-t border-white/15 pt-6 font-mono text-xs uppercase tracking-[0.2em] text-white/50">
            Site en construction
          </p>
        </Container>
      </section>
    </main>
  );
}
