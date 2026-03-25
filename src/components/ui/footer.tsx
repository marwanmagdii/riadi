import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './logo';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12 px-6 md:px-12 lg:px-24 text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-6">
        <Logo className="opacity-50 hover:opacity-100 transition-opacity justify-center" />
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
          <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <Link to="/policy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>

        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Riadi Sports. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
