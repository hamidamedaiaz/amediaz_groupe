"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TopoLines } from "@/components/ui/TopoLines";
import { references } from "@/lib/content";

export function References() {
  const [active, setActive] = useState(0);
  const current = references.items[active];

  return (
    <section id="references" className="section section-ink">
      <Container>
        <SectionHeading index="06" label="Références" title={references.title} />

        <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-12">
          <ol className="border-b border-white/15 lg:col-span-7">
            {references.items.map((item, i) => (
              <li key={item.title} className="border-t border-white/15" data-reveal>
                <button
                  type="button"
                  className="group relative grid w-full grid-cols-[3rem_1fr] items-baseline gap-4 py-8 text-left md:py-10"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span
                    className={`absolute top-[-1px] left-0 h-px w-full origin-left bg-teal transition-transform duration-500 ${
                      active === i ? "scale-x-100" : "scale-x-0"
                    }`}
                    aria-hidden
                  />
                  <span className="font-mono text-sm text-paper/40">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span
                      className={`block text-2xl font-semibold tracking-tight transition-colors md:text-3xl ${
                        active === i ? "text-paper" : "text-paper/50"
                      }`}
                    >
                      {item.title}
                    </span>
                    {item.detail && <span className="mt-2 block text-sm text-paper/50">{item.detail}</span>}
                  </span>
                </button>
              </li>
            ))}
          </ol>

          {/* Visuel du projet survolé */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden border border-white/15">
              {current.image ? (
                <Image
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              ) : (
                <div className="bg-grid absolute inset-0 text-paper">
                  <TopoLines className="absolute inset-0 h-full w-full text-teal/20" />
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 bg-gradient-to-t from-ink via-ink/70 to-transparent p-8 pt-24">
                <p className="text-lg font-semibold">{current.title}</p>
                <p className="font-mono text-5xl text-paper/30">{String(active + 1).padStart(2, "0")}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
