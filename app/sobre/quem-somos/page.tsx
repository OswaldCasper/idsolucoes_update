import PageHeader from "@/components/PageHeader";
import QuemSomosIntro from "@/components/sections/QuemSomosIntro";
import Certifications from "@/components/sections/Certifications";
import Stats from "@/components/sections/Stats";
import WhyIDS from "@/components/sections/WhyIDS";
import Pillars from "@/components/sections/Pillars";

export default function QuemSomosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre a IDS"
        title="Quem"
        titleAccent="Somos"
        description="Serviços que capacitam, conectam e desenvolvem — conheça a empresa por trás das soluções."
        image="/Image_9.jpeg"
        imageAlt="Equipa Império Dourado Soluções"
      />
      <QuemSomosIntro />
      <Certifications />
      <Stats />
      <WhyIDS />
      <Pillars />
    </>
  );
}