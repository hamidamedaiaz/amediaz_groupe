/**
 * Contenus de la page d'accueil (hors services et secteurs, voir leurs fichiers dédiés).
 *
 * RÈGLE : uniquement les informations fournies par AMEDIAZ GROUP (brief + charte).
 * Un champ optionnel laissé vide n'est pas affiché : il suffit de le renseigner
 * pour qu'il apparaisse sur le site.
 */

import type { MediaKey } from "./media";

export const hero = {
  eyebrow: "AMEDIAZ GROUP",
  title: ["Nous mesurons aujourd’hui", "les projets de demain."],
  subtitle: "Topographie · Foncier · BIM · Digital",
  text: "Une expertise technique et digitale au service des projets de construction, d’immobilier et d’infrastructure au Maroc.",
  primaryCta: { label: "Découvrir notre expertise", href: "/#terrain" },
  secondaryCta: { label: "Parler de votre projet", href: "/contact" },
  // Images du diaporama (format portrait, affichées dans le panneau droit).
  slides: ["tourChantier", "stationTotale", "tourMohammedVI"] as MediaKey[],
};

/** Chiffres clés (charte AMEDIAZ GROUP). `value` est animé de 0 à la valeur. */
export const keyFigures: { value: number; suffix: string; label: string; pad?: boolean }[] = [
  { value: 9, suffix: " ans", label: "d’expérience professionnelle" },
  { value: 100, suffix: "+", label: "expertises immobilières réalisées" },
  { value: 500, suffix: "h+", label: "de formation BIM" },
];

/**
 * Galerie « Notre expertise sur le terrain » : chaîne de photos réelles qui avance
 * de droite à gauche (voir PhotoChain). L'ordre ci-dessous est l'ordre de passage.
 * `caption` sert de texte alternatif complémentaire / référence interne.
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

export const founder = {
  title: "Une expertise construite sur le terrain",
  name: "Khalid AMEDIAZ",
  roles: ["Ingénieur Géomètre Topographe", "BIM Manager"],
  credential: "Inscrit au tableau de l’ONIGT depuis 2019.",
  text: "9 années d’expérience sur des projets de premier plan.",
  // TODO : remplacer par une photo du fondateur (public/images/fondateur.jpg) si disponible.
  image: "stationTotale" as MediaKey,
};

/** Projets de référence (affichés dans la section « À propos »). */
export const references: { title: string }[] = [
  { title: "Tour Mohammed VI" },
  { title: "Complexe Sportif Prince Moulay Abdellah" },
  { title: "Nouvel Hôpital Ibn Sina" },
  { title: "MOL Project – UM6P" },
];
