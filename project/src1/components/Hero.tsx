import React from 'react';
import { Link } from 'react-router-dom';


const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#0A2342] h-[90vh] flex items-center">
      {/* Hero background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(10, 35, 66, 0.7)"
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          Creating Unforgettable
          <span className="block text-[#E6C79C]">Event Experiences</span>
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Discover the perfect venues, decorators, and caterers for your special occasions.
          We curate the top recommendations so you can focus on making memories.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to ="/service" 
            className="bg-[#E6C79C] text-[#0A2342] font-medium py-3 px-8 rounded-md hover:bg-[#E6C79C]/90 transition-all transform hover:-translate-y-1"
          >
            Explore Services
          </Link>
          <Link 
            to="/about" 
            className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-md hover:bg-white/10 transition-all transform hover:-translate-y-1"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;