import React from 'react';
import { Link } from 'react-router-dom';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-1 font-bold italic tracking-tighter text-3xl ${className}`}>
      <span className="text-white relative flex items-center">
        R
        <span className="text-secondary text-2xl -mt-4 ml-0.5 mr-0.5">›</span>
        IADI
      </span>
    </Link>
  );
}
