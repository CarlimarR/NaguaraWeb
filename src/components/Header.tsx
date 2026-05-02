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
            className="w-32 h-32 md:w-40 md:h-40 object-contain animate-float"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          NaguaraStudio
        </h1>
        <p className="text-xl text-purple-600 font-medium mb-2">Agencia Creativa</p>
        <p className="text-gray-600">Personalización • Diseño • Papelería Creativa</p>
      </div>
    </header>
  );
};

export default Header;