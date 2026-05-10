import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaWhatsapp, FaEye } from 'react-icons/fa';

interface Producto {
  id: number;
  name: string;
  description: string;
  price?: string;
  image?: string;
}

interface CategoriaTemplateProps {
  title: string;
  description: string;
  products: Producto[];
  categoryImage?: string;
}

const CategoriaTemplate: React.FC<CategoriaTemplateProps> = ({ 
  title, 
  description, 
  products,
  categoryImage 
}) => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = React.useState<Producto | null>(null);

  const handleCotizar = (productName?: string) => {
    const message = encodeURIComponent(
      `Hola! estoy interesado en cotizar: ${productName || 'productos de ' + title}. Me gustaría saber más información.`
    );
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
            onClick={() => handleCotizar()}
            className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all duration-300 shadow-md"
          >
            <FaWhatsapp /> Cotizar por WhatsApp
          </button>
        </div>

        {/* Título de categoría */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {categoryImage && (
            <div className="flex justify-center mb-6">
              <img src={categoryImage} alt={title} className="w-24 h-24 object-cover rounded-full" />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{description}</p>
        </motion.div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#F7B150]/20 to-[#0F69B2]/20">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    🎨
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                {product.price && (
                  <p className="text-[#0F69B2] font-bold mb-3">Desde: {product.price}</p>
                )}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(product);
                  }}
                  className="w-full py-2 bg-[#F7B150] text-white rounded-full font-semibold hover:bg-[#0F69B2] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaEye />
                  Ver más
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de detalle del producto */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProduct(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl max-w-md w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 bg-gradient-to-br from-[#F7B150]/20 to-[#0F69B2]/20 flex items-center justify-center">
                {selectedProduct.image ? (
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-8xl">🎨</span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedProduct.name}</h3>
                <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                {selectedProduct.price && (
                  <p className="text-2xl font-bold text-[#0F69B2] mb-4">{selectedProduct.price}</p>
                )}
                <button
                  onClick={() => {
                    handleCotizar(selectedProduct.name);
                    setSelectedProduct(null);
                  }}
                  className="w-full py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp />
                  Cotizar ahora
                </button>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-full mt-3 py-2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Botón flotante de WhatsApp */}
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => handleCotizar()}
            className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-pulse"
          >
            <FaWhatsapp className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriaTemplate;