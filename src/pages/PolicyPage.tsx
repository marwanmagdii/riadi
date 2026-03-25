import React, { useEffect } from 'react';
import { NavBar2 } from '../components/ui/navbar2';
import Footer from '../components/ui/footer';

export default function PolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0E0C] text-white selection:bg-secondary selection:text-white relative">
      <NavBar2 />

      <div className="pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-white/80 space-y-6">
          <p className="text-lg">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold text-secondary mt-12 mb-4">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, and other information you choose to provide.</p>
          
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We may use the information we collect about you to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, maintain, and improve our Services.</li>
            <li>Perform internal operations, including, for example, to prevent fraud and abuse of our Services.</li>
            <li>Send or facilitate communications between you and a facility owner.</li>
            <li>Send you communications we think will be of interest to you.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">3. Sharing of Information</h2>
          <p>We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including as follows:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>With facility owners to enable them to provide the Services you request.</li>
            <li>With third parties to provide you a service you requested through a partnership or promotional offering made by a third party or us.</li>
            <li>With the general public if you submit content in a public forum, such as blog comments, social media posts, or other features of our Services that are viewable by the general public.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">4. Security</h2>
          <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
