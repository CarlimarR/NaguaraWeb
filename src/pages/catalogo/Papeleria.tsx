import React from 'react';
import CategoriaTemplate from './CategoriaTemplate';

const Papeleria: React.FC = () => {
  const products = [
    { id: 1, name: 'Mini Posters', description: 'Posters tamaño pequeño ideales para decorar espacios reducidos.', price: '$5' },
    { id: 2, name: 'Polaroids', description: 'Fotos estilo polaroid con acabado mate o brillante.', price: '$3 (c/u)' },
    { id: 3, name: 'Poster', description: 'Posters tamaño estándar para enmarcar.', price: '$10' },
    { id: 4, name: 'Photocards', description: 'Tarjetas coleccionables con acabado profesional.', price: '$2 (c/u)' },
    { id: 5, name: 'Chapas', description: 'Chapas metálicas personalizadas con pin.', price: '$2' },
    { id: 6, name: 'Libretas Tapa Dura Carta', description: 'Libretas tamaño carta con tapa dura y espiral.', price: '$12' },
    { id: 7, name: 'Libretas Tapa Dura Media Carta', description: 'Libretas tamaño media carta con tapa dura.', price: '$9' },
    { id: 8, name: 'Block Tapa Blanda', description: 'Blocks tamaño carta con tapa blanda.', price: '$6' },
    { id: 9, name: 'Block Tapa Blanda Cuarto de Carta', description: 'Blocks tamaño cuarto de carta.', price: '$4' },
    { id: 10, name: 'Block Tapa Blanda Media Carta', description: 'Blocks tamaño media carta.', price: '$5' },
    { id: 11, name: 'Libreta Grapada Hoja Blanca', description: 'Libretas pequeñas grapadas, ideales para notas.', price: '$3' },
    { id: 12, name: 'Carpetas', description: 'Carpetas de cartulina o plástico con diseño personalizado.', price: '$7' },
    { id: 13, name: 'Cajas', description: 'Cajas de cartón para regalos o empaques.', price: '$8' },
    { id: 14, name: 'Figuras en Cartón', description: 'Figuras decorativas de cartón troquelado.', price: '$10' },
    { id: 15, name: 'Tarjetas', description: 'Tarjetas de felicitación o invitaciones personalizadas.', price: '$2 (c/u)' },
    { id: 16, name: 'Toppers', description: 'Toppers para cupcakes o decoración de mesas.', price: '$1.5 (c/u)' },
    { id: 17, name: 'Brazalete de Eventos', description: 'Pulseras de papel para identificación en eventos.', price: '$1 (c/u)' },
    { id: 18, name: 'Mini Toppers', description: 'Toppers pequeños para decoración mini.', price: '$1' },
    { id: 19, name: 'Flores Eternas', description: 'Flores preservadas en resina o papel.', price: '$12' },
    { id: 20, name: 'Lapicero de Flor Eterna', description: 'Lapiceros decorativos con flor preservada.', price: '$8' },
  ];

  return (
    <CategoriaTemplate
      title="Papelería Creativa"
      description="Todo lo que necesitas para darle un toque especial a tus proyectos y eventos."
      products={products}
    />
  );
};

export default Papeleria;