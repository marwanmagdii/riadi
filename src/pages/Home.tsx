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
      {/* SEO Definition Block */}
      <div className="sr-only">
        <p>
          <strong>Riadi (رياضي)</strong> is Egypt's all-in-one sports booking platform. Book football fields, padel courts, ping pong, billiards, PlayStation, and esports venues instantly across Cairo, Alexandria, and Giza.
          <br />
          رياضي هي منصة حجز الملاعب والأنشطة الرياضية الأولى في مصر. احجز ملاعب كرة القدم، البادل، تنس الطاولة، البلياردو، البلايستيشن، والرياضات الإلكترونية في القاهرة والإسكندرية والجيزة.
        </p>
      </div>
      <ParticleEffectForHero />
      <AboutUs />
      <HowItWorks />
      <PartnerSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
