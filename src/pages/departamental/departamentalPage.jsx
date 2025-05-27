import React from 'react';
import './estilos.css';

import Grafico7 from './kpi7';
import Grafico8 from './kpi8';
import Grafico9 from './kpi9';
import Grafico10 from './kpi10';
import Grafico18 from './kpi18';

const DepartamentalPage = () => {
  return (
    <div className="container-fluid" style={{ height: "100vh", width: "100%", borderColor: '#E9F5FE', backgroundColor: "#E9F5FE" }}>
      <div className="row">
        <div className="col-md-6">
          <Grafico7 />
        </div>
        <div className="col-md-6">
          <Grafico8 />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Grafico9 />
        </div>
        <div className="col-md-6">
          <Grafico10 />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Grafico18 />
        </div>
      </div>
    </div>
  );
};

export default DepartamentalPage;
