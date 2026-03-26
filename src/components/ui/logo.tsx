import React from 'react';
import { Link } from 'react-router-dom';

export function Logo({ className = "", imgClassName = "h-8", variant = 1 }: { className?: string; imgClassName?: string; variant?: 1 | 2 }) {
  const logoSrc = variant === 1 ? "/logo_main.png" : "/logo2_main.png";
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <img src={logoSrc} alt="Riadi Logo" className={`${imgClassName} w-auto`} />
    </Link>
  );
}
