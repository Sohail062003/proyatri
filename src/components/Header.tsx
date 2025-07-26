
import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-300" />
            <span className="text-2xl font-bold">Proyatri</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-300 transition-colors duration-200">Home</a>
            <a href="#about" className="hover:text-blue-300 transition-colors duration-200">About</a>
            <a href="#services" className="hover:text-blue-300 transition-colors duration-200">Services</a>
            <a href="#destinations" className="hover:text-blue-300 transition-colors duration-200">Destinations</a>
            <a href="#gallery" className="hover:text-blue-300 transition-colors duration-200">Gallery</a>
            <a href="#booking" className="hover:text-blue-300 transition-colors duration-200">Booking</a>
            <a href="#blog" className="hover:text-blue-300 transition-colors duration-200">Blog</a>
            <a href="#contact" className="hover:text-blue-300 transition-colors duration-200">Contact</a>
            <Link to="/dashboard" className="hover:text-blue-300 transition-colors duration-200">Dashboard</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-blue-800 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-blue-800">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="py-2 hover:text-blue-300 transition-colors duration-200">Home</a>
              <a href="#about" className="py-2 hover:text-blue-300 transition-colors duration-200">About</a>
              <a href="#services" className="py-2 hover:text-blue-300 transition-colors duration-200">Services</a>
              <a href="#destinations" className="py-2 hover:text-blue-300 transition-colors duration-200">Destinations</a>
              <a href="#gallery" className="py-2 hover:text-blue-300 transition-colors duration-200">Gallery</a>
              <a href="#booking" className="py-2 hover:text-blue-300 transition-colors duration-200">Booking</a>
              <a href="#blog" className="py-2 hover:text-blue-300 transition-colors duration-200">Blog</a>
              <a href="#contact" className="py-2 hover:text-blue-300 transition-colors duration-200">Contact</a>
              <Link to="/dashboard" className="py-2 hover:text-blue-300 transition-colors duration-200">Dashboard</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
