"use client";

/**
 * « Nos expertises » (fond blanc) : les 10 missions AMEDIAZ, regroupées par catégorie.
 * Cartes blanches à bordure fine, petite icône, numéro discret, description concise,
 * lien « Découvrir » qui ouvre le panneau de détail (même page).
 * Contenus : data/services.ts (services) et data/home.ts (expertisesIntro).
 */

import {
  ArrowRight,
  ClipboardCheck,
  Crosshair,
  FileCheck2,
  FileSearch,
  FolderOpen,
  Layers,
  MapPin,
  Mountain,
  ScanSearch,
  Search,
  type LucideIcon,
} from "lucide-react";
import { useServiceDrawer } from "@/components/services/ServiceDrawer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertisesIntro } from "@/data/home";
import { servicesByCategory } from "@/data/services";

// Icône associée à chaque mission (purement illustrative).
const icons: Record<string, LucideIcon> = {
  "prospection-fonciere": Search,
  "analyse-spatiale-sig": Layers,
  "expertise-fonciere": FileSearch,
  "plan-de-situation": MapPin,
  "leve-topographique": Mountain,
  "suivi-autorisation": FileCheck2,
  "implantation-topographique": Crosshair,
  "controle-de-conformite": ScanSearch,
  "reception-des-travaux": ClipboardCheck,
  "dossier-technique-cadastral": FolderOpen,
};

export function Expertises() {
  const { openService } = useServiceDrawer();
  // Les 10 missions numérotées, par catégorie (BIM et expertise immobilière : mega-menu).
  const groups = servicesByCategory.filter((g) => g.category !== "transverse");

  return (
    <section id="expertises" className="sheet section bg-white">
      <Container>
        <SectionHeading eyebrow={expertisesIntro.eyebrow} title={expertisesIntro.title} intro={expertisesIntro.text} />

        <div className="mt-14 space-y-12 md:mt-16">
          {groups.map((group) => (
            <div key={group.category}>
              <p className="mb-5 flex items-center gap-3 text-[0.8125rem] font-semibold text-ink" data-reveal>
                {group.label}
                <span aria-hidden className="h-px flex-1 bg-rule" />
              </p>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map((s, i) => {
                  const Icon = icons[s.slug] ?? Search;
                  return (
                    <li key={s.slug} data-reveal style={{ "--delay": `${i * 0.06}s` } as React.CSSProperties}>
                      <button
                        type="button"
                        onClick={() => openService(s.slug)}
                        aria-label={`Découvrir : ${s.title}`}
                        className="card card-hover group flex h-full w-full flex-col p-6 text-left"
                      >
                        <span className="flex items-center justify-between">
                          <span className="icon-tile">
                            <Icon size={19} strokeWidth={1.75} aria-hidden />
                          </span>
                          <span className="num text-muted">{s.number}</span>
                        </span>
                        <span className="h-sub mt-5 block">{s.title}</span>
                        <span className="mt-2 block text-[0.9375rem] leading-relaxed text-body">{s.summary}</span>
                        <span className="arrow-link mt-auto pt-5">
                          Découvrir
                          <ArrowRight size={15} aria-hidden />
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
