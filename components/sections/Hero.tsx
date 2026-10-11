/**
 * Hero d'accueil : texte à gauche sur fond navy, diaporama de photos réelles à droite.
 * Sur mobile, le diaporama passe en arrière-plan sous un voile navy.
 */

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { hero } from "@/data/home";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ContourLines } from "@/components/ui/ContourLines";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";

const delay = (s: number) => ({ "--delay": `${s}s` }) as React.CSSProperties;

export function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <HeroSlideshow slides={hero.slides} className="absolute inset-0 lg:left-auto lg:w-[46%]" />

      {/* Courbes de niveau discrètes derrière le texte */}
      <ContourLines className="absolute -left-48 top-10 hidden w-[52rem] max-w-none text-gold/10 lg:block" seed={0.6} />

      <Container className="relative pt-32 pb-16 md:pb-24">
        <div className="max-w-3xl lg:max-w-[50%]">
          <p className="eyebrow rise" style={delay(0.1)}>
            {hero.eyebrow}
          </p>
          <h1 className="h-display rise mt-8" style={delay(0.2)}>
            {hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="font-display rise mt-8 text-lg font-medium tracking-wide text-gold-light" style={delay(0.35)}>
            {hero.subtitle}
          </p>
          <p className="lead rise mt-5 text-ivory/80!" style={delay(0.45)}>
            {hero.text}
          </p>
          <div className="rise mt-10 flex flex-wrap gap-4" style={delay(0.55)}>
            <Link href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label}
              <ArrowRight size={18} aria-hidden />
            </Link>
            <Link href={hero.secondaryCta.href} className="btn btn-outline">
              {hero.secondaryCta.label}
            </Link>
          </div>

          <p className="rise mt-16 flex items-center gap-2 text-sm text-muted" style={delay(0.7)}>
            <MapPin size={15} aria-hidden className="text-gold" />
            {site.city}
          </p>
        </div>
      </Container>
    </section>
  );
}
