import React from 'react';
import CategoriaTemplate from './CategoriaTemplate';

const termosTazasImages = import.meta.glob('../../assets/catalogo/termos-y-tazas/*.{jpg,jpeg,png,webp}', { eager: true });
const termosTazasList = Object.values(termosTazasImages).map((mod: any) => mod.default);

const TermosTazas: React.FC = () => {
  const products = [
    { 
      id: 1, 
      name: 'Taza 7 oz', 
      description: 'Tamaño pequeño perfecto para espresso o café corto. Técnica aplicada con DTF UV.', 
      price: '$8',
      image: termosTazasList[0]
    },
    { 
      id: 2, 
      name: 'Taza 11 oz', 
      description: 'Taza clásica de cerámica. Técnicas aplicadas con sublimación o DTF UV.', 
      price: '$7',
      image: termosTazasList[1]
    },
    { 
      id: 3, 
      name: 'Taza sublimación + DTF', 
      description: 'Combinación de ambas técnicas para un acabado único y de alto impacto.', 
      price: '$9',
      image: termosTazasList[2]
    },
    { 
      id: 4, 
      name: 'Taza tipo espejo', 
      description: 'Acabado tipo espejo. Técnicas aplicadas con sublimación o DTF UV.', 
      price: '$12',
      image: termosTazasList[3]
    },
    { 
      id: 5, 
      name: 'Taza con base de corcho', 
      description: 'Base de corcho antideslizante. Técnicas aplicadas con sublimación o DTF UV.', 
      price: '$11',
      image: termosTazasList[4]
    },
    { 
      id: 6, 
      name: 'Taza mágica', 
      description: 'Taza que cambia de color con el calor. Técnica aplicada con sublimación.', 
      price: '$10',
      image: termosTazasList[5]
    },
    { 
      id: 7, 
      name: 'Taza mágica + DTF', 
      description: 'Combinación de taza mágica con DTF UV para alto impacto visual.', 
      price: '$15',
      image: termosTazasList[6]
    },
    { 
      id: 8, 
      name: 'Tazas Apilables 6 oz', 
      description: 'Set de tazas pequeñas apilables, perfecto para degustación. Técnica aplicada con DTF UV.', 
      price: '$18',
      image: termosTazasList[7]
    },
    { 
      id: 9, 
      name: 'Tazas Apilables 11 oz', 
      description: 'Set de tazas apilables para ahorrar espacio. Técnicas aplicadas con sublimación o DTF UV.', 
      price: '$25',
      image: termosTazasList[8]
    },
    { 
      id: 10, 
      name: 'Termo Sport', 
      description: 'Termo deportivo con pico fácil de abrir. Técnicas aplicadas con sublimación o DTF UV.', 
      price: '$16',
      image: termosTazasList[9]
    },
    { 
      id: 11, 
      name: 'Termo Doble Tapa', 
      description: 'Termo con dos tapas, mantiene temperatura por horas. Técnicas aplicadas con sublimación o DTF UV.', 
      price: '$15',
      image: termosTazasList[10]
    },
    { 
      id: 12, 
      name: 'Vaso Skinny', 
      description: 'Vaso delgado ideal para bebidas frías y calientes. Técnicas aplicadas con sublimación o DTF UV.', 
      price: '$25',
      image: termosTazasList[11]
    },
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