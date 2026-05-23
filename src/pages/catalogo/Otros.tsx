import React from 'react';
import CategoriaTemplate from './CategoriaTemplate';

// Importar TODAS las imágenes de la carpeta otros en UNA sola línea
const otrosImages = import.meta.glob('../../assets/catalogo/otros/*.{jpg,jpeg,png,webp}', { eager: true });
const otrosList = Object.values(otrosImages).map((mod: any) => mod.default);

const Otros: React.FC = () => {
  const products = [
    { 
      id: 1, 
      name: 'Láminas de aluminio', 
      description: 'Láminas de aluminio con impresión directa. Ideales para exteriores y alta durabilidad.', 
      image: otrosList[0],
      subProducts: [
        { name: 'Lámina A5', description: 'Tamaño A5. Perfecta para decoración de escritorio.', price: '$10' },
        { name: 'Lámina A4', description: 'Tamaño A4. Ideal para cuadros y decoración de pared.', price: '$16' },
        { name: 'Lámina A3', description: 'Tamaño A3. Gran formato para impacto visual.', price: '$30' }
      ]
    },
    { 
      id: 2, 
      name: 'Lámpara sublimada', 
      description: 'Lámparas de mesa o pared con diseño sublimado. Iluminación personalizada y única.', 
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
      description: 'Habladores de contacto o pagos en acrílico. Acabado profesional y elegante.', 
      price: '$30',
      image: otrosList[3]
    },
    { 
      id: 5, 
      name: 'Identificadores', 
      description: 'Identificadores plateados o dorados con grabado láser. Perfectos para mascotas, equipaje o llaveros.', 
      price: '$8',
      image: otrosList[4]
    },
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