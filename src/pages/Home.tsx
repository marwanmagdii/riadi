import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ParticleEffectForHero from "../components/ui/particle-effect-for-hero";
import AboutUs from "../components/ui/about-us";
import HowItWorks from "../components/ui/how-it-works";
import ContactSection from "../components/ui/contact-section";
import Footer from "../components/ui/footer";
import { PartnerSection } from "../components/ui/partner-section";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-[#0A0E0C] selection:bg-secondary selection:text-white">
      <ParticleEffectForHero />
      <AboutUs />
      <HowItWorks />
      <PartnerSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
