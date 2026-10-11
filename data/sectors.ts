/**
 * Secteurs d'intervention, affichés dans le mega-menu « Secteurs » et le footer
 * (texte seul : il n'y a pas de page par secteur).
 * `image` : visuel affiché dans le mega-menu au survol du secteur.
 * `tagline` : phrase facultative affichée sous ce visuel.
 */

import type { MediaKey } from "./media";

export type Sector = {
  number: string;
  title: string;
  image: MediaKey;
  tagline?: string;
};

export const sectors: Sector[] = [
  {
    number: "01",
    title: "Immobilier",
    image: "tourChantier",
    tagline: "La précision topographique au service de chaque étape du projet immobilier.",
  },
  { number: "02", title: "Mines & Carrières", image: "stationTotale" },
  { number: "03", title: "Agriculture", image: "implantationBorne" },
  { number: "04", title: "Infrastructure", image: "stadeTribunes" },
  { number: "05", title: "Industrie", image: "platineAncrage" },
  { number: "06", title: "Tourisme", image: "architectureLivree" },
  { number: "07", title: "Urbanisme & Aménagement", image: "tourChantierGrue" },
  { number: "08", title: "Environnement", image: "repereGP05" },
  { number: "09", title: "Cadastre & Foncier judiciaire", image: "surveyBenchmark" },
  { number: "10", title: "Énergie & Réseaux", image: "poteauxCoffrage" },
];
