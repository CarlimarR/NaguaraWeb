import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaWhatsapp, FaEye, FaTimes } from 'react-icons/fa';

interface SubProducto {
  name: string;
  description: string;
  price: string;
}

interface Producto {
  id: number;
  name: string;
  description: string;
  price?: string;
  image?: string;
  subProducts?: SubProducto[];
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
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
  const [modalSubProducts, setModalSubProducts] = useState<Producto | null>(null);

  const handleCotizar = (productName?: string, subProductName?: string) => {
    const message = encodeURIComponent(
      `Hola! estoy interesado en cotizar: ${subProductName || productName || 'productos de ' + title}. Me gustaría saber más información.`
    );
    window.open(`https://wa.me/584248193112?text=${message}`, '_blank');
  };

  const handleCardClick = (product: Producto) => {
    if (product.subProducts) {
      setModalSubProducts(product);
    } else {
      setSelectedProduct(product);
    }
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

        {/* Grid de productos - IMÁGENES CUADRADAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              onClick={() => handleCardClick(product)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              {/* Imagen cuadrada - aspect-square */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#F7B150]/20 to-[#0F69B2]/20">
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
                {/* Indicador de que tiene más opciones */}
                {product.subProducts && (
                  <div className="absolute bottom-2 right-2 bg-[#F7B150] text-white text-xs px-2 py-1 rounded-full">
                    +{product.subProducts.length}
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
                  className="w-full py-2 bg-[#F7B150] text-white rounded-full font-semibold hover:bg-[#0F69B2] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaEye />
                  {product.subProducts ? 'Ver variedades' : 'Ver más'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal para productos con subproductos */}
        <AnimatePresence>
          {modalSubProducts && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setModalSubProducts(null)}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header del modal */}
                <div className="sticky top-0 bg-white border-b border-gray-100 p-5 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F7B150]/20 to-[#0F69B2]/20 flex items-center justify-center">
                      <span className="text-2xl">📦</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">{modalSubProducts.name}</h2>
                      <p className="text-gray-500 text-sm">{modalSubProducts.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setModalSubProducts(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FaTimes className="text-2xl" />
                  </button>
                </div>

                {/* Lista de subproductos */}
                <div className="p-5 space-y-4">
                  {modalSubProducts.subProducts?.map((sub, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-800">{sub.name}</h3>
                          <p className="text-gray-500 text-sm mt-1">{sub.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-[#0F69B2]">{sub.price}</p>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCotizar(modalSubProducts.name, sub.name);
                          setModalSubProducts(null);
                        }}
                        className="mt-3 w-full py-2 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <FaWhatsapp />
                        Cotizar {sub.name}
                      </button>
                    </motion.div>
                  ))}
                </div>

                {/* Footer del modal */}
                <div className="sticky bottom-0 bg-gray-50 border-t border-gray-100 p-4">
                  <button
                    onClick={() => {
                      handleCotizar(modalSubProducts.name);
                      setModalSubProducts(null);
                    }}
                    className="w-full py-2 bg-[#F7B150] text-white rounded-full font-semibold hover:bg-[#0F69B2] transition-all duration-300"
                  >
                    Cotizar todos los productos
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Modal para productos sin subproductos */}
        <AnimatePresence>
          {selectedProduct && !selectedProduct.subProducts && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProduct(null)}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl max-w-md w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-square bg-gradient-to-br from-[#F7B150]/20 to-[#0F69B2]/20 flex items-center justify-center">
                  {selectedProduct.image ? (
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-8xl">🎨</span>
                  )}
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <FaTimes />
                  </button>
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
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

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