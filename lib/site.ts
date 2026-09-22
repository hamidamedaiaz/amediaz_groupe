export const site = {
  name: "AMEDIAZ GROUP",
  tagline: "Topographie · Foncier · BIM · Digital",
  location: "Témara, Maroc",
  slogan: "« Demain se mesure aujourd’hui. »",
  title: "AMEDIAZ GROUP | Topographie, Foncier, BIM & Digital",
  description:
    "Cabinet marocain spécialisé en topographie, foncier, BIM et solutions digitales pour les projets de construction et d’aménagement.",
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
