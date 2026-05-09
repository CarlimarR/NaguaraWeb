import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';

// Importa estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Productos de ejemplo - Reemplaza con tus productos reales
const products = [
  {
    id: 1,
    name: 'Tazas Personalizadas',
    category: 'Sublimación',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400',
    description: 'Tazas de cerámica con diseño único'
  },
  {
    id: 2,
    name: 'Franelas Estampadas',
    category: 'Textil',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
    description: 'Poliéster deportivo o algodón'
  },
  {
    id: 3,
    name: 'Stickers Personalizados',
    category: 'Papelería',
    image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=400',
    description: 'Vinil resistente al agua'
  },
  {
    id: 4,
    name: 'llaveros Acrílicos',
    category: 'Accesorios',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400',
    description: 'Diseños 3D y glitter'
  },
  {
    id: 5,
    name: 'Packaging Regalos',
    category: 'Packaging',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400',
    description: 'Cajas, bolsas y wrapping'
  },
  {
    id: 6,
    name: 'Photocards',
    category: 'Fotografía',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400',
    description: 'Acabado mate o brillante'
  }
];

const ProductCarousel: React.FC = () => {
  const handleCotizar = () => {
    const message = encodeURIComponent('Hola! estoy interesado en realizar una cotización de productos, me gustaría saber más información.');
    window.open(`https://wa.me/584248193112?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-[#FEFEFE]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Catálogo de Productos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre nuestra colección de productos personalizados
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="product-carousel"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-[#F7B150] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-10 space-y-4">
          <button 
            onClick={handleCotizar}
            className="px-8 py-3 bg-[#F7B150] text-white rounded-full font-semibold hover:bg-[#0F69B2] transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            Cotizar ahora →
          </button>
          
          <div>
            <button className="px-8 py-3 border-2 border-[#F7B150] text-[#F7B150] rounded-full font-semibold hover:bg-[#F7B150] hover:text-white transition-all duration-300">
              Ver catálogo completo →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;