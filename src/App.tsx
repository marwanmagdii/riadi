/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import HostTournament from "./pages/HostTournament";
import RegisterField from "./pages/RegisterField";
import HowItWorksPage from "./pages/HowItWorksPage";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import SportsInEgypt from "./pages/SportsInEgypt";
import SportPage from "./pages/SportPage";
import CityPage from "./pages/CityPage";
import { NavBar } from "./components/ui/tubelight-navbar";
import { Home as HomeIcon, Info, HelpCircle, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', url: '/', icon: HomeIcon },
  { name: 'About', url: '/#about', icon: Info },
  { name: 'Contact', url: '/#contact-section', icon: Mail },
  { name: 'How it Works', url: '/how-it-works', icon: HelpCircle }
];

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <NavBar items={navItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/host-tournament" element={<HostTournament />} />
          <Route path="/register-field" element={<RegisterField />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/sports-in-egypt" element={<SportsInEgypt />} />
          <Route path="/sports/:sport" element={<SportPage />} />
          <Route path="/:city" element={<CityPage />} />
          <Route path="*" element={
            <div className="min-h-screen bg-[#0A0E0C] text-white pt-32 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
                <p className="text-gray-400 mb-8">The page you are looking for does not exist.</p>
                <Link to="/" className="text-primary hover:underline">Return to Home</Link>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}
