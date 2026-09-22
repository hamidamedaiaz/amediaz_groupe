import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { BIMDigital } from "@/components/sections/BIMDigital";
import { Contact } from "@/components/sections/Contact";
import { Expertises } from "@/components/sections/Expertises";
import { Founder } from "@/components/sections/Founder";
import { Hero } from "@/components/sections/Hero";
import { ProjectLifecycle } from "@/components/sections/ProjectLifecycle";
import { References } from "@/components/sections/References";
import { Sectors } from "@/components/sections/Sectors";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertises />
        <ProjectLifecycle />
        <Sectors />
        <References />
        <BIMDigital />
        <Founder />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
