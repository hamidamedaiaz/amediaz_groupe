"use client";

/**
 * Menu mobile plein écran (sous le header).
 * Services et Secteurs s'ouvrent en accordéon (liste en texte seul, sans page dédiée) ;
 * le CTA et le téléphone restent accessibles en bas.
 */

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Phone, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { sectors } from "@/data/sectors";
import { services } from "@/data/services";
import { mainNav, quoteCta, site } from "@/data/site";

type MobileMenuProps = { onNavigate: () => void };

export function MobileMenu({ onNavigate }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  // Bloque le défilement de la page tant que le menu est ouvert.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  // Contenu des entrées à accordéon.
  const subItems = {
    services: services.map((s) => ({ label: s.title, number: s.number })),
    secteurs: sectors.map((s) => ({ label: s.title, number: s.number })),
  };

  return (
    <motion.nav
      id="menu-mobile"
      aria-label="Navigation mobile"
      className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-navy lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="container-site flex min-h-full flex-col py-6">
        <ul className="divide-y divide-line border-b border-line">
          {mainNav.map((item) =>
            item.menu ? (
              <li key={item.label}>
                <button
                  type="button"
                  className="font-display flex w-full items-center justify-between py-4 text-2xl font-semibold"
                  aria-expanded={expanded === item.menu}
                  onClick={() => setExpanded((v) => (v === item.menu ? null : item.menu!))}
                >
                  {item.label}
                  <Plus
                    size={20}
                    aria-hidden
                    className={`text-gold transition-transform duration-300 ${expanded === item.menu ? "rotate-45" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {expanded === item.menu && (
                    <motion.ul
                      className="overflow-hidden"
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {subItems[item.menu].map((sub) => (
                        <li key={sub.label} className="flex items-baseline gap-3 py-2 text-muted">
                          <span className="num w-5 text-steel">{sub.number ?? "·"}</span>
                          {sub.label}
                        </li>
                      ))}
                      <li className="h-4" />
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={item.label}>
                <Link href={item.href} onClick={onNavigate} className="font-display block py-4 text-2xl font-semibold">
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="mt-auto flex flex-col gap-4 pt-10">
          <Link href={quoteCta.href} onClick={onNavigate} className="btn btn-primary w-full">
            {quoteCta.label}
          </Link>
          <a href={site.contact.phoneHref} className="btn btn-outline w-full">
            <Phone size={16} aria-hidden />
            {site.contact.phone}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
