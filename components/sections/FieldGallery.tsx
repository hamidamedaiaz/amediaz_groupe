/**
 * « Notre expertise sur le terrain » : chaîne de photos réelles de chantier, pleine largeur,
 * qui avance d'une photo vers la gauche en boucle (voir PhotoChain).
 * Liste et ordre des photos : data/home.ts (fieldGallery).
 */

import { fieldGallery } from "@/data/home";
import { Container } from "@/components/ui/Container";
import { PhotoChain } from "@/components/ui/PhotoChain";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FieldGallery() {
  return (
    <section id="terrain" className="section overflow-hidden">
      <Container>
        <SectionHeading eyebrow="Preuves terrain" title="Notre expertise sur le terrain" />
      </Container>
      <div className="mt-14 md:mt-20" data-reveal>
        <PhotoChain items={fieldGallery} label="Photos de chantier" />
      </div>
    </section>
  );
}
