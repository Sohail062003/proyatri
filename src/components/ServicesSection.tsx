
import React, { useEffect, useState } from 'react';
import { Plane, MapPin, Headphones, Hotel, Coffee, Car } from 'lucide-react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('services');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Plane,
      title: 'Cheap Flights',
      description: 'Find the best deals on flights worldwide with our exclusive partnerships and advanced booking system.',
      color: 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600',
      hoverColor: 'group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white'
    },
    {
      icon: MapPin,
      title: 'Variety Of Tours',
      description: 'Choose from hundreds of curated tours and experiences designed to match every travel style and interest.',
      color: 'bg-gradient-to-br from-green-100 to-green-200 text-green-600',
      hoverColor: 'group-hover:from-green-600 group-hover:to-green-700 group-hover:text-white'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Our dedicated support team is available around the clock to assist you throughout your journey.',
      color: 'bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600',
      hoverColor: 'group-hover:from-purple-600 group-hover:to-purple-700 group-hover:text-white'
    },
    {
      icon: Hotel,
      title: 'Affordable Hotels',
      description: 'Access to exclusive rates and hand-picked accommodations from budget stays to luxury resorts.',
      color: 'bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600',
      hoverColor: 'group-hover:from-orange-600 group-hover:to-orange-700 group-hover:text-white'
    },
    {
      icon: Coffee,
      title: 'Food and Drink',
      description: 'Discover local cuisines and dining experiences with our curated restaurant recommendations and food tours.',
      color: 'bg-gradient-to-br from-cyan-100 to-cyan-200 text-cyan-600',
      hoverColor: 'group-hover:from-cyan-600 group-hover:to-cyan-700 group-hover:text-white'
    },
    {
      icon: Car,
      title: 'Taxi Service',
      description: 'Reliable transportation solutions including airport transfers and local taxi services worldwide.',
      color: 'bg-gradient-to-br from-red-100 to-red-200 text-red-600',
      hoverColor: 'group-hover:from-red-600 group-hover:to-red-700 group-hover:text-white'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-blue-500 text-lg mb-4 font-semibold tracking-wide">What We Offer</p>
          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-8 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
            OUR SERVICES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group p-8 bg-white rounded-2xl shadow-lg hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 hover:border-blue-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  transitionDelay: `${index * 0.1}s`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className={`w-20 h-20 ${service.color} ${service.hoverColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <IconComponent className="h-10 w-10 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;