/**
 * Hero d'accueil : texte à gauche sur fond navy, diaporama de photos réelles à droite.
 * Sur mobile et tablette, le diaporama passe en arrière-plan sous un voile navy dégradé.
 *
 * Hiérarchie : label → titre → domaines → description → CTA → localisation.
 * Les chiffres clés sont présentés uniquement dans la section KeyFigures (pas de répétition).
 */

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { hero } from "@/data/home";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ContourLines } from "@/components/ui/ContourLines";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";

const delay = (s: number) => ({ "--delay": `${s}s` }) as React.CSSProperties;

/** Label au-dessus du titre : filet fin, repère topographique (point cerclé or), nom. */
function HeroLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="rise flex items-center gap-3.5" style={delay(0.1)}>
      <span aria-hidden className="h-px w-10 bg-gradient-to-r from-transparent to-gold/80" />
      {/* Repère de station : cercle fin et point central */}
      <span aria-hidden className="relative flex h-3 w-3 items-center justify-center rounded-full border border-gold/70">
        <span className="h-1 w-1 rounded-full bg-gold" />
      </span>
      <span className="text-[0.75rem] font-medium tracking-[0.24em] text-ivory/85 uppercase">{children}</span>
    </p>
  );
}

export function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <HeroSlideshow slides={hero.slides} className="absolute inset-0 lg:left-auto lg:w-[44%] xl:w-[52%]" />

      {/* Courbes de niveau très discrètes derrière le texte (desktop) */}
      <ContourLines
        className="absolute top-16 -left-56 hidden w-[50rem] max-w-none text-gold/[0.055] lg:block"
        count={7}
        seed={0.6}
      />

      <Container className="relative pt-36 pb-14 md:pb-20 lg:pb-24">
        <div className="max-w-[40rem] lg:max-w-[46rem]">
          <HeroLabel>{hero.eyebrow}</HeroLabel>

          <h1
            // Taille fluide : deux lignes sur ordinateur (« Nous mesurons aujourd’hui / les projets de demain. »)
            className="h-display rise mt-7 text-[clamp(2.375rem,2.6vw+1.25rem,3.75rem)] leading-[1.05] lg:max-w-[46rem]"
            style={delay(0.2)}
          >
            {hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p
            className="rise mt-7 text-[0.8125rem] font-medium tracking-[0.2em] text-gold-light uppercase"
            style={delay(0.35)}
          >
            {hero.subtitle}
          </p>
          <p
            className="rise mt-4 max-w-[34rem] text-[1.0625rem] leading-relaxed text-ivory/75 md:text-lg"
            style={delay(0.45)}
          >
            {hero.text}
          </p>

          <div className="rise mt-10 flex flex-wrap gap-3 sm:gap-4" style={delay(0.55)}>
            <Link href={hero.primaryCta.href} className="btn btn-primary w-full sm:w-auto">
              {hero.primaryCta.label}
              <ArrowRight size={17} aria-hidden />
            </Link>
            <Link href={hero.secondaryCta.href} className="btn btn-outline w-full sm:w-auto">
              {hero.secondaryCta.label}
            </Link>
          </div>

          <p className="rise mt-12 flex items-center gap-2 text-[0.8125rem] text-steel md:mt-16" style={delay(0.75)}>
            <MapPin size={14} aria-hidden className="text-gold/80" />
            {site.city}
          </p>
        </div>
      </Container>
    </section>
  );
}
