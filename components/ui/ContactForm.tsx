"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const fields = [
  { name: "nom", label: "Nom", type: "text", autoComplete: "name", required: true },
  { name: "entreprise", label: "Entreprise", type: "text", autoComplete: "organization", required: false },
  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
] as const;

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
    <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
      {fields.map((f) => (
        <label key={f.name} className={`block ${f.name === "email" ? "sm:col-span-2" : ""}`}>
          <span className="text-sm font-medium">
            {f.label}
            {f.required && <span className="text-teal"> *</span>}
          </span>
          <input name={f.name} type={f.type} autoComplete={f.autoComplete} required={f.required} className="field" />
        </label>
      ))}
      <label className="block sm:col-span-2">
        <span className="text-sm font-medium">
          Message<span className="text-teal"> *</span>
        </span>
        <textarea name="message" rows={5} required className="field resize-y" />
      </label>

      <div className="flex flex-wrap items-center gap-6 sm:col-span-2">
        <button type="submit" className="btn btn-primary">
          Envoyer votre demande
        </button>
        <p aria-live="polite" className="text-sm text-muted">
          {status}
        </p>
      </div>
    </form>
  );
}
