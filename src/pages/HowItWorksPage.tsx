import React, { useEffect } from 'react';
import { NavBar2 } from '../components/ui/navbar2';
import FeatureSection from '../components/ui/feature-section';
import Footer from '../components/ui/footer';

export default function HowItWorksPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0E0C] text-white selection:bg-secondary selection:text-white relative">
      <NavBar2 />

      <div className="pt-12 md:pt-16">
        <FeatureSection />
      </div>
      <Footer />
    </div>
  );
}
