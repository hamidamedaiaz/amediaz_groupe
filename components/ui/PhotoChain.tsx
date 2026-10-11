"use client";

/**
 * Chaîne de photos en mouvement continu, de droite à gauche (boucle infinie).
 * Les cartes reprennent la forme des cartes « Références » : grand format 3:4,
 * numéro et titre sur un dégradé en bas, léger zoom au survol.
 * Un clic sur une photo l'ouvre en grand dans la visionneuse (Lightbox) ;
 * la chaîne s'arrête tant que la visionneuse est ouverte.
 *
 * Fonctionnement (CSS, voir .chain-* dans globals.css) :
 * - la liste est rendue deux fois à la suite ; la piste glisse de 0 à -50 %,
 *   ce qui ramène exactement au point de départ : la boucle est invisible ;
 * - animation GPU (transform), vitesse constante quelle que soit la taille d'écran.
 */

import { Expand } from "lucide-react";
import { useState } from "react";
import type { MediaKey } from "@/data/media";
import { Lightbox } from "./Lightbox";
import { Photo } from "./Photo";

type ChainItem = { image: MediaKey; caption: string };

// Durée d'un tour complet par photo : plus la valeur est grande, plus la chaîne est lente.
const SECONDS_PER_PHOTO = 6;

export function PhotoChain({ items, label }: { items: ChainItem[]; label: string }) {
  // Photo ouverte dans la visionneuse (null = fermée).
  const [viewing, setViewing] = useState<number | null>(null);

  return (
    <div role="region" aria-roledescription="carrousel" aria-label={label}>
      <div className="overflow-hidden">
        <ul
          className={`chain-track flex w-max ${viewing !== null ? "is-paused" : ""}`}
          style={{ "--duration": `${items.length * SECONDS_PER_PHOTO}s` } as React.CSSProperties}
        >
          {/* Deux copies de la liste : la seconde assure la continuité de la boucle */}
          {[...items, ...items].map((item, i) => {
            const duplicate = i >= items.length;
            const position = i % items.length;
            const number = String(position + 1).padStart(2, "0");
            return (
              <li
                key={i}
                aria-hidden={duplicate || undefined}
                className="mr-5 w-[78vw] shrink-0 sm:w-[44vw] lg:mr-6 lg:w-[26rem]"
              >
                <button
                  type="button"
                  onClick={() => setViewing(position)}
                  tabIndex={duplicate ? -1 : undefined}
                  aria-label={`Agrandir la photo : ${item.caption}`}
                  data-protected
                  className="group media-frame relative block aspect-[3/4] w-full cursor-zoom-in text-left"
                >
                  <Photo
                    id={item.image}
                    alt=""
                    fill
                    loading="eager"
                    draggable={false}
                    sizes="(min-width: 1024px) 26rem, (min-width: 640px) 44vw, 78vw"
                    className="transition-transform duration-[1.2s] ease-out-soft group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent" />
                  {/* Icône d'agrandissement, visible au survol */}
                  <span
                    aria-hidden
                    className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-navy/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <Expand size={16} />
                  </span>
                  <span className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <span className="num block">{number}</span>
                    <span className="h-sub mt-3 block">{item.caption}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <Lightbox items={items} index={viewing} onChange={setViewing} onClose={() => setViewing(null)} />
    </div>
  );
}
