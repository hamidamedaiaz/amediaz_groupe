"use client";

/**
 * « Nos secteurs d'intervention » (fond clair) : les 10 secteurs AMEDIAZ en grille légère
 * à séparations fines ; au survol, fond très légèrement teinté, petite flèche, et l'image
 * de droite change selon le secteur. Chaque secteur mène au formulaire de contact (même page).
 * Contenus : data/sectors.ts et data/home.ts (sectorsIntro).
 */

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectorsIntro } from "@/data/home";
import { sectors } from "@/data/sectors";

export function Sectors() {
  const [active, setActive] = useState(sectors[0]);

  return (
    <section id="secteurs" className="sheet section bg-paper">
      <Container>
        <SectionHeading eyebrow={sectorsIntro.eyebrow} title={sectorsIntro.title} intro={sectorsIntro.text} />

        <div className="mt-14 grid gap-10 md:mt-16 lg:grid-cols-12 lg:gap-12">
          {/* Liste des secteurs */}
          <ul className="card grid self-start overflow-hidden sm:grid-cols-2 lg:col-span-7" data-reveal>
            {sectors.map((s) => (
              <li
                key={s.title}
                // Filets : bas sur chaque ligne sauf la dernière ; vertical entre les 2 colonnes
                className="border-b border-rule last:border-b-0 sm:odd:border-r sm:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <Link
                  href="/#contact"
                  onMouseEnter={() => setActive(s)}
                  onFocus={() => setActive(s)}
                  aria-label={`${s.title} — parler de votre projet`}
                  className={`group flex items-center gap-4 px-5 py-4 transition-colors duration-200 hover:bg-paper ${
                    active.title === s.title ? "bg-paper/70" : ""
                  }`}
                >
                  <span className="num w-6 shrink-0 text-muted">{s.number}</span>
                  <span className="flex-1 text-[0.9375rem] font-medium text-ink">{s.title}</span>
                  <ArrowRight
                    size={15}
                    aria-hidden
                    className="shrink-0 -translate-x-1 text-brand opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Visuel du secteur survolé (desktop) */}
          <div className="hidden lg:col-span-5 lg:block" data-reveal>
            <div className="sticky top-24">
              <div className="media-frame aspect-[4/3] rounded-2xl border border-rule">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={active.title}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Photo id={active.image} fill sizes="40vw" />
                  </motion.div>
                </AnimatePresence>
              </div>
              <p className="mt-4 flex items-baseline gap-3">
                <span className="num">{active.number}</span>
                <span className="font-display font-semibold text-ink">{active.title}</span>
              </p>
              {active.tagline && <p className="mt-1 text-sm leading-relaxed text-body">{active.tagline}</p>}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
