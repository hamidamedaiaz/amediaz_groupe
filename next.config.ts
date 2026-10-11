import type { NextConfig } from "next";

// Le site est publié sur GitHub Pages sous un sous-chemin (https://<user>.github.io/amediaz_groupe/).
// En dev, il reste servi à la racine (http://localhost:3000). Surchargeable via NEXT_PUBLIC_BASE_PATH.
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/amediaz_groupe" : "");

const nextConfig: NextConfig = {
  // Export statique : `next build` génère le dossier out/ (seul contenu publié sur GitHub Pages).
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  // Exposé au code client (loader d'images).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // Racine explicite : un package-lock.json existe plus haut dans l'arborescence utilisateur.
  turbopack: { root: process.cwd() },
  images: {
    // Pas de serveur d'optimisation en export statique : le loader sert les fichiers de public/
    // en préfixant le basePath (next/image ne l'ajoute pas lui-même).
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
};

export default nextConfig;
