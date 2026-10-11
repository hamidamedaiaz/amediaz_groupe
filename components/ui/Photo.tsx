import Image, { type ImageProps } from "next/image";
import { media, type MediaKey } from "@/data/media";

type PhotoProps = Omit<ImageProps, "src" | "alt" | "width" | "height"> & {
  id: MediaKey;
  /** Remplace le texte alternatif du catalogue (ex. "" pour une image décorative). */
  alt?: string;
};

/**
 * Image du catalogue (data/media.ts) : dimensions, texte alternatif et cadrage
 * sont fournis automatiquement. Avec `fill`, l'image couvre son parent (object-cover).
 */
export function Photo({ id, alt, fill, className = "", style, ...props }: PhotoProps) {
  const m = media[id];
  return (
    <Image
      src={m.src}
      alt={alt ?? m.alt}
      {...(fill ? { fill: true } : { width: m.width, height: m.height })}
      className={`${fill ? "object-cover" : ""} ${className}`}
      style={{ objectPosition: m.position, ...style }}
      {...props}
    />
  );
}
