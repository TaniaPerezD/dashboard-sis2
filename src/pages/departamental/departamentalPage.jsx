import React from 'react';
import './rubros.css';

import Grafico7 from './kpi7';
import Grafico8 from './kpi8';
import Grafico9 from './kpi9';
import Grafico10 from './kpi10';
import Grafico18 from './kpi11';

const DepartamentalPage = () => {
  return (
    <>
      <header className="header">
        <h1 className="h1">ANÁLISIS DEPARTAMENTAL / GEOGRÁFICO</h1>
      </header>
      <div className="componente-columna">
        <div className="contenedor" style={{ height: '140vh' }}> 
          <div className="lado-izquierdo">
            <div className="componente-superior">
              <Grafico7 />
            </div>
            <div className="componente-inferior">
              <Grafico8 />
            </div>
          </div>
          <div className="lado-derecho">
            <div className="componente-superior">
              <Grafico9 />
            </div>
          </div>
        </div>
        <div className="contenedor">
          <div className="componente-inferior">
            <Grafico10 />
          </div>
          <div className="lado-derecho">
            <Grafico18 />
          </div>
        </div>  
      </div>
    </>
  );
};

export default DepartamentalPage;
