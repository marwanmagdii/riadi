import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FeatureSection from '../components/ui/feature-section';
import Footer from '../components/ui/footer';

export default function HowItWorksPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0E0C] text-white selection:bg-secondary selection:text-white relative">
      {/* Simple Header */}
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-20 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center space-x-3">
            <svg viewBox="0 0 130 40" className="h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
              <g transform="skewX(-15) translate(15, 0)">
                <text x="0" y="32" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="36" fill="#ffffff" letterSpacing="-2">RIADI</text>
                <path d="M 31 9 L 36 4 L 41 9 L 36 14 Z" fill="#B84C41"/>
              </g>
            </svg>
          </div>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </nav>

      <div className="pt-20">
        <FeatureSection />
      </div>
      <Footer />
    </div>
  );
}
