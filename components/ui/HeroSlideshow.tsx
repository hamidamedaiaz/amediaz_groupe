"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = { src: string; alt: string; position: string };

const INTERVAL = 7000;

// Images plein écran qui se succèdent en fondu, avec un léger zoom lent.
export function HeroSlideshow({ slides }: { slides: readonly Slide[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % slides.length), INTERVAL);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {slides.map((slide, i) => (
        <div key={slide.src} className={`hero-slide absolute inset-0 ${i === active ? "is-active" : ""}`}>
          <Image
            src={slide.src}
            alt=""
            fill
            sizes="100vw"
            preload={i === 0}
            className="object-cover"
            style={{ objectPosition: slide.position }}
          />
        </div>
      ))}

      {/* Voile navy : texte lisible à gauche, fondu vers la section suivante en bas */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/30" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy to-transparent" />
    </div>
  );
}
