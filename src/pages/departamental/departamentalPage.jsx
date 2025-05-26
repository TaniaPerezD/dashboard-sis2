import React from 'react';
import './estilos.css';

import Grafico7 from './kpi7';
import Grafico8 from './kpi8';
import Grafico9 from './kpi9';
import Grafico10 from './kpi10';
import Grafico18 from './kpi18';
import Layout from '../../components/layout/layout';

const DepartamentalPage = () => {
  return (
    <Layout>
      <header className="header">
        <h1 className="h1">ANÁLISIS DEPARTAMENTAL / GEOGRÁFICO</h1>
      </header>

      <div className="fila fila-doble">
        <div className="plot-card">
          <Grafico7 />
        </div>
        <div className="plot-card">
          <Grafico8 />
        </div>
      </div>

      <div className="fila fila-centrada">
        <div className="plot-card grafico9">
          <Grafico9 />
        </div>
      </div>

      <div className="fila fila-doble">
        <div className="plot-card">
          <Grafico10 />
        </div>
        <div className="plot-card">
          <Grafico18 />
        </div>
      </div>
    </Layout>
  );
};

export default DepartamentalPage;
