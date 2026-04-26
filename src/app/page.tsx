import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Material from "@/components/Material";
import Skills from "@/components/Skills";
import Offer from "@/components/Offer";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Material />
        <Skills />
        <Offer />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
