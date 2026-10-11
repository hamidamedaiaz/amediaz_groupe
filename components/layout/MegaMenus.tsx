"use client";

/**
 * Contenu des mega-menus desktop (fond blanc, texte sombre, filets fins, image à droite).
 * - ServicesMenu : 3 colonnes des missions + ligne « Également » ; un clic ouvre le
 *   panneau de détail du service (sans changer de page).
 * - SectorsMenu  : liste des 10 secteurs ; l'image change selon le secteur survolé.
 */

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useServiceDrawer } from "@/components/services/ServiceDrawer";
import { Photo } from "@/components/ui/Photo";
import { sectors } from "@/data/sectors";
import { servicesByCategory, type ServiceCategory } from "@/data/services";
import { quoteCta } from "@/data/site";

type MenuProps = { onNavigate: () => void };

/** Appel à l'action sous le visuel des mega-menus. */
function MenuCta({ onNavigate }: MenuProps) {
  return (
    <Link href={quoteCta.href} onClick={onNavigate} className="arrow-link mt-5">
      {quoteCta.label}
      <ArrowRight size={15} aria-hidden />
    </Link>
  );
}

// ---------------------------------------------------------------- Services

export function ServicesMenu({ onNavigate }: MenuProps) {
  const { openService } = useServiceDrawer();
  // Catégorie survolée : son intitulé se teinte et son filet passe à l'or.
  const [hovered, setHovered] = useState<ServiceCategory | null>(null);
  const columns = servicesByCategory.filter((c) => c.category !== "transverse");
  const transverse = servicesByCategory.find((c) => c.category === "transverse");

  const show = (slug: string) => {
    onNavigate();
    openService(slug);
  };

  return (
    <div className="container-site grid grid-cols-12 gap-10 py-10">
      <div className="col-span-8">
        <div className="grid grid-cols-3 gap-8">
          {columns.map((col) => (
            <div key={col.category} onMouseEnter={() => setHovered(col.category)} onMouseLeave={() => setHovered(null)}>
              <p
                className={`border-b pb-3 text-[0.6875rem] font-medium tracking-[0.14em] uppercase transition-colors duration-300 ${
                  hovered === col.category ? "border-brand text-ink" : "border-rule text-muted"
                }`}
              >
                {col.label}
              </p>
              <ul className="mt-3">
                {col.items.map((s) => (
                  <li key={s.slug}>
                    <button
                      type="button"
                      onClick={() => show(s.slug)}
                      className="group flex w-full items-baseline gap-3 rounded-md py-2 text-left text-[0.875rem] text-body hover:text-brand"
                    >
                      <span className="num">{s.number}</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">{s.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {transverse && (
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-rule pt-5 text-[0.875rem]">
            <span className="text-[0.6875rem] tracking-[0.14em] text-muted uppercase">{transverse.label}</span>
            {transverse.items.map((s) => (
              <button key={s.slug} type="button" onClick={() => show(s.slug)} className="font-medium text-ink hover:text-brand">
                {s.title}
              </button>
            ))}
          </div>
        )}
      </div>

      <aside className="col-span-4 border-l border-rule pl-10">
        <div className="media-frame aspect-[16/10] rounded-xl">
          <Photo id="stationTotale" fill sizes="28vw" />
        </div>
        <MenuCta onNavigate={onNavigate} />
      </aside>
    </div>
  );
}

// ---------------------------------------------------------------- Secteurs

export function SectorsMenu({ onNavigate }: MenuProps) {
  const [active, setActive] = useState(sectors[0]);

  return (
    <div className="container-site grid grid-cols-12 gap-10 py-10">
      <ul className="col-span-8 grid grid-cols-2 content-start gap-x-8">
        {sectors.map((s) => (
          <li
            key={s.title}
            onMouseEnter={() => setActive(s)}
            className={`group flex items-baseline gap-3 border-b border-rule py-3 text-[0.875rem] transition-colors ${
              active.title === s.title ? "text-brand" : "text-body"
            }`}
          >
            <span className="num">{s.number}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">{s.title}</span>
          </li>
        ))}
      </ul>

      <aside className="col-span-4 border-l border-rule pl-10">
        <div className="media-frame aspect-[16/10] rounded-xl">
          {/* Fondu enchaîné entre les visuels de secteurs */}
          <AnimatePresence initial={false}>
            <motion.div
              key={active.title}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Photo id={active.image} fill sizes="28vw" />
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="font-display mt-4 font-semibold">{active.title}</p>
        {active.tagline && <p className="mt-1 text-sm leading-relaxed text-muted">{active.tagline}</p>}
        <MenuCta onNavigate={onNavigate} />
      </aside>
    </div>
  );
}
