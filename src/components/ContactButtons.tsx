import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaTiktok, FaFacebookF } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ContactButtons: React.FC = () => {
  const [showWhatsappOptions, setShowWhatsappOptions] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<string | null>(null);

  const whatsappNumbers = [
    { number: '+584248193112', label: 'Valentina', emoji: '👩‍💼' },
    { number: '+584269621201', label: 'Rocio', emoji: '👩‍💼' }
  ];

  const socialLinks = [
    { 
      icon: <FaWhatsapp className="text-3xl" />, 
      name: 'WhatsApp',
      isWhatsapp: true,
      action: () => setShowWhatsappOptions(!showWhatsappOptions),
      color: '#25D366'
    },
    { 
      icon: <FaInstagram className="text-3xl" />, 
      name: 'Instagram',
      url: 'https://www.instagram.com/naguarastudio_ve',
      color: '#E4405F'
    },

    { 
      icon: <FaTiktok className="text-3xl" />, 
      name: 'TikTok',
      url: 'https://www.tiktok.com/@naguara.studio?_r=1&_t=ZS-96bopVj1zMW',
      color: '#000000'
    },
    { 
      icon: <FaEnvelope className="text-3xl" />, 
      name: 'Email',
      url: 'mailto:naguarastudio.ve@gmail.com',
      color: '#EA4335'
    },
    { 
      icon: <FaFacebookF className="text-3xl" />, 
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1EPx4nX7YE/',
      color: '#1877F2'
    },
  ];

  const handleSocialClick = (social: typeof socialLinks[0]) => {
    if (social.isWhatsapp) {
      social.action();
    } else if (social.url) {
      window.open(social.url, '_blank');
    }
  };

  const handleSelectWhatsapp = (number: string) => {
    setSelectedNumber(number);
    setTimeout(() => {
      openWhatsApp(number);
      setShowWhatsappOptions(false);
      setSelectedNumber(null);
    }, 200);
  };

  const openWhatsApp = (phoneNumber: string) => {
    const message = encodeURIComponent('¡Hola! Me comunico desde la pagina web, necesito una cotización sobre...');
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#FEFEFE] to-[#F6F0E0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Conecta con nosotros
          </h2>
          <p className="text-gray-600 text-lg">Elige tu plataforma favorita</p>
        </div>

        {/* Contact Circles */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12 relative">
          {socialLinks.map((social, index) => (
            <div key={index} className="relative">
              <motion.button
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSocialClick(social)}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-xl flex items-center justify-center transition-all duration-300 hover:shadow-2xl border-4 border-transparent hover:border-[#F7B150] group"
                style={{ boxShadow: `0 10px 25px -5px ${social.color}40` }}
              >
                <div className="text-gray-700 group-hover:text-[#F7B150] transition-colors duration-300">
                  {social.icon}
                </div>
              </motion.button>
              <p className="text-center mt-2 text-sm font-medium text-gray-600">{social.name}</p>
            </div>
          ))}
        </div>

        {/* WhatsApp Options Popup */}
        <AnimatePresence>
          {showWhatsappOptions && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="fixed bottom-24 right-4 md:right-8 z-50"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-4 w-72 border-t-4 border-[#25D366]">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <FaWhatsapp className="text-green-500" />
                    Elige un contacto
                  </h3>
                  <button
                    onClick={() => setShowWhatsappOptions(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>
                <div className="space-y-2">
                  {whatsappNumbers.map((wa, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectWhatsapp(wa.number)}
                      disabled={selectedNumber !== null}
                      className="w-full text-left p-3 rounded-xl hover:bg-green-50 transition-all duration-300 flex items-center gap-3 group"
                    >
                      <span className="text-2xl">{wa.emoji}</span>
                      <div>
                        <p className="font-semibold text-gray-800">{wa.label}</p>
                        <p className="text-sm text-gray-500">{wa.number}</p>
                      </div>
                      {selectedNumber === wa.number && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        </motion.div>
                      )}
                    </button>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500 text-center">
                  Horario: 8:30 AM - 8:00 PM
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactButtons;