
import React from 'react';
import { Globe, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Proyatri */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Globe className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Proyatri</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              We Believe Everyone Should Travel Because Travelling's For Everyone. We Make Vacations Magical Making Life The Daring Adventure You Deserve.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Useful Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Services</a></li>
              <li><a href="#destinations" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Destinations</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Gallery</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-300">Flight Booking</span></li>
              <li><span className="text-gray-300">Hotel Reservations</span></li>
              <li><span className="text-gray-300">Tour Packages</span></li>
              <li><span className="text-gray-300">Travel Insurance</span></li>
              <li><span className="text-gray-300">Visa Assistance</span></li>
              <li><span className="text-gray-300">24/7 Support</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+1-234-567-8900</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@proyatri.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-300">123 Travel Street,<br />Adventure City, AC 12345</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Proyatri. All Rights Reserved. | Designed with ❤️ for adventurous souls
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;