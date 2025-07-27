
import React from 'react';
import { Star, Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const DestinationsSection = () => {
  const destinations = [
    {
      id: 1,
      name: 'Dubai',
      country: 'UAE',
      price: '$1000',
      duration: '4 Days',
      rating: 4.9,
      reviews: 2,
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tours: '3 Tours'
    },
    {
      id: 2,
      name: 'Barcelona',
      country: 'Spain',
      price: '$1000',
      duration: '4 Days',
      rating: 4.8,
      reviews: 3,
      image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tours: '3 Tours'
    },
    {
      id: 3,
      name: 'Bali',
      country: 'Indonesia',
      price: '$800',
      duration: '3 Days',
      rating: 5.0,
      reviews: 2,
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tours: '3 Tours'
    },
    {
      id: 4,
      name: 'Abu Dhabi',
      country: 'UAE',
      price: '$800',
      duration: '3 Days',
      rating: 5.0,
      reviews: 2,
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tours: '3 Tours'
    },
    {
      id: 5,
      name: 'Maldives',
      country: 'Maldives',
      price: '$1200',
      duration: '5 Days',
      rating: 4.9,
      reviews: 4,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tours: '2 Tours'
    },
    {
      id: 6,
      name: 'Istanbul',
      country: 'Turkey',
      price: '$900',
      duration: '4 Days',
      rating: 4.7,
      reviews: 3,
      image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tours: '3 Tours'
    },
    {
      id: 7,
      name: 'Santorini',
      country: 'Greece',
      price: '$1100',
      duration: '5 Days',
      rating: 4.9,
      reviews: 5,
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tours: '3 Tours'
    },
    {
      id: 8,
      name: 'Tokyo',
      country: 'Japan',
      price: '$1300',
      duration: '6 Days',
      rating: 4.8,
      reviews: 4,
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tours: '4 Tours'
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-blue-500 text-lg mb-4 font-semibold tracking-wide">Top Tourist Destinations</p>
          <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-8 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
            POPULAR DESTINATIONS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {destinations.map((destination, index) => (
                <CarouselItem key={destination.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-scale-in border border-gray-100"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                        <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                          {destination.tours}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 bg-white bg-opacity-95 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                        <span className="text-blue-900 font-bold text-lg">{destination.price}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-1 text-blue-600">
                              <Calendar className="h-4 w-4" />
                              <span className="font-medium">{destination.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-blue-600">
                              <MapPin className="h-4 w-4" />
                              <span className="font-medium">{destination.country}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 transition-colors duration-300 ${
                                i < Math.floor(destination.rating) 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-3 text-sm text-gray-600 font-medium">
                          {destination.rating} ({destination.reviews} reviews)
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                        {destination.name}
                      </h3>
                      
                      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Explore Now
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-2 border-blue-200 hover:border-blue-300 text-blue-600 hover:text-blue-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110" />
            <CarouselNext className="right-4 bg-white/90 hover:bg-white border-2 border-blue-200 hover:border-blue-300 text-blue-600 hover:text-blue-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;