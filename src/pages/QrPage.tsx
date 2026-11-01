import React, { useEffect } from 'react';
import { QrCode } from 'lucide-react';
import { NavBar2 } from '../components/ui/navbar2';
import Footer from '../components/ui/footer';

export default function QrPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0E0C] text-white selection:bg-secondary selection:text-white flex flex-col relative">
      <NavBar2 />
      <div className="flex-1 pt-28 md:pt-36 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto w-full pb-24 flex flex-col items-center justify-center text-center">
        <div className="w-14 h-14 bg-primary/20 border border-white/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
          <QrCode className="w-7 h-7" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Download the Riadi App</h1>
        <p className="text-white/60 text-lg max-w-xl mb-12">
          Scan the QR code for your device or tap the store badge below to download Riadi on iOS or Android.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl">
          {/* App Store Card */}
          <a
            href="https://apps.apple.com/eg/app/riadi/id6770214844"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111814] border border-white/10 hover:border-white/25 rounded-3xl p-8 flex flex-col items-center gap-6 shadow-2xl transition-all duration-300 hover:-translate-y-1"
            aria-label="Download Riadi on the App Store"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-white/50">iOS — App Store</span>
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <img
                src="/assets/images/qr-app-store.png"
                alt="App Store QR Code"
                className="w-44 h-44 object-contain block"
              />
            </div>
            <img
              src="/assets/images/app-store-badge.png?v=2"
              alt="Download on the App Store"
              className="h-12 w-auto object-contain rounded-xl border border-white/15 block"
            />
          </a>

          {/* Google Play Card */}
          <a
            href="https://play.google.com/store/apps/details?id=com.riadi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111814] border border-white/10 hover:border-white/25 rounded-3xl p-8 flex flex-col items-center gap-6 shadow-2xl transition-all duration-300 hover:-translate-y-1"
            aria-label="Get Riadi on Google Play"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-white/50">Android — Google Play</span>
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <img
                src="/assets/images/qr-google-play.png"
                alt="Google Play QR Code"
                className="w-44 h-44 object-contain block"
              />
            </div>
            <img
              src="/assets/images/google-play-badge.png?v=2"
              alt="Download on Google Play"
              className="h-12 w-auto object-contain rounded-xl border border-white/15 block"
            />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
