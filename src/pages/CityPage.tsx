import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/ui/footer';

const citiesData: Record<string, any> = {
  cairo: {
    titleEn: "Sports in Cairo",
    titleAr: "الرياضة في القاهرة",
    descEn: "Riadi (رياضي) is the ultimate sports booking platform in Cairo. Whether you're in Nasr City, Maadi, New Cairo, or Heliopolis, book football fields, padel courts, and gaming lounges instantly.",
    descAr: "رياضي هي منصة الحجز الرياضية الأفضل في القاهرة. سواء كنت في مدينة نصر، المعادي، القاهرة الجديدة، أو مصر الجديدة، احجز ملاعب كرة القدم وملاعب البادل وصالات الألعاب على الفور."
  },
  alexandria: {
    titleEn: "Sports in Alexandria",
    titleAr: "الرياضة في الإسكندرية",
    descEn: "Riadi (رياضي) connects athletes in Alexandria with the best sports facilities. From Smouha to Sidi Gaber, book your favorite sports venues seamlessly.",
    descAr: "يربط رياضي الرياضيين في الإسكندرية بأفضل المرافق الرياضية. من سموحة إلى سيدي جابر، احجز أماكنك الرياضية المفضلة بسلاسة."
  },
  giza: {
    titleEn: "Sports in Giza",
    titleAr: "الرياضة في الجيزة",
    descEn: "Book top-tier sports facilities in Giza with Riadi (رياضي). Find the best football pitches, padel courts, and esports arenas in Mohandeseen, Dokki, and 6th of October City.",
    descAr: "احجز مرافق رياضية عالية المستوى في الجيزة مع رياضي. ابحث عن أفضل ملاعب كرة القدم وملاعب البادل وساحات الرياضات الإلكترونية في المهندسين والدقي ومدينة 6 أكتوبر."
  }
};

export default function CityPage() {
  const { city } = useParams<{ city: string }>();
  const data = city ? citiesData[city.toLowerCase()] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0A0E0C] text-white pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-400 mb-8">The page you are looking for does not exist.</p>
          <Link to="/" className="text-primary hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0E0C] text-white pt-32 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link to="/sports-in-egypt" className="text-gray-400 hover:text-white transition-colors">&larr; Back to Sports in Egypt</Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">{data.titleEn} | {data.titleAr}</h1>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-12">
          <p className="text-lg leading-relaxed mb-4">
            <strong>Riadi (رياضي)</strong>: {data.descEn}
          </p>
          <p className="text-lg leading-relaxed text-gray-300" dir="rtl">
            <strong>رياضي</strong>: {data.descAr}
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">Available Sports | الرياضات المتاحة</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          <Link to="/sports/football" className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-semibold">Football</h3>
            <p className="text-sm text-gray-400">كرة القدم</p>
          </Link>
          <Link to="/sports/padel" className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-semibold">Padel</h3>
            <p className="text-sm text-gray-400">بادل</p>
          </Link>
          <Link to="/sports/ping-pong" className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-semibold">Ping Pong</h3>
            <p className="text-sm text-gray-400">تنس الطاولة</p>
          </Link>
          <Link to="/sports/billiards" className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-semibold">Billiards</h3>
            <p className="text-sm text-gray-400">بلياردو</p>
          </Link>
          <Link to="/sports/playstation" className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-semibold">PlayStation</h3>
            <p className="text-sm text-gray-400">بلايستيشن</p>
          </Link>
          <Link to="/sports/esports" className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-semibold">Esports</h3>
            <p className="text-sm text-gray-400">الرياضات الإلكترونية</p>
          </Link>
          <Link to="/sports/basketball" className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-semibold">Basketball</h3>
            <p className="text-sm text-gray-400">كرة السلة</p>
          </Link>
          <Link to="/sports/tennis" className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-semibold">Tennis</h3>
            <p className="text-sm text-gray-400">تنس</p>
          </Link>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Can I book facilities in {city.charAt(0).toUpperCase() + city.slice(1)} today?</h3>
              <p className="text-gray-400">Yes, Riadi shows real-time availability for sports venues across {city.charAt(0).toUpperCase() + city.slice(1)}. You can book instantly for today or future dates.</p>
            </div>
            <div dir="rtl">
              <h3 className="text-xl font-semibold mb-2">هل يمكنني حجز المرافق اليوم؟</h3>
              <p className="text-gray-400">نعم، يعرض رياضي التوافر الفعلي للملاعب الرياضية. يمكنك الحجز فوراً لليوم أو للتواريخ القادمة.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
