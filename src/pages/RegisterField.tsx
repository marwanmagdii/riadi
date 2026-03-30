import React, { useState, useEffect } from 'react';
import { Send, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/ui/logo';

const districtsByCity: Record<string, string[]> = {
  "Cairo": ["15 May", "Al Azbakeyah", "Al Basatin", "Tebin", "El-Khalifa", "El darrasa", "Aldarb Alahmar", "Zawya al-Hamra", "El-Zaytoun", "Sahel", "El Salam", "Sayeda Zeinab", "El Sharabeya", "Shorouk", "El Daher", "Ataba", "New Cairo", "El Marg", "Ezbet el Nakhl", "Matareya", "Maadi", "Maasara", "Mokattam", "Manyal", "Mosky", "Nozha", "Waily", "Bab al-Shereia", "Bolaq", "Garden City", "Hadayek El-Kobba", "Helwan", "Dar Al Salam", "Shubra", "Tura", "Abdeen", "Abaseya", "Ain Shams", "Nasr City", "New Heliopolis", "Masr Al Qadima", "Mansheya Nasir", "Badr City", "Obour City", "Cairo Downtown", "Zamalek", "Kasr El Nile", "Rehab", "Katameya", "Madinty", "Rod Alfarag", "Sheraton", "El-Gamaleya", "10th of Ramadan City", "Helmeyat Alzaytoun", "New Nozha", "Capital New"],
  "Giza": ["Giza", "Sixth of October", "Cheikh Zayed", "Hawamdiyah", "Al Badrasheen", "Saf", "Atfih", "Al Ayat", "Al-Bawaiti", "ManshiyetAl Qanater", "Oaseem", "Kerdasa", "Abu Nomros", "Kafr Ghati", "Manshiyet Al Bakari", "Dokki", "Agouza", "Haram", "Warraq", "Imbaba", "Boulaq Dakrour", "Al Wahat Al Baharia", "Omraneya", "Moneeb", "Bin Alsarayat", "Kit Kat", "Mohandessin", "Faisal", "Abu Rawash", "Hadayek Alahram", "Haraneya", "Hadayek October", "Saft Allaban", "Smart Village", "Ard Ellwaa"],
  "Alexandria": ["Abu Qir", "Al Ibrahimeyah", "Azarita", "Anfoushi", "Dekheila", "El Soyof", "Ameria", "El Labban", "Al Mafrouza", "El Montaza", "Mansheya", "Naseria", "Ambrozo", "Bab Sharq", "Bourj Alarab", "Stanley", "Smouha", "Sidi Bishr", "Shads", "Gheet Alenab", "Fleming", "Victoria", "Camp Shizar", "Karmooz", "Mahta Alraml", "Mina El-Basal", "Asafra", "Agamy", "Bakos", "Boulkly", "Cleopatra", "Glim", "Al Mamurah", "Al Mandara", "Moharam Bek", "Elshatby", "Sidi Gaber", "North Coast/sahel", "Alhadra", "Alattarin", "Sidi Kerir", "Elgomrok", "Al Max", "Marina"],
  "Dakahlia": ["Mansoura", "Talkha", "Mitt Ghamr", "Dekernes", "Aga", "Menia El Nasr", "Sinbillawin", "El Kurdi", "Bani Ubaid", "Al Manzala", "tami al'amdid", "aljamalia", "Sherbin", "Mataria", "Belqas", "Meet Salsil", "Gamasa", "Mahalat Damana", "Nabroh"],
  "Red Sea": ["Hurghada", "Ras Ghareb", "Safaga", "El Qusiar", "Marsa Alam", "Shalatin", "Halaib", "Aldahar"],
  "Beheira": ["Damanhour", "Kafr El Dawar", "Rashid", "Edco", "Abu al-Matamir", "Abu Homs", "Delengat", "Mahmoudiyah", "Rahmaniyah", "Itai Baroud", "Housh Eissa", "Shubrakhit", "Kom Hamada", "Badr", "Wadi Natrun", "New Nubaria", "Alnoubareya"],
  "Fayoum": ["Fayoum", "Fayoum El Gedida", "Tamiya", "Snores", "Etsa", "Epschway", "Yusuf El Sediaq", "Hadqa", "Atsa", "Algamaa", "Sayala"],
  "Gharbiya": ["Tanta", "Al Mahalla Al Kobra", "Kafr El Zayat", "Zefta", "El Santa", "Qutour", "Basion", "Samannoud"],
  "Ismailia": ["Ismailia", "Fayed", "Qantara Sharq", "Qantara Gharb", "El Tal El Kabier", "Abu Sawir", "Kasasien El Gedida", "Nefesha", "Sheikh Zayed"],
  "Menofia": ["Shbeen El Koom", "Sadat City", "Menouf", "Sars El-Layan", "Ashmon", "Al Bagor", "Quesna", "Berkat El Saba", "Tala", "Al Shohada"],
  "Minya": ["Minya", "Minya El Gedida", "El Adwa", "Magagha", "Bani Mazar", "Mattay", "Samalut", "Madinat El Fekria", "Meloy", "Deir Mawas", "Abu Qurqas", "Ard Sultan"],
  "Qaliubiya": ["Banha", "Qalyub", "Shubra Al Khaimah", "Al Qanater Charity", "Khanka", "Kafr Shukr", "Tukh", "Qaha", "Obour", "Khosous", "Shibin Al Qanater", "Mostorod"],
  "New Valley": ["El Kharga", "Paris", "Mout", "Farafra", "Balat", "Dakhla"],
  "Suez": ["Suez", "Alganayen", "Ataqah", "Ain Sokhna", "Faysal"],
  "Aswan": ["Aswan", "Aswan El Gedida", "Drau", "Kom Ombo", "Nasr Al Nuba", "Kalabsha", "Edfu", "Al-Radisiyah", "Al Basilia", "Al Sibaeia", "Abo Simbl Al Siyahia", "Marsa Alam"],
  "Assiut": ["Assiut", "Assiut El Gedida", "Dayrout", "Manfalut", "Qusiya", "Abnoub", "Abu Tig", "El Ghanaim", "Sahel Selim", "El Badari", "Sidfa"],
  "Beni Suef": ["Bani Sweif", "Beni Suef El Gedida", "Al Wasta", "Naser", "Ehnasia", "beba", "Fashn", "Somasta", "Alabbaseri", "Mokbel"],
  "Port Said": ["PorSaid", "Port Fouad", "Alarab", "Zohour", "Alsharq", "Aldawahi", "Almanakh", "Mubarak"],
  "Damietta": ["Damietta", "New Damietta", "Ras El Bar", "Faraskour", "Zarqa", "alsaru", "alruwda", "Kafr El-Batikh", "Azbet Al Burg", "Meet Abou Ghalib", "Kafr Saad"],
  "Sharkia": ["Zagazig", "Al Ashr Men Ramadan", "Minya Al Qamh", "Belbeis", "Mashtoul El Souq", "Qenaiat", "Abu Hammad", "El Qurain", "Hehia", "Abu Kabir", "Faccus", "El Salihia El Gedida", "Al Ibrahimiyah", "Deirb Negm", "Kafr Saqr", "Awlad Saqr", "Husseiniya", "san alhajar alqablia", "Manshayat Abu Omar"],
  "South Sinai": ["Al Toor", "Sharm El-Shaikh", "Dahab", "Nuweiba", "Taba", "Saint Catherine", "Abu Redis", "Abu Zenaima", "Ras Sidr"],
  "Kafr Al sheikh": ["Kafr El Sheikh", "Kafr El Sheikh Downtown", "Desouq", "Fooh", "Metobas", "Burg Al Burullus", "Baltim", "Masief Baltim", "Hamol", "Bella", "Riyadh", "Sidi Salm", "Qellen", "Sidi Ghazi"],
  "Matrouh": ["Marsa Matrouh", "El Hamam", "Alamein", "Dabaa", "Al-Nagila", "Sidi Brani", "Salloum", "Siwa", "Marina", "North Coast"],
  "Luxor": ["Luxor", "New Luxor", "Esna", "New Tiba", "Al ziynia", "Al Bayadieh", "Al Qarna", "Armant", "Al Tud"],
  "Qena": ["Qena", "New Qena", "Abu Tesht", "Nag Hammadi", "Deshna", "Alwaqf", "Qaft", "Naqada", "Farshout", "Quos"],
  "North Sinai": ["Arish", "Sheikh Zowaid", "Nakhl", "Rafah", "Bir al-Abed", "Al Hasana"],
  "Sohag": ["Sohag", "Sohag El Gedida", "Akhmeem", "Akhmim El Gedida", "Albalina", "El Maragha", "almunsha'a", "Dar AISalaam", "Gerga", "Jahina Al Gharbia", "Saqilatuh", "Tama", "Tahta", "Alkawthar"]
};

export default function RegisterField() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  
  // State for controlled inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [numberOfClubs, setNumberOfClubs] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const searchParams = new URLSearchParams();
    formData.forEach((value, key) => {
      searchParams.append(key, value.toString());
    });

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset(); 
        setSelectedCity(''); 
        setFirstName('');
        setLastName('');
        setEmail('');
        setNumberOfClubs('');
        setPhone('');
        setDetails('');
        
        setTimeout(() => setIsSubmitted(false), 8000);
      } else {
        alert("Please check your email to activate the form, or try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0E0C] text-white selection:bg-secondary selection:text-white relative">
      {/* Success Message Overlay */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex flex-col items-center justify-center text-center p-8 backdrop-blur-sm">
          <div className="bg-[#111814] border border-white/10 p-10 rounded-3xl max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Request Sent!</h2>
            <p className="text-white/70 text-lg mb-4">Our team will contact you soon to help register your field/club.</p>
            <p className="text-secondary text-sm font-medium bg-secondary/10 p-3 rounded-lg">
              Note: If this is your first time submitting, please check your email (marwanmagdy680@gmail.com) to activate the form.
            </p>
          </div>
        </div>
      )}

      {/* Simple Header */}
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-20 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center space-x-3">
            <Logo />
          </div>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h4 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-3">Partner With Us</h4>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Register your Club/Field</h1>
            <p className="text-white/60 text-lg">
              Fill out the form below with your details, and our team will get back to you to help list your facility.
            </p>
          </div>

          <div className="bg-[#111814] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <form 
              action="https://formsubmit.co/marwanmagdy680@gmail.com" 
              method="POST"
              onSubmit={handleRegisterSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="New Field/Club Registration Request" />
              <input type="hidden" name="_template" value="table" />
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <label className="text-sm font-medium text-white/70">Phone Number</label>
                  <input 
                    type="tel" 
                    name="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#0A0E0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                    placeholder="+20 100 123 4567" 
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Number of fields (approximate)</label>
                <input 
                  type="number" 
                  name="Number of Fields"
                  value={numberOfClubs}
                  onChange={(e) => setNumberOfClubs(e.target.value)}
                  min="1"
                  className="w-full bg-[#0A0E0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                  placeholder="e.g. 3" 
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">City</label>
                  <select 
                    name="City"
                    required 
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full bg-[#0A0E0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a city</option>
                    {Object.keys(districtsByCity).sort().map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">District</label>
                  <select 
                    name="District"
                    required 
                    defaultValue=""
                    disabled={!selectedCity}
                    className="w-full bg-[#0A0E0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="" disabled>Select a district</option>
                    {selectedCity && [...districtsByCity[selectedCity]].sort().map(district => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Additional Details</label>
                <textarea 
                  name="Details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={5} 
                  className="w-full bg-[#0A0E0C] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" 
                  placeholder="Tell us about your facility, number of fields, sizes, etc..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold tracking-wide transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              >
                <span>Submit Registration Request</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
