import React from 'react';
import CategoriaTemplate from './CategoriaTemplate';

const Diseno: React.FC = () => {
  const products = [
    { id: 1, name: 'Vectorización', description: 'Conversión de diseños a formato vectorial profesional.', price: '$15' },
    { id: 2, name: 'Logos Genéricos', description: 'Diseños de logo prediseñados personalizables.', price: '$30' },
    { id: 3, name: 'Logo Único', description: 'Diseño de logo exclusivo y personalizado.', price: '$80' },
    { id: 4, name: 'Manual de Marca', description: 'Guía completa de uso de identidad corporativa.', price: '$150' },
    { id: 5, name: 'Identidad de Marca', description: 'Paquete completo de identidad visual.', price: '$200' },
    { id: 6, name: 'Tarjetas Genéricas', description: 'Diseños de tarjetas prediseñadas editables.', price: '$20' },
    { id: 7, name: 'Tarjetas de Presentación', description: 'Diseño personalizado de tarjetas de presentación.', price: '$35' },
    { id: 8, name: 'Flyers', description: 'Diseño de volantes publicitarios.', price: '$25' },
    { id: 9, name: 'Infografías', description: 'Diseño de infografías para redes o impresión.', price: '$40' },
  ];

  return (
    <CategoriaTemplate
      title="Diseño Gráfico"
      description="Soluciones creativas y profesionales para la imagen de tu negocio."
      products={products}
    />
  );
};

export default Diseno;