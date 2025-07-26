
import React, { useEffect, useState } from 'react';
import { CheckCircle, Heart, Globe } from 'lucide-react';

const AboutSection = () => {
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

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: CheckCircle, text: "Expert Travel Planning" },
    { icon: Heart, text: "Personalized Experiences" },
    { icon: Globe, text: "Worldwide Destinations" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-blue-500 text-lg mb-4 font-semibold tracking-wide">Know About Us</p>
          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-8 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
            ABOUT US
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl md:text-5xl font-bold text-blue-900 mb-8 leading-tight">
              We Make The Plan, You Pack Your Bags.
            </h3>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                At Proyatri, we believe that travel is not just about visiting new places; it's about creating unforgettable memories and life-changing experiences. Our dedicated team of travel experts works tirelessly to craft personalized adventures that suit your unique preferences and budget.
              </p>
              <p>
                From exotic tropical getaways to cultural city breaks, from adventurous mountain expeditions to relaxing beach retreats, we handle every detail of your journey. Our comprehensive travel planning service ensures that all you need to do is pack your bags and prepare for the adventure of a lifetime.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className={`flex items-center space-x-3 p-4 bg-white rounded-xl shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                    style={{ transitionDelay: `${(index + 3) * 0.1}s` }}
                  >
                    <Icon className="w-6 h-6 text-blue-600" />
                    <span className="text-sm font-medium text-gray-800">{feature.text}</span>
                  </div>
                );
              })}
            </div>
            
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              CONTACT US
            </button>
          </div>
          
          <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Travel planning"
                className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1"
              />
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Mountain adventure"
                className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1"
              />
            </div>
            <div className="space-y-6 mt-8">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Beach vacation"
                className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1"
              />
              <img
                src="https://images.unsplash.com/photo-1520637836862-4d197d17c52a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="City exploration"
                className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;