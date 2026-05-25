import React from 'react';
import CategoriaTemplate from './CategoriaTemplate';

const llaverosImages = import.meta.glob('../../assets/catalogo/llaveros/*.{jpg,jpeg,png,webp}', { eager: true });
const llaverosList = Object.values(llaverosImages).map((mod: any) => mod.default);


const Llaveros: React.FC = () => {
  const products = [
    { 
      id: 1, 
      name: 'Llavero doble cara', 
      description: 'Cajita de acrílico con doble impresión interna. Acabado profesional y duradero.', 
      price: '$3',
      image: llaverosList[0]
    },
    { 
      id: 2, 
      name: 'Llavero liso', 
      description: 'Liso tipo chapa de 5.5cm. Perfecto para diseños sencillos y elegantes.', 
      price: '$3.50',
      image: llaverosList[1]
    },
    { 
      id: 3, 
      name: 'Llavero rotulado', 
      description: 'Rotulado en vinil sobre acrílico circular. Ideal para logos y textos simples.', 
      price: '$4',
      image: llaverosList[2]
    },
    { 
      id: 4, 
      name: 'Llavero con DTF UV', 
      description: 'DTF UV sobre acrílico circular 5x5cm. Colores vibrantes y alta resistencia, ideal para diseños complejos.', 
      price: '$3.50',
      image: llaverosList[3]
    },
    { 
      id: 5, 
      name: 'Llavero sublimado', 
      description: 'Técnica sublimada sobre cinta. Acabado suave y resistente.', 
      price: '$4',
      image: llaverosList[4]
    },
    { 
      id: 6, 
      name: 'Llavero sublimado cinta + acrílico', 
      description: 'Técnica sublimada sobre cinta, más mini pieza en acrílico. Combinación única.', 
      price: '$6',
      image: llaverosList[5]
    },
    { 
      id: 7, 
      name: 'Llavero acrílico', 
      description: 'Acrílico con forma, más impresión en vinil. Personalizable en diversas formas.', 
      price: '$6',
      image: llaverosList[6]
    },
    { 
      id: 8, 
      name: 'Llavero acrílico con acabado holográfico', 
      description: 'Acrílico con forma, más impresión en vinil y laminado holográfico. Efecto brillante y llamativo.', 
      price: '$7',
      image: llaverosList[7]
    },
    { 
      id: 9, 
      name: 'Llavero almohadilla', 
      description: 'Técnica de sublimación con relleno suave. Textura agradable al tacto.', 
      price: '$5',
      image: llaverosList[8]
    },
    { 
      id: 10, 
      name: 'Llavero acrílico sobre acrílico', 
      description: 'Capas superpuestas para un efecto 3D único.', 
      price: '$6.50',
      image: llaverosList[9]
    },
    { 
      id: 11, 
      name: 'Llavero flor eterna', 
      description: 'Llavero personalizado con flor eterna del color de preferencia.', 
      price: '$3',
      image: llaverosList[10]
    },
  ];

  return (
    <CategoriaTemplate
      title="Llaveros"
      description="Llaveros personalizados en diferentes materiales y acabados. Perfectos para regalos, recuerdos o merch corporativo."
      products={products}
    />
  );
};

export default Llaveros;