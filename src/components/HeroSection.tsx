import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Mountain Adventures'
    },
    {
      url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Beach Paradise'
    },
    {
      url: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'City Lights'
    },
    {
      url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Forest Trails'
    },
    {
      url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Lakeside Serenity'
    },
    {
      url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: 'Desert Wonders'
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    // Auto-slide functionality
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', { destination, duration, maxPrice });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
              style={{
                backgroundImage: `url('${image.url}')`,
              }}
            />
          </div>
        ))}
        
        {/* Carousel Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-blue-900/30" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }} />
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '5s' }} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '3s', animationDuration: '6s' }} />
      </div>
      
      {/* Content */}
      <div className={`relative z-10 text-center text-white px-4 max-w-6xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-blue-300 mr-2 animate-pulse" />
            <p className="text-lg md:text-xl text-blue-200 font-medium tracking-wide">Welcome To Proyatri</p>
            <Sparkles className="w-6 h-6 text-blue-300 ml-2 animate-pulse" />
          </div>
          
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We Make Vacations
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Magical
            </span>
          </h1>
          
          <p className={`text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We Believe Everyone Should Travel Because Travelling's For Everyone. We Make Vacations Magical Making Life The Daring Adventure You Deserve.
          </p>
          
          <button className={`bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-blue-500/25 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="flex items-center space-x-2">
              <span>CONTACT US</span>
              <Sparkles className="w-5 h-5" />
            </span>
          </button>
        </div>

        {/* Enhanced Search Form */}
        <form 
          onSubmit={handleSearch} 
          className={`bg-white/95 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-5xl mx-auto mt-12 border border-white/20 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div className="text-left group">
              <label className="block text-gray-700 text-sm font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                Destination
              </label>
              <div className="relative">
                <select 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl text-gray-700 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white"
                >
                  <option value="">Select Destination</option>
                  <option value="bali">Bali, Indonesia</option>
                  <option value="dubai">Dubai, UAE</option>
                  <option value="spain">Barcelona, Spain</option>
                  <option value="turkey">Istanbul, Turkey</option>
                  <option value="maldives">Maldives</option>
                  <option value="santorini">Santorini, Greece</option>
                  <option value="tokyo">Tokyo, Japan</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none transition-transform duration-300 group-hover:rotate-180" />
              </div>
            </div>
            
            <div className="text-left group">
              <label className="block text-gray-700 text-sm font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                Duration
              </label>
              <div className="relative">
                <select 
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl text-gray-700 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white"
                >
                  <option value="">Select Duration</option>
                  <option value="3-days">3 Days</option>
                  <option value="4-days">4 Days</option>
                  <option value="1-week">1 Week</option>
                  <option value="2-weeks">2 Weeks</option>
                  <option value="1-month">1 Month</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none transition-transform duration-300 group-hover:rotate-180" />
              </div>
            </div>
            
            <div className="text-left group">
              <label className="block text-gray-700 text-sm font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                Max Price
              </label>
              <input
                type="number"
                placeholder="Enter max price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 bg-white"
              />
            </div>
            
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105 group"
            >
              <Search className="h-5 w-5 group-hover:animate-pulse" />
              <span>SEARCH</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
