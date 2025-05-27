import React from 'react';
import './estilos.css';

import Grafico7 from './kpi7';
import Grafico8 from './kpi8';
import Grafico9 from './kpi9';
import Grafico10 from './kpi10';
import Grafico18 from './kpi18';

const DepartamentalPage = () => {
  return (
    <div className="container-fluid" style={{ minHeight: "100vh", backgroundColor: "#E9F5FE" }}>
      <header className="header">
        <h1 className="h1">ANÁLISIS DEPARTAMENTAL / GEOGRÁFICO</h1>
      </header>

      <div className="row">
        <div className="col-md-6 mb-4">
          <Grafico7 />
        </div>
        <div className="col-md-6 mb-4">
          <Grafico8 />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <Grafico9 />
        </div>
        <div className="col-md-6 mb-4">
          <Grafico10 />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 mb-4">
          <Grafico18 />
        </div>
      </div>
    </div>
  );
};

export default DepartamentalPage;
