import React from 'react';
import CategoriaTemplate from './CategoriaTemplate';

const papeleriaImages = import.meta.glob('../../assets/catalogo/papeleria/*.{jpg,jpeg,png,webp}', { eager: true });
const papeleriaList = Object.values(papeleriaImages).map((mod: any) => mod.default);

const Papeleria: React.FC = () => {
  const products = [
    { 
      id: 1, 
      name: 'Mini Poster', 
      description: 'Medidas de 10x15cm. Perfecto para decorar espacios reducidos o como recuerdo.', 
      price: '$2',
      image: papeleriaList[0]
    },
    { 
      id: 2, 
      name: 'Poster', 
      description: 'Medidas de 30x45cm. Ideal para enmarcar y decorar paredes.', 
      price: '$6',
      image: papeleriaList[1]
      
    },
    { 
      id: 3, 
      name: 'Polaroid', 
      description: 'Medidas de 8x10cm. Acabado mate o brillante, estilo fotográfico.', 
      price: '$3.50 (x5 und)',
      image: papeleriaList[2]
    },
    { 
      id: 4, 
      name: 'Photocard', 
      description: 'Medidas de 8.5x5.5cm. Tarjetas coleccionables con acabado profesional.', 
      price: '$3.50 (x6 und)',
      image: papeleriaList[3]
    },
    { 
      id: 5, 
      name: 'Tarjetas de presentación', 
      description: 'Medidas 8x5cm. Perfectas para negocios y emprendedores.', 
      price: '$4 (x30 und)',
      image: papeleriaList[4]
    },
    { 
      id: 6, 
      name: 'Habladores', 
      description: 'Medida de 12x20cm. Ideales para promociones, ofertas o identificadores.', 
      price: '$4.50',
      image: papeleriaList[5]
    },
    { 
      id: 7, 
      name: 'Habladores Creativos', 
      description: 'Hablador con figura sobresaliente. Diseño único y llamativo.', 
      price: '$6',
      image: papeleriaList[6]
    },
    { 
      id: 8, 
      name: 'Chapas', 
      description: 'Medidas de 5.5cm. Chapas metálicas personalizadas con broche.', 
      price: '$3',
      image: papeleriaList[7]
    },
    { 
      id: 9, 
      name: 'Blocks', 
      description: 'Blocks de diferentes tamaños para notas y apuntes. Ideal para oficina o escuela.', 
      image: papeleriaList[8],
      subProducts: [
        { name: 'Mini Block', description: 'Block tamaño mini para notas rápidas.', price: '$2' },
        { name: 'Block cuarto de carta', description: 'Block tamaño cuarto de carta.', price: '$3.50' },
        { name: 'Block media carta', description: 'Block tamaño media carta. Versátil y práctico.', price: '$6' }
      ]
    },
    { 
      id: 10, 
      name: 'Block grapado', 
      description: 'Block grapado en diferentes tamaños. Hojas blancas, ideal para notas rápidas.', 
      image: papeleriaList[9],
      subProducts: [
        { name: 'Block grapado cuarto de carta', description: 'Block grapado tamaño cuarto de carta. Hojas blancas.', price: '$3' },
        { name: 'Block grapado media carta', description: 'Block grapado tamaño media carta. Hojas blancas.', price: '$6' }
      ]
    },
    { 
      id: 11, 
      name: 'Libretas', 
      description: 'Libretas con tapa dura en diferentes tamaños. Acabado profesional.', 
      image: papeleriaList[10],
      subProducts: [
        { name: 'Libretas Tapa dura cuarto de carta', description: 'Libreta tamaño cuarto de carta con tapa dura.', price: '$8' },
        { name: 'Libretas tapa dura media carta', description: 'Libreta tamaño media carta con tapa dura.', price: '$17.50' },
        { name: 'Libretas tapa dura carta', description: 'Libreta tamaño carta con tapa dura y espiral.', price: '$25' }
      ]
    },
    { 
      id: 12, 
      name: 'Cajas', 
      description: 'Cajas para tazas de 11oz. Perfectas para regalos y empaques.', 
      price: '$2',
      image: papeleriaList[11]
    },
    { 
      id: 13, 
      name: 'Carpetas', 
      description: 'Carpetas con diseño personalizado.', 
      price: '$7',
      image: papeleriaList[12]
    },
    { 
      id: 14, 
      name: 'MIni Toppers', 
      description: 'Toppers para decoración de cupcakes y postres.', 
      image: papeleriaList[13]
    },
      { 
      id: 14, 
      name: 'Toppers', 
      description: 'Toppers para decoración de cupcakes y postres.', 
      image: papeleriaList[14],
      subProducts: [
        { name: 'Topper sin relieve', description: 'Topper liso para cupcakes o decoración de mesas.', price: '$4' },
        { name: 'Topper con relieve', description: 'Topper con relieve para cupcakes o decoración de mesas. Efecto 3D llamativo.', price: '$8' }
      ]
    },
    { 
      id: 15, 
      name: 'Lapicero personalizado', 
      description: 'Personalización con sublimación o DTF UV. Ideal para regalos corporativos.', 
      price: '$4',
      image: papeleriaList[15]
    },
    { 
      id: 16, 
      name: 'Lapicero de flor eterna', 
      description: 'Colores a elección, lapiceros recargables con flor preservada.', 
      price: '$3',
      image: papeleriaList[16]
    },
    { 
      id: 17, 
      name: 'Figuras tamaño real', 
      description: 'Figura de preferencia sobre cartón. Perfectas para eventos y fotos.', 
      price: '$45',
      image: papeleriaList[17]
    },
    { 
      id: 18, 
      name: 'Caja de Flips', 
      description: 'Perfecto para detalles unicos con la tematica de tu preferencia.', 
      image: papeleriaList[18],
      subProducts: [
        { name: 'Caja pequeña', description: 'Medidas de 9,5x15cm con diseño incluido.', price: '$8' },
        { name: 'Caja grande', description: 'Medidas de 15x22,5cm con diseño incluido.', price: '$10' }
      ]
    },
  ];

  return (
    <CategoriaTemplate
      title="Papelería Creativa"
      description="Todo lo que necesitas para darle un toque especial a tus proyectos y eventos. Desde libretas hasta figuras tamaño real."
      products={products}
    />
  );
};

export default Papeleria;