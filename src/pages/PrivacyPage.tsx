import React, { useEffect } from 'react';
import { NavBar2 } from '../components/ui/navbar2';
import Footer from '../components/ui/footer';

export default function PrivacyPage() {
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
          
          <p>
            Welcome to Riadi ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our platform. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or interact with our services (collectively, the "Services").
          </p>
          <p>
            Please read this Privacy Policy carefully. By accessing or using our Services, you agree to be bound by the terms and conditions described herein. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our Services.
          </p>

          <h2 className="text-2xl font-semibold text-secondary mt-12 mb-4">1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, information collected automatically when you use our Services, and information from third-party sources.</p>
          
          <h3 className="text-xl font-medium text-white mt-6 mb-2">A. Information You Provide to Us</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Account Information:</strong> When you register for an account, we collect your name, email address, phone number, password, and profile picture.</li>
            <li><strong>Booking Information:</strong> When you book a sports facility, we collect details related to your booking, including the facility name, location, date, time, and any special requests.</li>
            <li><strong>Communications:</strong> If you contact us for customer support or provide feedback, we collect your name, email address, and the contents of your message.</li>
            <li><strong>User Content:</strong> Any reviews, comments, or photos you upload to the platform.</li>
          </ul>

          <h3 className="text-xl font-medium text-white mt-6 mb-2">B. Information Collected Automatically</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Device Data:</strong> We collect information about the device you use to access our Services, including the hardware model, operating system, unique device identifiers, and mobile network information.</li>
            <li><strong>Usage Data:</strong> We collect data about your interactions with our Services, such as the pages or screens you view, links you click, and the dates and times of your visits.</li>
            <li><strong>Location Data:</strong> With your permission, we may collect precise geolocation data from your device to help you find nearby sports facilities. You can disable location services in your device settings at any time.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities and preferences.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-secondary mt-12 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect for various business and commercial purposes, including to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, maintain, and improve our Services, including processing bookings and facilitating communications between users and facility owners.</li>
            <li>Personalize your experience and deliver content and product offerings relevant to your interests.</li>
            <li>Process transactions and send related information, such as confirmations and receipts.</li>
            <li>Send technical notices, updates, security alerts, and support and administrative messages.</li>
            <li>Respond to your comments, questions, and customer service requests.</li>
            <li>Communicate with you about products, services, offers, promotions, and events offered by Riadi and others.</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our Services.</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities and protect the rights and property of Riadi and others.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-secondary mt-12 mb-4">3. Sharing of Information</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>With Facility Owners:</strong> We share your booking details (such as your name and contact information) with the owners of the sports facilities you book through our platform to enable them to provide the requested services.</li>
            <li><strong>With Service Providers:</strong> We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf (e.g., hosting, analytics, customer service).</li>
            <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend our rights or property, prevent fraud, or protect the personal safety of users of the Services or the public.</li>
            <li><strong>With Your Consent:</strong> We may share your information with third parties when we have your explicit consent to do so.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-secondary mt-12 mb-4">4. Data Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information. We use administrative, technical, and physical safeguards to protect your data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

          <h2 className="text-2xl font-semibold text-secondary mt-12 mb-4">5. Your Privacy Rights and Choices</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Account Information:</strong> You may update, correct, or delete your account information at any time by logging into your account settings.</li>
            <li><strong>Location Information:</strong> You can choose whether or not to allow our application to collect and use real-time information about your device's location through your device's privacy settings.</li>
            <li><strong>Cookies:</strong> Most web browsers are set to accept cookies by default. You can usually choose to set your browser to remove or reject browser cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our Services.</li>
            <li><strong>Promotional Communications:</strong> You may opt out of receiving promotional emails from us by following the instructions in those emails. If you opt out, we may still send you non-promotional emails, such as those about your account or our ongoing business relations.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-secondary mt-12 mb-4">6. Children's Privacy</h2>
          <p>Our Services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.</p>

          <h2 className="text-2xl font-semibold text-secondary mt-12 mb-4">7. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. If we make material changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice (such as adding a statement to our homepage or sending you a notification). We encourage you to review the Privacy Policy whenever you access the Services to stay informed about our information practices and the choices available to you.</p>

          <h2 className="text-2xl font-semibold text-secondary mt-12 mb-4">8. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
          <div className="bg-white/5 p-6 rounded-lg border border-white/10 mt-4">
            <p className="font-medium text-white">Riadi Sports</p>
            <p>Email: <a href="mailto:contact@riadiapp.com" className="text-primary hover:underline">contact@riadiapp.com</a></p>
            <p>Cairo, Egypt</p>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
