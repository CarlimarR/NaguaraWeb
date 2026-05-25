import React from 'react';
import CategoriaTemplate from './CategoriaTemplate';

const stickersImages = import.meta.glob('../../assets/catalogo/stickers/*.{jpg,jpeg,png,webp}', { eager: true });
const stickersList = Object.values(stickersImages).map((mod: any) => mod.default);

const Stickers: React.FC = () => {
  const products = [
    { 
      id: 1, 
      name: 'Fotográfico', 
      description: 'Stickers sobre papel fotográfico con acabado brillante.', 
      price: '$3',
      image: stickersList[0]
    },
    { 
      id: 2, 
      name: 'Laminado Holográfico', 
      description: 'Stickers con protección y acabado holográfico. Efecto arcoíris que cambia según la luz y ángulo.', 
      price: '$5',
      image: stickersList[1]
    },
    { 
      id: 3, 
      name: 'Holográfico', 
      description: 'Stickers con acabados holográficos resistentes al agua. Material premium con efecto metálico iridiscente.', 
      price: '$5',
      image: stickersList[2]
    },
    { 
      id: 4, 
      name: 'Vinil', 
      description: 'Etiquetas con acabado antiagua y alta resistencia. Perfectas para exteriores y uso prolongado.', 
      price: '$8',
      image: stickersList[3]
    },
    { 
      id: 5, 
      name: 'Clear transparente', 
      description: 'Stickers en vinil con acabado transparente. Efecto "sin fondo" ideal para vidrios y superficies lisas.', 
      price: '$10',
      image: stickersList[4]
    },
    { 
      id: 6, 
      name: 'Rotulados', 
      description: 'Vinil con colores básicos.', 
      price: '$3',
      image: stickersList[5]
    },
    { 
      id: 7, 
      name: 'Rotulados tipo espejo', 
      description: 'Vinil con acabado brillante tipo espejo. Efecto reflejante y metálico para alto impacto visual.', 
      price: '$3.50',
      image: stickersList[6]
    },
    { 
      id: 8, 
      name: 'Tarjetas de Banco', 
      description: 'Personaliza tus tarjetas de débito/crédito con nuestros stickers en vinil. Protege y decora tus tarjetas.', 
      price: '$2',
      image: stickersList[7]
    },
    { 
      id: 9, 
      name: 'Tarjetas de Banco holográficas', 
      description: 'Personaliza tus tarjetas de débito/crédito con stickers en vinil holográfico. Efecto brillante y único.', 
      price: '$2,5',
      image: stickersList[8]
    },
  ];

  return (
    <CategoriaTemplate
      title="Stickers"
      description="Stickers personalizados en diferentes acabados y materiales para todos los gustos. Desde vinil resistente hasta acabados holográficos."
      products={products}
    />
  );
};

export default Stickers;