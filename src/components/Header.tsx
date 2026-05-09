import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import iconoNg from '../assets/logos/icono-ng.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', name: 'Inicio', icon: <FaHome className="mr-2" /> },
    { path: '/whatsapp', name: 'WhatsApp', icon: <FaWhatsapp className="mr-2" /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo y nombre */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={iconoNg} 
              alt="NaguaraStudio" 
              className="w-10 h-10 object-contain transition-transform group-hover:scale-110"
            />
            <span className="font-bold text-xl text-gray-800 hidden sm:inline">
              Naguara<span className="text-[#0F69B2]">Studio</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-[#0F69B2] text-white shadow-lg'
                    : 'text-gray-700 hover:bg-[#F6F0E0] hover:text-[#0F69B2]'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center px-4 py-3 rounded-lg mb-2 transition-all ${
                  isActive(link.path)
                    ? 'bg-[#0F69B2] text-white'
                    : 'text-gray-700 hover:bg-[#F6F0E0]'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;