import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, Zap, Trophy, Users, Smartphone, 
  CreditCard, Clock, TrendingUp, ChevronLeft, 
  ChevronRight, Share2, Star, Heart, ChevronDown, 
  CheckCircle2, Calendar, BookOpen, User 
} from 'lucide-react';
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
        {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5' })}
      </div>
      <h4 className="font-bold text-white text-sm">{title}</h4>
    </div>
  </BorderRotate>
);

export default function FeatureSection() {
  return (
    <section className="pt-12 pb-24 px-6 md:px-12 lg:px-24 bg-[#0A0E0C] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Mockup Side */}
          <div className="flex-1 w-full flex justify-center transition-all duration-500 lg:order-1">
            <div className="relative w-[300px] h-[600px] bg-white rounded-[3rem] border-[8px] border-[#1A1A1A] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-700">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                <div className="w-32 h-6 bg-[#1A1A1A] rounded-b-3xl"></div>
              </div>
              {/* Header */}
              <div className="bg-[#1A2E20] pt-12 pb-4 px-6 flex items-center justify-between text-white">
                <ChevronLeft className="w-5 h-5" />
                <span className="font-bold text-sm">Booking</span>
                <Share2 className="w-4 h-4" />
              </div>
              {/* Content */}
              <div className="p-4 space-y-4 bg-white h-[calc(100%-112px)] overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40 transition-colors">
                {/* Image */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="w-full h-40 bg-green-600 rounded-2xl overflow-hidden relative shrink-0 cursor-pointer"
                >
                   <img src="https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Pitch" />
                   <div className="absolute bottom-2 left-2 bg-[#1A2E20] text-white text-[10px] px-2 py-1 rounded-lg flex items-center gap-1 font-bold">
                     <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" /> 5
                   </div>
                   <div className="absolute top-2 right-2 w-8 h-8 bg-[#1A2E20]/50 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                     <Heart className="w-4 h-4" />
                   </div>
                </motion.div>
                {/* Title */}
                <div className="shrink-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-black text-lg">Nasr City Stadium</h3>
                    <span className="bg-[#1A2E20] text-white text-[9px] px-2 py-1 rounded flex items-center gap-1 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Football
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-gray-500 text-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> 123 korba st, Nasr City
                    </p>
                    <button 
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: 'Nasr City Stadium',
                            text: 'Check out Nasr City Stadium on Riadi!',
                            url: window.location.href,
                          }).catch(console.error);
                        } else {
                          alert('Share link copied to clipboard!');
                          navigator.clipboard.writeText(window.location.href);
                        }
                      }}
                      className="text-gray-400 hover:text-black transition-colors flex items-center gap-1 text-[10px] font-medium"
                      title="Share"
                    >
                      <Share2 className="w-3 h-3" /> Share
                    </button>
                  </div>
                </div>
                {/* Field Type */}
                <div className="shrink-0">
                  <p className="text-xs text-gray-400 mb-2">Field Type</p>
                  <div className="flex gap-2">
                    {['4x4', '5x5', '6x6', '7x7'].map(type => (
                      <motion.div 
                        key={type} 
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 py-2 text-center text-[10px] font-bold rounded-xl border cursor-pointer transition-colors ${type === '5x5' ? 'border-[#1A2E20] text-[#1A2E20] bg-transparent' : 'border-gray-200 text-gray-500 hover:border-primary/30'}`}
                      >
                        {type}
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* Tabs */}
                <div className="flex gap-2 shrink-0">
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 bg-[#E8F5E9] text-[#1A2E20] border border-[#1A2E20] rounded-xl text-xs font-bold hover:bg-[#D0E7D2] transition-colors"
                  >
                    Book Now
                  </motion.button>
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-2 text-gray-500 border border-gray-200 rounded-xl text-xs font-medium hover:bg-gray-50 transition-colors"
                  >
                    Details
                  </motion.button>
                </div>
                {/* Date */}
                <div className="bg-[#1A2E20] text-white rounded-xl p-3 flex justify-between items-center shrink-0 cursor-pointer hover:bg-[#1A2E20]/90 transition-colors">
                  <ChevronLeft className="w-4 h-4 text-white/50" />
                  <div className="text-center">
                    <div className="text-[9px] text-white/70">Friday</div>
                    <div className="font-bold text-sm">2 Jan</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/50" />
                </div>

                {/* Extra Content to show scrolling */}
                <div className="pt-4 space-y-4 shrink-0">
                  <h4 className="font-bold text-black text-sm">Pitch Amenities</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 text-[10px] text-gray-600 bg-gray-50 p-2 rounded-lg">
                      <Zap className="w-3 h-3 text-primary" /> Floodlights
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-600 bg-gray-50 p-2 rounded-lg">
                      <Users className="w-3 h-3 text-primary" /> Changing Rooms
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-600 bg-gray-50 p-2 rounded-lg">
                      <Smartphone className="w-3 h-3 text-primary" /> Wi-Fi
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-600 bg-gray-50 p-2 rounded-lg">
                      <Clock className="w-3 h-3 text-primary" /> 24/7 Access
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-2 shrink-0 pb-20">
                  <h4 className="font-bold text-black text-sm">Location Details</h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed">
                    Located in the heart of Nasr City, our stadium offers premium artificial turf and professional-grade facilities for the ultimate football experience.
                  </p>
                </div>
              </div>
              {/* Bottom Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-white p-4 flex justify-between items-center z-10 pb-6">
                <div>
                  <p className="text-[10px] text-gray-400">Total amount</p>
                  <p className="font-bold text-black text-sm">0 EGY</p>
                </div>
                <button className="bg-[#1A2E20] text-white px-8 py-3 rounded-xl text-sm font-bold">Book Now</button>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex-1 w-full transition-all duration-500 lg:order-2">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-3">Player Experience</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  What We Provide<br />
                  <span className="text-white/60">For a player</span>
                </h2>
                <p className="text-lg text-white/60 leading-relaxed">
                  Seamlessly book your favorite football pitch in seconds. Join tournaments, play with friends, and enjoy real-time availability with instant Booking.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureCard icon={<MapPin />} title="Find a Pitch" />
                <FeatureCard icon={<Zap />} title="Book Instantly" />
                <FeatureCard icon={<Trophy />} title="Join Tournaments" />
                <FeatureCard icon={<Users />} title="Play with Friends" />
              </div>
              <div className="pt-4">
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
