import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/logo-transparent.png';
import logo2 from '../../assets/logo2-transparent.png';

export function Logo({ className = "", imgClassName = "h-8", variant = 1 }: { className?: string; imgClassName?: string; variant?: 1 | 2 }) {
  const logoSrc = variant === 1 ? logo1 : logo2;
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <img src={logoSrc} alt="Riadi Logo" className={`${imgClassName} w-auto`} />
    </Link>
  );
}
