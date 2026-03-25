import React, { useState } from 'react';
import { 
  MapPin, Zap, Trophy, Users, Smartphone, 
  CreditCard, Clock, TrendingUp, ChevronLeft, 
  ChevronRight, Share2, Star, Heart, ChevronDown, 
  CheckCircle2, Calendar, BookOpen, User 
} from 'lucide-react';
import { BorderRotate } from './animated-gradient-border';

const FeatureCard = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
  <BorderRotate 
    animationMode="rotate-on-hover" 
    gradientColors={{ primary: 'rgba(28, 63, 41, 0.8)', secondary: 'rgba(184, 76, 65, 0.8)', accent: '#22c55e' }}
    backgroundColor="#111111"
    borderWidth={2}
    borderRadius={16}
    className="hover:-translate-y-1 transition-transform duration-300 h-full"
  >
    <div className="p-6 flex flex-col gap-4 h-full">
      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5' })}
      </div>
      <h4 className="font-bold text-white text-sm">{title}</h4>
    </div>
  </BorderRotate>
);

export default function FeatureSection() {
  const [view, setView] = useState<'player' | 'owner'>('player');

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0A0E0C] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Mockup Side */}
          <div className={`flex-1 w-full flex justify-center transition-all duration-500 ${view === 'owner' ? 'lg:order-2' : 'lg:order-1'}`}>
            {view === 'player' ? (
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
                <div className="p-4 space-y-4 bg-white h-full">
                  {/* Image */}
                  <div className="w-full h-40 bg-green-600 rounded-2xl overflow-hidden relative">
                     <img src="https://images.unsplash.com/photo-1518605368461-1ee7c532066d?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Pitch" />
                     <div className="absolute bottom-2 left-2 bg-[#1A2E20] text-white text-[10px] px-2 py-1 rounded-lg flex items-center gap-1 font-bold">
                       <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" /> 5
                     </div>
                     <div className="absolute top-2 right-2 w-8 h-8 bg-[#1A2E20]/50 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                       <Heart className="w-4 h-4" />
                     </div>
                  </div>
                  {/* Title */}
                  <div>
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
                  <div>
                    <p className="text-xs text-gray-400 mb-2">Field Type</p>
                    <div className="flex gap-2">
                      {['4x4', '5x5', '6x6', '7x7'].map(type => (
                        <div key={type} className={`flex-1 py-2 text-center text-[10px] font-bold rounded-xl border ${type === '5x5' ? 'border-[#1A2E20] text-[#1A2E20] bg-transparent' : 'border-gray-200 text-gray-500'}`}>
                          {type}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Tabs */}
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-[#E8F5E9] text-[#1A2E20] border border-[#1A2E20] rounded-xl text-xs font-bold">Book Now</button>
                    <button className="flex-1 py-2 text-gray-500 border border-gray-200 rounded-xl text-xs font-medium">Details</button>
                  </div>
                  {/* Date */}
                  <div className="bg-[#1A2E20] text-white rounded-xl p-3 flex justify-between items-center">
                    <ChevronLeft className="w-4 h-4 text-white/50" />
                    <div className="text-center">
                      <div className="text-[9px] text-white/70">Friday</div>
                      <div className="font-bold text-sm">2 Jan</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/50" />
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
            ) : (
              <div className="relative w-[300px] h-[600px] bg-white rounded-[3rem] border-[8px] border-[#1A1A1A] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-700">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                  <div className="w-32 h-6 bg-[#1A1A1A] rounded-b-3xl"></div>
                </div>
                {/* Header */}
                <div className="bg-[#1A2E20] pt-12 pb-4 px-6 flex items-center justify-between text-white">
                  <ChevronLeft className="w-5 h-5" />
                  <span className="font-bold text-sm">Schedule</span>
                  <Share2 className="w-4 h-4" />
                </div>
                {/* Content */}
                <div className="p-4 space-y-4 bg-white h-full">
                  {/* Location Dropdown */}
                  <div className="flex items-center gap-2 border border-gray-200 rounded-full p-2.5 px-4 text-sm text-gray-700">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="flex-1 text-xs font-bold">Naser City Club</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                  {/* Sport Tabs */}
                  <div className="flex gap-2 bg-gray-50 p-1 rounded-2xl">
                    <button className="flex-1 py-2.5 bg-white shadow-sm rounded-xl text-[11px] font-bold flex items-center justify-center gap-2 text-black">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div> Football
                    </button>
                    <button className="flex-1 py-2.5 text-gray-400 text-[11px] font-medium flex items-center justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-pink-500"></div> Padel
                    </button>
                  </div>
                  {/* Date Strip */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <ChevronLeft className="w-4 h-4 text-gray-400" />
                      <span className="text-[11px] font-bold text-black">Today, Dec 24</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex justify-between px-1">
                      {['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                        <div key={day} className="flex flex-col items-center gap-1.5">
                          <span className="text-[9px] text-gray-400">{day}</span>
                          <span className={`text-[11px] font-bold w-7 h-7 flex items-center justify-center rounded-full ${i === 3 ? 'bg-[#1A2E20] text-white' : 'text-black'}`}>
                            {30 + i > 31 ? i - 1 : 30 + i}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Fields */}
                  <div className="flex gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
                    {[1, 2, 3].map(f => (
                      <div key={f} className="min-w-[85px] border border-gray-100 rounded-2xl p-2.5 flex flex-col items-center justify-center gap-1">
                        <p className="text-[9px] text-gray-400">Field {f}</p>
                        <span className="text-[11px] font-bold text-black">{f === 1 ? '3v3 300 EG' : '5v5 400 EG'}</span>
                      </div>
                    ))}
                  </div>
                  {/* Status Tabs */}
                  <div className="flex gap-2">
                    {['All', 'Available', 'Booked', 'Pending'].map((status, i) => (
                      <button key={status} className={`px-3 py-1.5 rounded-full text-[9px] font-bold ${i === 0 ? 'bg-[#1A2E20] text-white' : 'text-gray-400'}`}>
                        {status}
                      </button>
                    ))}
                  </div>
                  {/* Slots */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-bold text-gray-400 w-10 text-right">5:00 PM</span>
                      <div className="flex-1 border border-dashed border-gray-300 rounded-xl py-2.5 flex justify-center items-center text-[10px] text-gray-400 gap-1">
                        + Available
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-bold text-gray-400 w-10 text-right">6:00 PM</span>
                      <div className="flex-1 bg-[#E8F5E9] border border-[#C8E6C9] rounded-xl py-2.5 flex justify-center items-center text-[10px] text-[#2E7D32] font-bold gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Booked
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-bold text-gray-400 w-10 text-right">7:00 PM</span>
                      <div className="flex-1 bg-[#FFF3E0] border border-[#FFE0B2] rounded-xl py-2.5 flex justify-center items-center text-[10px] text-[#E65100] font-bold gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> Pending
                      </div>
                    </div>
                  </div>
                </div>
                {/* Bottom Nav */}
                <div className="absolute bottom-0 inset-x-0 bg-white border-t border-gray-100 flex justify-around py-3 pb-6 z-10">
                  <div className="flex flex-col items-center gap-1 text-[#1A2E20]">
                    <Calendar className="w-5 h-5" />
                    <span className="text-[9px] font-bold">Schedule</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-gray-400">
                    <BookOpen className="w-5 h-5" />
                    <span className="text-[9px]">Bookings</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-gray-400">
                    <User className="w-5 h-5" />
                    <span className="text-[9px]">Profile</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Text Side */}
          <div className={`flex-1 w-full transition-all duration-500 ${view === 'owner' ? 'lg:order-1' : 'lg:order-2'}`}>
            {view === 'player' ? (
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
                  <button className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/60 hover:text-white transition-colors">
                    <Smartphone className="w-4 h-4" />
                    <span>App Store</span>
                    <span className="ml-1">›</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div>
                  <h3 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-3">Owner Experience</h3>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    What we Provide<br />
                    <span className="text-white/60">For Owners</span>
                  </h2>
                  <p className="text-lg text-white/60 leading-relaxed">
                    Manage your Club with ease. Track bookings, manage schedules, and grow your community with our powerful owner dashboard.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FeatureCard icon={<CreditCard />} title="Increased Player Reach" />
                  <FeatureCard icon={<Clock />} title="Schedule Control" />
                  <FeatureCard icon={<Users />} title="Digital Booking Management" />
                  <FeatureCard icon={<TrendingUp />} title="Higher Pitch Utilization" />
                </div>
                <div className="pt-4">
                  <button className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/60 hover:text-white transition-colors">
                    <Smartphone className="w-4 h-4" />
                    <span>App Store</span>
                    <span className="ml-1">›</span>
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center mt-20">
          <div className="bg-[#111111] p-1.5 rounded-full flex items-center border border-white/5 shadow-2xl relative">
            <div 
              className="absolute inset-y-1.5 w-[120px] bg-[#222222] rounded-full transition-all duration-300 ease-out shadow-md border border-white/5"
              style={{ left: view === 'player' ? '6px' : '130px' }}
            ></div>
            <button
              onClick={() => setView('player')}
              className={`relative z-10 w-[120px] py-3 rounded-full font-bold text-sm transition-colors duration-300 ${view === 'player' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
            >
              Player
            </button>
            <button
              onClick={() => setView('owner')}
              className={`relative z-10 w-[120px] py-3 rounded-full font-bold text-sm transition-colors duration-300 ${view === 'owner' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
            >
              Owner
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
