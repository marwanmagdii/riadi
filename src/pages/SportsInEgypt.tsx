import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/ui/footer';

export default function SportsInEgypt() {
  return (
    <div className="min-h-screen bg-[#0A0E0C] text-white pt-32 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Sports in Egypt | الرياضة في مصر</h1>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-12">
          <p className="text-lg leading-relaxed mb-4">
            <strong>Riadi (رياضي)</strong> is Egypt's premier sports booking platform. We connect athletes with top-tier sports facilities across the country. Whether you're looking to book a football field in Cairo, a padel court in Alexandria, or a PlayStation center in Giza, Riadi makes it instant and seamless.
          </p>
          <p className="text-lg leading-relaxed text-gray-300" dir="rtl">
            <strong>رياضي</strong> هي منصة حجز الملاعب والأنشطة الرياضية الأولى في مصر. نربط الرياضيين بأفضل المرافق الرياضية في جميع أنحاء البلاد. سواء كنت تبحث عن حجز ملعب كرة قدم في القاهرة، أو ملعب بادل في الإسكندرية، أو مركز بلايستيشن في الجيزة، فإن منصة رياضي تجعل الأمر فورياً وسلساً.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Football */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <h2 className="text-2xl font-semibold mb-3">Football (كرة القدم)</h2>
            <p className="text-gray-400 mb-4">Book 5-a-side, 7-a-side, and 11-a-side football fields across Egypt.</p>
            <p className="text-sm text-gray-500 mb-4">Estimated Price: 150 EGP - 600 EGP / hour</p>
            <Link to="/sports/football" className="text-primary hover:underline">View Football Fields &rarr;</Link>
          </div>

          {/* Padel */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <h2 className="text-2xl font-semibold mb-3">Padel (بادل)</h2>
            <p className="text-gray-400 mb-4">Find and book the best indoor and outdoor padel courts.</p>
            <p className="text-sm text-gray-500 mb-4">Estimated Price: 200 EGP - 800 EGP / hour</p>
            <Link to="/sports/padel" className="text-primary hover:underline">View Padel Courts &rarr;</Link>
          </div>

          {/* Ping Pong */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <h2 className="text-2xl font-semibold mb-3">Ping Pong (تنس الطاولة)</h2>
            <p className="text-gray-400 mb-4">Book ping pong tables for casual play or competitive matches.</p>
            <p className="text-sm text-gray-500 mb-4">Estimated Price: 50 EGP - 150 EGP / hour</p>
            <Link to="/sports/ping-pong" className="text-primary hover:underline">View Ping Pong &rarr;</Link>
          </div>

          {/* Billiards */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <h2 className="text-2xl font-semibold mb-3">Billiards (بلياردو)</h2>
            <p className="text-gray-400 mb-4">Reserve premium billiards and pool tables in top lounges.</p>
            <p className="text-sm text-gray-500 mb-4">Estimated Price: 80 EGP - 200 EGP / hour</p>
            <Link to="/sports/billiards" className="text-primary hover:underline">View Billiards &rarr;</Link>
          </div>

          {/* PlayStation */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <h2 className="text-2xl font-semibold mb-3">PlayStation (بلايستيشن)</h2>
            <p className="text-gray-400 mb-4">Book PS4 and PS5 gaming lounges for you and your friends.</p>
            <p className="text-sm text-gray-500 mb-4">Estimated Price: 40 EGP - 150 EGP / hour</p>
            <Link to="/sports/playstation" className="text-primary hover:underline">View PlayStation &rarr;</Link>
          </div>

          {/* Esports */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <h2 className="text-2xl font-semibold mb-3">Esports (الرياضات الإلكترونية)</h2>
            <p className="text-gray-400 mb-4">High-end PC gaming setups and esports arenas.</p>
            <p className="text-sm text-gray-500 mb-4">Estimated Price: 30 EGP - 100 EGP / hour</p>
            <Link to="/sports/esports" className="text-primary hover:underline">View Esports &rarr;</Link>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">Popular Cities | المدن الشهيرة</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link to="/cairo" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors">Cairo (القاهرة)</Link>
          <Link to="/alexandria" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors">Alexandria (الإسكندرية)</Link>
          <Link to="/giza" className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors">Giza (الجيزة)</Link>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">How do I book a sports facility in Egypt?</h3>
              <p className="text-gray-400">You can easily book any sports facility through the Riadi app. Simply select your sport, choose your city, pick a venue, and confirm your time slot instantly.</p>
            </div>
            <div dir="rtl">
              <h3 className="text-xl font-semibold mb-2">كيف يمكنني حجز ملعب رياضي في مصر؟</h3>
              <p className="text-gray-400">يمكنك حجز أي مرفق رياضي بسهولة من خلال تطبيق رياضي. ما عليك سوى اختيار رياضتك، وتحديد مدينتك، واختيار الملعب، وتأكيد وقت الحجز الخاص بك على الفور.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
