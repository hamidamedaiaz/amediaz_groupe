"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const fields = [
  { name: "nom", label: "Nom", type: "text", autoComplete: "name", required: true },
  { name: "entreprise", label: "Entreprise", type: "text", autoComplete: "organization", required: false },
  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
] as const;

const inputClass =
  "mt-2 w-full border-b border-white/20 bg-transparent py-3 text-lg text-paper outline-none transition-colors placeholder:text-paper/30 focus:border-teal";

// V1 sans backend : ouvre le client mail avec la demande pré-remplie.
export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!site.contact.email) {
      setStatus("Le formulaire sera bientôt actif. Merci de votre patience.");
      return;
    }
    const data = new FormData(e.currentTarget);
    const subject = `Demande de projet — ${data.get("nom")}`;
    const body = [
      `Nom : ${data.get("nom")}`,
      `Entreprise : ${data.get("entreprise") || "—"}`,
      `Email : ${data.get("email")}`,
      "",
      String(data.get("message")),
    ].join("\n");
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Votre messagerie va s’ouvrir pour envoyer la demande.");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {fields.map((f) => (
        <label key={f.name} className="block">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-paper/50">
            {f.label}
            {f.required && " *"}
          </span>
          <input
            name={f.name}
            type={f.type}
            autoComplete={f.autoComplete}
            required={f.required}
            className={inputClass}
          />
        </label>
      ))}
      <label className="block">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-paper/50">Message *</span>
        <textarea name="message" rows={4} required className={`${inputClass} resize-none`} />
      </label>

      <div className="flex flex-wrap items-center gap-6 pt-4">
        <button type="submit" className="btn btn-primary hover:bg-paper! hover:text-navy!">
          Envoyer votre demande
          <span aria-hidden>→</span>
        </button>
        <p aria-live="polite" className="text-sm text-paper/60">
          {status}
        </p>
      </div>
    </form>
  );
}
