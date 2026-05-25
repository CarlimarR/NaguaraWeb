import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPalette, FaMagic, FaBoxOpen, FaPaintBrush, FaTshirt, FaGift, FaTags, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Body: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const navigate = useNavigate();

  const servicios = [
    { icon: <FaPalette className="text-4xl" />, titulo: "Diseño Gráfico", descripcion: "Identidad visual, manejo de redes y proyectos digitales.", color: "#F7B150" },
    { icon: <FaMagic className="text-4xl" />, titulo: "Personalización", descripcion: "Sublimación de tazas, franelas, llaveros, rotulados y photocards.", color: "#0F69B2" },
    { icon: <FaBoxOpen className="text-4xl" />, titulo: "Detalles", descripcion: "Packaging, cajas, stickers, tarjetas y toppers para regalos inolvidables.", color: "#F7B150" }
  ];

  const otrosServicios = [
    { icon: <FaPaintBrush />, texto: "Diseño de logotipos" },
    { icon: <FaTshirt />, texto: "Ropa personalizada" },
    { icon: <FaGift />, texto: "Regalos corporativos" },
    { icon: <FaTags />, texto: "Etiquetas y stickers" },
    { icon: <FaRocket />, texto: "Proyectos digitales" }
  ];

  return (
    <section className="py-20 px-4 bg-[#FEFEFE]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            ¿Listo para crear algo increíble?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Si estas buscando potenciar tu marca o crear un detalle con significado, 
            aquí en <span className="font-semibold text-[#0F69B2]">NaguaraStudio</span> estamos para ayudarte con tus ideas.
          </p>
        </motion.div>
        
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-12">
            ¿Qué hacemos?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#F7B150] to-[#0F69B2] rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex justify-center mb-5">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F7B150]/20 to-[#0F69B2]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div style={{ color: servicio.color }} className="text-4xl">
                        {servicio.icon}
                      </div>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{servicio.titulo}</h4>
                  <p className="text-gray-600">{servicio.descripcion}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <h4 className="text-xl font-semibold text-center text-gray-800 mb-8">
              También ofrecemos:
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {otrosServicios.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-gray-50 to-white px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer"
                >
                  <span className="text-[#F7B150] text-lg">{item.icon}</span>
                  <span className="text-gray-700 font-medium">{item.texto}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action adicional */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 pt-8 border-t border-gray-100"
        >
          <p className="text-gray-600 mb-4">
            ¿Tienes un proyecto en mente?
          </p>
          <button 
            onClick={() => navigate('/whatsapp')}
            className="px-8 py-3 bg-[#0F69B2] text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Contáctanos ahora →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Body;