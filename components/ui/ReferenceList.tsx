"use client";

/**
 * Liste éditoriale des projets de référence (fond marine).
 * - Grandes lignes : numéro, nom du projet, mention, flèche.
 * - Survol : la ligne s'éclaire, le nom glisse légèrement et un aperçu photo apparaît
 *   à droite (uniquement pour les projets dont une photo a été fournie).
 * - Clic sur un projet illustré : ouverture de la photo dans la visionneuse.
 * Sur mobile (pas de survol), la vignette est affichée directement dans la ligne.
 */

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type { MediaKey } from "@/data/media";
import { Lightbox } from "./Lightbox";
import { Photo } from "./Photo";

type Reference = { title: string; image?: MediaKey };

export function ReferenceList({ items }: { items: Reference[] }) {
  // Photos disponibles, dans l'ordre de la liste (pour la visionneuse).
  const gallery = items.flatMap((r) => (r.image ? [{ image: r.image, caption: r.title }] : []));
  const [viewing, setViewing] = useState<number | null>(null);

  return (
    <>
      <ol className="border-t border-line">
        {items.map((r, i) => {
          const number = String(i + 1).padStart(2, "0");
          const galleryIndex = gallery.findIndex((g) => g.caption === r.title);

          const content = (
            <>
              <span className="num w-8 shrink-0 pt-1 md:w-14">{number}</span>

              <span className="min-w-0 flex-1">
                <span className="font-display block text-xl leading-tight font-semibold tracking-tight text-white transition-transform duration-500 ease-out-soft group-hover:translate-x-1.5 md:text-[1.75rem]">
                  {r.title}
                </span>
                <span className="mt-1.5 block text-[0.8125rem] text-mist">Projet de référence</span>
              </span>

              {/* Vignette mobile (toujours visible) */}
              {r.image && (
                <span className="media-frame relative block h-14 w-20 shrink-0 rounded-lg md:hidden">
                  <Photo id={r.image} alt="" fill sizes="80px" />
                </span>
              )}

              {/* Aperçu au survol (desktop) */}
              {r.image && (
                <span
                  aria-hidden
                  className="media-frame pointer-events-none absolute top-1/2 right-24 hidden h-32 w-48 -translate-y-1/2 scale-95 rounded-xl opacity-0 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)] transition-all duration-500 ease-out-soft group-hover:scale-100 group-hover:opacity-100 md:block"
                >
                  <Photo id={r.image} alt="" fill sizes="192px" />
                </span>
              )}

              {/* Flèche uniquement si le projet est cliquable (photo disponible) ; sinon espace réservé */}
              {r.image ? (
                <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-navy md:flex">
                  <ArrowUpRight size={18} aria-hidden />
                </span>
              ) : (
                <span aria-hidden className="hidden w-11 shrink-0 md:block" />
              )}
            </>
          );

          const rowClass =
            "group relative flex w-full items-center gap-4 border-b border-line px-1 py-6 text-left transition-colors duration-300 md:gap-6 md:px-4 md:py-8";

          return (
            <li key={r.title} data-reveal style={{ "--delay": `${i * 0.06}s` } as React.CSSProperties}>
              {r.image ? (
                <button
                  type="button"
                  onClick={() => setViewing(galleryIndex)}
                  aria-label={`Voir la photo : ${r.title}`}
                  className={`${rowClass} cursor-zoom-in hover:bg-white/[0.04]`}
                  data-protected
                >
                  {content}
                </button>
              ) : (
                <div className={`${rowClass} hover:bg-white/[0.03]`}>{content}</div>
              )}
            </li>
          );
        })}
      </ol>

      <Lightbox items={gallery} index={viewing} onChange={setViewing} onClose={() => setViewing(null)} />
    </>
  );
}
