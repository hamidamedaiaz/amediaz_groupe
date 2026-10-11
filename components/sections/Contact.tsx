/**
 * Contact (fond clair, section « feuille ») : coordonnées + carte à gauche, formulaire en carte blanche à droite.
 * `as="h1"` sur la page /contact, `h2` sur l'accueil (hiérarchie des titres).
 */

import { Mail, MapPin, Phone } from "lucide-react";
import { contactForm } from "@/data/contact";
import { site } from "@/data/site";
import { ContactForm } from "@/components/ui/ContactForm";
import { Container } from "@/components/ui/Container";

export function Contact({ as: Title = "h2" }: { as?: "h1" | "h2" }) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.contact.mapQuery)}&output=embed`;

  const details = [
    { label: "Téléphone", icon: Phone, content: <a href={site.contact.phoneHref} className="hover:text-brand">{site.contact.phone}</a> },
    {
      label: "E-mail",
      icon: Mail,
      content: (
        <a href={`mailto:${site.contact.email}`} className="break-all hover:text-brand">
          {site.contact.email}
        </a>
      ),
    },
    {
      label: "Adresse",
      icon: MapPin,
      content: (
        <address className="not-italic">
          {site.contact.address.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
      ),
    },
  ];

  return (
    <section id="contact" className="sheet section bg-paper">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Coordonnées */}
          <div className="lg:col-span-5">
            <p className="eyebrow" data-reveal>
              Contact
            </p>
            <Title className="h-section mt-4" data-reveal>
              {contactForm.title}
            </Title>

            <ul className="mt-10 space-y-6" data-reveal>
              {details.map(({ label, icon: Icon, content }) => (
                <li key={label} className="flex gap-4">
                  <span className="icon-tile shrink-0">
                    <Icon size={17} aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs text-muted">{label}</p>
                    <div className="mt-0.5 text-[1.0625rem] text-ink">{content}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="media-frame mt-10 aspect-[16/10] rounded-2xl border border-rule" data-reveal>
              <iframe
                src={mapSrc}
                title={`Localisation de ${site.name} à Témara`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 grayscale"
              />
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-7" data-reveal>
            <div className="card p-6 shadow-[0_24px_48px_-36px_rgba(15,39,66,0.35)] sm:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
