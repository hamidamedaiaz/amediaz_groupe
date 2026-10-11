# AMEDIAZ GROUP — site vitrine

Topographie, foncier, BIM et digital · « Demain se mesure aujourd’hui. »

Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind CSS 4 · Motion · Lucide.

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de production (toutes les pages sont statiques)
npm run lint
```

Avec Docker : `docker compose up --watch` (port 3100 par défaut).

## Architecture

```
app/                      Routes (App Router)
  layout.tsx              Polices, SEO global, JSON-LD, header/footer
  template.tsx            Fondu entre les pages
  page.tsx                Accueil (assemblage des sections)
  contact/                /contact
  sitemap.ts, robots.ts   SEO, générés depuis data/
  icon.png, apple-icon.png, favicon.ico

data/                     ⭐ Tout le contenu du site — à modifier ici uniquement
  site.ts                 Identité, coordonnées, ICE, menu, URL du domaine
  media.ts                Catalogue des photos (chemin, dimensions, alt, cadrage)
  services.ts             Services : résumé, étapes, livrables (mega-menu + panneau « Découvrir »)
  sectors.ts              Liste des secteurs + visuel du mega-menu Secteurs
  home.ts                 Hero, chiffres, projets, à propos
  contact.ts              Options du formulaire

components/
  layout/                 Header, MegaMenus (Services/Secteurs), MobileMenu, Footer
  sections/               Sections de l'accueil (Hero, KeyFigures, Projects, About, Contact)
  services/               ServiceDrawer : panneau de détail d'un service (même page)
  ui/                     Briques réutilisables (Photo, PhotoChain, Counter,
                          ContourLines, Parallax, ContactForm…)

public/
  brand/                  Logos
  images/terrain/         Photos réelles de chantier (fournies)
  images/stock/           Photos d'illustration
  og-image.jpg            Aperçu de partage (réseaux sociaux)
```

### Règles

- **Contenu** : aucune donnée en dur dans les composants ; tout passe par `data/`.
- **Photos** : ajouter le fichier dans `public/images/…`, le déclarer dans `data/media.ts`,
  puis utiliser sa clé (`<Photo id="…" />`).
- **Ajouter un service / secteur** : une entrée dans `data/services.ts` ou `data/sectors.ts`
  suffit — menus et footer se mettent à jour (pas de page dédiée).
- **Design system** : couleurs, typographie, boutons et animations dans `app/globals.css`.
  Sections claires (ivoire `bg-paper` / blanc `bg-white`) en alternance ; une section
  sombre ajoute la classe `on-dark` (header, hero, projets, footer).
- **Animations** : `data-reveal` sur un élément = apparition au scroll. Toutes respectent
  `prefers-reduced-motion`.

## À compléter

- `data/site.ts` → `url` : domaine définitif (ou variable `NEXT_PUBLIC_SITE_URL`).
- `data/home.ts` → photo du fondateur si souhaitée.
- `data/site.ts` → `socials` : réseaux sociaux s'il y en a.
- Formulaire : ouvre actuellement la messagerie (mailto) ; un envoi serveur peut être ajouté.
