import React, { useEffect, useState } from 'react';
import { QrCode, Maximize2, X, ExternalLink } from 'lucide-react';
import { NavBar2 } from '../components/ui/navbar2';
import Footer from '../components/ui/footer';
import { BorderRotate } from '../components/ui/animated-gradient-border';

interface StoreQrItem {
  id: 'ios' | 'android';
  title: string;
  subtitle: string;
  qrSrc: string;
  badgeSrc: string;
  badgeAlt: string;
  url: string;
}

const STORES: StoreQrItem[] = [
  {
    id: 'ios',
    title: 'App Store',
    subtitle: 'For iPhone & iPad (iOS)',
    qrSrc: '/assets/images/qr-app-store.png',
    badgeSrc: '/assets/images/app-store-badge.png?v=2',
    badgeAlt: 'Download on the App Store',
    url: 'https://apps.apple.com/eg/app/riadi/id6770214844',
  },
  {
    id: 'android',
    title: 'Google Play',
    subtitle: 'For Android Devices',
    qrSrc: '/assets/images/qr-google-play.png',
    badgeSrc: '/assets/images/google-play-badge.png?v=2',
    badgeAlt: 'Get it on Google Play',
    url: 'https://play.google.com/store/apps/details?id=com.riadi',
  },
];

export default function QrPage() {
  const [expandedStore, setExpandedStore] = useState<StoreQrItem | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpandedStore(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0E0C] text-white selection:bg-secondary selection:text-white flex flex-col relative overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <NavBar2 />

      <div className="flex-1 pt-24 md:pt-36 px-4 sm:px-6 md:px-12 lg:px-24 max-w-5xl mx-auto w-full pb-16 md:pb-24 flex flex-col items-center justify-center text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-secondary text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
          <QrCode className="w-4 h-4" />
          <span>Scan to Download</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-3 sm:mb-4">
          Get the <span className="text-secondary">Riadi</span> App
        </h1>
        <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-xl mb-8 sm:mb-12">
          Click on any QR code below to expand it full-screen for easy scanning, or tap the store badge to open the store directly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-3xl">
          {STORES.map((store) => (
            <BorderRotate
              key={store.id}
              animationMode="auto-rotate"
              gradientColors={{
                primary: 'rgba(28, 63, 41, 0.8)',
                secondary: 'rgba(184, 76, 65, 0.8)',
              }}
              backgroundColor="#111814"
              borderWidth={2}
              borderRadius={28}
              className="h-full transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="p-6 sm:p-8 flex flex-col items-center gap-5 sm:gap-6 h-full">
                <div className="space-y-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">{store.title}</h2>
                  <p className="text-xs text-white/50 font-medium uppercase tracking-wider">{store.subtitle}</p>
                </div>

                {/* Clickable QR Code -> Expands Fullscreen */}
                <button
                  type="button"
                  onClick={() => setExpandedStore(store)}
                  className="group relative bg-white p-4 sm:p-5 rounded-3xl shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none"
                  title={`Click to expand ${store.title} QR code full-screen`}
                >
                  <img
                    src={store.qrSrc}
                    alt={`${store.title} QR Code`}
                    className="w-40 h-40 sm:w-52 sm:h-52 object-contain block [image-rendering:pixelated]"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 text-white font-bold text-xs uppercase tracking-wider">
                    <Maximize2 className="w-7 h-7 text-secondary" />
                    <span>Click to Expand</span>
                  </div>
                </button>

                <span className="text-[11px] text-white/40 flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5" /> Tap QR to expand full page
                </span>

                {/* Direct Store Badge Link */}
                <a
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl overflow-hidden border border-white/15 transition-transform duration-300 hover:scale-105 active:scale-95"
                >
                  <img
                    src={store.badgeSrc}
                    alt={store.badgeAlt}
                    className="h-11 sm:h-12 w-auto object-contain block"
                  />
                </a>
              </div>
            </BorderRotate>
          ))}
        </div>
      </div>

      {/* Fullscreen Expanded QR Overlay */}
      {expandedStore && (
        <div
          onClick={() => setExpandedStore(null)}
          className="fixed inset-0 z-[200] bg-[#0A0E0C]/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200 cursor-zoom-out"
        >
          <button
            type="button"
            onClick={() => setExpandedStore(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Close full-screen QR"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center text-center max-w-lg w-full gap-5 sm:gap-6 cursor-default"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">
                {expandedStore.subtitle}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Scan for {expandedStore.title}
              </h2>
            </div>

            <div className="bg-white p-5 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border-4 border-white/20">
              <img
                src={expandedStore.qrSrc}
                alt={`${expandedStore.title} Fullscreen QR Code`}
                className="w-[70vw] h-[70vw] max-w-[360px] max-h-[360px] object-contain block [image-rendering:pixelated]"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
              <a
                href={expandedStore.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-xs sm:text-sm transition-colors"
              >
                <span>Open in {expandedStore.title}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setExpandedStore(null)}
                className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
