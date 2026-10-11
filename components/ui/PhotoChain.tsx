"use client";

/**
 * Chaîne de photos en mouvement continu, de droite à gauche (boucle infinie).
 * Les cartes reprennent la forme des cartes « Références » : grand format 3:4,
 * numéro et titre sur un dégradé en bas, léger zoom au survol.
 *
 * Fonctionnement (CSS, voir .chain-* dans globals.css) :
 * - la liste est rendue deux fois à la suite ; la piste glisse de 0 à -50 %,
 *   ce qui ramène exactement au point de départ : la boucle est invisible ;
 * - animation GPU (transform), vitesse constante quelle que soit la taille d'écran ;
 * - bouton pause / lecture pour l'accessibilité (contenu animé en continu).
 */

import { Pause, Play } from "lucide-react";
import { useState } from "react";
import type { MediaKey } from "@/data/media";
import { Photo } from "./Photo";

type ChainItem = { image: MediaKey; caption: string };

// Durée d'un tour complet par photo : plus la valeur est grande, plus la chaîne est lente.
const SECONDS_PER_PHOTO = 6;

export function PhotoChain({ items, label }: { items: ChainItem[]; label: string }) {
  const [paused, setPaused] = useState(false);

  return (
    <div role="region" aria-roledescription="carrousel" aria-label={label}>
      <div className="overflow-hidden">
        <ul
          className={`chain-track flex w-max ${paused ? "is-paused" : ""}`}
          style={{ "--duration": `${items.length * SECONDS_PER_PHOTO}s` } as React.CSSProperties}
        >
          {/* Deux copies de la liste : la seconde assure la continuité de la boucle */}
          {[...items, ...items].map((item, i) => {
            const duplicate = i >= items.length;
            const number = String((i % items.length) + 1).padStart(2, "0");
            return (
              <li
                key={i}
                aria-hidden={duplicate || undefined}
                className="mr-5 w-[78vw] shrink-0 sm:w-[44vw] lg:mr-6 lg:w-[26rem]"
              >
                <article className="group media-frame relative aspect-[3/4]">
                  <Photo
                    id={item.image}
                    alt={duplicate ? "" : undefined}
                    fill
                    loading="eager"
                    draggable={false}
                    sizes="(min-width: 1024px) 26rem, (min-width: 640px) 44vw, 78vw"
                    className="transition-transform duration-[1.2s] ease-out-soft group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="num">{number}</p>
                    <h3 className="h-sub mt-3">{item.caption}</h3>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="container-site mt-8">
        <button
          type="button"
          onClick={() => setPaused((v) => !v)}
          aria-label={paused ? "Reprendre le défilement" : "Mettre en pause le défilement"}
          aria-pressed={paused}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-line transition-colors hover:border-gold hover:text-gold"
        >
          {paused ? <Play size={16} aria-hidden /> : <Pause size={16} aria-hidden />}
        </button>
      </div>
    </div>
  );
}
