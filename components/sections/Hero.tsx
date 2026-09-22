import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { TopoLines } from "@/components/ui/TopoLines";
import { hero } from "@/lib/content";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="hero" className="section-navy relative flex min-h-svh items-center overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 text-paper" aria-hidden />

      {/* Visuel technique : courbes de niveau + monogramme */}
      <div
        className="pointer-events-none absolute top-1/2 right-[-30%] w-[140%] max-w-none -translate-y-1/2 text-teal/25 sm:right-[-15%] sm:w-[90%] lg:right-[-6%] lg:w-[58%]"
        aria-hidden
      >
        <TopoLines animate className="h-auto w-full" />
        <Image
          src="/brand/monogram-ag-reverse.png"
          alt=""
          width={488}
          height={474}
          preload
          className="absolute top-[50%] left-[53.75%] hidden w-[22%] -translate-x-1/2 -translate-y-1/2 lg:block"
        />
      </div>

      <Container className="relative pt-32 pb-24">
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-paper/60" data-reveal>
          <span className="geo-dot" aria-hidden />
          {site.coordinates} · Témara
        </p>

        <h1 className="h-display mt-8 max-w-4xl" data-reveal style={{ "--delay": "0.1s" } as React.CSSProperties}>
          {hero.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p
          className="lead mt-8 text-paper/70"
          data-reveal
          style={{ "--delay": "0.2s" } as React.CSSProperties}
        >
          {hero.intro}
        </p>

        <div
          className="mt-12 flex flex-wrap gap-4"
          data-reveal
          style={{ "--delay": "0.3s" } as React.CSSProperties}
        >
          <a href="#expertises" className="btn btn-primary hover:bg-paper! hover:text-navy!">
            Découvrir nos expertises
          </a>
          <a href="#contact" className="btn btn-outline">
            Parler de votre projet
          </a>
        </div>
      </Container>

      <p className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-paper/40 md:block">
        {site.slogan}
      </p>
    </section>
  );
}
