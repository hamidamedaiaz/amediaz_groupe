"use client";

/**
 * Diaporama du hero : fondu enchaîné entre photos avec léger zoom lent (CSS, globals.css).
 * Indicateurs cliquables en bas du visuel. Pause automatique si l'utilisateur
 * préfère réduire les animations.
 */

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { media, type MediaKey } from "@/data/media";
import { Photo } from "./Photo";

const INTERVAL = 7000;

export function HeroSlideshow({ slides, className = "" }: { slides: MediaKey[]; className?: string }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % slides.length), INTERVAL);
    return () => window.clearInterval(id);
  }, [slides.length, reduce, active]); // `active` : relance le minuteur après un clic

  return (
    <div className={`overflow-hidden bg-surface ${className}`}>
      {slides.map((id, i) => (
        <div key={id} className={`hero-slide absolute inset-0 ${i === active ? "is-active" : ""}`} aria-hidden={i !== active}>
          <Photo id={id} fill preload={i === 0} sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      ))}

      {/* Voiles : lisibilité du texte (mobile) et fondu vers le navy à gauche (desktop) */}
      <div className="absolute inset-0 bg-navy/70 lg:hidden" />
      <div className="absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-navy to-transparent lg:block" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-navy/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy/90 to-transparent" />

      {/* Indicateurs */}
      <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 lg:flex lg:right-10">
        {slides.map((id, i) => (
          <button
            key={id}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Afficher la photo ${i + 1} : ${media[id].alt}`}
            aria-current={i === active}
            className="group flex h-8 items-center"
          >
            <span
              className={`block h-px transition-all duration-500 ${
                i === active ? "w-10 bg-gold" : "w-5 bg-ivory/40 group-hover:bg-ivory"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
