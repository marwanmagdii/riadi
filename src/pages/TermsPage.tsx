import React, { useEffect } from 'react';
import { NavBar2 } from '../components/ui/navbar2';
import Footer from '../components/ui/footer';

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0E0C] text-white selection:bg-secondary selection:text-white relative">
      <NavBar2 />

      <div className="pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Terms and Conditions</h1>
          <div className="prose prose-invert max-w-none text-white/80 space-y-6">
            <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-semibold text-secondary mt-12 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using the Riadi platform, you accept and agree to be bound by the terms and provision of this agreement.</p>
            
            <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">2. Description of Service</h2>
            <p>Riadi provides a platform for users to find, book, and manage sports facilities, as well as organize and participate in tournaments.</p>
            
            <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">3. User Conduct</h2>
            <p>You agree to use the service only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.</p>
            
            <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">4. Bookings and Payments</h2>
            <p>All bookings are subject to availability. Payments must be made in full at the time of booking unless otherwise specified. Cancellations and refunds are subject to the specific facility's policy.</p>
            
            <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">5. Limitation of Liability</h2>
            <p>Riadi shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
