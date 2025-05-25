import React from 'react';
import './tamano.css';
import Heatmap from './Heatmap';
import BarPlot from './BarPlot';
import Boxplot from './BoxPlot';

const TamanosPage = () => {
  return (
    <div className="contenedor">
      <div className="lado-izquierdo">
        <div className="componente-superior">
            <Boxplot/>
        </div>
        <div className="componente-inferior">
            <BarPlot/>
        </div>
      </div>
      <div className="lado-derecho">
        <Heatmap/>
      </div>
    </div>
  );
}

export default TamanosPage;