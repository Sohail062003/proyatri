
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import DestinationsSection from '../components/DestinationsSection';
import GallerySection from '../components/GallerySection';
import BookingSection from '../components/BookingSection';
import DiscountSection from '../components/DiscountSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DestinationsSection />
      <GallerySection />
      <BookingSection />
      <DiscountSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
