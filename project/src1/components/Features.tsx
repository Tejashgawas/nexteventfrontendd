import React from 'react';
import { Calendar, Award, Users, Clock } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}


const features: Feature[] = [
  {
    id: 'f1',
    title: 'Top-Tier Recommendations',
    description: 'We carefully curate and vet the top 5 venues, decorators, and caterers for each event category.',
    icon: <Award className="h-8 w-8 text-[#E6C79C]" />
  },
  {
    id: 'f2',
    title: 'Save Time & Stress',
    description: 'Skip the endless research and decision fatigue with our pre-vetted recommendations.',
    icon: <Users className="h-8 w-8 text-[#E6C79C]" />
  },
  {
    id: 'f3',
    title: 'Personalized Suggestions',
    description: 'Get recommendations tailored to your specific event needs and style preferences.',
    icon: <Clock className="h-8 w-8 text-[#E6C79C]" />
  },
  {
    id: 'f4',
    title: 'Post-Event Analysis',
    description: 'Receive a comprehensive post-event report to help plan and improve your future events.',
    icon: <Calendar className="h-8 w-8 text-[#E6C79C]" />
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A2342] mb-4">Why Choose NexEvent</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We take the guesswork out of event planning by connecting you with the best service providers in your area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-gray-50 p-8 rounded-lg text-center transition-transform hover:-translate-y-2"
            >
              <div className="bg-[#0A2342]/5 h-16 w-16 flex items-center justify-center rounded-full mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0A2342] mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;