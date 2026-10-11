/**
 * Prestations d'AMEDIAZ GROUP.
 * Alimente : la section « Nos expertises », le panneau de détail « Découvrir »,
 * le mega-menu Services et le footer. Il n'y a pas de page par service :
 * le détail s'ouvre dans un panneau latéral sur la page d'accueil.
 *
 * Les 10 missions numérotées (01 → 10) reprennent la charte « Nos missions ».
 * BIM et expertise immobilière sont des expertises transverses, sans numéro.
 *
 * Rédaction : descriptions factuelles des missions, sans chiffres, délais ni
 * promesses de précision qui n'auraient pas été fournis par AMEDIAZ GROUP.
 */

export type ServiceCategory = "foncier" | "topographie" | "livraison" | "transverse";

export type Service = {
  slug: string;
  /** Numéro de mission (« 01 »…) ; absent pour les expertises transverses. */
  number?: string;
  title: string;
  /** Libellé court pour le footer quand le titre est long. */
  shortTitle?: string;
  category: ServiceCategory;
  /** Description courte (grille « Nos expertises »). */
  summary: string;
  /** Déroulé de la mission en 4 étapes (panneau de détail). */
  steps: { title: string; text: string }[];
  /** Livrables types remis au client. */
  deliverables: string[];
};

export const serviceCategories: Record<ServiceCategory, string> = {
  foncier: "Foncier & Études",
  topographie: "Topographie",
  livraison: "Livraison / Cadastre",
  transverse: "Également",
};

