import React from 'react';
import CategoriaTemplate from './CategoriaTemplate';

// Importar TODAS las imágenes de la carpeta gran-formato en UNA sola línea
const granFormatoImages = import.meta.glob('../../assets/catalogo/gran-formato/*.{jpg,jpeg,png,webp}', { eager: true });
const granFormatoList = Object.values(granFormatoImages).map((mod: any) => mod.default);

const GranFormato: React.FC = () => {
  const products = [
    { 
      id: 1, 
      name: 'Sulfato', 
      description: 'Impresión de 90x70cm sobre cartulina. Ideal para planos, posters y presentaciones.', 
      price: '$15',
      image: granFormatoList[0]
    },
    { 
      id: 2, 
      name: 'Pendones', 
      description: 'Banners publicitarios en diferentes tamaños. Perfectos para eventos y publicidad exterior.', 
      image: granFormatoList[1],
      subProducts: [
        { name: 'Pendón Pequeño', description: 'Banner de 80x80cm. Ideal para eventos pequeños y promociones.', price: '$22' },
        { name: 'Pendón Regular', description: 'Banner de 80x120cm. Tamaño estándar para publicidad.', price: '$26' }
      ]
    },
    { 
      id: 3, 
      name: 'Armado de Pendón', 
      description: 'Armado con tubos de hierro para colocar el pendón. Soporte resistente y fácil de instalar.', 
      price: '$8',
      image: granFormatoList[2]
    },
    { 
      id: 4, 
      name: 'Logos en PVC', 
      description: 'Impresión sobre PVC de 50x50cm. Letreros y logos para interiores y exteriores.', 
      price: '$50',
      image: granFormatoList[3]
    },
    { 
      id: 5, 
      name: 'Logos en Acrílico con base', 
      description: 'Medidas de 60x60 cm + base en acrílico. Acabado elegante y profesional para fachadas y oficinas.', 
      price: '$150',
      image: granFormatoList[4]
    },
    { 
      id: 6, 
      name: 'Logos en Acrílico con luz', 
      description: 'Medidas de 60x60 cm + base en acrílico con iluminación LED. Alto impacto visual para exteriores.', 
      price: '$180',
      image: granFormatoList[5]
    },
    { 
      id: 7, 
      name: 'Sublimación gran formato', 
      description: 'Impresión de sublimación gran formato por metro cuadrado. Perfecto para telas y textil.', 
      price: '$8 (m2)',
      image: granFormatoList[6]
    },
    { 
      id: 8, 
      name: 'Vinil gran formato', 
      description: 'Impresión en vinil gran formato. Medidas 1.30cm x 30cm. Ideal para paredes y grandes superficies.', 
      price: '$15',
      image: granFormatoList[7]
    },
  ];

  return (
    <CategoriaTemplate
      title="Gran Formato"
      description="Impresiones de gran tamaño para publicidad, eventos y decoración. Pendones, letreros y vinilos de alta calidad."
      products={products}
    />
  );
};

export default GranFormato;