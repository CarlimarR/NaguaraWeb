import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F69B2] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#ffffff]" />
            <span>+58 424 8193112</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[#ffffff]" />
            <span>naguarastudio.ve@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#ffffff]" />
            <span>Anzoátegui, Venezuela</span>
          </div>
        </div>
        
        <div className="text-center pt-6 border-t border-white/20">
          <p className="mb-2">NaguaraStudio 2026</p>
          <p className="text-white/90 text-sm">"Si lo PIENSAS, lo CREAS"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;