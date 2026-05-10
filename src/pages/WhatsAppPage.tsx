import React from 'react';
import { FaWhatsapp, FaArrowLeft, FaClock, FaLightbulb, FaRegSmile, FaShieldAlt, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WhatsAppPage: React.FC = () => {
  const whatsAppNumbers = [
    { 
      number: '+584248193112',
      label: 'Número Principal',
      description: 'Atención general y consultas',
      emoji: '👩‍💼',
      color: 'from-green-500 to-green-600'
    },
    { 
      number: '+584269621201',
      label: 'Número Secundario',
      description: 'Atención general y consultas',
      emoji: '👩‍💻',
      color: 'from-blue-500 to-green-600'
    }
  ];

  const openWhatsApp = (phoneNumber: string) => {
    const message = encodeURIComponent('Hola! Me comunico desde NaguaraStudio, necesito información sobre sus servicios.');
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F0E0] to-[#FEFEFE]">
      <div className="container mx-auto px-4 py-8">
        {/* Botón para volver */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#0F69B2] bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full hover:bg-[#F7B150] hover:text-white transition-all duration-300 hover:-translate-x-1 shadow-md mb-8"
        >
          <FaArrowLeft /> Volver al inicio
        </Link>

        {/* Título con animación */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#F7B150] to-[#0F69B2] shadow-lg mb-6">
            <FaWhatsapp className="text-5xl text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Contactar por WhatsApp
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Selecciona el número al que deseas escribir y cuéntanos tu proyecto
          </p>
        </motion.div>

        {/* Tarjetas de números */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="space-y-6">
            {whatsAppNumbers.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => openWhatsApp(item.number)}
                className="bg-white rounded-2xl p-6 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex items-center gap-5 flex-wrap md:flex-nowrap">
                  <div className="text-6xl">{item.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{item.label}</h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.number}
                    </p>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                  <div className="bg-gradient-to-r from-[#F7B150] to-[#0F69B2] text-white px-5 py-2.5 rounded-xl flex items-center gap-2 group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    <FaWhatsapp />
                    <span className="font-semibold">Escribir</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Información adicional en grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Horarios */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F7B150]/20 to-[#0F69B2]/20 flex items-center justify-center">
                  <FaClock className="text-[#0F69B2] text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Horarios de atención</h3>
              </div>
              <div className="space-y-2 pl-4 border-l-3 border-[#F7B150]">
                <p className="text-gray-700">
                  <span className="font-semibold text-[#0F69B2]">Lunes a Viernes:</span> 8:30 AM - 8:00 PM
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-[#0F69B2]">Fines de semana:</span> 9:00 AM - 7:00 PM
                </p>
              </div>
            </div>
            
            {/* Qué consultar */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F7B150]/20 to-[#0F69B2]/20 flex items-center justify-center">
                  <FaLightbulb className="text-[#F7B150] text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">¿Qué puedes consultar?</h3>
              </div>
              <ul className="space-y-2 pl-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-[#F7B150] rounded-full"></span>
                  Presupuestos y cotizaciones
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-[#F7B150] rounded-full"></span>
                  Proyectos en desarrollo
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-[#F7B150] rounded-full"></span>
                  Diseño y personalización
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-[#F7B150] rounded-full"></span>
                  Consultas generales
                </li>
              </ul>
            </div>
          </div>

          {/* Beneficios adicionales */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white/80 rounded-xl p-3 text-center hover:bg-white transition-all duration-300">
              <FaRegSmile className="text-[#F7B150] text-2xl mx-auto mb-1" />
              <p className="text-xs text-gray-600">Respuesta rápida</p>
            </div>
            <div className="bg-white/80 rounded-xl p-3 text-center hover:bg-white transition-all duration-300">
              <FaShieldAlt className="text-[#0F69B2] text-2xl mx-auto mb-1" />
              <p className="text-xs text-gray-600">Atención segura</p>
            </div>
            <div className="bg-white/80 rounded-xl p-3 text-center hover:bg-white transition-all duration-300">
              <FaRocket className="text-[#F7B150] text-2xl mx-auto mb-1" />
              <p className="text-xs text-gray-600">Cotización ágil</p>
            </div>
          </div>
        </motion.div>

        {/* Mensaje de confianza */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            ✨ Respondemos en menos de 1 hora en horario laboral
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatsAppPage;