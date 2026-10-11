import type { ReactNode } from "react";

type SectionHeadingProps = {
  /** Petit badge « pilule » au-dessus du titre. */
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** `center` : titre et intro centrés ; `left` : alignés à gauche. */
  align?: "center" | "left";
  as?: "h1" | "h2";
  className?: string;
};

/** En-tête de section : badge, titre (H2), introduction courte. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto max-w-[44rem] text-center" : "max-w-[44rem]"} ${className}`}>
      <p className="badge" data-reveal>
        {eyebrow}
      </p>
      <Tag className="h-section mt-4" data-reveal style={{ "--delay": "0.06s" } as React.CSSProperties}>
        {title}
      </Tag>
      {intro && (
        <p
          className={`lead mt-4 ${centered ? "mx-auto" : ""}`}
          data-reveal
          style={{ "--delay": "0.12s" } as React.CSSProperties}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
