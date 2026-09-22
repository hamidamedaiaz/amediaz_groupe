import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { lifecycle } from "@/lib/content";

// Parcours en serpentin : ligne 1 de gauche à droite, ligne 2 de droite à gauche.
// Unités du SVG en px sur l'axe vertical (hauteur fixe), en ‰ de largeur sur l'axe horizontal.
const ROW_HEIGHT = 176;
const BASE_Y = 24;
const OFFSETS = [0, 14, -6, 10, 0, 0, -10, 8, -12, 0];

const nodes = lifecycle.steps.map((title, i) => {
  const row = i < 5 ? 0 : 1;
  const col = row === 0 ? i : 9 - i;
  return {
    title,
    row,
    col,
    x: 100 + col * 200,
    y: BASE_Y + row * ROW_HEIGHT + OFFSETS[i],
  };
});

const path = `M${nodes.map((n) => `${n.x} ${n.y}`).join("L")}`;

export function ProjectLifecycle() {
  return (
    <section id="cycle-projet" className="section section-paper">
      <Container>
        <SectionHeading index="04" label="Cycle de vie du projet" title={lifecycle.title} />

        {/* Desktop : polyligne topographique */}
        <div className="relative mt-24 hidden lg:block" data-reveal>
          <svg
            viewBox={`0 0 1000 ${ROW_HEIGHT * 2}`}
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full overflow-visible"
            fill="none"
            aria-hidden
          >
            <path d={path} className="stroke-ink/10" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
            <path
              d={path}
              pathLength={1}
              className="draw-path stroke-teal"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <ol className="relative grid grid-cols-5" style={{ gridTemplateRows: `repeat(2, ${ROW_HEIGHT}px)` }}>
            {nodes.map((n, i) => (
              <li
                key={n.title}
                className="relative flex flex-col items-center text-center"
                style={{
                  gridColumnStart: n.col + 1,
                  gridRowStart: n.row + 1,
                  paddingTop: n.y - n.row * ROW_HEIGHT - 6,
                }}
              >
                <span
                  className={`size-3 rounded-full border-2 border-teal bg-paper ${i === 0 || i === 9 ? "border-gold! bg-gold!" : ""}`}
                  aria-hidden
                />
                <span className="mt-5 font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-1 max-w-[12rem] font-semibold">{n.title}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile / tablette : liste verticale */}
        <ol className="relative mt-16 border-l border-ink/15 lg:hidden">
          {lifecycle.steps.map((title, i) => (
            <li key={title} className="relative pb-8 pl-8 last:pb-0" data-reveal>
              <span className="absolute top-1.5 left-[-6.5px] size-3 rounded-full border-2 border-teal bg-paper" aria-hidden />
              <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-lg font-semibold">{title}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
