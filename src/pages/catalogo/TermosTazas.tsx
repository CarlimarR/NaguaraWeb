import React from 'react';
import CategoriaTemplate from './CategoriaTemplate';

const TermosTazas: React.FC = () => {
  const products = [
    { id: 1, name: 'Termo Skinny', description: 'Termo delgado ideal para bebidas frías y calientes. Capacidad 500ml.', price: '$15' },
    { id: 2, name: 'Termo Sport', description: 'Termo deportivo con pico fácil de abrir. Capacidad 750ml.', price: '$18' },
    { id: 3, name: 'Termo Doble Tapa', description: 'Termo con dos tapas, mantiene temperatura por horas. Capacidad 1L.', price: '$22' },
    { id: 4, name: 'Taza 11 oz', description: 'Taza clásica de cerámica con sublimación. Ideal para café o té.', price: '$10' },
    { id: 5, name: 'Taza 6 oz', description: 'Taza pequeña perfecta para espresso o café corto.', price: '$8' },
    { id: 6, name: 'Taza Mágica', description: 'Taza que cambia de color con el calor. Mágica y divertida.', price: '$14' },
    { id: 7, name: 'Tazas Apilables 11 oz', description: 'Set de tazas apilables para ahorrar espacio.', price: '$35 (set x4)' },
    { id: 8, name: 'Tazas Apilables 6 oz', description: 'Set pequeño de tazas apilables, perfecto para degustación.', price: '$28 (set x4)' },
  ];

  return (
    <CategoriaTemplate
      title="Termos y Tazas"
      description="Descubre nuestra colección de termos y tazas personalizadas. Perfectos para regalar o para tu negocio."
      products={products}
    />
  );
};

export default TermosTazas;