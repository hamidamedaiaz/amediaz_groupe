/**
 * Hero d'accueil, lumineux : texte à gauche sur fond clair, photo réelle à droite
 * dans un cadre aux coins arrondis, avec une petite carte d'information superposée.
 * Sur mobile et tablette, la photo passe sous le texte.
 *
 * Hiérarchie : badge → titre → domaines → description → CTA → localisation.
 */

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { founder, hero } from "@/data/home";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ContourLines } from "@/components/ui/ContourLines";
import { HeroSlideshow } from "@/components/ui/HeroSlideshow";

const delay = (s: number) => ({ "--delay": `${s}s` }) as React.CSSProperties;

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-white pt-16">
      {/* Courbes de niveau très discrètes en arrière-plan */}
      <ContourLines
        className="absolute -top-24 -left-64 hidden w-[56rem] max-w-none text-brand/[0.07] lg:block"
        count={8}
        seed={0.6}
      />

      <Container className="relative grid items-center gap-12 pt-14 pb-20 md:pt-20 lg:grid-cols-12 lg:gap-14 lg:pt-24 lg:pb-28">
        {/* Texte */}
        <div className="lg:col-span-6">
          <p className="badge rise" style={delay(0.05)}>
            {/* Repère topographique : point cerclé */}
            <span aria-hidden className="flex h-3 w-3 items-center justify-center rounded-full border border-brand/50">
              <span className="h-1 w-1 rounded-full bg-gold" />
            </span>
            {hero.eyebrow}
          </p>

          <h1 className="h-display rise mt-7" style={delay(0.15)}>
            {hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="rise mt-6 text-[0.8125rem] font-semibold tracking-[0.14em] text-brand uppercase" style={delay(0.25)}>
            {hero.subtitle}
          </p>
          <p className="rise mt-4 max-w-[32rem] text-[1.0625rem] leading-relaxed text-body md:text-lg" style={delay(0.35)}>
            {hero.text}
          </p>

          <div className="rise mt-10 flex flex-wrap gap-3" style={delay(0.45)}>
            <Link href={hero.primaryCta.href} className="btn btn-primary w-full sm:w-auto">
              {hero.primaryCta.label}
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href={hero.secondaryCta.href} className="btn btn-outline w-full sm:w-auto">
              {hero.secondaryCta.label}
            </Link>
          </div>

          <p className="rise mt-10 flex items-center gap-2 text-sm text-muted" style={delay(0.55)}>
            <MapPin size={15} aria-hidden className="text-brand" />
            {site.city}
          </p>
        </div>

        {/* Visuel */}
        <div className="rise relative lg:col-span-6" style={delay(0.2)}>
          <HeroSlideshow
            slides={hero.slides}
            className="aspect-[4/3] rounded-2xl border border-rule shadow-[0_30px_60px_-36px_rgba(15,39,66,0.45)] sm:aspect-[16/11] lg:aspect-[5/6] lg:max-h-[38rem]"
          />

          {/* Carte d'information superposée */}
          <div className="card absolute -bottom-6 left-4 flex max-w-[19rem] items-center gap-3 p-3.5 pr-5 shadow-[0_18px_40px_-24px_rgba(15,39,66,0.45)] sm:left-6 lg:-left-8">
            <span className="icon-tile shrink-0">
              <Image src="/brand/monogram-ag.png" alt="" width={488} height={474} className="h-5 w-auto" />
            </span>
            <span className="leading-snug">
              <span className="block text-[0.8125rem] font-semibold text-ink">{founder.roles[0]}</span>
              <span className="block text-xs text-muted">{founder.credential}</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
