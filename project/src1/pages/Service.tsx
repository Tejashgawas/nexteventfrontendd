import React, { useState } from "react";

const ServicesPage = () => {
  // Arrays of venue, caterer, and decorator data
  const venues = [
    {
      name: "The Grand Ballroom",
      location: "Downtown",
      rating: "⭐ 4.9",
      description: "A luxurious ballroom with crystal chandeliers and panoramic city views.",
    },
    {
      name: "Ocean View Terrace",
      location: "Beachside",
      rating: "⭐ 4.7",
      description: "Perfect for sunset ceremonies with an ocean backdrop.",
    },
  ];

  const caterers = [
    {
      name: "Gourmet Celebrations",
      location: "Metro Area",
      rating: "⭐ 4.8",
      description: "Custom fine dining menus with local ingredients.",
    },
    {
      name: "Feast & Fest",
      location: "City Center",
      rating: "⭐ 4.6",
      description: "Delicious buffet spreads and live counters.",
    },
  ];

  const decorators = [
    {
      name: "Elegant Affairs",
      location: "Citywide",
      rating: "⭐ 4.9",
      description: "Romantic wedding decor with floral mastery.",
    },
    {
      name: "Dazzle Decorators",
      location: "Suburban",
      rating: "⭐ 4.5",
      description: "Creative stage and lighting setups.",
    },
  ];

  // State for theme selection
  const [selectedTheme, setSelectedTheme] = useState(-1);
  
  // Available themes
  const themes = [
    { name: "Elegant", primary: "bg-gray-100", accent: "text-gray-800" },
    { name: "Romantic", primary: "bg-pink-100", accent: "text-pink-800" },
    { name: "Vibrant", primary: "bg-yellow-100", accent: "text-yellow-800" },
    { name: "Rustic", primary: "bg-amber-100", accent: "text-amber-800" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Our Services</h1>
          <p className="mt-4 text-xl text-center">Creating unforgettable events with exceptional planning and coordination</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Event Planning Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Event Planning</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 mb-6">
              We offer complete event planning services tailored to your needs—whether it's a wedding,
              birthday, or corporate event. From concept to execution, we handle it all with perfection.
            </p>
            
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 p-4">
                <h3 className="text-xl font-semibold mb-3">Our Planning Services Include:</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Complete venue selection assistance</li>
                  <li>Budget planning and management</li>
                  <li>Vendor coordination and management</li>
                  <li>Day-of coordination and timeline creation</li>
                  <li>Guest management solutions</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <h3 className="text-xl font-semibold mb-3">Why Choose Us:</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Experienced event planners with 10+ years in the industry</li>
                  <li>Personalized approach to every client</li>
                  <li>Stress-free planning experience</li>
                  <li>Attention to detail and creative solutions</li>
                  <li>Outstanding vendor network</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Venues Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Venues</h2>
          <div className="space-y-6">
            {venues.map((venue, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-purple-100 h-32 w-full rounded flex items-center justify-center">
                    <span className="text-4xl">🏨</span>
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">{venue.name}</h3>
                    <span className="text-sm bg-purple-100 px-3 py-1 rounded-full">{venue.rating}</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">{venue.location}</p>
                  <p className="mt-3">{venue.description}</p>
                  <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Caterers Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Caterers</h2>
          <div className="space-y-6">
            {caterers.map((caterer, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-green-100 h-32 w-full rounded flex items-center justify-center">
                    <span className="text-4xl">🍽️</span>
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">{caterer.name}</h3>
                    <span className="text-sm bg-green-100 px-3 py-1 rounded-full">{caterer.rating}</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">{caterer.location}</p>
                  <p className="mt-3">{caterer.description}</p>
                  <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                    View Menu
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Decorators Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Decorators</h2>
          <div className="space-y-6">
            {decorators.map((decorator, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="bg-blue-100 h-32 w-full rounded flex items-center justify-center">
                    <span className="text-4xl">🎭</span>
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">{decorator.name}</h3>
                    <span className="text-sm bg-blue-100 px-3 py-1 rounded-full">{decorator.rating}</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-1">{decorator.location}</p>
                  <p className="mt-3">{decorator.description}</p>
                  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    View Portfolio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Theme Generator Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">Unique Theme Generator</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg mb-6">
              Not sure how to style your event? Our <strong>Unique Theme Generator</strong> helps
              you find the perfect theme—whether it's romantic, elegant, playful, or
              professional. Based on your event type, preferences, and mood, we
              generate a customized theme palette to make your event truly unforgettable.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Recommends unique themes based on your preferences for example:</h3>
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {themes.map((theme, index) => (
                  <button
                    key={index}
                    className={`p-4 ${theme.primary} rounded-lg transition ${
                      selectedTheme === index ? "ring-2 ring-purple-600" : ""
                    }`}
                    onClick={() => setSelectedTheme(index)}
                  >
                    <span className={`font-medium ${theme.accent}`}>{theme.name}</span>
                  </button>
                ))}
              </div> */}
            </div>
            
            {/* {selectedTheme >= 0 && (
              <div className="p-4 bg-gray-100 rounded-lg">
                <p>
                  You've selected the <strong>{themes[selectedTheme].name}</strong> theme. Our team will prepare a custom design proposal based on this style.
                </p>
              </div>
            )}
             */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">Our theming process includes:</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Color scheme development</li>
                <li>Decor element selection</li>
                <li>Lighting design recommendations</li>
                <li>Furniture and fixture coordination</li>
                <li>Custom accent pieces creation</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      
      {/* Contact CTA */}
      <div className="bg-purple-900 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Perfect Event?</h2>
          <p className="mb-6 text-lg">Contact us today to get started with your event planning.</p>
          <button className="bg-white text-purple-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;