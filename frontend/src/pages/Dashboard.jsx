import React, { useState } from "react";
import { ChevronDown, User, Home, MapPin, Calendar, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = dropdown => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const tripCategories = {
    northIndia: [
      { name: "Kashmir & Ladakh", path: "/trips/north-india/kashmir-ladakh" },
      { name: "Himachal Pradesh", path: "/trips/north-india/himachal" },
      { name: "Uttarakhand", path: "/trips/north-india/uttarakhand" },
      { name: "Rajasthan", path: "/trips/north-india/rajasthan" },
      { name: "Delhi & NCR", path: "/trips/north-india/delhi" },
    ],
    southIndia: [
      { name: "Kerala Backwaters", path: "/trips/south-india/kerala" },
      { name: "Tamil Nadu Temples", path: "/trips/south-india/tamil-nadu" },
      { name: "Karnataka Hills", path: "/trips/south-india/karnataka" },
      { name: "Andhra Pradesh", path: "/trips/south-india/andhra" },
      { name: "Goa Beaches", path: "/trips/south-india/goa" },
    ],
    weekends: [
      { name: "Near Delhi", path: "/trips/weekends/delhi" },
      { name: "Near Mumbai", path: "/trips/weekends/mumbai" },
      { name: "Near Bangalore", path: "/trips/weekends/bangalore" },
      { name: "Near Chennai", path: "/trips/weekends/chennai" },
      { name: "Near Pune", path: "/trips/weekends/pune" },
    ],
    international: [
      { name: "Southeast Asia", path: "/trips/international/southeast-asia" },
      { name: "Europe", path: "/trips/international/europe" },
      { name: "Middle East", path: "/trips/international/middle-east" },
      { name: "Americas", path: "/trips/international/americas" },
      { name: "Africa", path: "/trips/international/africa" },
    ],
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Dashboard Navigation */}
      <nav className='bg-white shadow-sm border-b'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center space-x-8'>
              <Link
                to='/'
                className='flex items-center space-x-2 text-blue-600 hover:text-blue-700'
              >
                <Home className='h-5 w-5' />
                <span className='font-medium'>Home</span>
              </Link>

              {/* North India Trips Dropdown */}
              <div className='relative'>
                <button
                  onClick={() => toggleDropdown("northIndia")}
                  className='flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-2'
                >
                  <span>North India Trips</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === "northIndia" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "northIndia" && (
                  <div className='absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border z-50'>
                    <div className='py-2'>
                      {tripCategories.northIndia.map((trip, index) => (
                        <Link
                          key={index}
                          to={trip.path}
                          className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                          onClick={() => setActiveDropdown(null)}
                        >
                          {trip.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* South India Trips Dropdown */}
              <div className='relative'>
                <button
                  onClick={() => toggleDropdown("southIndia")}
                  className='flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-2'
                >
                  <span>South India Trips</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === "southIndia" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "southIndia" && (
                  <div className='absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border z-50'>
                    <div className='py-2'>
                      {tripCategories.southIndia.map((trip, index) => (
                        <Link
                          key={index}
                          to={trip.path}
                          className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                          onClick={() => setActiveDropdown(null)}
                        >
                          {trip.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Weekends Trips Dropdown */}
              <div className='relative'>
                <button
                  onClick={() => toggleDropdown("weekends")}
                  className='flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-2'
                >
                  <span>Weekends Trips</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === "weekends" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "weekends" && (
                  <div className='absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border z-50'>
                    <div className='py-2'>
                      {tripCategories.weekends.map((trip, index) => (
                        <Link
                          key={index}
                          to={trip.path}
                          className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                          onClick={() => setActiveDropdown(null)}
                        >
                          {trip.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* International Trips Dropdown */}
              <div className='relative'>
                <button
                  onClick={() => toggleDropdown("international")}
                  className='flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-2'
                >
                  <span>International Trips</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === "international" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "international" && (
                  <div className='absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border z-50'>
                    <div className='py-2'>
                      {tripCategories.international.map((trip, index) => (
                        <Link
                          key={index}
                          to={trip.path}
                          className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                          onClick={() => setActiveDropdown(null)}
                        >
                          {trip.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Profile Dropdown */}
            <div className='relative'>
              <button
                onClick={() => toggleDropdown("profile")}
                className='flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium py-2'
              >
                <User className='h-5 w-5' />
                <span>Profile</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    activeDropdown === "profile" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "profile" && (
                <div className='absolute top-full right-0 mt-1 w-48 bg-white rounded-md shadow-lg border z-50'>
                  <div className='py-2'>
                    <Link
                      to='/profile'
                      className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      onClick={() => setActiveDropdown(null)}
                    >
                      My Profile
                    </Link>
                    <Link
                      to='/bookings'
                      className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      onClick={() => setActiveDropdown(null)}
                    >
                      My Bookings
                    </Link>
                    <Link
                      to='/settings'
                      className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      onClick={() => setActiveDropdown(null)}
                    >
                      Settings
                    </Link>
                    <hr className='my-1' />
                    <button className='block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600'>
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <main className='container mx-auto px-4 py-8'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 mb-2'>
            Travel Dashboard
          </h1>
          <p className='text-gray-600'>
            Explore amazing destinations and plan your next adventure
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          <div className='bg-white p-6 rounded-lg shadow-sm border'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm font-medium text-gray-600'>
                  Total Bookings
                </p>
                <p className='text-2xl font-bold text-gray-900'>12</p>
              </div>
              <Calendar className='h-8 w-8 text-blue-600' />
            </div>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-sm border'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm font-medium text-gray-600'>
                  Destinations Visited
                </p>
                <p className='text-2xl font-bold text-gray-900'>8</p>
              </div>
              <MapPin className='h-8 w-8 text-green-600' />
            </div>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-sm border'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm font-medium text-gray-600'>
                  Countries Explored
                </p>
                <p className='text-2xl font-bold text-gray-900'>3</p>
              </div>
              <Globe className='h-8 w-8 text-purple-600' />
            </div>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-sm border'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm font-medium text-gray-600'>
                  Upcoming Trips
                </p>
                <p className='text-2xl font-bold text-gray-900'>2</p>
              </div>
              <Calendar className='h-8 w-8 text-orange-600' />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2'>
            <div className='bg-white rounded-lg shadow-sm border p-6'>
              <h2 className='text-xl font-semibold mb-4'>Recommended Trips</h2>
              <div className='space-y-4'>
                <div className='flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50'>
                  <img
                    src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
                    alt='Kashmir'
                    className='w-16 h-16 rounded-lg object-cover'
                  />
                  <div className='flex-1'>
                    <h3 className='font-medium text-gray-900'>
                      Kashmir Paradise
                    </h3>
                    <p className='text-sm text-gray-600'>7 Days • ₹25,000</p>
                  </div>
                  <button className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
                    Book Now
                  </button>
                </div>

                <div className='flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50'>
                  <img
                    src='https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
                    alt='Kerala'
                    className='w-16 h-16 rounded-lg object-cover'
                  />
                  <div className='flex-1'>
                    <h3 className='font-medium text-gray-900'>
                      Kerala Backwaters
                    </h3>
                    <p className='text-sm text-gray-600'>5 Days • ₹18,000</p>
                  </div>
                  <button className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700'>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='space-y-6'>
            <div className='bg-white rounded-lg shadow-sm border p-6'>
              <h2 className='text-xl font-semibold mb-4'>Quick Actions</h2>
              <div className='space-y-3'>
                <button className='w-full text-left p-3 border rounded-lg hover:bg-gray-50'>
                  Plan a New Trip
                </button>
                <button className='w-full text-left p-3 border rounded-lg hover:bg-gray-50'>
                  View Travel History
                </button>
                <button className='w-full text-left p-3 border rounded-lg hover:bg-gray-50'>
                  Manage Bookings
                </button>
              </div>
            </div>

            <div className='bg-white rounded-lg shadow-sm border p-6'>
              <h2 className='text-xl font-semibold mb-4'>Travel Tips</h2>
              <div className='text-sm text-gray-600 space-y-2'>
                <p>• Book flights 2-3 months in advance for better deals</p>
                <p>• Pack light and check airline baggage policies</p>
                <p>• Keep digital copies of important documents</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
