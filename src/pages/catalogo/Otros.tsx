import React from 'react';
import CategoriaTemplate from './CategoriaTemplate';

const otrosImages = import.meta.glob('../../assets/catalogo/otros/*.{jpg,jpeg,png,webp}', { eager: true });
const otrosList = Object.values(otrosImages).map((mod: any) => mod.default);

const Otros: React.FC = () => {
  const products = [
    { 
      id: 1, 
      name: 'Láminas de aluminio', 
      description: 'Láminas de aluminio con impresión directa. Alta durabilidad y acabado brillante.', 
      image: otrosList[0],
      subProducts: [
        { name: 'Lámina A5', description: 'Tamaño A5. Perfecta para decoración pequeñas.', price: '$10' },
        { name: 'Lámina A4', description: 'Tamaño A4. Ideal para cuadros y decoración de pared.', price: '$16' },
        { name: 'Lámina A3', description: 'Tamaño A3. Gran formato para impacto visual.', price: '$30' }
      ]
    },
    { 
      id: 2, 
      name: 'Lámpara sublimada', 
      description: 'Lámparas de mesa con diseño sublimado. Retrato personalizado y único.', 
      price: '$20',
      image: otrosList[1]
    },
    { 
      id: 3, 
      name: 'Brazalete', 
      description: 'Material tyvek repelente de agua y resistente. Impresión únicamente en negro. Pedidos a partir de 50 unidades.', 
      price: '$0.30 (c/u)',
      image: otrosList[2]
    },
    { 
      id: 4, 
      name: 'Habladores en acrílico', 
      description: 'Habladores de contacto o pagos. Acabado profesional y elegante.', 
      price: '$30',
      image: otrosList[3]
    },
    { 
      id: 5, 
      name: 'Identificadores', 
      description: 'Identificadores plateados o dorados con grabado láser. Perfectos eventos o identificacion de personal.', 
      price: '$8',
      image: otrosList[4]
    },
    { 
      id: 6, 
      name: 'Identificador para mascotas', 
      description: 'Manten el control e identicado a tu amigo peludo con estilo y personalidad.', 
      price: '$4',
      image: otrosList[5]
    },
    {
      id: 7,
      name: 'Figuras en acrilico',
      description: 'Con forma y tamaño personalizado.',
      price: '10$',
      image: otrosList[6]
    }
    
  ];

  return (
    <CategoriaTemplate
      title="Productos Especiales"
      description="Productos únicos y especiales para ocasiones especiales. Láminas, lámparas, brazaletes, identificadores y más."
      products={products}
    />
  );
};

export default Otros;