export const services: Service[] = [
  // ------------------------------------------------------------ FONCIER & ÉTUDES
  {
    slug: "prospection-fonciere",
    number: "01",
    title: "Prospection foncière",
    category: "foncier",
    summary: "Analyse des opportunités foncières et de leur potentiel avant tout engagement.",
    steps: [
      { title: "Cadrage", text: "Définition du programme et des critères de recherche." },
      { title: "Recherche", text: "Identification des terrains correspondant au besoin." },
      { title: "Analyse", text: "Étude de la situation, des contraintes et du statut foncier." },
      { title: "Synthèse", text: "Comparaison des terrains pour orienter la décision." },
    ],
    deliverables: ["Fiches terrains", "Plan de repérage", "Note de synthèse"],
  },
  {
    slug: "analyse-spatiale-sig",
    number: "02",
    title: "Analyse spatiale (SIG)",
    shortTitle: "Analyse spatiale",
    category: "foncier",
    summary: "Croisement des données géographiques pour éclairer les décisions d’aménagement.",
    steps: [
      { title: "Collecte", text: "Rassemblement des plans, levés et données existantes." },
      { title: "Structuration", text: "Mise en cohérence des formats et des systèmes de coordonnées." },
      { title: "Analyse", text: "Croisement des couches : contraintes, surfaces, servitudes." },
      { title: "Cartographie", text: "Cartes thématiques et données exploitables." },
    ],
    deliverables: ["Cartes thématiques", "Base de données SIG", "Note d’analyse"],
  },
  {
    slug: "expertise-fonciere",
    number: "03",
    title: "Expertise foncière",
    category: "foncier",
    summary: "Confrontation de la réalité du terrain aux documents fonciers.",
    steps: [
      { title: "Étude documentaire", text: "Analyse des titres, plans et documents existants." },
      { title: "Repérage", text: "Recherche des bornes et repères sur le terrain." },
      { title: "Mesures", text: "Levé des limites et des éléments à vérifier." },
      { title: "Rapport", text: "Analyse des écarts et rapport d’expertise." },
    ],
    deliverables: ["Rapport d’expertise", "Plan des limites"],
  },
  {
    slug: "plan-de-situation",
    number: "04",
    title: "Plan de situation",
    category: "foncier",
    summary: "Localisation précise du terrain pour les dossiers administratifs.",
    steps: [
      { title: "Identification", text: "Localisation de la parcelle à partir des documents." },
      { title: "Vérification", text: "Contrôle des accès et des repères sur site." },
      { title: "Calage", text: "Positionnement sur fond de plan de référence." },
      { title: "Mise en forme", text: "Plan adapté aux exigences du dossier." },
    ],
    deliverables: ["Plan de situation", "Fichiers DWG / PDF"],
  },

  // ------------------------------------------------------------ TOPOGRAPHIE
  {
    slug: "leve-topographique",
    number: "05",
    title: "Levé topographique / plan coté",
    shortTitle: "Levé topographique",
    category: "topographie",
    summary: "Relevé du terrain existant et plan coté, base de toute conception.",
    steps: [
      { title: "Préparation", text: "Recueil des documents et définition de l’emprise." },
      { title: "Levé terrain", text: "Mesure des points, limites, ouvrages et altitudes." },
      { title: "Traitement", text: "Calculs, contrôles et modélisation du terrain." },
      { title: "Plan coté", text: "Plan avec cotes, altitudes et courbes de niveau." },
    ],
    deliverables: ["Plan topographique coté", "Fichiers DWG / PDF"],
  },
  {
    slug: "suivi-autorisation",
    number: "06",
    title: "Suivi jusqu’à l’autorisation",
    shortTitle: "Suivi d’autorisation",
    category: "topographie",
    summary: "Préparation et suivi des pièces topographiques jusqu’à l’autorisation.",
    steps: [
      { title: "Inventaire", text: "Liste des pièces techniques exigées." },
      { title: "Production", text: "Établissement des plans nécessaires." },
      { title: "Constitution", text: "Assemblage et vérification du dossier." },
      { title: "Suivi", text: "Suivi de l’instruction et des compléments demandés." },
    ],
    deliverables: ["Pièces topographiques du dossier"],
  },
  {
    slug: "implantation-topographique",
    number: "07",
    title: "Implantation topographique",
    category: "topographie",
    summary: "Report précis des plans sur le terrain : axes, fondations, poteaux, réseaux.",
    steps: [
      { title: "Préparation", text: "Analyse des plans et préparation des données." },
      { title: "Implantation", text: "Report précis sur le terrain." },
      { title: "Contrôle", text: "Vérification des positions implantées." },
      { title: "Rapport", text: "Livrables et traçabilité." },
    ],
    deliverables: ["Procès-verbal d’implantation", "Fichier des points implantés"],
  },
  {
    slug: "controle-de-conformite",
    number: "08",
    title: "Contrôle de conformité",
    category: "topographie",
    summary: "Vérification de l’ouvrage construit par rapport au projet.",
    steps: [
      { title: "Définition", text: "Choix des éléments à contrôler et des tolérances." },
      { title: "Mesures", text: "Relevé des ouvrages réalisés." },
      { title: "Comparaison", text: "Calcul des écarts avec le projet." },
      { title: "Rapport", text: "Rapport de conformité partagé avec les intervenants." },
    ],
    deliverables: ["Rapport de conformité", "Tableau des écarts"],
  },

  // ------------------------------------------------------------ LIVRAISON / CADASTRE
  {
    slug: "reception-des-travaux",
    number: "09",
    title: "Réception des travaux",
    category: "livraison",
    summary: "Relevé de l’ouvrage tel que construit pour la réception.",
    steps: [
      { title: "Préparation", text: "Recueil des plans d’exécution et des exigences." },
      { title: "Récolement", text: "Mesure de l’ouvrage achevé et de ses abords." },
      { title: "Comparaison", text: "Mise en évidence des écarts éventuels." },
      { title: "Remise", text: "Plans de récolement et rapport de réception." },
    ],
    deliverables: ["Plans de récolement", "Rapport de réception"],
  },
  {
    slug: "dossier-technique-cadastral",
    number: "10",
    title: "Dossier technique cadastral",
    shortTitle: "Dossier cadastral",
    category: "livraison",
    summary: "Constitution des dossiers techniques pour les procédures cadastrales.",
    steps: [
      { title: "Analyse", text: "Étude du titre foncier et de la procédure adaptée." },
      { title: "Levé", text: "Mesure des limites, constructions et lots." },
      { title: "Plans", text: "Calcul des contenances et plans réglementaires." },
      { title: "Dépôt", text: "Constitution et suivi du dossier." },
    ],
    deliverables: ["Dossier technique cadastral", "Plans réglementaires"],
  },

  // ------------------------------------------------------------ EXPERTISES TRANSVERSES
  {
    slug: "bim-management",
    title: "BIM Management",
    category: "transverse",
    summary: "Relier la mesure du terrain à la maquette numérique du projet.",
    steps: [
      { title: "Cadrage", text: "Objectifs et usages BIM du projet." },
      { title: "Données terrain", text: "Intégration des levés dans l’environnement BIM." },
      { title: "Modélisation", text: "Production ou contrôle des maquettes." },
      { title: "Coordination", text: "Revues de maquette et détection des conflits." },
    ],
    deliverables: ["Maquette numérique", "Rapports de coordination"],
  },
  {
    slug: "expertise-immobiliere",
    title: "Expertise immobilière",
    category: "transverse",
    summary: "Analyse technique et documentée de biens immobiliers.",
    steps: [
      { title: "Cadrage", text: "Objet de l’expertise et documents à réunir." },
      { title: "Visite", text: "Constat sur place du terrain et du bâti." },
      { title: "Mesures", text: "Relevé des surfaces et éléments utiles." },
      { title: "Rapport", text: "Rapport d’expertise motivé." },
    ],
    deliverables: ["Rapport d’expertise", "Relevé de surfaces"],
  },
];

// ---------------------------------------------------------------- Accès aux données

export const getService = (slug: string) => services.find((s) => s.slug === slug);

/** Les 10 missions numérotées, dans l'ordre. */
export const missions = services.filter((s) => s.number);

/** Services regroupés par catégorie, pour le mega-menu. */
export const servicesByCategory = (Object.keys(serviceCategories) as ServiceCategory[]).map((category) => ({
  category,
  label: serviceCategories[category],
  items: services.filter((s) => s.category === category),
}));
