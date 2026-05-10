import React from 'react';
import CategoriaTemplate from './CategoriaTemplate';

const Stickers: React.FC = () => {
  const products = [
    { id: 1, name: 'Fotográfico', description: 'Stickers con acabado fotográfico, colores vibrantes.', price: '$3 (pack x10)' },
    { id: 2, name: 'Fotográfico Laminado Holográfico', description: 'Stickers con efecto holográfico sobre impresión fotográfica.', price: '$5 (pack x10)' },
    { id: 3, name: 'Holográfico', description: 'Stickers totalmente holográficos, cambian de color.', price: '$4 (pack x10)' },
    { id: 4, name: 'Vinil', description: 'Stickers de vinil resistentes al agua y al sol.', price: '$3 (pack x10)' },
    { id: 5, name: 'Rotulados', description: 'Stickers con rotulado personalizado para negocios.', price: '$2 (c/u)' },
    { id: 6, name: 'Tarjetas de Banco', description: 'Vinilos personalizados para tarjetas bancarias.', price: '$4' },
    { id: 7, name: 'Clear', description: 'Stickers transparentes, ideales para vidrio.', price: '$4 (pack x10)' },
  ];

  return (
    <CategoriaTemplate
      title="Stickers"
      description="Stickers personalizados en diferentes acabados y materiales para todos los gustos."
      products={products}
    />
  );
};

export default Stickers;