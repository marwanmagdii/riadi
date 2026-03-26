import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../images';

export function Logo({ className = "", imgClassName = "h-8", variant = 1 }: { className?: string; imgClassName?: string; variant?: 1 | 2 }) {
  const logoSrc = variant === 1 ? IMAGES.LOGO_BASE64 : IMAGES.LOGO2_BASE64;
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <img src={logoSrc} alt="Riadi Logo" className={`${imgClassName} w-auto`} referrerPolicy="no-referrer" />
    </Link>
  );
}
