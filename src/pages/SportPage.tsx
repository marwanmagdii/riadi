import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/ui/footer';

const sportsData: Record<string, any> = {
  football: {
    titleEn: "Football in Egypt",
    titleAr: "كرة القدم في مصر",
    descEn: "Riadi (رياضي) is the best platform to book football fields across Egypt. Find 5-a-side, 7-a-side, and 11-a-side pitches in Cairo, Alexandria, and Giza.",
    descAr: "رياضي هي أفضل منصة لحجز ملاعب كرة القدم في جميع أنحاء مصر. ابحث عن ملاعب خماسية وسباعية وأحد عشر لاعباً في القاهرة والإسكندرية والجيزة.",
    price: "150 EGP - 600 EGP / hour (Estimated)",
    howToBook: "Select your preferred field size, choose a location, pick an available time slot, and confirm your booking instantly through the Riadi app."
  },
  padel: {
    titleEn: "Padel Courts in Egypt",
    titleAr: "ملاعب البادل في مصر",
    descEn: "Book premium indoor and outdoor padel courts instantly with Riadi (رياضي). Discover the fastest-growing sport in Egypt and play with friends.",
    descAr: "احجز ملاعب بادل داخلية وخارجية مميزة على الفور مع رياضي. اكتشف الرياضة الأسرع نمواً في مصر والعب مع الأصدقاء.",
    price: "200 EGP - 800 EGP / hour (Estimated)",
    howToBook: "Find a court near you, check availability for your group, and secure your padel session in seconds."
  },
  'ping-pong': {
    titleEn: "Ping Pong in Egypt",
    titleAr: "تنس الطاولة في مصر",
    descEn: "Reserve ping pong tables for casual games or competitive matches. Riadi (رياضي) connects you with top table tennis venues.",
    descAr: "احجز طاولات تنس الطاولة للألعاب غير الرسمية أو المباريات التنافسية. يربطك رياضي بأفضل أماكن تنس الطاولة.",
    price: "50 EGP - 150 EGP / hour (Estimated)",
    howToBook: "Browse table tennis venues, select your playing time, and book your table instantly."
  },
  billiards: {
    titleEn: "Billiards & Pool in Egypt",
    titleAr: "البلياردو في مصر",
    descEn: "Find the best billiards lounges and pool tables in Egypt. Book your table ahead of time with Riadi (رياضي).",
    descAr: "ابحث عن أفضل صالات البلياردو وطاولات البلياردو في مصر. احجز طاولتك مسبقاً مع رياضي.",
    price: "80 EGP - 200 EGP / hour (Estimated)",
    howToBook: "Choose a billiards lounge, select the number of hours, and confirm your reservation."
  },
  playstation: {
    titleEn: "PlayStation Centers in Egypt",
    titleAr: "مراكز البلايستيشن في مصر",
    descEn: "Book PS4 and PS5 gaming lounges for you and your friends. Enjoy FIFA tournaments and co-op gaming with Riadi (رياضي).",
    descAr: "احجز صالات ألعاب PS4 و PS5 لك ولأصدقائك. استمتع ببطولات فيفا والألعاب التعاونية مع رياضي.",
    price: "40 EGP - 150 EGP / hour (Estimated)",
    howToBook: "Select a gaming center, choose your console preference, and book your gaming session."
  },
  esports: {
    titleEn: "Esports Arenas in Egypt",
    titleAr: "الرياضات الإلكترونية في مصر",
    descEn: "Discover high-end PC gaming setups and esports arenas. Book your gaming station instantly with Riadi (رياضي).",
    descAr: "اكتشف إعدادات ألعاب الكمبيوتر المتطورة وساحات الرياضات الإلكترونية. احجز محطة الألعاب الخاصة بك على الفور مع رياضي.",
    price: "30 EGP - 100 EGP / hour (Estimated)",
    howToBook: "Find an esports arena, select your PC specs, and reserve your gaming time."
  },
  basketball: {
    titleEn: "Basketball Courts in Egypt",
    titleAr: "ملاعب كرة السلة في مصر",
    descEn: "Book indoor and outdoor basketball courts across Egypt. Perfect for pickup games or team practices with Riadi (رياضي).",
    descAr: "احجز ملاعب كرة سلة داخلية وخارجية في جميع أنحاء مصر. مثالية للألعاب السريعة أو تدريبات الفريق مع رياضي.",
    price: "150 EGP - 500 EGP / hour (Estimated)",
    howToBook: "Search for basketball courts in your area, pick a time, and book instantly."
  },
  tennis: {
    titleEn: "Tennis Courts in Egypt",
    titleAr: "ملاعب التنس في مصر",
    descEn: "Reserve clay, hard, or grass tennis courts in Egypt. Book your next match easily through Riadi (رياضي).",
    descAr: "احجز ملاعب تنس ترابية أو صلبة أو عشبية في مصر. احجز مباراتك القادمة بسهولة من خلال رياضي.",
    price: "150 EGP - 600 EGP / hour (Estimated)",
    howToBook: "Find a tennis club, select your court surface preference, and confirm your booking."
  },
  squash: {
    titleEn: "Squash Courts in Egypt",
    titleAr: "ملاعب الاسكواش في مصر",
    descEn: "Egypt is the home of squash. Book premium squash courts instantly with Riadi (رياضي) and play like a champion.",
    descAr: "مصر هي موطن الاسكواش. احجز ملاعب اسكواش مميزة على الفور مع رياضي والعب كبطل.",
    price: "100 EGP - 400 EGP / hour (Estimated)",
    howToBook: "Browse squash venues, select an available court, and secure your session."
  }
};

export default function SportPage() {
  const { sport } = useParams<{ sport: string }>();
  const data = sport ? sportsData[sport.toLowerCase()] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0A0E0C] text-white pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Sport Not Found</h1>
          <Link to="/sports-in-egypt" className="text-primary hover:underline">Return to Sports in Egypt</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0E0C] text-white pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/sports-in-egypt" className="text-gray-400 hover:text-white transition-colors">&larr; Back to all sports</Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">{data.titleEn} | {data.titleAr}</h1>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-12">
          <p className="text-lg leading-relaxed mb-4">
            <strong>Riadi (رياضي)</strong>: {data.descEn}
          </p>
          <p className="text-lg leading-relaxed text-gray-300" dir="rtl">
            <strong>رياضي</strong>: {data.descAr}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Key Facts</h2>
            <ul className="space-y-3 text-gray-300">
              <li><strong className="text-white">Availability:</strong> Cairo, Alexandria, Giza, and more.</li>
              <li><strong className="text-white">Estimated Price:</strong> {data.price}</li>
              <li><strong className="text-white">Booking:</strong> Instant via Riadi App</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">How to Book</h2>
            <p className="text-gray-300 leading-relaxed">{data.howToBook}</p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Is it safe to book through Riadi?</h3>
              <p className="text-gray-400">Yes, Riadi is a secure platform connecting you with verified sports facilities across Egypt.</p>
            </div>
            <div dir="rtl">
              <h3 className="text-xl font-semibold mb-2">هل الحجز عبر رياضي آمن؟</h3>
              <p className="text-gray-400">نعم، رياضي هي منصة آمنة توصلك بمرافق رياضية معتمدة في جميع أنحاء مصر.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
