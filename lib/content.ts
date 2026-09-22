// Contenus de la page. Les textes marqués TODO sont provisoires et à valider.

export const hero = {
  title: ["La précision au service", "de vos projets."],
  intro:
    "Topographie, foncier, BIM et solutions digitales au service des projets de construction au Maroc.",
};

export const about = {
  title: ["Une expertise de terrain.", "Une vision digitale."],
  // TODO : texte de présentation définitif
  text: "AMEDIAZ GROUP accompagne maîtres d’ouvrage, architectes et entreprises à chaque étape de leurs projets de construction et d’aménagement : de la mesure sur le terrain jusqu’à la maquette numérique.",
  stats: [
    { value: "9", unit: " ans", label: "d’expérience" },
    { value: "100", unit: "+", label: "expertises réalisées" },
    { value: "500", unit: "h+", label: "de formation BIM" },
  ],
};

export const expertises = {
  title: "La mesure, de la donnée à la décision.",
  // TODO : descriptions définitives
  items: [
    {
      title: "Topographie",
      text: "Levés, implantations, contrôles et plans topographiques de précision.",
    },
    {
      title: "Foncier & Expertise",
      text: "Dossiers fonciers, bornage, immatriculation et expertises judiciaires.",
    },
    {
      title: "SIG & Analyse spatiale",
      text: "Structuration, analyse et cartographie des données géographiques.",
    },
    {
      title: "BIM & Digital",
      text: "Modélisation, coordination et workflows numériques pour vos projets.",
    },
    {
      title: "Management de projet",
      text: "Pilotage, planification et suivi technique de la conception à la livraison.",
    },
  ],
};

export const lifecycle = {
  title: "Du terrain à la livraison.",
  // TODO : valider les 10 étapes
  steps: [
    "Études préliminaires",
    "Levé topographique",
    "Analyse foncière",
    "Conception",
    "Modélisation BIM",
    "Coordination",
    "Implantation",
    "Suivi de chantier",
    "Contrôle & récolement",
    "Livraison",
  ],
};

export const sectors = {
  title: "Une expertise adaptée à chaque terrain.",
  items: [
    "Immobilier",
    "Infrastructure",
    "Mines & Carrières",
    "Industrie",
    "Agriculture",
    "Tourisme",
    "Sport",
    "Urbanisme",
    "Environnement",
    "Énergie & Réseaux",
    "Cadastre & Foncier judiciaire",
  ],
};

export const references = {
  title: "L’expérience des projets qui comptent.",
  // TODO : ajouter lieu, année, mission et image de chaque projet
  items: [
    { title: "Tour Mohammed VI", detail: null as string | null, image: null as string | null },
    { title: "Complexe Sportif Prince Moulay Abdellah", detail: null, image: null },
    { title: "Nouvel Hôpital Ibn Sina", detail: null, image: null },
    { title: "MOL Project — UM6P", detail: null, image: null },
  ],
};

export const bim = {
  title: "Du terrain au modèle numérique.",
  // TODO : texte définitif
  text: "Nous relions la donnée mesurée sur le terrain à la maquette numérique, pour des projets mieux coordonnés et mieux documentés.",
  items: [
    "BIM Management",
    "Modélisation",
    "Coordination BIM",
    "SIG / Data",
    "Workflows numériques",
  ],
  highlight: { value: "500h+", label: "de formation BIM" },
};

export const founder = {
  name: "Khalid AMEDIAZ",
  roles: ["Ingénieur Géomètre Topographe", "BIM Manager", "Inscrit à l’ONIGT depuis 2019"],
  // TODO : parcours du fondateur + photo (public/images/fondateur.jpg)
  text: "Fondateur d’AMEDIAZ GROUP, il associe l’expertise du géomètre topographe à la maîtrise des outils BIM pour accompagner les projets de la mesure à la livraison.",
  photo: null as string | null,
};

export const contact = {
  title: ["Parlons de", "votre projet."],
  intro: "Décrivez-nous votre besoin, nous revenons vers vous rapidement.",
};
