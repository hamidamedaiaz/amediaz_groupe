"use client";

/**
 * Protection des photos (droits d'auteur AMEDIAZ GROUP).
 * Bloque sur toutes les images du site :
 * - le clic droit (menu « Enregistrer l'image sous… », « Copier l'image ») ;
 * - le glisser-déposer d'une image vers le bureau ou un autre onglet.
 * Complété en CSS (globals.css) : pas de sélection, pas de menu d'appui long sur mobile.
 *
 * Limite : aucune technique web ne peut empêcher une capture d'écran ;
 * ces mesures bloquent les méthodes de copie courantes.
 */

import { useEffect } from "react";

// Vrai si l'événement vise une image ou une zone photo protégée.
const isProtected = (target: EventTarget | null) =>
  target instanceof Element && Boolean(target.closest("img, [data-protected]"));

export function ImageProtection() {
  useEffect(() => {
    const block = (e: Event) => {
      if (isProtected(e.target)) e.preventDefault();
    };
    document.addEventListener("contextmenu", block);
    document.addEventListener("dragstart", block);
    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("dragstart", block);
    };
  }, []);

  return null;
}
