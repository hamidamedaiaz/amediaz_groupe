/**
 * Mise en page racine : polices, métadonnées SEO globales, header, footer
 * et observateur des animations au scroll.
 */

import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const interTight = Inter_Tight({ variable: "--font-inter-tight", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: ["topographie", "géomètre topographe", "foncier", "BIM", "implantation", "cadastre", "Témara", "Rabat", "Maroc"],
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: "/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${site.name} — ${site.slogan}` }],
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/og-image.jpg"] },
};

export const viewport: Viewport = {
  themeColor: "#0b1d2d",
};

// Données structurées : l'entreprise (schema.org ProfessionalService).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legalName,
  slogan: site.slogan,
  url: site.url,
  logo: new URL("/brand/logo-navy.png", site.url).toString(),
  telephone: site.contact.phone,
  email: site.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenue Abdelkarim El Khatabi, Imm 30, Appt 4",
    addressLocality: "Témara",
    addressCountry: "MA",
  },
  founder: { "@type": "Person", name: "Khalid AMEDIAZ", jobTitle: "Ingénieur Géomètre Topographe, BIM Manager" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${interTight.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Active les animations au scroll uniquement si JS est disponible */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </head>
      <body>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-ivory focus:px-4 focus:py-2 focus:text-navy"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
