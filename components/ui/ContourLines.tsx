/**
 * Courbes de niveau décoratives, générées à partir de formes organiques
 * (aucune image externe). Tracées une fois à l'apparition (voir globals.css).
 * Toujours en `aria-hidden` : purement décoratif.
 */

type ContourLinesProps = {
  className?: string;
  /** Nombre de courbes concentriques. */
  count?: number;
  /** Variation de forme : change l'allure du « relief ». */
  seed?: number;
};

const SIZE = 600;

// Construit une courbe fermée lissée (Catmull-Rom → Bézier) autour du centre.
function contourPath(radius: number, seed: number, level: number) {
  const steps = 48;
  const pts: [number, number][] = [];
  for (let k = 0; k < steps; k++) {
    const t = (k / steps) * Math.PI * 2;
    const wobble =
      1 +
      0.14 * Math.sin(3 * t + seed) +
      0.07 * Math.sin(5 * t + seed * 1.7 + level * 0.35) +
      0.04 * Math.cos(7 * t - seed);
    const r = radius * wobble;
    pts.push([SIZE / 2 + r * Math.cos(t) + level * 4, SIZE / 2 + r * Math.sin(t) * 0.78 - level * 3]);
  }
  const p = (i: number) => pts[(i + steps) % steps];
  let d = `M${p(0)[0].toFixed(1)},${p(0)[1].toFixed(1)}`;
  for (let i = 0; i < steps; i++) {
    const [p0, p1, p2, p3] = [p(i - 1), p(i), p(i + 1), p(i + 2)];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d + "Z";
}

export function ContourLines({ className = "", count = 9, seed = 1 }: ContourLinesProps) {
  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      fill="none"
      aria-hidden
      className={`contour-lines pointer-events-none ${className}`}
      data-reveal
    >
      {Array.from({ length: count }, (_, i) => (
        <path
          key={i}
          d={contourPath(40 + i * 30, seed, i)}
          pathLength={1}
          className="contour-path"
          stroke="currentColor"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
          style={{ "--i": i } as React.CSSProperties}
        />
      ))}
    </svg>
  );
}
