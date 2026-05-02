import React from 'react';
import logo from '../assets/logos/logo-naguara.png';

const Header: React.FC = () => {
  return (
    <header className="text-center py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto">
        <div className="flex justify-center mb-6">
          <img 
            src={logo} 
            alt="NaguaraStudio - Agencia Creativa" 
            className="w-20 h-20 md:w-150 md:h-30 object-contain animate-float"
          />
        </div>
        <p className="text-xl text-blue-900 font-medium mb-2">Agencia Creativa</p>
        <p className="text-gray-600">Personalización • Diseño • Papelería Creativa</p>
      </div>
    </header>
  );
};

export default Header;