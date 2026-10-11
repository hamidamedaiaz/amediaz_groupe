/**
 * Identité de l'entreprise et navigation.
 * Source unique : toute coordonnée affichée sur le site vient de ce fichier.
 * Informations issues de la charte « Identité visuelle AMEDIAZ GROUP » et de la carte de visite.
 */

export const site = {
  name: "AMEDIAZ GROUP",
  legalName: "AMEDIAZ GROUP SARLAU",
  activities: "Topographie, foncier, BIM et digital",
  tagline: "Topographie · Foncier · BIM · Digital",
  slogan: "Demain se mesure aujourd’hui.",
  city: "Témara · Maroc",
  // URL de production : utilisée pour le sitemap, robots.txt et OpenGraph.
  // TODO : remplacer par le domaine définitif.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.amediaz-group.ma",
  title: "AMEDIAZ GROUP | Topographie, Foncier, BIM & Digital au Maroc",
  // Texte de la plaquette de présentation (charte AMEDIAZ GROUP).
  description:
    "Topographie, expertise immobilière, management de projets et BIM au service des acteurs de la construction au Maroc.",
  contact: {
    phone: "+212 6 10 93 65 44",
    phoneHref: "tel:+212610936544",
    email: "kh.amediaz@gmail.com",
    address: ["Avenue Abdelkarim El Khatabi,", "Imm 30, Appt 4,", "Témara, Maroc"],
    // Requête utilisée pour la carte Google Maps intégrée.
    mapQuery: "Avenue Abdelkarim El Khatabi, Témara, Maroc",
  },
  ice: "004025283000039",
  // Réseaux sociaux : laisser vide tant qu'aucun compte n'est communiqué.
  socials: [] as { label: string; href: string }[],
} as const;

/**
 * Entrées du menu principal : soit un lien (`href`), soit un mega-menu (`menu`)
 * qui s'ouvre sur place sans changer de page.
 */
export type NavItem = { label: string } & ({ href: string; menu?: never } | { menu: "services" | "secteurs"; href?: never });

export const mainNav: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", menu: "services" },
  { label: "Secteurs", menu: "secteurs" },
  { label: "À propos", href: "/#a-propos" },
  { label: "Contact", href: "/contact" },
];

/** Liens simples du menu (sans mega-menu), pour le footer. */
export const navLinks = mainNav.flatMap((item) => (item.href ? [{ label: item.label, href: item.href }] : []));

export const quoteCta = { label: "Demander un devis", href: "/contact" };
