import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, ChevronDown, Copy, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [isEmailDropdownOpen, setIsEmailDropdownOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentUrl(window.location.href);
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsEmailDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@riadiapp.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    setIsEmailDropdownOpen(false);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505] text-white border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* Left: Contact Info */}
        <div className="space-y-8">
          <div>
            <h4 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-3">Get In Touch</h4>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Ready to transform your sports experience?</h2>
            <p className="text-white/60 text-lg max-w-md">
              Whether you're a player looking for the next match, or a facility owner wanting to streamline operations, we're here to help.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-4 relative" ref={dropdownRef}>
              <div className="w-12 h-12 bg-[#111814] border border-white/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-white/50 font-medium">Email Us</p>
                <button 
                  onClick={() => setIsEmailDropdownOpen(!isEmailDropdownOpen)}
                  className="text-lg font-bold hover:text-secondary transition-colors flex items-center gap-2"
                >
                  contact@riadiapp.com
                  <ChevronDown className={`w-4 h-4 transition-transform ${isEmailDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Email Dropdown */}
                {isEmailDropdownOpen && (
                  <div className="absolute top-full left-16 mt-2 w-56 bg-[#111814] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                    <button 
                      onClick={handleCopyEmail}
                      className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors text-sm text-left"
                    >
                      <Copy className="w-4 h-4 text-white/50" />
                      {copied ? 'Copied!' : 'Copy Email Address'}
                    </button>
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@riadiapp.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors text-sm text-left border-t border-white/5"
                    >
                      <ExternalLink className="w-4 h-4 text-white/50" />
                      Open in Gmail
                    </a>
                    <a 
                      href="mailto:contact@riadiapp.com" 
                      className="w-full px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors text-sm text-left border-t border-white/5"
                    >
                      <Mail className="w-4 h-4 text-white/50" />
                      Open Default App
                    </a>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#111814] border border-white/10 rounded-full flex items-center justify-center text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-white/50 font-medium">Location</p>
                <p className="text-lg font-bold">Cairo, Egypt</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-[#111814] border border-white/10 rounded-3xl p-8 shadow-2xl">
          <form 
            className="space-y-6" 
            method="POST" 
            action="https://formsubmit.co/marwanmagdy680@gmail.com"
          >
            {/* Hidden Configuration Fields */}
            <input type="hidden" name="_next" value={currentUrl} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="name" value={`${firstName} ${lastName}`.trim()} />
            <input type="hidden" name="_replyto" value={email} />
            <input type="hidden" name="_subject" value={subject ? `Riadi Contact: ${subject}` : "New message from Riadi website!"} />
            <input type="hidden" name="_timezone" value="Africa/Cairo" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">First Name</label>
                <input 
                  type="text" 
                  name="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-[#0A0E0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                  placeholder="Ahmed" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Last Name</label>
                <input 
                  type="text" 
                  name="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full bg-[#0A0E0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                  placeholder="Salah" 
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0A0E0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                placeholder="ahmed@example.com" 
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70">Subject</label>
              <input 
                type="text" 
                name="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-[#0A0E0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                placeholder="How can we help you?" 
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70">Message</label>
              <textarea 
                name="message"
                rows={4} 
                className="w-full bg-[#0A0E0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" 
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold tracking-wide transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
