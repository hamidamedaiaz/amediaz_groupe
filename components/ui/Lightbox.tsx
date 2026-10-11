"use client";

/**
 * Visionneuse plein écran (lightbox) pour regarder une photo en grand.
 * - Photo entière (non recadrée), légende et compteur « 02 / 15 ».
 * - Navigation : flèches à l'écran, touches ← → , glissé du doigt, miniatures.
 * - Fermeture : bouton ×, touche Échap ou clic sur le fond.
 * - Accessibilité : boîte de dialogue modale, focus placé sur le bouton de fermeture,
 *   défilement de la page bloqué pendant l'ouverture.
 * - Rendue dans <body> via un portail : aucun parent animé ou rogné ne peut la gêner.
 */

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useSyncExternalStore, type PointerEvent } from "react";
import { createPortal } from "react-dom";
import { media, type MediaKey } from "@/data/media";
import { site } from "@/data/site";

type LightboxItem = { image: MediaKey; caption: string };

type LightboxProps = {
  items: LightboxItem[];
  /** Photo affichée ; `null` = visionneuse fermée. */
  index: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
};

const mod = (a: number, n: number) => ((a % n) + n) % n;

// Vrai uniquement côté navigateur (le portail a besoin de document.body).
const noop = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );

export function Lightbox({ items, index, onChange, onClose }: LightboxProps) {
  const n = items.length;
  const open = index !== null;
  const isClient = useIsClient();
  const closeRef = useRef<HTMLButtonElement>(null);

  const go = useCallback((delta: number) => index !== null && onChange(mod(index + delta, n)), [index, n, onChange]);

  // Clavier, blocage du défilement et focus pendant l'ouverture.
  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [open, go, onClose]);

  // Glissé du doigt pour passer d'une photo à l'autre.
  const startX = useRef<number | null>(null);
  const onPointerDown = (e: PointerEvent) => (startX.current = e.clientX);
  const onPointerUp = (e: PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
  };

  const item = open ? items[index] : null;
  const m = item ? media[item.image] : null;

  if (!isClient) return null;

  return createPortal(
    <AnimatePresence>
      {open && item && m && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse de photos"
          className="on-dark fixed inset-0 z-[70] flex flex-col bg-navy/97 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Barre du haut : compteur + fermeture */}
          <div className="flex items-center justify-between px-4 py-4 md:px-8">
            <span className="num text-ivory/80">
              {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Fermer la visionneuse"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-gold hover:text-gold"
            >
              <X size={20} aria-hidden />
            </button>
          </div>

          {/* Photo : clic sur le fond (hors photo) pour fermer ; zone protégée (pas de clic droit) */}
          <div
            data-protected
            className="relative flex min-h-0 flex-1 touch-pan-y items-center justify-center px-4 select-none md:px-24"
            onClick={(e) => e.target === e.currentTarget && onClose()}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                className="relative h-full w-full"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.target === e.currentTarget && onClose()}
              >
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  sizes="100vw"
                  draggable={false}
                  className="object-contain"
                  preload
                />
              </motion.div>
            </AnimatePresence>

            {/* Mention de droits, en filigrane discret */}
            <span
              aria-hidden
              className="pointer-events-none absolute right-6 bottom-3 text-xs tracking-[0.16em] text-ivory/60 uppercase md:right-28"
            >
              © {site.name}
            </span>

            {/* Flèches (desktop) */}
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Photo précédente"
              className="absolute top-1/2 left-4 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-navy/60 transition-colors hover:border-gold hover:text-gold md:flex md:left-8"
            >
              <ArrowLeft size={20} aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Photo suivante"
              className="absolute top-1/2 right-4 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-navy/60 transition-colors hover:border-gold hover:text-gold md:flex md:right-8"
            >
              <ArrowRight size={20} aria-hidden />
            </button>
          </div>

          {/* Légende + miniatures */}
          <div className="px-4 pt-4 pb-5 md:px-8">
            <p className="flex items-center justify-center gap-3 text-center text-sm font-medium" aria-live="polite">
              <span className="h-px w-5 bg-gold" aria-hidden />
              {item.caption}
            </p>
            {/* Centrées si elles tiennent, défilables sinon (sans être coupées à gauche) */}
            <div className="mt-4 flex justify-center">
              <div className="flex max-w-full gap-2 overflow-x-auto p-1">
                {items.map((it, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => onChange(i)}
                    aria-label={`Afficher la photo ${i + 1} : ${it.caption}`}
                    aria-current={i === index}
                    className={`relative h-14 w-10 shrink-0 overflow-hidden transition-opacity md:h-16 md:w-12 ${
                      i === index ? "opacity-100 ring-2 ring-gold" : "opacity-45 hover:opacity-80"
                    }`}
                  >
                    <Image src={media[it.image].src} alt="" fill sizes="48px" className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
