import React, { useState, useEffect, useRef } from 'react';
import { Star, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface RecommendationItem {
  id: string;
  category: string;
  "displayName.text": string;
  formattedAddress: string;
  rating: number;
  userRatingCount: number;
  internationalPhoneNumber: string;
  googleMapsUri: string;
  websiteUri: string;
  photo_url: string;
  latitude: number;
  longitude: number;
}

interface RecommendationsProps {
  eventType: 'wedding' | 'birthday' | 'corporate';
}

const Recommendations: React.FC<RecommendationsProps> = ({ eventType }) => {
  const [activeTab, setActiveTab] = useState<'venue' | 'decorator' | 'caterer'>('venue');
  const [recommendations, setRecommendations] = useState<RecommendationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showArrows, setShowArrows] = useState({ left: false, right: true });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const fetchRecommendations = async (category: string) => {
    try {
      const { data, error } = await supabase
        .from(category)
        .select(`
          id,
          category,
          "displayName.text",
          formattedAddress,
          rating,
          userRatingCount,
          internationalPhoneNumber,
          googleMapsUri,
          websiteUri,
          photo_url,
          latitude,
          longitude
        `)
        .limit(8);

      if (error) throw error;
      return data as RecommendationItem[];
    } catch (err) {
      console.error(`Error fetching ${category}:`, err);
      setError('Failed to fetch recommendations');
      return [];
    }
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowArrows({
        left: scrollLeft > 0,
        right: scrollLeft < scrollWidth - clientWidth - 1
      });
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 320; // Match your card width
      const gap = 24; // Match your gap (space-x-6 = 24px)
      const scrollAmount = cardWidth + gap;
      
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });

      setTimeout(checkScrollPosition, 400);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [venues, caterers, decorators] = await Promise.all([
          fetchRecommendations('venues'),
          fetchRecommendations('caterers'),
          fetchRecommendations('decorators')
        ]);

        setRecommendations([...venues, ...caterers, ...decorators]);
      } catch (err) {
        console.error('Error loading data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [eventType]);

  const filteredRecommendations = recommendations
    .filter(item => item.category.toLowerCase() === activeTab)
    .filter(item => item["displayName.text"] && item.formattedAddress);

  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A2342] mb-4">
            Handpicked Event Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover top-rated vendors for your perfect {eventType} event
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-10 border-b border-gray-200">
          {['venue', 'decorator', 'caterer'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 font-medium text-lg transition-colors ${
                activeTab === tab 
                  ? 'text-[#E6C79C] border-b-2 border-[#E6C79C]' 
                  : 'text-gray-500 hover:text-[#0A2342]'
              }`}
              onClick={() => setActiveTab(tab as typeof activeTab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}s
            </button>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showArrows.left && (
          <button 
            onClick={() => scroll('left')}
            className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl z-10"
          >
            <ChevronLeft className="w-6 h-6 text-[#0A2342]" />
          </button>
        )}

        {showArrows.right && (
          <button
            onClick={() => scroll('right')}
            className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl z-10"
          >
            <ChevronRight className="w-6 h-6 text-[#0A2342]" />
          </button>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#E6C79C] mx-auto"></div>
          </div>
        ) : (
          <div className="relative">
            {/* Carousel Container */}
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide pb-8 snap-x snap-mandatory scroll-smooth"
              onScroll={checkScrollPosition}
            >
              <div className="flex space-x-6 w-max min-w-full px-4">
                {filteredRecommendations.map((item) => (
                  <div 
                    key={item.id} 
                    className="snap-start flex-shrink-0 w-[280px] transform transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 h-full">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={item.photo_url || '/images/default_venue.jpg'}
                          alt={item["displayName.text"] || 'Venue image'}
                          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/default_venue.jpg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold text-[#0A2342]">
                            {item["displayName.text"] || 'Unnamed Venue'}
                          </h3>
                          <div className="flex items-center bg-[#F7D4C0] px-2 py-1 rounded-full">
                            <Star size={16} className="text-[#E6C79C] fill-[#E6C79C]" />
                            <span className="ml-1 font-medium">
                              {item.rating?.toFixed(1) || 'N/A'}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-500 mb-4">
                          <MapPin size={16} className="mr-1" />
                          <span>{item.formattedAddress || 'Address not available'}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <a
                            href={item.googleMapsUri}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-[#0A2342] font-medium hover:text-[#E6C79C] transition-colors"
                          >
                            View Map <ChevronRight size={16} className="ml-1" />
                          </a>
                          {item.websiteUri && (
                            <a
                              href={item.websiteUri}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#0A2342] hover:text-[#E6C79C]"
                            >
                              Website
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="text-center mt-6 space-x-2">
              {filteredRecommendations.map((_, index) => (
                <span 
                  key={index}
                 
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Recommendations;