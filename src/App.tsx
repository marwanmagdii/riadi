/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { NavBar } from "./components/ui/tubelight-navbar";
import { Home as HomeIcon, Info, HelpCircle, Mail } from 'lucide-react';

const HostTournament = lazy(() => import("./pages/HostTournament"));
const RegisterField = lazy(() => import("./pages/RegisterField"));
const HowItWorksPage = lazy(() => import("./pages/HowItWorksPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const QrPage = lazy(() => import("./pages/QrPage"));
const SportsInEgypt = lazy(() => import("./pages/SportsInEgypt"));
const SportPage = lazy(() => import("./pages/SportPage"));
const CityPage = lazy(() => import("./pages/CityPage"));

const navItems = [
  { name: 'Home', url: '/', icon: HomeIcon },
  { name: 'About', url: '/#about', icon: Info },
  { name: 'Contact', url: '/#contact-section', icon: Mail },
  { name: 'How it Works', url: '/how-it-works', icon: HelpCircle }
];

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#0A0E0C]">
        <NavBar items={navItems} />
        <Suspense fallback={<div className="min-h-screen bg-[#0A0E0C]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/host-tournament" element={<HostTournament />} />
            <Route path="/register-field" element={<RegisterField />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/qr" element={<QrPage />} />
            <Route path="/sports-in-egypt" element={<SportsInEgypt />} />
            <Route path="/sports/:sport" element={<SportPage />} />
            <Route path="/:city" element={<CityPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}
