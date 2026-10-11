"use client";

/**
 * En-tête du site.
 * - Transparent en haut de page, fond navy solide dès que l'on défile ou qu'un menu est ouvert.
 * - Desktop : mega-menus « Services » et « Secteurs » (survol avec délai, clic, clavier, Échap).
 * - Mobile : menu plein écran (voir MobileMenu).
 */

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { mainNav, quoteCta, site, type NavItem } from "@/data/site";
import { SectorsMenu, ServicesMenu } from "./MegaMenus";
import { MobileMenu } from "./MobileMenu";

type MenuId = NonNullable<NavItem["menu"]>;

// Délai avant fermeture au départ de la souris : évite les fermetures accidentelles.
const CLOSE_DELAY = 180;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);

  // --- Fond solide au défilement
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- Fermeture des menus à chaque changement de page
  // (ajustement pendant le rendu, recommandé par React plutôt qu'un effet)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  // --- Échap ferme tout
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const open = useCallback((id: MenuId) => {
    window.clearTimeout(closeTimer.current);
    setOpenMenu(id);
  }, []);
  const scheduleClose = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), CLOSE_DELAY);
  }, []);
  const closeAll = useCallback(() => setOpenMenu(null), []);

  const solid = scrolled || openMenu !== null || mobileOpen;
  // Lien actif : page courante (les ancres « /#… » et les mega-menus ne sont jamais actifs).
  const isActive = (item: NavItem) =>
    !!item.href && (item.href === "/" ? pathname === "/" : !item.href.includes("#") && pathname.startsWith(item.href));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
          solid ? "bg-navy/95 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md" : "bg-transparent"
        }`}
        onMouseLeave={scheduleClose}
      >
        <div className="container-site flex h-20 items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={`${site.name} — accueil`}>
            <Image
              src="/brand/monogram-ag-reverse.png"
              alt=""
              width={488}
              height={474}
              className="h-9 w-auto"
              preload
            />
            <span className="font-display text-[0.9375rem] font-semibold tracking-[0.12em]">{site.name}</span>
          </Link>

          {/* Navigation desktop */}
          <nav aria-label="Navigation principale" className="hidden items-center gap-10 lg:flex">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.label}>
                  {item.menu ? (
                    <button
                      type="button"
                      className={`group flex items-center gap-1.5 px-3.5 py-2 text-[0.9375rem] transition-colors hover:text-ivory ${
                        openMenu === item.menu ? "text-ivory" : "text-muted"
                      }`}
                      aria-expanded={openMenu === item.menu}
                      aria-controls={`mega-${item.menu}`}
                      onMouseEnter={() => open(item.menu!)}
                      onClick={() => (openMenu === item.menu ? closeAll() : open(item.menu!))}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        aria-hidden
                        className={`transition-transform duration-300 ${openMenu === item.menu ? "rotate-180 text-gold" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onMouseEnter={scheduleClose}
                      aria-current={isActive(item) ? "page" : undefined}
                      className={`block px-3.5 py-2 text-[0.9375rem] transition-colors hover:text-ivory ${
                        isActive(item) ? "text-ivory" : "text-muted"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Link href={quoteCta.href} className="btn btn-primary min-h-11! px-5! py-2.5!" onMouseEnter={scheduleClose}>
              {quoteCta.label}
            </Link>
          </nav>

          {/* Bouton menu mobile */}
          <button
            type="button"
            className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="menu-mobile"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span
              className={`h-px w-6 bg-current transition-transform ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-6 bg-current transition-transform ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>

        {/* Mega-menus desktop */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              key={openMenu}
              id={`mega-${openMenu}`}
              className="absolute inset-x-0 top-full hidden border-t border-line bg-navy lg:block"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => open(openMenu)}
            >
              {openMenu === "services" ? <ServicesMenu onNavigate={closeAll} /> : <SectorsMenu onNavigate={closeAll} />}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Menu mobile : rendu hors du <header>, dont le backdrop-filter
          servirait sinon de référence aux positions `fixed` */}
      <AnimatePresence>{mobileOpen && <MobileMenu onNavigate={() => setMobileOpen(false)} />}</AnimatePresence>
    </>
  );
}
