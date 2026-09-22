// Courbes de niveau générées de façon déterministe (aucun aléatoire,
// donc rendu identique serveur/client).
function contour(cx: number, cy: number, r: number, k: number, seed: number) {
  const points: string[] = [];
  const steps = 120;
  for (let i = 0; i < steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const d =
      1 +
      0.12 * Math.sin(2 * t + seed + k * 0.18) +
      0.07 * Math.sin(3 * t - seed * 1.3 + k * 0.11) +
      0.04 * Math.sin(5 * t + k * 0.35);
    const x = cx + r * d * Math.cos(t);
    const y = cy + r * d * 0.82 * Math.sin(t);
    points.push(`${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return `M${points.join("L")}Z`;
}

const paths = [
  ...Array.from({ length: 14 }, (_, k) => contour(430, 400, 40 + k * 26, k, 0.6)),
  ...Array.from({ length: 5 }, (_, k) => contour(150, 170, 18 + k * 22, k, 2.1)),
];

type TopoLinesProps = {
  className?: string;
  animate?: boolean;
};

export function TopoLines({ className = "", animate = false }: TopoLinesProps) {
  return (
    <svg
      viewBox="0 0 800 800"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
      className={`${animate ? "topo-draw" : ""} ${className}`}
    >
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          pathLength={1}
          vectorEffect="non-scaling-stroke"
          style={{ "--i": i } as React.CSSProperties}
        />
      ))}
    </svg>
  );
}
