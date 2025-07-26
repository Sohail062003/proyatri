
import React, { useState } from 'react';
import ProfileAuth from './ProfileAuth';
import UserBookings from './UserBookings';

const ProfilePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState<'profile' | 'bookings'>('profile');

  // This would normally check authentication status from your auth system
  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <ProfileAuth />;
  }

  return (
    <div>
      {currentView === 'profile' && (
        <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-center mb-6">Profile Complete!</h2>
            <p className="text-gray-600 text-center mb-6">
              Welcome to Proyatri! Your profile has been successfully created.
            </p>
            <button
              onClick={() => setCurrentView('bookings')}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold"
            >
              View My Bookings
            </button>
          </div>
        </div>
      )}
      {currentView === 'bookings' && <UserBookings />}
    </div>
  );
};

export default ProfilePage;