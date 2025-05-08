import React, { useState } from 'react';
// import { Link } from './Link';
import { Link } from 'react-router-dom';

interface EventType {
  id: string;
  title: string;
  description: string;
  image: string;
}

const eventTypes: EventType[] = [
  {
    id: 'wedding',
    title: 'Wedding',
    description: 'Create your dream wedding with our curated list of top venues, elegant decorators, and exquisite catering services.',
    image: 'https://i.etsystatic.com/36687326/r/il/4d3c0c/6005975689/il_570xN.6005975689_7ax0.jpg'
  },
  {
    id: 'birthday',
    title: 'Birthday',
    description: 'Celebrate another year with unforgettable birthday parties. Find the perfect venues and services for any age.',
    image: 'https://cdn.prod.website-files.com/670e0ce761868ff9e8915a06/675db4a729a738d560d182fe_671683d7807fb3ffe160b68e_Inspiring_Birthday_Words_for_Kids_97981d2f58_shu3rt.webp'
},
  {
    id: 'corporate',
    title: 'Corporate',
    description: 'Elevate your business events with professional venues, sophisticated decor, and premium catering options.',
    image: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const EventTypes: React.FC = () => {
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A2342] mb-4">
            Discover Your Perfect Event
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in three main event types, each with carefully selected top recommendations for venues, decorators, and caterers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {eventTypes.map((event) => (
            <div 
              key={event.id}
              className="relative group overflow-hidden rounded-xl transition-all duration-500 ease-out hover:shadow-xl"
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342]/90 via-[#0A2342]/40 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-serif font-bold text-white mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                  {event.title}
                </h3>
                
                {/* Description with Smooth Height Transition */}
                <div className="overflow-hidden">
                  <p className={`text-white/90 transition-all duration-500 ease-out ${
                    hoveredEvent === event.id 
                      ? "opacity-100 max-h-32 translate-y-0" 
                      : "opacity-0 max-h-0 translate-y-4"
                  }`}>
                    {event.description}
                  </p>
                </div>

                {/* Animated Button */}
                <div className={`mt-4 transition-all duration-500 ease-out ${
                  hoveredEvent === event.id 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-4"
                }`}>
                  <Link
                    to={`/services/${event.id}`}
                    className="inline-flex items-center bg-[#E6C79C]/90 text-[#0A2342] font-medium py-2 px-4 rounded-md hover:bg-[#E6C79C] transition-colors duration-300"
                  >
                    Explore Options
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Hover Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-12 h-full -skew-x-12 bg-white/30 animate-shine" />
              </div>
            </div>
          ))}
        </div>

        {/* Buttons Section */}
        {/* <div className="mt-12 text-center">
          <div className="inline-flex space-x-6"> 
            <Link 
              to="/event"
              className="group inline-block bg-gradient-to-br from-[#E6C79C] to-[#d8b78a] text-[#0A2342] font-semibold py-3 px-8 rounded-lg 
                        hover:bg-gradient-to-bl hover:from-[#d8b78a] hover:to-[#cdaa7d] 
                        transform transition-all duration-300 
                        hover:scale-105 hover:shadow-lg"
            >
              <span className="flex items-center gap-2">
                <span>Create Event</span>
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:scale-125"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 4v16m8-8H4" 
                  />
                </svg>
              </span>
            </Link>

            <Link 
              to="/theme"
              className="group inline-block bg-gradient-to-br from-[#E6C79C] to-[#d8b78a] text-[#0A2342] font-semibold py-3 px-8 rounded-lg 
                        hover:bg-gradient-to-tl hover:from-[#d8b78a] hover:to-[#cdaa7d] 
                        transform transition-all duration-300 
                        hover:scale-105 hover:shadow-lg"
            >
              <span className="flex items-center gap-2">
                <span>Themes</span>
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default EventTypes;