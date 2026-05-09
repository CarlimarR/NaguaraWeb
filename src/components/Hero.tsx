import React, { useState, useEffect } from 'react';
import logo from '../assets/logos/logo-naguara.png';
import { motion, AnimatePresence } from 'framer-motion';

const imageModules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp}', { eager: true });
const backgroundImages = Object.values(imageModules).map((mod: any) => mod.default);

const HeroOpcion9: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleCotizar = () => {
    const message = encodeURIComponent('Hola! estoy interesado en realizar una cotización de proyectos');
    window.open(`https://wa.me/584248193112?text=${message}`, '_blank');
  };

  const handlePortafolio = () => {
    window.open('https://www.instagram.com/naguarastudio_ve', '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Slider de imágenes de fondo - OPACIDAD CONTROLADA */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.35, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}
        />
      </AnimatePresence>
      
      {/* Overlay degradado que mejora la legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F6F0E0]/85 via-[#FEFEFE]/75 to-[#F6F0E0]/85"></div>

      {/* Indicadores de slider - más visibles */}
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {backgroundImages.slice(0, 6).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`transition-all duration-300 rounded-full ${
              currentImage === idx 
                ? 'w-8 h-2 bg-[#F7B150] shadow-lg' 
                : 'w-2 h-2 bg-[#0F69B2]/40 hover:bg-[#0F69B2]/70'
            }`}
          />
        ))}
      </div>

      {/* Contenido central - BIEN LEGIBLE */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src={logo}
              alt="NaguaraStudio"
              className="w-80 md:w-96 lg:w-[30rem] h-auto animate-float drop-shadow-xl"
            />
          </div>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-3 tracking-wide">
            Agencia Creativa • Diseño • Personalización
          </p>

          {/* Frase principal - más destacada */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Transformamos tus ideas en experiencias únicas
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button 
              onClick={handlePortafolio}
              className="px-8 py-3 bg-[#F7B150] text-white rounded-full font-semibold hover:bg-[#0F69B2] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ver portafolio
            </button>
            <button 
              onClick={handleCotizar}
              className="px-8 py-3 border-2 border-[#0F69B2] text-[#0F69B2] rounded-full font-semibold hover:bg-[#0F69B2] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Cotizar proyecto
            </button>
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-[#0F69B2] rounded-full flex justify-center bg-white/30 backdrop-blur-sm">
          <div className="w-1 h-3 bg-[#0F69B2] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroOpcion9;