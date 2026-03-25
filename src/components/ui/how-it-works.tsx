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
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Your Game, <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse">Simplified</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Everything you need to play, compete, and manage in one seamless platform.
          </p>
        </div>
        <div className="w-full overflow-hidden">
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-8 snap-x [&::-webkit-scrollbar]:hidden">
            {steps.map((step, i) => (
              <div key={i} className="snap-start shrink-0 w-[280px] md:w-auto bg-[#111814] border border-white/5 p-8 rounded-3xl hover:border-secondary/30 transition-colors group">
                <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/50 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
