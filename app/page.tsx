import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import ContactCTA from "@/components/sections/ContactCTA";
import Pillars from "@/components/sections/Pillars";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Pillars />
      <Services />
      <ContactCTA />
    </>
  );
}