import React from 'react';
import CategoriaTemplate from './CategoriaTemplate';

// Importar TODAS las imágenes de la carpeta textil en UNA sola línea
const textilImages = import.meta.glob('../../assets/catalogo/textil/*.{jpg,jpeg,png,webp}', { eager: true });
const textilList = Object.values(textilImages).map((mod: any) => mod.default);

const Textil: React.FC = () => {
  const products = [
    { 
      id: 1, 
      name: 'Franelas Sublimadas', 
      description: 'Técnica aplicada sobre micro durazno color blanco. Acabado suave y resistente.', 
      price: '$12',
      image: textilList[0]
    },
    { 
      id: 2, 
      name: 'Franelas con Vinil Textil', 
      description: 'Técnica aplicada sobre algodón con diseños simples. Ideal para estampados de una o dos tintas.', 
      price: '$12',
      image: textilList[1]
    },
    { 
      id: 3, 
      name: 'Franelas con DTF UV', 
      description: 'Técnica aplicada sobre algodón en cualquier color. Colores vibrantes y alta durabilidad.', 
      price: '$15',
      image: textilList[2]
    },
    { 
      id: 4, 
      name: 'Franela Impresa Manga Corta', 
      description: 'Técnica aplicada con sublimación gran formato sobre microdurazno, Jersey, Atlética o Dry Fit.', 
      price: '$20',
      image: textilList[3]
    },
    { 
      id: 5, 
      name: 'Franela Impresa Manga Larga', 
      description: 'Técnica aplicada con sublimación gran formato sobre microdurazno, Jersey, Atlética o Dry Fit.', 
      price: '$25',
      image: textilList[4]
    },
    { 
      id: 6, 
      name: 'Corta Vientos', 
      description: 'Técnica aplicada con sublimación gran formato, DTF y vinil textil sobre Tafeta. Impermeable y resistente.', 
      price: '$40',
      image: textilList[5]
    },
    { 
      id: 7, 
      name: 'Medias', 
      description: 'Técnica aplicada con sublimación sobre poliéster. Estampado completo sin límites de diseño.', 
      price: '$8',
      image: textilList[6]
    },
    { 
      id: 8, 
      name: 'Gorras', 
      description: 'Técnica aplicada con DTF o vinil textil sobre gorra de malla, drill o trucker.', 
      price: '$12',
      image: textilList[7]
    },
    { 
      id: 9, 
      name: 'Lanyard', 
      description: 'Técnica aplicada con sublimación. Perfecto para identificación en eventos y empresas.', 
      price: '$4.50',
      image: textilList[8]
    },
    { 
      id: 10, 
      name: 'Pañoleta', 
      description: 'Medidas de 45x45cm con técnica sublimada sobre charmuse. Ideal para accesorios de moda.', 
      price: '$7',
      image: textilList[9]
    },
    { 
      id: 11, 
      name: 'Pañoleta Grande', 
      description: 'Medidas de 70x70cm con técnica sublimada sobre charmuse. Versátil y elegante.', 
      price: '$18',
      image: textilList[10]
    },
    { 
      id: 12, 
      name: 'Cartuchera', 
      description: 'Técnica sublimada o DTF textil sobre loneta. Perfecta para útiles escolares o maquillaje.', 
      price: '$4',
      image: textilList[11]
    },
    { 
      id: 13, 
      name: 'Mini Tote Bag', 
      description: 'Medidas de 20x28cm con técnica sublimada, DTF o Vinil textil sobre liencillo o loneta.', 
      price: '$8',
      image: textilList[12]
    },
    { 
      id: 14, 
      name: 'Tote Bag', 
      description: 'Medidas de 35x40cm con técnica sublimada, DTF o Vinil textil sobre liencillo o loneta.', 
      price: '$12',
      image: textilList[13]
    },
    { 
      id: 15, 
      name: 'Estola', 
      description: 'Técnica sublimada, DTF o Vinil textil sobre charmuse. Accesorio elegante para cualquier ocasión.', 
      price: '$6',
      image: textilList[14]
    },
    { 
      id: 16, 
      name: 'Estola de Miss', 
      description: 'Técnica sublimada, DTF o Vinil textil sobre charmuse. Diseño especial para reinados y eventos.', 
      price: '$7',
      image: textilList[15]
    },
    { 
      id: 17, 
      name: 'Bandana Pet', 
      description: 'Técnica sublimada sobre microfibra. Perfecta para mascotas.', 
      price: '$5',
      image: textilList[16]
    },
    { 
      id: 18, 
      name: 'Mouse Pad', 
      description: 'Medidas de 80x30cm con técnica de sublimación. Superficie suave y antideslizante.', 
      price: '$7',
      image: textilList[17]
    },
    { 
      id: 19, 
      name: 'Mouse Pad Gamer', 
      description: 'Medidas de 80x30cm con técnica de sublimación a gran formato. Ideal para gamers.', 
      price: '$22',
      image: textilList[18]
    },
    { 
      id: 20, 
      name: 'Almohada', 
      description: 'Técnica sublimada, DTF o Vinil textil. Personalizable con fotos o diseños.', 
      price: '$5',
      image: textilList[19]
    },
  ];

  return (
    <CategoriaTemplate
      title="Textil"
      description="Prendas y accesorios textiles personalizados con la mejor calidad. Sublimación, DTF UV y Vinil textil."
      products={products}
    />
  );
};

export default Textil;