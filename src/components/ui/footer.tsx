import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './logo';

export default function Footer() {
  return (
    <footer 
      className="border-t border-white/10 py-6 px-6 md:px-12 lg:px-24 text-center"
      style={{ 
        background: 'linear-gradient(to bottom, #050505, #0A0E0C)',
        backgroundColor: '#050505'
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-3">
        <Logo className="justify-center" imgClassName="h-10 md:h-12" />
        <div className="flex flex-wrap justify-center gap-4 text-[10px] text-primary uppercase tracking-widest font-bold">
          <Link to="/contact" className="hover:text-primary/80 transition-colors">Contact Us</Link>
          <Link to="/terms" className="hover:text-primary/80 transition-colors">Terms & Conditions</Link>
          <Link to="/policy" className="hover:text-primary/80 transition-colors">Privacy Policy</Link>
        </div>
        <p className="text-primary text-sm font-light opacity-70 tracking-wide">
          © {new Date().getFullYear()} Riadi Sports. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
