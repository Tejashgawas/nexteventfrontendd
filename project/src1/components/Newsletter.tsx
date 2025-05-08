import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit to a backend here
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset the submission status after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };
  
  return (
    <section className="py-16 bg-[#F7D4C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0A2342] mb-4">
            Stay Updated with Event Trends
          </h2>
          <p className="text-[#0A2342]/80 mb-8">
            Login to our website for the latest event planning recommendations, new vendor spotlights, and exclusive promotions.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <div className="flex-grow">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 rounded-md border-2 border-[#E6C79C] focus:outline-none focus:border-[#0A2342] transition-colors"
                disabled={isSubmitted}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitted}
              className={`${
                isSubmitted 
                  ? 'bg-green-600 text-white cursor-default' 
                  : 'bg-[#0A2342] text-white hover:bg-[#0A2342]/90'
              } px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center`}
            >
              {isSubmitted ? (
                'Subscribed!'
              ) : (
                <>
                  LOGIN <Send size={16} className="ml-2" />
                </>
              )}
            </button>
          </form>
          
          <p className="text-sm text-[#0A2342]/60 mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;