import React from 'react';
import { FaWhatsapp, FaArrowLeft, FaClock, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WhatsAppPage: React.FC = () => {
  const whatsAppNumbers = [
    { 
      number: '+584248193112',
      label: 'Número Principal',
      description: 'Atención general y consultas',
      emoji: '👩‍💼'
    },
    { 
      number: '+584269621201',
      label: 'Número Secundario',
      description: 'Atención general y consultas',
      emoji: '👩‍💻'
    }
  ];

  const openWhatsApp = (phoneNumber: string) => {
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-green-700">
      <div className="container mx-auto px-4 py-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-all hover:-translate-x-1 mb-8 backdrop-blur-sm"
        >
          <FaArrowLeft /> Volver al inicio
        </Link>

        <div className="text-center text-white mb-12">
          <FaWhatsapp className="text-6xl mx-auto mb-4 animate-pulse-slow" />
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Contactar por WhatsApp</h1>
          <p className="text-xl opacity-95">Selecciona el número al que deseas escribir:</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-6 mb-12">
            {whatsAppNumbers.map((item) => (
              <div 
                key={item.number} 
                onClick={() => openWhatsApp(item.number)}
                className="bg-white rounded-2xl p-6 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-2xl border-2 border-transparent hover:border-green-300 group"
              >
                <div className="flex items-center gap-4 flex-wrap md:flex-nowrap">
                  <div className="text-5xl">{item.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{item.label}</h3>
                    <p className="text-green-600 font-semibold text-lg">{item.number}</p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <div className="bg-green-500 text-white px-4 py-2 rounded-xl flex items-center gap-2 group-hover:bg-green-600 transition-all group-hover:scale-105">
                    <FaWhatsapp />
                    <span>Escribir</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <FaClock className="text-green-500 text-xl" />
                <h3 className="text-xl font-bold text-gray-800">📋 Horarios de atención</h3>
              </div>
              <p className="text-gray-700 mb-1">Lunes a Viernes: 8:30 AM - 8:00 PM</p>
              <p className="text-gray-700">Fines de semana: 9:00 AM - 7:00 PM</p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <FaLightbulb className="text-green-500 text-xl" />
                <h3 className="text-xl font-bold text-gray-800">💡 ¿Qué puedes consultar?</h3>
              </div>
              <ul className="text-gray-700 space-y-1">
                <li>• Presupuestos y cotizaciones</li>
                <li>• Proyectos en desarrollo</li>
                <li>• Soporte técnico</li>
                <li>• Consultas generales</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPage;