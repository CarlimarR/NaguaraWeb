import React from 'react';
import CategoriaTemplate from './CategoriaTemplate';

const Otros: React.FC = () => {
  const products = [
    { id: 1, name: 'Lámpara Sublimada', description: 'Lámparas de mesa o pared con diseño sublimado.', price: '$30' },
    { id: 2, name: 'Lámina de Aluminio', description: 'Láminas de aluminio con impresión directa, ideales para exteriores.', price: '$25' },
    { id: 3, name: 'Lámina Metálica', description: 'Láminas con acabado metálico brillante.', price: '$28' },
  ];

  return (
    <CategoriaTemplate
      title="Productos Especiales"
      description="Productos únicos y especiales para ocasiones especiales."
      products={products}
    />
  );
};

export default Otros;