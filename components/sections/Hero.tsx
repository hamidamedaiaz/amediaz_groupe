import { Container } from "@/components/ui/Container";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";
import { hero } from "@/lib/content";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-svh items-center pt-28 pb-20">
      <HeroSlideshow slides={hero.images} />

      <Container className="relative">
        <p className="eyebrow text-teal!" data-reveal>
          {site.tagline}
        </p>

        <h1 className="h-display mt-6 max-w-4xl" data-reveal style={{ "--delay": "0.1s" } as React.CSSProperties}>
          {hero.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p
          className="lead mt-8 text-paper/80!"
          data-reveal
          style={{ "--delay": "0.2s" } as React.CSSProperties}
        >
          {hero.intro}
        </p>

        <div
          className="mt-10 flex flex-wrap gap-3"
          data-reveal
          style={{ "--delay": "0.3s" } as React.CSSProperties}
        >
          <a href="#expertises" className="btn btn-primary">
            Découvrir nos expertises
          </a>
          <a href="#contact" className="btn btn-outline backdrop-blur-sm">
            Parler de votre projet
          </a>
        </div>

        <p className="mt-16 text-sm text-paper/60" data-reveal style={{ "--delay": "0.4s" } as React.CSSProperties}>
          {site.location} · {site.coordinates}
        </p>
      </Container>
    </section>
  );
}
