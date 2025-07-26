
import React, { useState } from 'react';
import { Calendar, Users, MapPin, Clock, Star, Plane, Hotel, Camera, Utensils, Shield, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const BookingSection = () => {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [bookingData, setBookingData] = useState({
    travelers: 2,
    checkin: '',
    checkout: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const tourPackages = [
    {
      id: 1,
      title: "Bali Paradise Escape",
      location: "Bali, Indonesia",
      duration: "7 Days / 6 Nights",
      price: 1299,
      originalPrice: 1599,
      rating: 4.9,
      reviews: 324,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Beach Resort Stay", "Temple Tours", "Sunset Dinner", "Spa Treatment"],
      itinerary: [
        { day: 1, title: "Arrival & Beach Welcome", activities: ["Airport transfer", "Beach resort check-in", "Welcome dinner"] },
        { day: 2, title: "Cultural Discovery", activities: ["Temple tour", "Traditional market", "Cooking class"] },
        { day: 3, title: "Adventure Day", activities: ["Volcano hiking", "Rice terrace visit", "Hot springs"] }
      ]
    },
    {
      id: 2,
      title: "Dubai Luxury Experience",
      location: "Dubai, UAE",
      duration: "5 Days / 4 Nights",
      price: 1899,
      originalPrice: 2299,
      rating: 4.8,
      reviews: 267,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Luxury Hotel", "Desert Safari", "Burj Khalifa", "Shopping Mall"],
      itinerary: [
        { day: 1, title: "Arrival & City Tour", activities: ["Airport transfer", "Hotel check-in", "Dubai Marina cruise"] },
        { day: 2, title: "Desert Adventure", activities: ["Desert safari", "Camel riding", "BBQ dinner"] },
        { day: 3, title: "Modern Marvels", activities: ["Burj Khalifa", "Dubai Mall", "Fountain show"] }
      ]
    },
    {
      id: 3,
      title: "Swiss Alps Adventure",
      location: "Switzerland",
      duration: "8 Days / 7 Nights",
      price: 2499,
      originalPrice: 2999,
      rating: 5.0,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Mountain Resort", "Cable Car Rides", "Scenic Trains", "Alpine Activities"],
      itinerary: [
        { day: 1, title: "Arrival in Zurich", activities: ["Airport transfer", "City tour", "Lake cruise"] },
        { day: 2, title: "Jungfraujoch Trip", activities: ["Train journey", "Top of Europe", "Ice palace"] },
        { day: 3, title: "Interlaken Adventure", activities: ["Paragliding", "Lake activities", "Mountain hiking"] }
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', { packageId: selectedPackage, ...bookingData });
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Book Your Dream <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vacation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our curated travel packages and create unforgettable memories
          </p>
        </div>

        {/* Tour Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {tourPackages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer animate-scale-in ${
                selectedPackage === pkg.id ? 'ring-4 ring-blue-500' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save ${pkg.originalPrice - pkg.price}
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{pkg.rating}</span>
                  <span className="text-sm text-gray-600">({pkg.reviews})</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{pkg.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4">{pkg.title}</h3>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {pkg.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">${pkg.price}</span>
                    <span className="text-lg text-gray-400 line-through ml-2">${pkg.originalPrice}</span>
                    <p className="text-sm text-gray-600">per person</p>
                  </div>
                  <Button
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${
                      selectedPackage === pkg.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    {selectedPackage === pkg.id ? 'Selected' : 'Select'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        {selectedPackage && (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 animate-scale-in">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Complete Your Booking</h3>
            
            {/* Selected Package Details */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Selected Package</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <Plane className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">{tourPackages.find(p => p.id === selectedPackage)?.title}</p>
                    <p className="text-sm text-gray-600">{tourPackages.find(p => p.id === selectedPackage)?.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">{tourPackages.find(p => p.id === selectedPackage)?.duration}</p>
                    <p className="text-sm text-gray-600">Duration</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">${tourPackages.find(p => p.id === selectedPackage)?.price}</p>
                    <p className="text-sm text-gray-600">per person</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleBooking} className="space-y-6">
              {/* Travel Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="travelers" className="text-gray-700 font-semibold">Number of Travelers</Label>
                  <div className="mt-2 flex items-center space-x-3">
                    <Users className="w-5 h-5 text-gray-400" />
                    <Input
                      id="travelers"
                      name="travelers"
                      type="number"
                      min="1"
                      max="10"
                      value={bookingData.travelers}
                      onChange={handleInputChange}
                      className="border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="checkin" className="text-gray-700 font-semibold">Check-in Date</Label>
                  <Input
                    id="checkin"
                    name="checkin"
                    type="date"
                    value={bookingData.checkin}
                    onChange={handleInputChange}
                    className="mt-2 border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="checkout" className="text-gray-700 font-semibold">Check-out Date</Label>
                  <Input
                    id="checkout"
                    name="checkout"
                    type="date"
                    value={bookingData.checkout}
                    onChange={handleInputChange}
                    className="mt-2 border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                    required
                  />
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-semibold">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={bookingData.name}
                    onChange={handleInputChange}
                    className="mt-2 border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-semibold">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={bookingData.email}
                    onChange={handleInputChange}
                    className="mt-2 border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-700 font-semibold">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  className="mt-2 border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>

              {/* Booking Summary */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Booking Summary</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Package Price (per person):</span>
                    <span>${tourPackages.find(p => p.id === selectedPackage)?.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Number of Travelers:</span>
                    <span>{bookingData.travelers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${(tourPackages.find(p => p.id === selectedPackage)?.price || 0) * bookingData.travelers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & Fees:</span>
                    <span>${Math.round((tourPackages.find(p => p.id === selectedPackage)?.price || 0) * bookingData.travelers * 0.1)}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between text-lg font-bold text-gray-800">
                    <span>Total:</span>
                    <span>${Math.round((tourPackages.find(p => p.id === selectedPackage)?.price || 0) * bookingData.travelers * 1.1)}</span>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Shield className="w-5 h-5 mr-2" />
                Book Now - Secure Payment
              </Button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingSection;