/**
 * Contact : coordonnées + carte à gauche, formulaire à droite.
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
    { label: "Téléphone", icon: Phone, content: <a href={site.contact.phoneHref} className="hover:text-gold-light">{site.contact.phone}</a> },
    {
      label: "E-mail",
      icon: Mail,
      content: (
        <a href={`mailto:${site.contact.email}`} className="break-all hover:text-gold-light">
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
    <section id="contact" className="section">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Coordonnées */}
          <div className="lg:col-span-5">
            <p className="eyebrow" data-reveal>
              Contact
            </p>
            <Title className="h-section mt-6" data-reveal>
              {contactForm.title}
            </Title>

            <ul className="mt-12 space-y-7" data-reveal>
              {details.map(({ label, icon: Icon, content }) => (
                <li key={label} className="flex gap-4">
                  <Icon size={18} className="mt-1 shrink-0 text-gold" aria-hidden />
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-steel">{label}</p>
                    <div className="mt-1 text-lg">{content}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="media-frame mt-12 aspect-[16/10]" data-reveal>
              <iframe
                src={mapSrc}
                title={`Localisation de ${site.name} à Témara`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 opacity-80 grayscale"
              />
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-7" data-reveal>
            <div className="bg-surface p-6 sm:p-10 md:p-14">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
