"use client";

/**
 * Diaporama du hero : fondu enchaîné entre photos avec léger zoom lent (CSS, globals.css).
 * Les photos restent lumineuses (aucun voile) ; un léger dégradé en bas assure
 * la lisibilité des indicateurs. Pause automatique si l'utilisateur préfère
 * réduire les animations.
 */

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { media, type MediaKey } from "@/data/media";
import { Photo } from "./Photo";

const INTERVAL = 6000;

export function HeroSlideshow({ slides, className = "" }: { slides: MediaKey[]; className?: string }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % slides.length), INTERVAL);
    return () => window.clearInterval(id);
  }, [slides.length, reduce, active]); // `active` : relance le minuteur après un clic

  return (
    <div className={`relative overflow-hidden bg-tint ${className}`}>
      {slides.map((id, i) => (
        <div key={id} className={`hero-slide absolute inset-0 ${i === active ? "is-active" : ""}`} aria-hidden={i !== active}>
          <Photo id={id} fill preload={i === 0} sizes="(min-width: 1024px) 45vw, 100vw" />
        </div>
      ))}

      {/* Léger dégradé en bas, pour les indicateurs */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />

      {/* Indicateurs */}
      <div className="absolute right-5 bottom-4 z-10 flex items-center gap-2">
        {slides.map((id, i) => (
          <button
            key={id}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Afficher la photo ${i + 1} : ${media[id].alt}`}
            aria-current={i === active}
            className="group flex h-6 items-center"
          >
            <span
              className={`block h-1 rounded-full transition-all duration-500 ${
                i === active ? "w-7 bg-white" : "w-3 bg-white/55 group-hover:bg-white"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
