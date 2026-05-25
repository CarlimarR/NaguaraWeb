import React from 'react';
import CategoriaTemplate from './CategoriaTemplate';


const kitsImages = import.meta.glob('../../assets/catalogo/kits/*.{jpg,jpeg,png,webp}', { eager: true });
const kitsList = Object.values(kitsImages).map((mod: any) => mod.default);

const KitsCorporativos: React.FC = () => {
  const products = [
    { 
      id: 1, 
      name: '100 Tarjetas', 
      description: 'Medidas 8x5cm. Tarjetas de presentación impresas en papel couché.', 
      price: '$16',
      image: kitsList[0]
    },
    { 
      id: 2, 
      name: '100 Volantes', 
      description: 'Medidas 7.5x10cm. Volantes publicitarios.', 
      image: kitsList[1],
      subProducts: [
        { name: 'Volantes en Bond', description: 'Material común. Acabado mate estándar.', price: '$15' },
        { name: 'Volantes en Glasse', description: 'Acabado brillante. Ideal para colores vibrantes.', price: '$17' }
      ]
    },
    { 
      id: 3, 
      name: '100 Llaveros', 
      description: 'Llaveros de caja acrílica con doble impresión en ambas caras.', 
      price: '$70',
      image: kitsList[2]
    },
    { 
      id: 4, 
      name: '100 Brazaletes', 
      description: 'Material tyvek repelente de agua y resistente. Impresión únicamente en negro.', 
      price: '$30',
      image: kitsList[3]
    },
    { 
      id: 5, 
      name: 'Kit Bienvenida', 
      description: 'Libreta media carta, lapicero personalizado y taza 11oz. Perfecto para nuevos empleados.', 
      price: '$25',
      image: kitsList[4]
    },
    { 
      id: 6, 
      name: 'Kit Lanyard + Carnet + Portacarnet', 
      description: 'Lanyard sublimado, impresión de carnet y portacarnet. Ideal para identificación en eventos.', 
      price: '$12',
      image: kitsList[5]
    },
    { 
      id: 7, 
      name: 'Kit Uniforme', 
      description: 'Franela personalizada + gorra. Perfecto para equipos de trabajo.', 
      price: '$25',
      image: kitsList[6]
    },
    { 
      id: 8, 
      name: 'Kit Emprendedor', 
      description: '50 tarjetas 8x5cm, 50 stickers 3x3cm y 50 volantes 7.5x10cm. Ideal para empezar tu negocio.', 
      price: 'Consultar',
      image: kitsList[7]
    },
    { 
      id: 9, 
      name: 'Kit Escolar', 
      description: '3 cuadernos forrados, 1 plantilla de stickers y termo sport. Perfecto para estudiantes.', 
      price: '$40',
      image: kitsList[8]
    },
    { 
      id: 10, 
      name: 'Kit Tesis', 
      description: '1 carpeta, 3 habladores, 3 etiquetas para agua, 3 lapiceros. Ideal para presentación de tesis.', 
      price: '$20',
      image: kitsList[9]
    },
    { 
      id: 11, 
      name: 'Kit Fav', 
      description: '4 chapas, 5 polaroids, 6 photocards, 2 mini posters, 2 llaveros y caja rotulada con nombre personalizado. Perfecto para recuerdos de eventos.', 
      price: '$22',
      image: kitsList[10]
    },
  ];

  return (
    <CategoriaTemplate
      title="Kits Todo en uno"
      description="Paquetes especiales para empresas, eventos y detalles. Kits diseñados para cada necesidad."
      products={products}
    />
  );
};

export default KitsCorporativos;