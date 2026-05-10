import React from 'react';
import CategoriaTemplate from './CategoriaTemplate';

const GranFormato: React.FC = () => {
  const products = [
    { id: 1, name: 'Sulfato', description: 'Impresión en papel sulfato para planos o posters.', price: '$15 (m2)' },
    { id: 2, name: 'Pendón Pequeño', description: 'Pendones tamaño pequeño ideales para eventos.', price: '$20' },
    { id: 3, name: 'Pendón Regular', description: 'Pendones tamaño estándar para publicidad.', price: '$35' },
    { id: 4, name: 'Armado de Pendón', description: 'Servicio de armado con varillas y bases.', price: '+$10' },
    { id: 5, name: 'Impresión de Banner', description: 'Banners para exteriores, resistentes al sol.', price: '$40 (m2)' },
    { id: 6, name: 'Logos en PVC', description: 'Letreros y logos en PVC de 3mm.', price: '$25 (30cm)' },
    { id: 7, name: 'Logos en Acrílicos', description: 'Letreros en acrílico con acabado profesional.', price: '$45 (30cm)' },
    { id: 8, name: 'Impresión en Vinil', description: 'Vinil adhesivo para paredes o vidrios.', price: '$12 (m2)' },
    { id: 9, name: 'Impresión Sublimación', description: 'Sublimación en tela gran formato.', price: '$25 (m2)' },
  ];

  return (
    <CategoriaTemplate
      title="Gran Formato"
      description="Impresiones de gran tamaño para publicidad, eventos y decoración."
      products={products}
    />
  );
};

export default GranFormato;