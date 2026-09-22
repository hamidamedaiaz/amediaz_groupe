import { ContactForm } from "@/components/ui/ContactForm";
import { Section } from "@/components/ui/Section";
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
    <Section id="contact" label="Contact" title={contact.title} intro={contact.intro}>
      <div className="grid gap-12 md:grid-cols-12">
        <dl className="space-y-6 md:col-span-4" data-reveal>
          {details.map((d) => (
            <div key={d.label}>
              <dt className="eyebrow">{d.label}</dt>
              <dd className="mt-1 text-lg font-medium">
                {d.value && d.href ? (
                  <a href={d.href} className="link">
                    {d.value}
                  </a>
                ) : (
                  (d.value ?? <span className="font-normal text-muted">À renseigner</span>)
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="md:col-span-8" data-reveal>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
