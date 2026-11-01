import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './logo';

export default function Footer() {
  return (
    <footer 
      className="border-t border-white/10 py-8 px-6 md:px-12 lg:px-24 text-center"
      style={{ 
        backgroundImage: 'url(/assets/images/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#050505'
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-5">
        <Logo className="justify-center" imgClassName="h-10 md:h-12" />

        {/* Store Badges + QR Codes */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://apps.apple.com/eg/app/riadi/id6770214844"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 bg-black/40 border border-white/15 rounded-2xl p-3 transition-transform duration-300 hover:scale-105"
            aria-label="Download Riadi on the App Store"
          >
            <img
              src="/assets/images/qr-app-store.png"
              alt="App Store QR Code"
              loading="lazy"
              decoding="async"
              className="w-24 h-24 rounded-lg bg-white p-1 object-contain"
            />
            <img
              src="/assets/images/app-store-badge.png?v=2"
              alt="Download on the App Store"
              loading="lazy"
              decoding="async"
              className="h-9 w-auto object-contain rounded-md border border-white/10 block"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.riadi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 bg-black/40 border border-white/15 rounded-2xl p-3 transition-transform duration-300 hover:scale-105"
            aria-label="Get Riadi on Google Play"
          >
            <img
              src="/assets/images/qr-google-play.png"
              alt="Google Play QR Code"
              loading="lazy"
              decoding="async"
              className="w-24 h-24 rounded-lg bg-white p-1 object-contain"
            />
            <img
              src="/assets/images/google-play-badge.png?v=2"
              alt="Download on Google Play"
              loading="lazy"
              decoding="async"
              className="h-9 w-auto object-contain rounded-md border border-white/10 block"
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
