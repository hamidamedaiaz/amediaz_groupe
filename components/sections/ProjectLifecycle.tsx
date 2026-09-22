import { Section } from "@/components/ui/Section";
import { lifecycle } from "@/lib/content";

export function ProjectLifecycle() {
  return (
    <Section id="cycle-projet" label="Cycle de vie du projet" title={lifecycle.title}>
      {/* Étapes enchaînées dans un seul parcours */}
      <ol className="flex flex-wrap items-center gap-x-3 gap-y-4" data-reveal>
        {lifecycle.steps.map((step, i) => (
          <li key={step} className="flex items-center gap-3">
            <span className="tag">{step}</span>
            {i < lifecycle.steps.length - 1 && (
              <span className="text-teal" aria-hidden>
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
