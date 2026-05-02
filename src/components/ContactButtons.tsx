import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaWhatsapp, 
  FaInstagram, 
  FaEnvelope, 
  FaTiktok, 
  FaFacebookF,
  FaPhoneAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';

const ContactButtons: React.FC = () => {
  const contacts = [
    { 
      platform: 'WhatsApp', 
      url: '/whatsapp',
      icon: <FaWhatsapp className="text-2xl" />,
      color: 'bg-whatsapp',
      hoverColor: 'hover:bg-whatsapp-dark',
      description: 'Chat directo'
    },
    { 
      platform: 'Instagram', 
      url: 'https://www.instagram.com/naguarastudio_ve?igsh=aTdnZmFzenl2ZWM3', 
      icon: <FaInstagram className="text-2xl" />,
      color: 'bg-instagram',
      hoverColor: 'hover:bg-pink-600',
      description: 'Nuestro portafolio'
    },
    { 
      platform: 'Correo', 
      url: 'mailto:naguarastudio.ve@gmail.com',
      icon: <FaEnvelope className="text-2xl" />,
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      description: 'Escríbenos'
    },
    { 
      platform: 'TikTok', 
      url: 'https://vm.tiktok.com/ZS918GCx94Akh-FzyOD/', 
      icon: <FaTiktok className="text-2xl" />,
      color: 'bg-black',
      hoverColor: 'hover:bg-gray-800',
      description: 'Contenido creativo'
    },
    { 
      platform: 'Facebook', 
      url: 'https://www.facebook.com/profile.php?id=61584986701490', 
      icon: <FaFacebookF className="text-2xl" />,
      color: 'bg-facebook',
      hoverColor: 'hover:bg-blue-800',
      description: 'Comunidad'
    },
  ];

  const contactInfo = {
    email: 'naguarastudio.ve@gmail.com',
    phone: '+58 424 819 3112 / +58 426 962 1201',
    location: 'Anzoátegui, Venezuela'
  };

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">
            ¿Listo para crear algo increíble?
          </h3>
          <p className="text-gray-600 text-lg">
            Contáctanos a través de tu red favorita
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {contacts.map((contact) => {
            const ButtonContent = (
              <div className={`${contact.color} ${contact.hoverColor} text-white rounded-xl p-4 text-center transition-all duration-300 hover-scale`}>
                <div className="flex justify-center mb-2">
                  {contact.icon}
                </div>
                <div className="font-semibold text-sm md:text-base">{contact.platform}</div>
                <div className="text-xs opacity-90 mt-1 hidden md:block">{contact.description}</div>
              </div>
            );

            if (contact.platform === 'WhatsApp') {
              return (
                <Link key={contact.platform} to={contact.url}>
                  {ButtonContent}
                </Link>
              );
            }
            
            return (
              <a
                key={contact.platform}
                href={contact.url}
                target={contact.platform === 'Correo' ? '_self' : '_blank'}
                rel="noopener noreferrer"
              >
                {ButtonContent}
              </a>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md">
            <FaEnvelope className="text-purple-500 text-xl" />
            <div>
              <strong className="block text-gray-800">Correo</strong>
              <p className="text-gray-600 text-sm">{contactInfo.email}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md">
            <FaPhoneAlt className="text-purple-500 text-xl" />
            <div>
              <strong className="block text-gray-800">Teléfono</strong>
              <p className="text-gray-600 text-sm">{contactInfo.phone}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md">
            <FaMapMarkerAlt className="text-purple-500 text-xl" />
            <div>
              <strong className="block text-gray-800">Ubicación</strong>
              <p className="text-gray-600 text-sm">{contactInfo.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactButtons;