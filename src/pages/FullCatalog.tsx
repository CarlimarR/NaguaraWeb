import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaWhatsapp, FaMugHot, FaTshirt, FaStickyNote, FaTags, FaPrint, FaPalette, FaKey, FaBriefcase, FaLightbulb } from 'react-icons/fa';

const productImages = import.meta.glob('../assets/products/*.{jpg,jpeg,png,webp}', { eager: true });
const productsList = Object.values(productImages).map((mod: any) => mod.default);

const FullCatalog: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: 'Termos y Tazas', icon: <FaMugHot className="text-4xl" />, path: '/catalogo/termos-tazas', image: productsList[0] }, // 01-Tazas y Termos.png
    { id: 2, name: 'Textil', icon: <FaTshirt className="text-4xl" />, path: '/catalogo/textil', image: productsList[1] }, // 02-Franelas y Uniformes.png
    { id: 3, name: 'Papelería', icon: <FaStickyNote className="text-4xl" />, path: '/catalogo/papeleria', image: productsList[2] }, // 03-papeleria.png
    { id: 4, name: 'Gran Formato', icon: <FaPrint className="text-4xl" />, path: '/catalogo/gran-formato', image: productsList[3] }, // 04-Impresión Gran Formato.png
    { id: 5, name: 'Stickers', icon: <FaTags className="text-4xl" />, path: '/catalogo/stickers', image: productsList[4] }, // 05-Stickers-Personalizados.jpg
    { id: 6, name: 'Llaveros', icon: <FaKey className="text-4xl" />, path: '/catalogo/llaveros', image: productsList[5] }, // 06-Llaveros Personalizados.png
    { id: 7, name: 'Especiales', icon: <FaLightbulb className="text-4xl" />, path: '/catalogo/otros', image: productsList[6] }, // 07-Especiales.jpg
    { id: 8, name: 'Kits Corporativos', icon: <FaBriefcase className="text-4xl" />, path: '/catalogo/kits', image: productsList[7] }, // 08-kit.png
    { id: 9, name: 'Diseño Gráfico', icon: <FaPalette className="text-4xl" />, path: '/catalogo/diseno', image: productsList[8] }, // 09-Diseño Gráfico.png
  ];

  const handleCotizarGeneral = () => {
    const message = encodeURIComponent('Hola! estoy interesado en conocer más sobre sus productos y servicios.');
    window.open(`https://wa.me/584248193112?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#F6F0E0]">
      <div className="container mx-auto px-4 py-8">
        {/* Botón para volver */}
        <div className="flex justify-between items-center mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#0F69B2] bg-white px-4 py-2 rounded-full hover:bg-[#F7B150] hover:text-white transition-all duration-300 hover:-translate-x-1 shadow-md"
          >
            <FaArrowLeft /> Volver al inicio
          </Link>
          <button
            onClick={handleCotizarGeneral}
            className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 shadow-md"
          >
            <FaWhatsapp /> Consultar todo
          </button>
        </div>

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Nuestros Productos
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explora todas nuestras categorías y descubre productos personalizados de alta calidad.
          </p>
        </motion.div>

        {/* Grid de categorías */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              onClick={() => navigate(category.path)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              {/* Imagen cuadrada - aspect-square */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white text-5xl mb-2 opacity-80">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                </div>
              </div>
              
              {/* Botón Ver productos */}
              <div className="p-5">
                <button className="w-full py-2 bg-[#F7B150] text-white rounded-full font-semibold hover:bg-[#0F69B2] transition-all duration-300 flex items-center justify-center gap-2">
                  Ver productos →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullCatalog;