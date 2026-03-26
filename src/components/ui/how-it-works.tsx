import React from 'react';
import { Search, CalendarCheck, Trophy, Users } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-6 h-6 text-secondary" />,
    title: "Find Your Field",
    description: "Browse top-rated sports facilities near you with real-time availability and pricing."
  },
  {
    icon: <CalendarCheck className="w-6 h-6 text-secondary" />,
    title: "Instant Booking",
    description: "Secure your pitch in seconds. No more endless phone calls or WhatsApp groups."
  },
  {
    icon: <Trophy className="w-6 h-6 text-secondary" />,
    title: "Join Tournaments",
    description: "Compete in local leagues, track your stats, and climb the leaderboards."
  },
  {
    icon: <Users className="w-6 h-6 text-secondary" />,
    title: "Build Community",
    description: "Connect with other players, find teams, and grow your sports network."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 md:px-12 lg:px-24 bg-[#0A0E0C] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="text-left space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Your Game, <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse">Simplified</span>
              </h2>
              <p className="text-white/60 text-lg">
                Everything you need to play, compete, and manage in one seamless platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="bg-[#111814] border border-white/5 p-6 rounded-3xl hover:border-secondary/30 transition-colors group">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* Phone Frame Mockup */}
            <div className="relative w-[280px] h-[580px] bg-[#050505] rounded-[3rem] border-[8px] border-[#1A1A1A] shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1A1A1A] rounded-b-2xl z-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80" 
                alt="Riadi Player App" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
