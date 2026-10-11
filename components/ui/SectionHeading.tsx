import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** `split` : titre à gauche, intro à droite (grand écran). */
  layout?: "stack" | "split";
  as?: "h1" | "h2";
  className?: string;
};

/** En-tête de section : libellé, titre, introduction. */
export function SectionHeading({ eyebrow, title, intro, layout = "split", as: Tag = "h2", className = "" }: SectionHeadingProps) {
  return (
    <div
      className={`grid gap-6 ${layout === "split" ? "lg:grid-cols-12 lg:items-end lg:gap-16" : ""} ${className}`}
    >
      <div className={layout === "split" ? "lg:col-span-7" : ""}>
        <p className="eyebrow" data-reveal>
          {eyebrow}
        </p>
        <Tag className="h-section mt-6" data-reveal style={{ "--delay": "0.08s" } as React.CSSProperties}>
          {title}
        </Tag>
      </div>
      {intro && (
        <p
          className={`lead ${layout === "split" ? "lg:col-span-5 lg:justify-self-end" : ""}`}
          data-reveal
          style={{ "--delay": "0.16s" } as React.CSSProperties}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
