import React from 'react';
import './rubros.css';
import Heatmap from './kpi20heatmap';

const RubrosPage1 = () => {
  return (
    <>
      <h1 className="titulo">Análisis por Tamaño Empresarial</h1>
    <div className="contenedor">
      <div className="lado-izquierdo">
      <Heatmap/>
      </div>
      <div className="lado-derecho">
        <Heatmap/>
      </div>
    </div>
    </>
  );
}

export default RubrosPage1;