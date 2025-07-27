import React from "react";
import { Calendar, User } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Unforgettable Hiking Trails",
      category: "Adventure Travel",
      excerpt:
        "Discover breathtaking hiking trails that will challenge your limits and reward you with incredible views.",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Admin",
      date: "May 10, 2023",
    },
    {
      id: 2,
      title: "Family Travel Tours",
      category: "Family Travel",
      excerpt:
        "Plan the perfect family vacation with our expert tips and carefully curated family-friendly destinations.",
      image:
        "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Admin",
      date: "May 8, 2023",
    },
    {
      id: 3,
      title: "Packing Essentials Guide",
      category: "Travel Tips",
      excerpt:
        "Master the art of packing with our comprehensive guide to travel essentials and space-saving techniques.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "Admin",
      date: "April 25, 2023",
    },
  ];

  return (
    <section id='blog' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <p className='text-blue-500 text-lg mb-4'>Latest Stories</p>
          <h2 className='text-4xl md:text-5xl font-bold text-blue-900 mb-8'>
            TRAVEL BLOG
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {blogPosts.map(post => (
            <article
              key={post.id}
              className='group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
            >
              <div className='relative overflow-hidden'>
                <img
                  src={post.image}
                  alt={post.title}
                  className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute top-4 left-4'>
                  <span className='bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                    {post.category}
                  </span>
                </div>
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300'>
                  {post.title}
                </h3>
                <p className='text-gray-600 mb-4 leading-relaxed'>
                  {post.excerpt}
                </p>

                <div className='flex items-center justify-between text-sm text-gray-500'>
                  <div className='flex items-center space-x-1'>
                    <User className='h-4 w-4' />
                    <span>By {post.author}</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <Calendar className='h-4 w-4' />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
