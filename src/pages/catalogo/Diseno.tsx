import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const disenoImage = import.meta.glob('../../assets/catalogo/diseno/*.{jpg,jpeg,png,webp}', { eager: true });
const disenoList = Object.values(disenoImage).map((mod: any) => mod.default);

const Diseno: React.FC = () => {
  const handleCotizar = () => {
    const message = encodeURIComponent('Hola! estoy interesado en servicios de diseño gráfico: logos, tarjetas, flyers, identidad de marca, etc. Me gustaría saber más información.');
    window.open(`https://wa.me/584248193112?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#F6F0E0]">
      <div className="container mx-auto px-4 py-8">
        {/* Botón para volver */}
        <div className="flex justify-between items-center mb-8">
          <Link 
            to="/catalogo" 
            className="inline-flex items-center gap-2 text-[#0F69B2] bg-white px-4 py-2 rounded-full hover:bg-[#F7B150] hover:text-white transition-all duration-300 hover:-translate-x-1 shadow-md"
          >
            <FaArrowLeft /> Volver al catálogo
          </Link>
          <button
            onClick={handleCotizar}
            className="inline-flex items-center gap-2 bg-[#F7B150] text-white px-4 py-2 rounded-full hover:bg-[#0F69B2] transition-all duration-300 shadow-md"
          >
            <FaWhatsapp /> Cotizar por WhatsApp
          </button>
        </div>

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Diseño Gráfico</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Soluciones creativas y profesionales para la imagen de tu negocio. Creamos piezas únicas que representan tu marca.
          </p>
        </motion.div>

        {/* Cuadro grande de Diseño Gráfico */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative h-80 md:h-96 overflow-hidden">
              <img
                src={disenoList[0]}
                alt="Diseño Gráfico"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Diseño Gráfico Profesional</h2>
              </div>
            </div>
            
            <div className="p-8 md:p-10">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Ofrecemos servicios de diseño gráfico para hacer realidad tus ideas. 
                Creamos piezas únicas y personalizadas que representan la esencia de tu negocio o evento.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {['Logos', 'Tarjetas', 'Flyers', 'Pendones', 'Vectorización', 'Corpóreos', 'Identidad de Marca', 'Infografías'].map((servicio, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-3 text-center hover:bg-[#F7B150]/10 transition-colors duration-300">
                    <span className="text-gray-700 font-medium text-sm">{servicio}</span>
                  </div>
                ))}
              </div>
              
              <button
                onClick={handleCotizar}
                className="w-full py-4 bg-[#F7B150] text-white rounded-xl font-semibold hover:bg-[#0F69B2] transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-lg"
              >
                <FaWhatsapp className="text-2xl" />
                Cotizar ahora
              </button>
            </div>
          </motion.div>
        </div>

        {/* Botón flotante de WhatsApp - Color amarillo */}
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={handleCotizar}
            className="bg-[#F7B150] text-white p-4 rounded-full shadow-2xl hover:bg-[#0F69B2] transition-all duration-300 hover:scale-110 animate-pulse"
          >
            <FaWhatsapp className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Diseno;