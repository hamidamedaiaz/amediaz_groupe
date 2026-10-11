/**
 * Contenus de la page d'accueil (services et secteurs : voir leurs fichiers dédiés).
 *
 * RÈGLE : les faits (chiffres, références, titres, ONIGT, BIM) viennent uniquement
 * des documents fournis par AMEDIAZ GROUP (brief + charte). Les textes explicatifs
 * décrivent les missions sans inventer de clients, de délais ni de chiffres.
 */

import type { MediaKey } from "./media";

// ---------------------------------------------------------------- Hero
export const hero = {
  eyebrow: "AMEDIAZ GROUP",
  title: ["Nous mesurons aujourd’hui", "les projets de demain."],
  subtitle: "Topographie · Foncier · BIM · Digital",
  text: "Une expertise technique et digitale au service des projets de construction, d’immobilier et d’infrastructure au Maroc.",
  primaryCta: { label: "Découvrir notre expertise", href: "/#expertises" },
  secondaryCta: { label: "Parler de votre projet", href: "/contact" },
  // Images du diaporama (format portrait, affichées dans le panneau droit).
  slides: ["tourChantier", "stationTotale", "tourMohammedVI"] as MediaKey[],
};

// ---------------------------------------------------------------- Chiffres clés
/** Chiffres de la charte. `value` est animé de 0 à la valeur. */
export const keyFigures: { value: number; suffix: string; label: string; pad?: boolean }[] = [
  { value: 9, suffix: " ans", label: "d’expérience professionnelle" },
  { value: 100, suffix: "+", label: "expertises immobilières réalisées" },
  { value: 500, suffix: "h+", label: "de formation BIM" },
];

// ---------------------------------------------------------------- Nos expertises
export const expertisesIntro = {
  eyebrow: "Ce que nous faisons",
  title: "Nos expertises",
  text: "Du foncier à la livraison, dix missions complémentaires pour sécuriser chaque étape de votre projet, complétées par le BIM et l’expertise immobilière.",
};

// ---------------------------------------------------------------- Secteurs
export const sectorsIntro = {
  eyebrow: "Secteurs",
  title: "Nos secteurs d’intervention",
  text: "Une même exigence de précision, adaptée aux contraintes de chaque type de projet.",
};

// ---------------------------------------------------------------- Projets / références
export const projects = {
  eyebrow: "Références",
  title: "Des projets qui exigent de la précision",
  text: "Khalid AMEDIAZ est intervenu sur des projets de premier plan au cours de ses 9 années d’expérience.",
};

/** Projets de référence (charte AMEDIAZ GROUP). */
export const references: { title: string }[] = [
  { title: "Tour Mohammed VI" },
  { title: "Complexe Sportif Prince Moulay Abdellah" },
  { title: "Nouvel Hôpital Ibn Sina" },
  { title: "MOL Project – UM6P" },
];

/**
 * Photos de chantier de la section projets : chaîne qui défile de droite à gauche
 * (voir PhotoChain). L'ordre ci-dessous est l'ordre de passage.
 */
export const fieldGallery: { image: MediaKey; caption: string }[] = [
  { image: "tourChantier", caption: "Tour en construction" },
  { image: "stationTotale", caption: "Station totale" },
  { image: "repereGP05", caption: "Borne topographique" },
  { image: "tourMohammedVI", caption: "Structure finie" },
  { image: "poteauxCoffrage", caption: "Éléments d’implantation" },
  { image: "stadePoteau", caption: "Structure béton" },
  { image: "surveyBenchmark", caption: "Borne topographique" },
  { image: "tourChantierGrue", caption: "Tour en construction" },
  { image: "geoLaser", caption: "Appareil laser" },
  { image: "stadeTribunes", caption: "Complexe sportif" },
  { image: "platineAncrage", caption: "Éléments d’implantation" },
  { image: "interieurLivre", caption: "Structure finie" },
  { image: "implantationBorne", caption: "Éléments d’implantation" },
  { image: "stadeStructure", caption: "Complexe sportif" },
  { image: "architectureLivree", caption: "Structure finie" },
];

// ---------------------------------------------------------------- À propos
export const founder = {
  eyebrow: "À propos",
  title: "Une expertise construite sur le terrain",
  name: "Khalid AMEDIAZ",
  roles: ["Ingénieur Géomètre Topographe", "BIM Manager"],
  credential: "Inscrit au tableau de l’ONIGT depuis 2019.",
  text: "9 années d’expérience sur des projets de premier plan.",
  // TODO : remplacer par une photo du fondateur (public/images/fondateur.jpg) si disponible.
  image: "stationTotale" as MediaKey,
};
