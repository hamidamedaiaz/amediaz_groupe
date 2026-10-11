"use client";

/**
 * Contenu des mega-menus desktop (texte seul : aucune page par service ou secteur).
 * - ServicesMenu : 3 colonnes des missions numérotées, ligne « Également », visuel.
 * - SectorsMenu  : liste des 10 secteurs ; le visuel change selon le secteur survolé.
 * Le seul lien est l'appel à l'action « Demander un devis ».
 */

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Photo } from "@/components/ui/Photo";
import { sectors } from "@/data/sectors";
import { servicesByCategory, type ServiceCategory } from "@/data/services";
import { quoteCta } from "@/data/site";

type MenuProps = { onNavigate: () => void };

/** Appel à l'action en bas du visuel des mega-menus. */
function MenuCta({ onNavigate }: MenuProps) {
  return (
    <Link href={quoteCta.href} onClick={onNavigate} className="arrow-link mt-5">
      {quoteCta.label}
      <ArrowRight size={16} aria-hidden />
    </Link>
  );
}

// ---------------------------------------------------------------- Services

export function ServicesMenu({ onNavigate }: MenuProps) {
  // Catégorie survolée : les autres colonnes s'estompent légèrement.
  const [hovered, setHovered] = useState<ServiceCategory | null>(null);
  const columns = servicesByCategory.filter((c) => c.category !== "transverse");
  const transverse = servicesByCategory.find((c) => c.category === "transverse");

  return (
    <div className="container-site grid grid-cols-12 gap-12 py-12">
      <div className="col-span-8">
        <div className="grid grid-cols-3 gap-10">
          {columns.map((col) => (
            <div
              key={col.category}
              onMouseEnter={() => setHovered(col.category)}
              onMouseLeave={() => setHovered(null)}
              className={`transition-opacity duration-300 ${hovered && hovered !== col.category ? "opacity-45" : ""}`}
            >
              <p
                className={`border-b pb-4 text-xs font-medium tracking-[0.16em] uppercase transition-colors duration-300 ${
                  hovered === col.category ? "border-gold text-gold-light" : "border-line text-muted"
                }`}
              >
                {col.label}
              </p>
              <ul className="mt-4">
                {col.items.map((s) => (
                  <li
                    key={s.title}
                    className="group flex items-baseline gap-4 py-2.5 text-[0.9375rem] text-ivory/85 hover:text-ivory"
                  >
                    <span className="num text-steel transition-colors group-hover:text-gold-light">{s.number}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{s.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {transverse && (
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-line pt-6 text-sm">
            <span className="text-xs tracking-[0.16em] text-steel uppercase">{transverse.label}</span>
            {transverse.items.map((s) => (
              <span key={s.title} className="font-medium text-ivory">
                {s.title}
              </span>
            ))}
          </div>
        )}
      </div>

      <aside className="col-span-4">
        <div className="media-frame aspect-[16/10]">
          <Photo id="stationTotale" fill sizes="30vw" />
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
    <div className="container-site grid grid-cols-12 gap-12 py-12">
      <ul className="col-span-7 grid grid-cols-2 gap-x-10">
        {sectors.map((s) => (
          <li
            key={s.title}
            onMouseEnter={() => setActive(s)}
            className={`group flex items-baseline gap-4 border-b border-line py-3.5 text-[0.9375rem] transition-colors ${
              active.title === s.title ? "text-ivory" : "text-ivory/70"
            }`}
          >
            <span className={`num transition-colors ${active.title === s.title ? "" : "text-steel"}`}>{s.number}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">{s.title}</span>
          </li>
        ))}
      </ul>

      <aside className="col-span-5">
        <div className="media-frame aspect-[16/10]">
          {/* Fondu enchaîné entre les visuels de secteurs */}
          <AnimatePresence initial={false}>
            <motion.div
              key={active.title}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Photo id={active.image} fill sizes="35vw" />
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="font-display mt-5 text-lg font-semibold">{active.title}</p>
        {active.tagline && <p className="mt-1 text-sm leading-relaxed text-muted">{active.tagline}</p>}
        <MenuCta onNavigate={onNavigate} />
      </aside>
    </div>
  );
}
