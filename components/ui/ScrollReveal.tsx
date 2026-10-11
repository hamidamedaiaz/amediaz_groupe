"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Ajoute `.is-visible` aux éléments `[data-reveal]` quand ils entrent dans l'écran.
 * Relancé à chaque changement de page pour observer les nouveaux éléments.
 * Le style de l'animation est défini dans globals.css.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
