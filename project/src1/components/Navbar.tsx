'use client';
import { Menu, X, UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider'; // adjust path based on your project structure
import React, { useState, useEffect, useRef } from 'react';
// import Event from './pages/Event'; 
// import Theme from './pages/Theme';

const Navbar: React.FC = () => {
  const { isLoggedIn, user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <nav className="bg-white/90 backdrop-blur-md fixed w-full top-0 left-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-4xl font-serif font-bold text-[#0A2342]">NexEvent</Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#0A2342] hover:text-[#E6C79C] transition-colors">Home</Link>
            <Link to="/services" className="text-[#0A2342] hover:text-[#E6C79C] transition-colors">Services</Link>
            <Link to="/about" className="text-[#0A2342] hover:text-[#E6C79C] transition-colors">About Us</Link>

            {isLoggedIn ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center text-[#0A2342] hover:text-[#E6C79C] transition-colors"
                >
                  <UserCircle className="mr-1 h-5 w-5" />
                  {user?.name || 'Profile'}
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                    <Link to="/event" className="block px-4 py-2 text-sm text-[#0A2342] hover:bg-gray-100">Create Event</Link>
                    <Link to="/theme" className="block px-4 py-2 text-sm text-[#0A2342] hover:bg-gray-100">Create Theme</Link>
                    <Link to="/event-log" className="block px-4 py-2 text-sm text-[#0A2342] hover:bg-gray-100">Event Log</Link>
                    <button
                      onClick={signOut}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="bg-[#0A2342] text-white py-2 px-4 rounded-md hover:bg-[#0A2342]/90 transition-colors">Login</Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#0A2342]" aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-[#0A2342] hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/services" className="block px-3 py-2 text-[#0A2342] hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/about" className="block px-3 py-2 text-[#0A2342] hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>About Us</Link>

            {isLoggedIn ? (
              <>
                <Link to="/event" className="block px-3 py-2 text-[#0A2342] hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Create Event</Link>
                <Link to="/theme" className="block px-3 py-2 text-[#0A2342] hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Create Theme</Link>
                <Link to="/event-log" className="block px-3 py-2 text-[#0A2342] hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Event Log</Link>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    signOut();
                  }}
                  className="block w-full text-left px-3 py-2 text-red-600 hover:bg-gray-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="block px-3 py-2 bg-[#0A2342] text-white rounded-md" onClick={() => setIsMenuOpen(false)}>Login</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
