"use client";

/**
 * Formulaire de demande de devis.
 * Sans backend pour l'instant : à l'envoi, la messagerie de l'utilisateur s'ouvre avec
 * la demande pré-remplie à destination de l'adresse définie dans data/site.ts.
 * TODO : brancher un service d'envoi (route API + fournisseur e-mail) si nécessaire.
 */

import { ArrowRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { contactForm } from "@/data/contact";
import { site } from "@/data/site";

const textFields = [
  { name: "nom", label: "Nom", type: "text", autoComplete: "name", required: true },
  { name: "societe", label: "Société", type: "text", autoComplete: "organization", required: false },
  { name: "telephone", label: "Téléphone", type: "tel", autoComplete: "tel", required: true },
  { name: "email", label: "E-mail", type: "email", autoComplete: "email", required: true },
] as const;

/** Groupe de choix uniques présentés sous forme de puces (boutons radio stylés). */
function ChoiceGroup({ name, legend, options }: { name: string; legend: string; options: string[] }) {
  return (
    <fieldset className="sm:col-span-2">
      <legend className="text-sm font-medium">{legend}</legend>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {options.map((opt) => (
          <label key={opt}>
            <input type="radio" name={name} value={opt} className="peer sr-only" />
            <span className="chip peer-checked:border-brand peer-checked:bg-brand peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold">
              {opt}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim() || "—";

    const subject = `Demande de devis — ${get("nom")}`;
    const body = [
      `Nom : ${get("nom")}`,
      `Société : ${get("societe")}`,
      `Téléphone : ${get("telephone")}`,
      `E-mail : ${get("email")}`,
      `Type de besoin : ${get("besoin")}`,
      `Secteur : ${get("secteur")}`,
      "",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Votre messagerie va s’ouvrir avec la demande pré-remplie : il ne reste qu’à l’envoyer.");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
      {textFields.map((f) => (
        <label key={f.name} className="block">
          <span className="text-sm font-medium">
            {f.label}
            {f.required && <span className="text-brand"> *</span>}
          </span>
          <input name={f.name} type={f.type} autoComplete={f.autoComplete} required={f.required} className="field" />
        </label>
      ))}

      <ChoiceGroup name="besoin" legend="Type de besoin" options={contactForm.needs} />
      <ChoiceGroup name="secteur" legend="Secteur" options={contactForm.sectors} />

      <label className="block sm:col-span-2">
        <span className="text-sm font-medium">
          Message<span className="text-brand"> *</span>
        </span>
        <textarea name="message" rows={4} required className="field resize-y" />
      </label>

      <div className="flex flex-wrap items-center gap-6 sm:col-span-2">
        <button type="submit" className="btn btn-primary">
          {contactForm.submitLabel}
          <ArrowRight size={18} aria-hidden />
        </button>
        <p aria-live="polite" className="text-sm text-muted">
          {status}
        </p>
      </div>
    </form>
  );
}
