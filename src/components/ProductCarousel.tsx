import React from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 AÑADIR ESTO
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';

// Importa estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Importar TODAS las imágenes de la carpeta products en UNA sola línea
const productImages = import.meta.glob('../assets/products/*.{jpg,jpeg,png,webp}', { eager: true });
const productsList = Object.values(productImages).map((mod: any) => mod.default);

// Productos con imágenes importadas automáticamente
const products = [
  {
    id: 1,
    name: 'Tazas y Termos',
    category: 'Sublimación',
    image: productsList[0],
    description: 'Diseños en sublimación, DTF UV y Rotulados'
  },
  {
    id: 2,
    name: 'Textil',
    category: 'Textil',
    image: productsList[1],
    description: 'Sublimación, DTF y Vinil'
  },
  {
    id: 3,
    name: 'Stickers Personalizados',
    category: 'Papelería',
    image: productsList[2],
    description: 'Vinil, Fotográfico y Holográficos'
  },
  {
    id: 4,
    name: 'Gran Formato',
    category: 'Impresión',
    image: productsList[3],
    description: 'Pendones, lonas, vinil gran formato'
  },
  {
    id: 5,
    name: 'Papelería Creativa',
    category: 'Papelería',
    image: productsList[4],
    description: 'Cajas, bolsas y Arreglos personalizados'
  },
  {
    id: 6,
    name: 'Kits Corporativos',
    category: 'Kits',
    image: productsList[5],
    description: 'Merchandising personalizado para empresas'
  },
  {
    id: 7,
    name: 'Diseño Gráfico',
    category: 'Diseño',
    image: productsList[6],
    description: 'Diseñamos lo que necesites para tu negocio o evento personal'
  },
  {
    id: 8,
    name: 'Llaveros Personalizados',
    category: 'Llaveros',
    image: productsList[7],
    description: 'Sublimación y Acrílico'
  }
];

const ProductCarousel: React.FC = () => {
  const navigate = useNavigate(); // 👈 AÑADIR ESTO

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
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={productsList[index]}
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
            <button 
              onClick={() => navigate('/catalogo')} // 👈 MODIFICAR ESTA LÍNEA
              className="px-8 py-3 border-2 border-[#F7B150] text-[#F7B150] rounded-full font-semibold hover:bg-[#F7B150] hover:text-white transition-all duration-300"
            >
              Ver catálogo completo →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;