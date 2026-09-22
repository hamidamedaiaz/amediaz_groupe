export const site = {
  name: "AMEDIAZ GROUP",
  tagline: "Topographie · Foncier · BIM · Digital",
  location: "Témara, Maroc",
  coordinates: "33.9287° N — 6.9062° O",
  slogan: "« Demain se mesure aujourd’hui. »",
  title: "AMEDIAZ GROUP | Topographie, Foncier, BIM & Digital",
  description:
    "Cabinet marocain spécialisé en topographie, foncier, BIM et solutions digitales pour les projets de construction et d’aménagement.",
  // TODO : renseigner les coordonnées réelles (null = affiché « À renseigner »)
  contact: {
    phone: null as string | null,
    email: null as string | null,
    address: "Témara, Maroc",
  },
  ice: null as string | null,
} as const;

// Ancres de la page unique, dans l'ordre d'apparition.
export const sections = [
  { id: "hero", label: "Accueil" },
  { id: "a-propos", label: "À propos" },
  { id: "expertises", label: "Expertises" },
  { id: "cycle-projet", label: "Cycle de vie du projet" },
  { id: "secteurs", label: "Secteurs" },
  { id: "references", label: "Références" },
  { id: "bim-digital", label: "BIM & Digital" },
  { id: "fondateur", label: "Fondateur" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

// Liens affichés dans le header.
export const navigation: { id: SectionId; label: string }[] = [
  { id: "hero", label: "Accueil" },
  { id: "a-propos", label: "À propos" },
  { id: "expertises", label: "Expertises" },
  { id: "references", label: "Références" },
  { id: "contact", label: "Contact" },
];
