import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './logo';

export default function Footer() {
  return (
    <footer 
      className="border-t border-white/10 py-6 px-6 md:px-12 lg:px-24 text-center"
      style={{ 
        backgroundImage: 'url(/assets/images/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#050505'
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-3">
        <Logo className="justify-center" imgClassName="h-10 md:h-12" />
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://apps.apple.com/eg/app/riadi/id6770214844"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg overflow-hidden border border-white/15 transition-transform duration-300 hover:scale-105"
            aria-label="Download Riadi on the App Store"
          >
            <img
              src="/assets/images/app-store-badge.png?v=2"
              alt="Download on the App Store"
              className="h-10 w-auto object-contain block"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.riadi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg overflow-hidden border border-white/15 transition-transform duration-300 hover:scale-105"
            aria-label="Get Riadi on Google Play"
          >
            <img
              src="/assets/images/google-play-badge.png?v=2"
              alt="Download on Google Play"
              className="h-10 w-auto object-contain block"
            />
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-[10px] text-primary uppercase tracking-widest font-bold">
          <Link to="/contact" className="hover:text-primary/80 transition-colors">Contact Us</Link>
          <Link to="/terms" className="hover:text-primary/80 transition-colors">Terms & Conditions</Link>
          <Link to="/privacy" className="hover:text-primary/80 transition-colors">Privacy Policy</Link>
          <a href="/support" className="hover:text-primary/80 transition-colors">Support</a>
          <a href="/delete-account" className="hover:text-primary/80 transition-colors">Delete Account</a>
        </div>
        <p className="text-primary text-sm font-light opacity-70 tracking-wide">
          © {new Date().getFullYear()} Riadi Sports. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
