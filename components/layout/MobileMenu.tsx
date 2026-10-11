"use client";

/**
 * Menu mobile plein écran (sous le header), fond blanc comme les mega-menus.
 * Services et Secteurs s'ouvrent en accordéon ; un service ouvre son panneau de détail.
 * Le CTA et le téléphone restent accessibles en bas.
 */

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Phone, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useServiceDrawer } from "@/components/services/ServiceDrawer";
import { sectors } from "@/data/sectors";
import { services } from "@/data/services";
import { mainNav, quoteCta, site } from "@/data/site";

type MobileMenuProps = { onNavigate: () => void };

export function MobileMenu({ onNavigate }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const { openService } = useServiceDrawer();

  // Bloque le défilement de la page tant que le menu est ouvert.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  // Contenu des accordéons : les services sont cliquables (panneau de détail).
  const subItems = {
    services: services.map((s) => ({ key: s.slug, label: s.title, number: s.number, slug: s.slug })),
    secteurs: sectors.map((s) => ({ key: s.title, label: s.title, number: s.number, slug: undefined })),
  };

  return (
    <motion.nav
      id="menu-mobile"
      aria-label="Navigation mobile"
      className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-white text-ink lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="container-site flex min-h-full flex-col py-4">
        <ul className="divide-y divide-rule border-b border-rule">
          {mainNav.map((item) =>
            item.menu ? (
              <li key={item.label}>
                <button
                  type="button"
                  className="font-display flex w-full items-center justify-between py-4 text-xl font-semibold"
                  aria-expanded={expanded === item.menu}
                  onClick={() => setExpanded((v) => (v === item.menu ? null : item.menu!))}
                >
                  {item.label}
                  <Plus
                    size={18}
                    aria-hidden
                    className={`text-brand transition-transform duration-300 ${expanded === item.menu ? "rotate-45" : ""}`}
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
                        <li key={sub.key}>
                          {sub.slug ? (
                            <button
                              type="button"
                              onClick={() => {
                                onNavigate();
                                openService(sub.slug!);
                              }}
                              className="flex w-full items-baseline gap-3 py-2 text-left text-muted"
                            >
                              <span className="num w-5">{sub.number ?? "·"}</span>
                              {sub.label}
                            </button>
                          ) : (
                            <span className="flex items-baseline gap-3 py-2 text-muted">
                              <span className="num w-5">{sub.number}</span>
                              {sub.label}
                            </span>
                          )}
                        </li>
                      ))}
                      <li className="h-3" />
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={item.label}>
                <Link href={item.href} onClick={onNavigate} className="font-display block py-4 text-xl font-semibold">
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="mt-auto flex flex-col gap-3 pt-10">
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
