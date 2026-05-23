import React from 'react';
import CategoriaTemplate from './CategoriaTemplate';

// Importar TODAS las imágenes de la carpeta llaveros en UNA sola línea
const llaverosImages = import.meta.glob('../../assets/catalogo/llaveros/*.{jpg,jpeg,png,webp}', { eager: true });
const llaverosList = Object.values(llaverosImages).map((mod: any) => mod.default);

// Las imágenes se asignarán en el orden de los archivos (alfabéticamente)
// Asegúrate de que los nombres de los archivos coincidan con este orden:
// 1. Llavero doble cara.jpg
// 2. Llavero liso.jpg
// 3. Llavero rotulado.jpg
// 4. Llavero con DTF UV.jpg
// 5. Llavero sublimado.jpg
// 6. Llavero sublimado cinta + acrílico.jpg
// 7. Llavero acrílico.jpg
// 8. Llavero acrílico con acabado holográfico.jpg
// 9. Llavero almohadilla.jpg
// 10. Llavero acrílico sobre acrílico.jpg

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
      description: 'Rotulado en vinil sobre acrílico circular. Ideal para logos y textos.', 
      price: '$4',
      image: llaverosList[2]
    },
    { 
      id: 4, 
      name: 'Llavero con DTF UV', 
      description: 'DTF UV sobre acrílico circular 5x5cm. Colores vibrantes y alta resistencia.', 
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
      description: 'Técnica sublimada sobre cinta, más mini pieza en acrílico con impresión en clear. Combinación única.', 
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
      price: '$4',
      image: llaverosList[8]
    },
    { 
      id: 10, 
      name: 'Llavero acrílico sobre acrílico', 
      description: 'Acrílico sobre acrílico. Capas superpuestas para un efecto 3D único.', 
      price: '$6.50',
      image: llaverosList[9]
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