import React, { useEffect, useState } from 'react';
import { NavBar2 } from '../components/ui/navbar2';
import Footer from '../components/ui/footer';
import Markdown from 'react-markdown';

export default function PrivacyPage() {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchPrivacy = async () => {
      try {
        const response = await fetch('https://api.riadiapp.com/legal/privacy', {
          headers: {
            'accept-language': 'en'
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch privacy policy');
        }
        
        const data = await response.json();
        setContent(data.content);
      } catch (err) {
        console.error('Error fetching privacy policy:', err);
        setError('Could not load privacy policy. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPrivacy();
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0E0C] text-white selection:bg-secondary selection:text-white relative">
      <NavBar2 />

      <div className="pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Privacy Policy</h1>
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-6 rounded-xl">
              {error}
            </div>
          ) : (
            <div className="prose prose-invert max-w-none text-white/80 space-y-6">
              <Markdown>{content}</Markdown>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
