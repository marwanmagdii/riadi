/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HostTournament from "./pages/HostTournament";
import RegisterField from "./pages/RegisterField";
import HowItWorksPage from "./pages/HowItWorksPage";
import { NavBar } from "./components/ui/tubelight-navbar";
import { Home as HomeIcon, Info, HelpCircle, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', url: '/', icon: HomeIcon },
  { name: 'About', url: '/#about', icon: Info },
  { name: 'How it Works', url: '/how-it-works', icon: HelpCircle },
  { name: 'Contact', url: '/#contact', icon: Mail }
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
        </Routes>
      </div>
    </Router>
  );
}
