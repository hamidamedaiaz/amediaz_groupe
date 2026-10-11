"use client";

/**
 * Parallaxe très légère : le contenu glisse de quelques pourcents pendant le défilement.
 * Désactivée si l'utilisateur préfère réduire les animations.
 *
 * La préférence est lue via useSyncExternalStore : le rendu serveur et l'hydratation
 * utilisent la même valeur (pas de parallaxe), puis le navigateur applique la vraie
 * préférence. Cela évite tout écart d'hydratation.
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useSyncExternalStore, type ReactNode } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";
const subscribe = (onChange: () => void) => {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};

export function Parallax({ children, amount = 6, className = "" }: { children: ReactNode; amount?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => true, // serveur : rendu statique
  );
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Agrandi pour que le déplacement ne laisse jamais de bord vide */}
      <motion.div className="absolute inset-x-0 -inset-y-[8%]" style={reduce ? undefined : { y }}>
        {children}
      </motion.div>
    </div>
  );
}
