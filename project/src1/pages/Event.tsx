import React, { useState } from 'react';

const Event: React.FC = () => {
  const [eventType, setEventType] = useState('');
  const [location, setLocation] = useState('');
  const [recommendations, setRecommendations] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFetchRecommendations = async () => {
    if (!eventType || !location) {
      setError('Please fill in both fields');
      return;
    }

    setLoading(true);
    setError('');
    setRecommendations(null);

    try {
      const response = await fetch('http://127.0.0.1:5000/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event_type: eventType,  // Match backend's expected field name
          location: location
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch recommendations');
      }

      // Check for valid response structure
      if (!data.venues || !data.caterers || !data.decorators) {
        throw new Error('Invalid response format from server');
      }

      setRecommendations(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }

  };

  const formatPhoneNumber = (phone: string) => {
    return phone.replace(/(\+\d{2})(\d{5})(\d{5})/, "$1 $2 $3");
  };

  const isValidImage = (url: string) => {
    try {
      new URL(url);
      return url.startsWith('https://') && url !== 'NAN';
    } catch {
      return false;
    }
  };

  const getDefaultImage = (category: string) => {
    const defaultImages = {
      venues: '/images/venues.jpeg',
      caterers: '/images/caterers.jpeg',
      decorators: '/images/decorators.jpeg'
    };
    return defaultImages[category as keyof typeof defaultImages] || 'https://via.placeholder.com/400';
  };

  return (
    <div className="p-6 max-w-6xl mx-auto min-h-screen">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <span className="text-4xl font-serif font-bold text-[#0A2342] block mb-4">
          NexEvent
        </span>
        <p className="text-xl text-gray-600 mb-3">
          Your Intelligent Event Planning Partner
        </p>
        <p className="text-lg text-gray-500">
          Discover top-rated vendors tailored to your unique needs
        </p>
      </div>

      {/* Search Section */}
      <div className="mb-12 space-y-8 max-w-3xl mx-auto">
        <div className="space-y-6">
          <div className="relative">
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full p-4 text-lg rounded-xl border-2 border-gray-200 focus:border-[#0A2342] focus:ring-2 focus:ring-[#0A2342]/20 transition-all outline-none appearance-none bg-white"
            >
              <option value="">Select Event Type</option>
              <option value="wedding">🎉 Wedding</option>
              <option value="birthday">🎂 Birthday</option>
              <option value="corporate">💼 Corporate</option>
           
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
              </svg>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="📍 Enter Location (e.g., Vasco, Goa)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-4 text-lg rounded-xl border-2 border-gray-200 focus:border-[#0A2342] focus:ring-2 focus:ring-[#0A2342]/20 transition-all outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleFetchRecommendations}
          disabled={loading}
          className="w-full bg-[#e6c79c] hover:bg-[#d8b78a] text-[#0A2342] font-semibold text-lg py-4 px-8 rounded-xl transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
        >
          {loading ? '🔍 Searching...' : '✨ Find Perfect Services'}
        </button>
      </div>

      {/* Results Section */}
      {loading && (
        <div className="flex flex-col items-center justify-center my-12 space-y-4">
          <div className="animate-spin rounded-full h-14 w-14 border-4 border-[#0A2342] border-t-transparent"></div>
          <p className="text-[#0A2342] text-lg font-medium animate-pulse">
            Curating your perfect event... 🎉
          </p>
        </div>
      )}

      {error && (
        <div className="mb-8 p-4 bg-red-100 text-red-700 rounded-xl text-center">
          Error: {error}
        </div>
      )}

      {recommendations && (
        <div className="space-y-12">
          {['venues', 'caterers', 'decorators'].map((category) => (
            <div key={category} className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-serif font-bold text-[#0A2342] mb-8">
                Top {category.replace('s', '')} Recommendations
              </h2>
              <div className="flex overflow-x-auto pb-6 space-x-6 scrollbar-hide">
                {recommendations[category]?.map((item: any, index: number) => (
                  <div 
                    key={index}
                    className="min-w-[320px] max-w-[380px] flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="relative h-56 overflow-hidden rounded-t-2xl">
                      <img
                        src={isValidImage(item.photo) ? item.photo : getDefaultImage(category)}
                        alt={item.name}
                        className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = getDefaultImage(category);
                        }}
                      />
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-[#0A2342] truncate">{item.name}</h3>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-yellow-600">⭐ {item.rating}</span>
                          <span className="text-gray-300">•</span>
                          <span className="text-[#0A2342]">{item.distance_km} km</span>
                        </div>
                        <span className="text-sm bg-[#e6c79c] text-[#0A2342] px-3 py-1 rounded-full">
                          #{index + 1}
                        </span>
                      </div>

                      {item.contact && (
                        <div className="flex items-center space-x-3">
                          <span className="text-green-600">📞</span>
                          <a
                            href={`tel:${item.contact}`}
                            className="text-green-600 hover:underline truncate"
                          >
                            {formatPhoneNumber(item.contact)}
                          </a>
                        </div>
                      )}

                      {item.maps && (
                        <a
                          href={item.maps}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#0A2342] hover:text-[#e6c79c] transition-colors"
                        >
                          <span className="mr-2">📍</span>
                          View on Maps
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Event;