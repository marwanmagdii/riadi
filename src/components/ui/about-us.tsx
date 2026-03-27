import React from 'react';

export default function AboutUs() {
  return (
    <section id="about" className="relative w-full bg-[#0A0E0C] text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h4 className="text-lg md:text-xl font-bold tracking-[0.2em] text-secondary uppercase mb-3">About Us</h4>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Empowering the Sports Community</h2>
            <p className="text-lg text-white/60 leading-relaxed">
              Riadi is more than just a booking platform. We are building the ultimate ecosystem for sports enthusiasts, facility owners, and tournament organizers. Our mission is to make sports accessible, organized, and community-driven.
            </p>
          </div>
          <div className="relative group flex items-center justify-center">
            <div className="absolute -inset-4 bg-secondary/20 rounded-[2rem] blur-2xl group-hover:bg-secondary/30 transition-all duration-500" />
            <img 
              src="/assets/images/logo.png" 
              alt="Riadi Logo" 
              className="relative max-w-[80%] h-auto object-contain rounded-3xl transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#111814] border border-white/10 rounded-3xl p-8 hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center mb-6 text-2xl">
              🎯
            </div>
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-white/60 leading-relaxed">
              To seamlessly connect players with the best facilities and communities, making it easier than ever to play the sports you love.
            </p>
          </div>
          <div className="bg-[#111814] border border-white/10 rounded-3xl p-8 hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-xl flex items-center justify-center mb-6 text-2xl">
              🌍
            </div>
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-white/60 leading-relaxed">
              To become the leading sports technology platform in the region, fostering active lifestyles and thriving local sports ecosystems.
            </p>
          </div>
          <div className="bg-[#111814] border border-white/10 rounded-3xl p-8 hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 bg-blue-500/20 text-blue-500 rounded-xl flex items-center justify-center mb-6 text-2xl">
              🤝
            </div>
            <h3 className="text-xl font-bold mb-3">Our Values</h3>
            <p className="text-white/60 leading-relaxed">
              Community first, relentless innovation, and a commitment to providing the best possible experience for every user.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
