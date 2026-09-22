import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { navigation, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-surface">
      <Container className="py-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="flex items-start gap-5">
            <Image
              src="/brand/monogram-ag-reverse.png"
              alt=""
              width={488}
              height={474}
              className="h-11 w-auto"
            />
            <div>
              <p className="font-display font-semibold tracking-[0.08em]">{site.name}</p>
              <p className="mt-1 text-sm text-muted">{site.tagline}</p>
              <p className="mt-6 text-sm text-muted italic">{site.slogan}</p>
            </div>
          </div>

          <nav aria-label="Navigation du pied de page">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-muted">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="hover:text-paper">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 text-sm text-muted md:flex-row md:justify-between">
          <p>Témara · Maroc</p>
          <p>ICE {site.ice ?? "À renseigner"}</p>
          <p>© {new Date().getFullYear()} {site.name}</p>
        </div>
      </Container>
    </footer>
  );
}
