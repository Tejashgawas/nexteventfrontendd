import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  eventType: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Jessica & Michael',
    role: 'Newlyweds',
    image: 'https://images.pexels.com/photos/935789/pexels-photo-935789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'Thanks to NexEvent, we found our dream venue and the most incredible decorators for our wedding. The recommendations were spot on and saved us so much time!',
    eventType: 'Wedding',
    rating: 5
  },
  {
    id: 't2',
    name: 'Sarah Thompson',
    role: 'Birthday Celebrant',
    image: 'https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'My 30th birthday party was perfect thanks to the amazing venue and caterer we found through this site. The recommendations exceeded my expectations!',
    eventType: 'Birthday',
    rating: 5
  },
  {
    id: 't3',
    name: 'Robert Chan',
    role: 'Marketing Director',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'Our company conference was a huge success. The venue and catering services recommended were professional and impressed all our clients and partners.',
    eventType: 'Corporate',
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#0A2342]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Real stories from real people who found their perfect event partners through our recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg p-8 shadow-lg transition-transform hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-[#0A2342]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <span className="text-xs font-medium uppercase text-[#E6C79C] bg-[#F7D4C0] py-1 px-2 rounded">
                  {testimonial.eventType}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < testimonial.rating ? "text-[#E6C79C] fill-[#E6C79C]" : "text-gray-300"} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;