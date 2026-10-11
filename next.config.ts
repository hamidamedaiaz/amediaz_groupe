import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Racine explicite : un package-lock.json existe plus haut dans l'arborescence utilisateur.
  turbopack: { root: process.cwd() },
  images: {
    // Formats modernes servis automatiquement par next/image (plus légers que le JPEG).
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
