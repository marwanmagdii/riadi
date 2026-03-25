import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PartnerSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0A0E0C] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-[#111814] border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="flex-1 space-y-6">
            <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Own a Facility or Organize Tournaments?
            </h2>
            <p className="text-lg text-white/60 leading-relaxed max-w-xl">
              Partner with Riadi to list your facility, manage bookings, or host your next big tournament. Reach thousands of passionate athletes looking to play and compete.
            </p>
            <div className="pt-4 relative z-50 pointer-events-auto w-full max-w-full">
              <div className="flex flex-col gap-4 w-full sm:w-fit">
                <Link to="/register-field" className="w-full justify-center inline-flex bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 items-center gap-3 shadow-lg shadow-secondary/20 hover:shadow-secondary/40 hover:scale-105 active:scale-95">
                  <span>Register Your Field</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/host-tournament" className="w-full justify-center inline-flex bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 items-center gap-3 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 active:scale-95">
                  <span>Host Tournament</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-3xl blur-2xl pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=800&q=80" 
              alt="Sports Field" 
              className="relative w-full h-auto rounded-3xl border border-white/10 shadow-2xl object-cover aspect-[4/3] pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
