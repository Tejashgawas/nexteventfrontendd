// src/pages/Theme.tsx
import React, { useState } from 'react';


const Theme: React.FC = () => {
  const [eventType, setEventType] = useState('');
  const [audience, setAudience] = useState('');
  const [season, setSeason] = useState('');
  const [colors, setColors] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Generating theme with:', { eventType, audience, season, colors });
      setIsGenerating(false);
      // TODO: Connect this to your backend when ready
    }, 1000);
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-serif font-bold text-[#0A2342] mb-4 text-center">Event Theme Generator</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Enter your preferences below and we'll create a personalized event theme that perfectly matches your vision.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Input Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-medium text-[#0A2342] mb-6">Your Preferences</h2>
            <form className="space-y-6" onSubmit={handleGenerate}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                <input
                  type="text"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="e.g., Wedding, Birthday, Corporate"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Target Audience</label>
                <input
                  type="text"
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="e.g., Adults, Children, Mixed ages"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Season</label>
                <select
                  value={season}
                  onChange={(e) => setSeason(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                >
                  <option value="">Select a season</option>
                  <option value="spring">Spring</option>
                  <option value="summer">Summer</option>
                  <option value="fall">Fall</option>
                  <option value="winter">Winter</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Color Palette</label>
                <input
                  type="text"
                  value={colors}
                  onChange={(e) => setColors(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="e.g., Blue & Gold, Pastels, Earth tones"
                />
              </div>

              <button
                type="submit"
                disabled={isGenerating}
                className="mt-8 w-full bg-[#0A2342] text-white py-3 px-6 rounded-lg hover:bg-[#163C6A] transition-all transform hover:-translate-y-1 shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isGenerating ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  "Generate My Theme"
                )}
              </button>
            </form>
          </div>

          {/* Right: Image and Description */}
          <div className="flex flex-col justify-center items-center bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="mb-6 w-full">
              <h2 className="text-2xl font-medium text-[#0A2342] mb-2">Your Theme Preview</h2>
              <div className="w-20 h-1 bg-blue-500 mb-4"></div>
              <p className="text-gray-600">
                {eventType || audience || season || colors ? 
                  `Preview of your ${eventType || "event"} theme${audience ? ` for ${audience}` : ""}${season ? ` in ${season}` : ""}${colors ? ` with ${colors} colors` : ""}.` : 
                  "Fill out the form to generate your personalized theme preview."}
              </p>
            </div>
            
            <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center text-gray-400 border border-gray-200 shadow-inner overflow-hidden relative">
              {/* Placeholder for Image */}
              <div className="absolute inset-0 opacity-5 bg-pattern"></div>
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <p className="font-medium">Theme Visualization</p>
                <p className="text-sm mt-1">Will appear here after generation</p>
              </div>
            </div>
            
            <div className="mt-6 w-full">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-800">
                <div className="flex">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                  </svg>
                  <p>
                    Our AI will generate theme ideas, color schemes, and decoration suggestions based on your inputs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme;