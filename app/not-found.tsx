/** Page 404. */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContourLines } from "@/components/ui/ContourLines";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-28">
      <ContourLines className="absolute -right-40 top-1/2 w-[48rem] max-w-none -translate-y-1/2 text-brand/10" seed={3.1} />
      <Container className="relative">
        <p className="eyebrow">Erreur 404</p>
        <h1 className="h-display mt-6">Page introuvable</h1>
        <Link href="/" className="btn btn-primary mt-10">
          Retour à l’accueil
          <ArrowRight size={18} aria-hidden />
        </Link>
      </Container>
    </section>
  );
}
