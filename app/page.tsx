import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import ServicesBanner from "@/components/ServicesBanner";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import CoverageArea from "@/components/CoverageArea";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <TrustBadges />
        <ServicesBanner id="servicios" />
        <Portfolio />
        <WhyUs id="nosotros" />
        <CoverageArea />
        <Process />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
