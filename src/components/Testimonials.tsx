import React from 'react';
import { FaQuoteLeft, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const handleVerReferencias = () => {
    window.open('https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTU1OTc0ODgyODQzMTE0?story_media_id=3592873218945037883_72806218163&igsh=N3N6d3RkeGV1ZXY4', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-[#F6F0E0]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 text-lg">Referencias reales en nuestras redes sociales</p>
        </motion.div>

        {/* Tarjeta principal que lleva a Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          onClick={handleVerReferencias}
          className="max-w-2xl mx-auto cursor-pointer mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#F7B150] flex items-center justify-center mb-4">
                <FaInstagram className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Ver referencias</h3>
              <p className="text-gray-600 mb-4">
                Mira las experiencias de nuestros clientes en Instagram
              </p>
              <div className="inline-flex items-center gap-2 bg-[#F7B150] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0F69B2] transition-all duration-300">
                <FaInstagram />
                Ver historias destacadas →
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contador de proyectos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-gray-200"
        >
          {[
            { number: '200+', label: 'Proyectos completados' },
            { number: '99%', label: 'Clientes satisfechos' },
            { number: '2 años', label: 'de experiencia' },
            { number: '100%', label: 'Atención personalizada' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0F69B2]">{stat.number}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;