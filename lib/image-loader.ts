/**
 * Loader next/image pour l'export statique (GitHub Pages) : renvoie le fichier de public/
 * tel quel, préfixé du basePath. Le paramètre `w` ne sert qu'à différencier les entrées du srcset.
 */
export default function imageLoader({ src, width }: { src: string; width: number }) {
  if (/^https?:\/\//.test(src)) return src;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}?w=${width}`;
}
