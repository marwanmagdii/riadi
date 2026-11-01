import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Logo } from './logo';

export function NavBar2({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[94%] sm:w-[95%] max-w-7xl z-50 transition-all duration-300 border border-white/10 rounded-full overflow-hidden shadow-2xl bg-[url('/assets/images/bg.png')] bg-cover bg-center",
        className,
      )}
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(12px)'
      }}
    >
      <div className="px-4 sm:px-6 lg:px-8 h-12 md:h-14 flex items-center justify-between relative">
        <Link 
          to="/" 
          className="flex items-center gap-1.5 sm:gap-2 transition-colors group z-10 shrink-0"
        >
          <ArrowLeft className="w-4 h-4 text-secondary group-hover:text-secondary/80 shrink-0" />
          <span className="font-bold text-primary group-hover:text-primary/80 text-[10px] sm:text-xs uppercase tracking-wider">
            Back<span className="hidden sm:inline"> to Home</span>
          </span>
        </Link>
        <div className="absolute left-1/2 -translate-x-1/2">
          <Logo imgClassName="h-5 sm:h-6 md:h-8" />
        </div>
        <div className="w-12 sm:w-24 shrink-0" />
      </div>
    </div>
  );
}
