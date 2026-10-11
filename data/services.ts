/**
 * Prestations d'AMEDIAZ GROUP, affichées dans le mega-menu « Services » et le footer
 * (texte seul : il n'y a pas de page par service).
 *
 * Les 10 missions numérotées (01 → 10) reprennent la charte « Nos missions ».
 * BIM et expertise immobilière sont des expertises transverses, sans numéro.
 */

export type ServiceCategory = "foncier" | "topographie" | "livraison" | "transverse";

export type Service = {
  /** Numéro de mission (« 01 »…) ; absent pour les expertises transverses. */
  number?: string;
  title: string;
  /** Libellé court pour le footer quand le titre est long. */
  shortTitle?: string;
  category: ServiceCategory;
};

export const serviceCategories: Record<ServiceCategory, string> = {
  foncier: "Foncier & Études",
  topographie: "Topographie",
  livraison: "Livraison / Cadastre",
  transverse: "Également",
};

export const services: Service[] = [
  // FONCIER & ÉTUDES
  { number: "01", title: "Prospection foncière", category: "foncier" },
  { number: "02", title: "Analyse spatiale (SIG)", shortTitle: "Analyse spatiale", category: "foncier" },
  { number: "03", title: "Expertise foncière", category: "foncier" },
  { number: "04", title: "Plan de situation", category: "foncier" },
  // TOPOGRAPHIE
  { number: "05", title: "Levé topographique / plan coté", shortTitle: "Levé topographique", category: "topographie" },
  { number: "06", title: "Suivi jusqu’à l’autorisation", shortTitle: "Suivi d’autorisation", category: "topographie" },
  { number: "07", title: "Implantation topographique", category: "topographie" },
  { number: "08", title: "Contrôle de conformité", category: "topographie" },
  // LIVRAISON / CADASTRE
  { number: "09", title: "Réception des travaux", category: "livraison" },
  { number: "10", title: "Dossier technique cadastral", shortTitle: "Dossier cadastral", category: "livraison" },
  // EXPERTISES TRANSVERSES
  { title: "BIM Management", category: "transverse" },
  { title: "Expertise immobilière", category: "transverse" },
];

/** Les 10 missions numérotées, dans l'ordre. */
export const missions = services.filter((s) => s.number);

/** Services regroupés par catégorie, pour le mega-menu. */
export const servicesByCategory = (Object.keys(serviceCategories) as ServiceCategory[]).map((category) => ({
  category,
  label: serviceCategories[category],
  items: services.filter((s) => s.category === category),
}));
