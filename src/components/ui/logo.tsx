import React from 'react';
import { Link } from 'react-router-dom';

export function Logo({ className = "", imgClassName = "h-8" }: { className?: string; imgClassName?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <img src="/src/images/Logo_transparent.svg" alt="Riadi Logo" className={`${imgClassName} w-auto`} />
    </Link>
  );
}
