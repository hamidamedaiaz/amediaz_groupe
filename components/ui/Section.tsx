import type { ReactNode } from "react";
import type { SectionId } from "@/lib/site";
import { Container } from "./Container";

type SectionProps = {
  id: SectionId;
  label: string;
  title: string | readonly string[];
  intro?: string;
  children?: ReactNode;
};

// Mise en page commune : titre à gauche, introduction à droite (grand écran), puis contenu.
export function Section({ id, label, title, intro, children }: SectionProps) {
  const lines = typeof title === "string" ? [title] : title;

  return (
    <section id={id} className="section">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow text-teal!" data-reveal>
              {label}
            </p>
            <h2 className="h-section mt-5" data-reveal>
              {lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>
          {intro && (
            <p className="lead lg:justify-self-end" data-reveal>
              {intro}
            </p>
          )}
        </div>
        {children && <div className="mt-12 md:mt-16">{children}</div>}
      </Container>
    </section>
  );
}
