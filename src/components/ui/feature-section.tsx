import React from 'react';
import { MapPin, Zap, Trophy, Users } from 'lucide-react';
import { BorderRotate } from './animated-gradient-border';

const FeatureCard = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
  <BorderRotate 
    animationMode="auto-rotate" 
    gradientColors={{ 
      primary: 'rgba(28, 63, 41, 0.8)', 
      secondary: 'rgba(184, 76, 65, 0.8)'
    }}
    backgroundColor="#111111"
    borderWidth={2}
    borderRadius={16}
    className="hover:-translate-y-1 transition-transform duration-300 h-full"
  >
    <div className="p-6 flex flex-col gap-4 h-full">
      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-secondary">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5' })}
      </div>
      <h4 className="font-bold text-white text-sm">{title}</h4>
    </div>
  </BorderRotate>
);

export default function FeatureSection() {
  return (
    <section className="pt-12 pb-24 px-6 md:px-12 lg:px-24 bg-[#0A0E0C] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-3">Player Experience</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              What We Provide<br />
              <span className="text-white/60">For a player</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
              Seamlessly book your favorite football pitch in seconds. Join tournaments, play with friends, and enjoy real-time availability with instant Booking.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <FeatureCard icon={<MapPin />} title="Find a Pitch" />
            <FeatureCard icon={<Zap />} title="Book Instantly" />
            <FeatureCard icon={<Trophy />} title="Join Tournaments" />
            <FeatureCard icon={<Users />} title="Play with Friends" />
          </div>
        </div>
      </div>
    </section>
  );
}
