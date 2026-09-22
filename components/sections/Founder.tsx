import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { founder } from "@/lib/content";

export function Founder() {
  return (
    <Section id="fondateur" label="Fondateur" title={founder.name}>
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div
          className="relative aspect-[4/5] overflow-hidden rounded-md bg-surface md:col-span-5"
          data-reveal
        >
          {founder.photo ? (
            <Image
              src={founder.photo}
              alt={founder.name}
              fill
              sizes="(min-width: 768px) 35vw, 100vw"
              className="object-cover"
            />
          ) : (
            <p className="absolute inset-0 flex items-center justify-center text-sm text-muted">Photo à venir</p>
          )}
        </div>

        <div className="md:col-span-7" data-reveal>
          <ul className="flex flex-wrap gap-3">
            {founder.roles.map((role) => (
              <li key={role} className="tag">
                {role}
              </li>
            ))}
          </ul>
          <p className="lead mt-8">{founder.text}</p>
        </div>
      </div>
    </Section>
  );
}
