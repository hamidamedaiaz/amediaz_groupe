/**
 * Catalogue des images du site.
 * Chaque photo est déclarée une seule fois (chemin, dimensions réelles, texte alternatif,
 * point de cadrage) puis référencée par sa clé dans les autres fichiers de données.
 *
 * - `terrain/` : photos réelles fournies par AMEDIAZ GROUP.
 * - `stock/`   : photos d'illustration (utilisées en appoint uniquement).
 */

export type Media = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Valeur CSS `object-position` : garde le sujet visible quel que soit le recadrage. */
  position?: string;
};

export const media = {
  // --- Chantiers de bâtiments ---
  tourChantier: {
    src: "/images/terrain/tour-chantier-facade.jpg",
    width: 966,
    height: 1288,
    alt: "Tour en construction : structure béton et grue à tour sur chantier",
    position: "50% 35%",
  },
  tourChantierGrue: {
    src: "/images/terrain/tour-chantier-grue.jpg",
    width: 720,
    height: 1600,
    alt: "Immeuble de grande hauteur en construction vu depuis le chantier",
    position: "50% 30%",
  },
  poteauxCoffrage: {
    src: "/images/terrain/poteaux-coffrage.jpg",
    width: 1600,
    height: 720,
    alt: "Poteaux en coffrage implantés sur leurs fondations",
    position: "50% 60%",
  },
  platineAncrage: {
    src: "/images/terrain/platine-ancrage.jpg",
    width: 1200,
    height: 1600,
    alt: "Platine d’ancrage métallique scellée dans le béton",
    position: "50% 60%",
  },
  implantationBorne: {
    src: "/images/terrain/implantation-borne.jpg",
    width: 720,
    height: 1600,
    alt: "Élément implanté sur un terrain en cours de terrassement",
    position: "50% 55%",
  },

  // --- Complexe sportif ---
  stadeTribunes: {
    src: "/images/terrain/stade-chantier-tribunes.jpg",
    width: 1600,
    height: 1200,
    alt: "Chantier d’un complexe sportif : tribunes en construction et grues",
    position: "50% 40%",
  },
  stadeStructure: {
    src: "/images/terrain/stade-tribunes-structure.jpg",
    width: 1600,
    height: 720,
    alt: "Structure des tribunes d’un stade en construction",
    position: "50% 50%",
  },
  stadePoteau: {
    src: "/images/terrain/stade-poteau-escalier.jpg",
    width: 720,
    height: 1600,
    alt: "Poteau béton et escalier de tribune sur chantier",
    position: "50% 55%",
  },

  // --- Instruments et repères ---
  stationTotale: {
    src: "/images/terrain/station-totale-chantier.jpg",
    width: 1200,
    height: 1600,
    alt: "Station totale en station sur trépied au cœur d’un chantier",
    position: "55% 60%",
  },
  geoLaser: {
    src: "/images/terrain/geo-laser.jpg",
    width: 1600,
    height: 720,
    alt: "Niveau laser rotatif GEO-Laser",
    position: "45% 50%",
  },
  surveyBenchmark: {
    src: "/images/terrain/repere-survey-benchmark.jpg",
    width: 1200,
    height: 1600,
    alt: "Repère de nivellement « Survey Benchmark » scellé au sol",
    position: "50% 45%",
  },
  repereGP05: {
    src: "/images/terrain/repere-geodesique-gp05.jpg",
    width: 720,
    height: 1600,
    alt: "Borne béton de repère géodésique marquée GP05",
    position: "50% 60%",
  },

  // --- Ouvrages livrés ---
  tourMohammedVI: {
    src: "/images/terrain/tour-mohammed-vi.jpg",
    width: 720,
    height: 1600,
    alt: "Tour Mohammed VI et son socle architectural",
    position: "50% 20%",
  },
  architectureLivree: {
    src: "/images/terrain/tour-architecture-livree.jpg",
    width: 1600,
    height: 720,
    alt: "Ouvrage livré : auvent architectural et façade de tour en contre-plongée",
    position: "50% 50%",
  },
  interieurLivre: {
    src: "/images/terrain/interieur-structure-livree.jpg",
    width: 1200,
    height: 1600,
    alt: "Espace intérieur livré : poteau béton et menuiseries posées",
    position: "50% 50%",
  },

  // --- Illustrations (stock) ---
  geometreStation: {
    src: "/images/stock/geometre-station-totale.jpg",
    width: 950,
    height: 635,
    alt: "Géomètre topographe réalisant une mesure à la station totale",
    position: "50% 40%",
  },
  ingenieurBim: {
    src: "/images/stock/ingenieur-bim-chantier.jpg",
    width: 1023,
    height: 683,
    alt: "Ingénieur sur chantier consultant des données BIM",
    position: "30% 50%",
  },
  maquetteBim: {
    src: "/images/stock/maquette-bim-tablette.webp",
    width: 700,
    height: 500,
    alt: "Maquette numérique BIM consultée sur tablette sur chantier",
    position: "50% 50%",
  },
  ingenieurePlan: {
    src: "/images/stock/ingenieure-plan.jpg",
    width: 2048,
    height: 2560,
    alt: "Ingénieure étudiant un plan technique",
    position: "50% 30%",
  },
} satisfies Record<string, Media>;

export type MediaKey = keyof typeof media;
