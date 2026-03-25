import React, { useEffect } from 'react';
import { NavBar2 } from '../components/ui/navbar2';
import Footer from '../components/ui/footer';
import ContactSection from '../components/ui/contact-section';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0E0C] text-white selection:bg-secondary selection:text-white flex flex-col relative">
      <NavBar2 />

      <div className="flex-1 pt-24 md:pt-32">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
