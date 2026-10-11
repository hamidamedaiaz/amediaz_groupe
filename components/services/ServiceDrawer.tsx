"use client";

/**
 * Panneau de détail d'un service (« Découvrir »), ouvert sur la page courante :
 * pas de changement de page. Accessible depuis le mega-menu Services
 * et le menu mobile.
 *
 * - ServiceDrawerProvider : à placer une fois dans le layout ; expose `openService(slug)`.
 * - Le panneau glisse depuis la droite (fond blanc), se ferme par ×, Échap ou clic sur le voile.
 * - Accessibilité : boîte de dialogue modale, focus sur le bouton de fermeture,
 *   défilement de la page bloqué pendant l'ouverture.
 */

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, X } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { getService, serviceCategories } from "@/data/services";
import { quoteCta } from "@/data/site";

type DrawerContext = { openService: (slug: string) => void };

const Ctx = createContext<DrawerContext | null>(null);

/** Ouvre le panneau de détail d'un service depuis n'importe quel composant client. */
export function useServiceDrawer() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useServiceDrawer doit être utilisé dans <ServiceDrawerProvider>");
  return ctx;
}

// Vrai uniquement côté navigateur (le portail a besoin de document.body).
const noop = () => () => {};
const useIsClient = () =>
  useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );

export function ServiceDrawerProvider({ children }: { children: ReactNode }) {
  const [slug, setSlug] = useState<string | null>(null);
  const value = useMemo(() => ({ openService: setSlug }), []);
  const close = useCallback(() => setSlug(null), []);

  return (
    <Ctx.Provider value={value}>
      {children}
      <ServiceDrawer slug={slug} onClose={close} />
    </Ctx.Provider>
  );
}

function ServiceDrawer({ slug, onClose }: { slug: string | null; onClose: () => void }) {
  const isClient = useIsClient();
  const service = slug ? getService(slug) : undefined;
  const open = Boolean(service);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Clavier, blocage du défilement et focus pendant l'ouverture.
  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [open, onClose]);

  if (!isClient) return null;

  return createPortal(
    <AnimatePresence>
      {service && (
        <div className="fixed inset-0 z-[60]">
          {/* Voile */}
          <motion.div
            className="absolute inset-0 bg-navy/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Panneau */}
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-drawer-title"
            className="absolute inset-y-0 right-0 flex w-full max-w-xl flex-col bg-white text-ink"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-rule px-6 py-4 md:px-10">
              <span className="text-xs tracking-[0.14em] text-muted uppercase">
                {serviceCategories[service.category] === "Également" ? "Expertise" : serviceCategories[service.category]}
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Fermer le détail"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-rule transition-colors hover:bg-paper"
              >
                <X size={18} aria-hidden />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-10 md:px-10">
              {service.number && <p className="num">{service.number}</p>}
              <h2 id="service-drawer-title" className="h-section mt-3">
                {service.title}
              </h2>
              <p className="mt-5 leading-relaxed text-body">{service.summary}</p>

              {/* Déroulé */}
              <h3 className="mt-12 text-xs font-medium tracking-[0.14em] text-muted uppercase">Comment nous intervenons</h3>
              <ol className="mt-5 border-t border-rule">
                {service.steps.map((step, i) => (
                  <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-rule py-5">
                    <span className="num pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="font-display font-semibold">{step.title}</p>
                      <p className="mt-1 text-[0.9375rem] text-muted">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Livrables */}
              <h3 className="mt-12 text-xs font-medium tracking-[0.14em] text-muted uppercase">Livrables</h3>
              <ul className="mt-5 space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-3">
                    <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 border-t border-rule px-6 py-5 md:px-10">
              <Link href={quoteCta.href} onClick={onClose} className="btn btn-primary">
                {quoteCta.label}
                <ArrowRight size={16} aria-hidden />
              </Link>
              <button type="button" onClick={onClose} className="btn btn-outline">
                Fermer
              </button>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
