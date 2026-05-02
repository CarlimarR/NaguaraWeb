import React from 'react';
import { 
  FaPalette, 
  FaMagic, 
  FaBoxOpen, 
  FaPaintBrush,
  FaTshirt,
  FaGift,
  FaTags
} from 'react-icons/fa';

const Hero: React.FC = () => {
  const servicios = [
    {
      icon: <FaPalette className="text-4xl text-purple-500" />,
      titulo: "Diseño Gráfico",
      descripcion: "Identidad visual, manejo de redes y proyectos digitales."
    },
    {
      icon: <FaMagic className="text-4xl text-purple-500" />,
      titulo: "Personalización",
      descripcion: "Sublimación de tazas, franelas, llaveros, rotulados y photocards."
    },
    {
      icon: <FaBoxOpen className="text-4xl text-purple-500" />,
      titulo: "Detalles que marcan la diferencia",
      descripcion: "Packaging, cajas, stickers, tarjetas y toppers para regalos inolvidables."
    }
  ];

  const otrosServicios = [
    { icon: <FaPaintBrush />, texto: "Diseño de logotipos" },
    { icon: <FaTshirt />, texto: "Ropa personalizada" },
    { icon: <FaGift />, texto: "Regalos corporativos" },
    { icon: <FaTags />, texto: "Etiquetas y stickers" }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          ¿Listo para crear algo increíble?
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Ya sea que estés buscando potenciar tu marca o crear un regalo con significado, 
          aquí en NaguaraStudio estamos para caminar contigo.
        </p>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            ¿Qué hacemos?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 card-hover">
                <div className="flex justify-center mb-4">
                  {servicio.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{servicio.titulo}</h4>
                <p className="text-gray-600">{servicio.descripcion}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <h4 className="text-xl font-semibold text-center text-gray-800 mb-6">
              También ofrecemos:
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {otrosServicios.map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full card-hover">
                  <span className="text-purple-500">{item.icon}</span>
                  <span className="text-gray-700">{item.texto}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;