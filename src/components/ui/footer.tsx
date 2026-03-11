import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12 px-6 md:px-12 lg:px-24 text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-6">
        <svg viewBox="0 0 130 40" className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg">
            <g transform="skewX(-15) translate(15, 0)">
                <text x="0" y="32" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="36" fill="#ffffff" letterSpacing="-2">RIADI</text>
                <path d="M 31 9 L 36 4 L 41 9 L 36 14 Z" fill="#B84C41"/>
            </g>
        </svg>
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Riadi Sports. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
