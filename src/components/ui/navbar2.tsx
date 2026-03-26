import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Logo } from './logo';

export function NavBar2({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 border border-white/10 rounded-full overflow-hidden shadow-2xl",
        className,
      )}
      style={{ 
        backgroundImage: 'url(/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="px-4 sm:px-6 lg:px-8 h-12 md:h-14 flex items-center relative">
        <Link 
          to="/" 
          className="flex items-center gap-2 transition-colors group absolute left-4 sm:left-6 lg:left-8"
        >
          <ArrowLeft className="w-4 h-4 text-secondary group-hover:text-secondary/80" />
          <span className="font-bold text-primary group-hover:text-primary/80 text-[10px] sm:text-xs uppercase tracking-wider">
            Back to Home
          </span>
        </Link>
        <div className="mx-auto">
          <Logo imgClassName="h-6 md:h-8" />
        </div>
        <div className="hidden sm:block w-32 absolute right-4 sm:right-6 lg:right-8"></div>
      </div>
    </div>
  );
}
