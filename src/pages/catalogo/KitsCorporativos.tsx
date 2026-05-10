import React from 'react';
import CategoriaTemplate from './CategoriaTemplate';

const KitsCorporativos: React.FC = () => {
  const products = [
    { id: 1, name: 'Kit 100 Tarjetas', description: '100 tarjetas de presentación impresas en papel couché.', price: '$45' },
    { id: 2, name: 'Kit 50 Tarjetas + 50 Stickers', description: '50 tarjetas + 50 stickers personalizados.', price: '$40' },
    { id: 3, name: 'Kit Ejecutivo', description: 'Libreta, lapicero, tarjetas y stickers. Ideal para empresas.', price: '$120' },
    { id: 4, name: 'Kit Bienvenida', description: 'Taza, libreta, lapicero y sticker. Perfecto para nuevos empleados.', price: '$35' },
    { id: 5, name: 'Kit Evento', description: 'Pulseras, chapas, stickers y llaveros para eventos.', price: '$50 (50 pax)' },
  ];

  return (
    <CategoriaTemplate
      title="Kits Corporativos"
      description="Paquetes especiales para empresas, eventos y promociones."
      products={products}
    />
  );
};

export default KitsCorporativos;