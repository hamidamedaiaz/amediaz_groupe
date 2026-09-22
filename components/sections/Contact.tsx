import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ui/ContactForm";
import { contact } from "@/lib/content";
import { site } from "@/lib/site";

export function Contact() {
  const details = [
    {
      label: "Téléphone",
      value: site.contact.phone,
      href: site.contact.phone && `tel:${site.contact.phone.replace(/\s/g, "")}`,
    },
    { label: "Email", value: site.contact.email, href: site.contact.email && `mailto:${site.contact.email}` },
    { label: "Adresse", value: site.contact.address, href: null },
  ];

  return (
    <section id="contact" className="section section-navy">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] opacity-60" data-reveal>
              <span className="geo-dot" aria-hidden />
              09 — Contact
            </p>
            <h2 className="h-display mt-6" data-reveal>
              {contact.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="lead mt-8 text-paper/70" data-reveal>
              {contact.intro}
            </p>

            <dl className="mt-12 space-y-6" data-reveal>
              {details.map((d) => (
                <div key={d.label}>
                  <dt className="font-mono text-xs uppercase tracking-[0.16em] text-paper/40">{d.label}</dt>
                  <dd className="mt-1 text-lg">
                    {d.value && d.href ? (
                      <a href={d.href} className="link">
                        {d.value}
                      </a>
                    ) : (
                      (d.value ?? <span className="text-paper/40">À renseigner</span>)
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6 lg:pt-12" data-reveal>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
