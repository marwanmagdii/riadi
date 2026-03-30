import React, { useEffect, useState } from 'react';
import { NavBar2 } from '../components/ui/navbar2';
import Footer from '../components/ui/footer';
import Markdown from 'react-markdown';

export default function TermsPage() {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchTerms = async () => {
      try {
        const response = await fetch('https://api.riadiapp.com/legal/terms', {
          headers: {
            'accept-language': 'en'
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch terms and conditions');
        }
        
        const data = await response.json();
        setContent(data.content);
      } catch (err) {
        console.error('Error fetching terms:', err);
        setError('Could not load terms and conditions. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTerms();
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0E0C] text-white selection:bg-secondary selection:text-white relative">
      <NavBar2 />

      <div className="pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Terms and Conditions</h1>
          
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
