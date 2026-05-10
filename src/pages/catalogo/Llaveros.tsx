import React from 'react';
import CategoriaTemplate from './CategoriaTemplate';

const Llaveros: React.FC = () => {
  const products = [
    { id: 1, name: 'Llavero de Acrílico', description: 'Llaveros de acrílico transparente con diseño personalizado.', price: '$3' },
    { id: 2, name: 'Llavero Sublimado', description: 'Llaveros de polímero o MDF sublimados a todo color.', price: '$4' },
    { id: 3, name: 'Llavero Destapador', description: 'Llavero metálico con función de destapador y diseño personalizado.', price: '$5' },
  ];

  return (
    <CategoriaTemplate
      title="Llaveros"
      description="Llaveros personalizados en diferentes materiales, perfectos para regalos o recuerdos."
      products={products}
    />
  );
};

export default Llaveros;
