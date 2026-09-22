"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navigation, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-paper transition-colors duration-300 ${
        solid ? "bg-navy/85 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md" : ""
      }`}
    >
      <div className="container-site flex h-20 items-center justify-between gap-8">
        <a href="#hero" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/brand/monogram-ag-reverse.png"
            alt=""
            width={488}
            height={474}
            className="h-9 w-auto"
            preload
          />
          <span className="font-display text-[0.9375rem] font-semibold tracking-[0.08em]">{site.name}</span>
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-10 lg:flex">
          <ul className="flex items-center gap-8 text-[0.9375rem] text-muted">
            {navigation.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-paper">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary min-h-11! px-5! py-2.5!">
            Parler de votre projet
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-current transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-current transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Navigation mobile" className="lg:hidden">
          <ul className="container-site flex flex-col py-6">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="font-display block py-3 text-2xl font-semibold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-8">
              <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
                Parler de votre projet
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
