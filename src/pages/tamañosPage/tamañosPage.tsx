import React from 'react';
import './tamañosPage.css'; 
import Heatmap from './Heatmap';
import Boxplot from './BoxPlot';
import BarPlot from './Barplot';

const TamañosPage: React.FC = () => {
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