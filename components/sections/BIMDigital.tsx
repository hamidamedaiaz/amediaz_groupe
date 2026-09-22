import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bim } from "@/lib/content";

// Maquette filaire isométrique : 4 niveaux de dalles + poteaux.
const iso = (x: number, y: number, z: number) => {
  const s = 58;
  return [300 + (x - y) * s * 0.866, 250 + (x + y) * s * 0.5 - z * s] as const;
};
const pt = (x: number, y: number, z: number) => iso(x, y, z).map((v) => v.toFixed(1)).join(" ");

const W = 4;
const D = 3;
const LEVELS = [0, 1.1, 2.2, 3.3];

const slabs = LEVELS.map((z) => `M${pt(0, 0, z)}L${pt(W, 0, z)}L${pt(W, D, z)}L${pt(0, D, z)}Z`);
const columns = [0, 2, 4].flatMap((x) =>
  [0, 3].map((y) => `M${pt(x, y, 0)}L${pt(x, y, LEVELS[LEVELS.length - 1])}`),
);
const ground = [
  ...Array.from({ length: 9 }, (_, i) => `M${pt(i - 2, -2, 0)}L${pt(i - 2, D + 2, 0)}`),
  ...Array.from({ length: 8 }, (_, i) => `M${pt(-2, i - 2, 0)}L${pt(W + 2, i - 2, 0)}`),
];
const top = LEVELS[LEVELS.length - 1];
const corners = [iso(0, 0, top), iso(W, 0, top), iso(W, D, top), iso(0, D, top)];

export function BIMDigital() {
  return (
    <section id="bim-digital" className="section section-navy relative overflow-hidden">
      <div
        className="bg-grid pointer-events-none absolute inset-0 text-teal [mask-image:radial-gradient(ellipse_at_70%_50%,black,transparent_75%)]"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading index="07" label="BIM & Digital" title={bim.title} />
            <p className="lead mt-8 text-paper/70" data-reveal>
              {bim.text}
            </p>

            <ul className="mt-12 border-b border-white/10">
              {bim.items.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-5 border-t border-white/10 py-4"
                  data-reveal
                  style={{ "--delay": `${i * 0.08}s` } as React.CSSProperties}
                >
                  <span className="font-mono text-xs text-teal">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-xl font-semibold tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:col-span-6" data-reveal>
            <svg viewBox="0 0 600 560" fill="none" className="h-auto w-full" aria-hidden>
              <g className="stroke-paper/10">
                {ground.map((d, i) => (
                  <path key={i} d={d} />
                ))}
              </g>
              <g className="stroke-teal" strokeWidth="1.25">
                {[...slabs, ...columns].map((d, i) => (
                  <path key={i} d={d} pathLength={1} className="draw-path" />
                ))}
              </g>
              {corners.map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="3.5" className="fill-gold" />
              ))}
            </svg>

            <div className="absolute bottom-0 left-0 border border-white/15 bg-navy/80 px-6 py-5 backdrop-blur">
              <p className="text-4xl font-semibold tracking-tight">{bim.highlight.value}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-paper/60">
                {bim.highlight.label}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
