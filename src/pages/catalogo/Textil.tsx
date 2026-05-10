import React from 'react';
import CategoriaTemplate from './CategoriaTemplate';

const Textil: React.FC = () => {
  const products = [
    { id: 1, name: 'Franelas', description: 'Franelas 100% algodón, disponibles en varios colores y tallas.', price: '$12' },
    { id: 2, name: 'Gran Formato Manga Corta', description: 'Estampado gran formato en camisas manga corta.', price: '$15' },
    { id: 3, name: 'Gran Formato Manga Larga', description: 'Estampado gran formato en camisas manga larga.', price: '$18' },
    { id: 4, name: 'Almohada', description: 'Almohadas personalizadas con foto o diseño.', price: '$20' },
    { id: 5, name: 'Corta Vientos', description: 'Chaquetas cortavientos impermeables personalizadas.', price: '$35' },
    { id: 6, name: 'Medias', description: 'Medias personalizadas con estampado completo.', price: '$8' },
    { id: 7, name: 'Gorras', description: 'Gorras de algodón con bordado o sublimación.', price: '$12' },
    { id: 8, name: 'Lanyard', description: 'Lanyards con clip y identificación personalizada.', price: '$5' },
    { id: 9, name: 'Tote Bags Pequeñas', description: 'Bolsas ecológicas tamaño pequeño.', price: '$8' },
    { id: 10, name: 'Tote Bags Grandes', description: 'Bolsas ecológicas tamaño grande.', price: '$12' },
    { id: 11, name: 'Pañoletas Grandes', description: 'Pañoletas tamaño grande, ideales para regalo.', price: '$10' },
    { id: 12, name: 'Pañoletas Pequeñas', description: 'Pañoletas tamaño bolsillo.', price: '$6' },
    { id: 13, name: 'Estuches', description: 'Estuches para lápices, maquillaje o accesorios.', price: '$7' },
    { id: 14, name: 'Mouse Pad', description: 'Alfombrillas para mouse estándar.', price: '$8' },
    { id: 15, name: 'Mouse Pad Gamer', description: 'Alfombrillas grandes para gamers.', price: '$18' },
  ];

  return (
    <CategoriaTemplate
      title="Textil"
      description="Prendas y accesorios textiles personalizados con la mejor calidad."
      products={products}
    />
  );
};

export default Textil;