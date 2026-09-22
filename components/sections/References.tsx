import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { references } from "@/lib/content";

export function References() {
  return (
    <Section id="references" label="Références" title={references.title}>
      <ol className="grid gap-6 sm:grid-cols-2">
        {references.items.map((item, i) => (
          <li
            key={item.title}
            className="group flex flex-col"
            data-reveal
            style={{ "--delay": `${(i % 2) * 0.08}s` } as React.CSSProperties}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-surface">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 640px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              ) : (
                <p className="absolute inset-0 flex items-center justify-center text-sm text-muted">
                  Photo du projet à venir
                </p>
              )}
            </div>
            <div className="pt-5">
              <h3 className="h-sub">{item.title}</h3>
              {item.detail && <p className="mt-1 text-muted">{item.detail}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
