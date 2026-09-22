import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { founder } from "@/lib/content";

export function Founder() {
  return (
    <section id="fondateur" className="section section-paper">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden border border-ink/15 md:col-span-5" data-reveal>
            {founder.photo ? (
              <Image src={founder.photo} alt={founder.name} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
            ) : (
              <div className="bg-grid absolute inset-0 flex items-center justify-center text-ink">
                <Image src="/brand/monogram-ag.png" alt="" width={488} height={474} className="w-1/3 opacity-15" />
                <p className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  Photo à venir
                </p>
              </div>
            )}
          </div>

          <div className="md:col-span-7">
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] opacity-60" data-reveal>
              <span className="geo-dot" aria-hidden />
              08 — Le fondateur
            </p>
            <h2 className="h-section mt-6" data-reveal>
              {founder.name}
            </h2>
            <ul className="mt-8 space-y-2" data-reveal>
              {founder.roles.map((role) => (
                <li key={role} className="flex items-center gap-4 text-lg">
                  <span className="h-px w-6 bg-teal" aria-hidden />
                  {role}
                </li>
              ))}
            </ul>
            <p className="lead mt-10 text-muted" data-reveal>
              {founder.text}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
