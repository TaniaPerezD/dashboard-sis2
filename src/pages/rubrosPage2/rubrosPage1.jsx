import React from 'react';
import './rubros.css';
import Heatmap20 from './kpi20heatmap';

const RubrosPage1 = () => {
  return (
    <>
    <header className="header">
                <h1 className="h1">RADIOGRAFIA EMPRESARIAL DE BOLIVIA</h1>
            </header>
    <div className="contenedor">
      <div className="lado-izquierdo">
        <Heatmap20/>
      </div>
      <div className="lado-derecho">
        <Heatmap20/>
      </div>
    </div>
    </>
  );
}

export default RubrosPage1;