import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  MapPin,
  Heart,
  Share2,
} from "lucide-react";

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "beaches", name: "Beaches" },
    { id: "mountains", name: "Mountains" },
    { id: "cities", name: "Cities" },
    { id: "culture", name: "Culture" },
  ];

  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "beaches",
      title: "Paradise Beach",
      location: "Maldives",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "mountains",
      title: "Mountain Peak",
      location: "Swiss Alps",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "cities",
      title: "City Lights",
      location: "Tokyo, Japan",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "mountains",
      title: "Forest Trail",
      location: "Canada",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "beaches",
      title: "Sunset Bay",
      location: "Santorini",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "culture",
      title: "Desert Adventure",
      location: "Dubai, UAE",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "culture",
      title: "Local Cuisine",
      location: "Italy",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "cities",
      title: "Urban Escape",
      location: "Barcelona",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "culture",
      title: "Wildlife Safari",
      location: "Kenya",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = index => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1
      );
    }
  };

  return (
    <section
      id='gallery'
      className='py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden'
    >
      {/* Background decorations */}
      <div className='absolute top-20 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-xl animate-float' />
      <div
        className='absolute bottom-40 left-20 w-32 h-32 bg-purple-200/20 rounded-full blur-xl animate-float'
        style={{ animationDelay: "3s" }}
      />

      <div className='container mx-auto px-4'>
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
            Travel{" "}
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Gallery
            </span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Discover breathtaking destinations through our collection of
            stunning travel photography
          </p>
        </div>

        {/* Category Filter */}
        <div className='flex flex-wrap justify-center gap-4 mb-12 animate-scale-in'>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className='group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer animate-scale-in'
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(index)}
            >
              <div className='aspect-[4/3] overflow-hidden'>
                <img
                  src={image.url}
                  alt={image.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
              </div>

              {/* Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-6 left-6 right-6 text-white'>
                  <h3 className='text-xl font-bold mb-2'>{image.title}</h3>
                  <div className='flex items-center space-x-2'>
                    <MapPin className='w-4 h-4' />
                    <span className='text-sm'>{image.location}</span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className='absolute top-4 right-4 flex space-x-2'>
                  <button className='p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors'>
                    <Heart className='w-5 h-5 text-white' />
                  </button>
                  <button className='p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors'>
                    <Share2 className='w-5 h-5 text-white' />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'>
            <div className='relative max-w-4xl max-h-full'>
              <img
                src={filteredImages[selectedImage].url}
                alt={filteredImages[selectedImage].title}
                className='max-w-full max-h-full object-contain rounded-lg'
              />

              {/* Close button */}
              <button
                onClick={closeModal}
                className='absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors'
              >
                <X className='w-6 h-6 text-white' />
              </button>

              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className='absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors'
              >
                <ChevronLeft className='w-6 h-6 text-white' />
              </button>

              <button
                onClick={nextImage}
                className='absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors'
              >
                <ChevronRight className='w-6 h-6 text-white' />
              </button>

              {/* Image info */}
              <div className='absolute bottom-6 left-6 right-6 text-white'>
                <h3 className='text-2xl font-bold mb-2'>
                  {filteredImages[selectedImage].title}
                </h3>
                <div className='flex items-center space-x-2'>
                  <MapPin className='w-5 h-5' />
                  <span>{filteredImages[selectedImage].location}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
