"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: number;
  suffix?: string;
  /** Affiche les nombres < 10 sur deux chiffres (04). */
  pad?: boolean;
};

const format = (n: number, pad?: boolean) => (pad ? String(n).padStart(2, "0") : String(n));

/** Nombre qui s'anime de 0 à `value` lorsqu'il devient visible. */
export function Counter({ value, suffix = "", pad }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  // Rendu serveur et sans JS : valeur finale directement.
  const [display, setDisplay] = useState(format(value, pad));

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(format(Math.round(v), pad)),
    });
    return () => controls.stop();
  }, [inView, reduce, value, pad]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}
