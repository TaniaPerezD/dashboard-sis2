import React from 'react';
import './rubros.css';
import Heatmap20 from './kpi20heatmap';
import Barras14 from './kpi14Barras';
import Barras11 from './kpi11Barras';
import Barras22 from './kpi22Barras';
import Barras8 from './kpi8Barras';
import Mapa11 from './kpi11Mapa';
import Barras1 from './kpi1BarrasH';
import Cascada2 from './kpi2Cascade';
import Rare4 from './kpi4Rare';
import Barras6 from './kpi6Barras';

const RubrosPage1 = () => {
  return (
    <>
    <header className="header">
        <h1 className="h1">RUBROS EMPRESARIALES DE BOLIVIA</h1>
    </header>
      <div className="page-container">
        <section className="section section-large">
          <header className="header">
            <h2 className="h2">Departamentos</h2>
          </header>

          <div className="grid-container two-columns">
            <div className="grid-item full-height">
              <Mapa11 />
            </div>
            <div className="grid-item stacked">
              <div className="stacked-item">
                <Barras11 />
              </div>
              <div className="stacked-item">
                <Barras8 />
              </div>
            </div>
          </div>
        </section>
        <section className="section section-large">
          <header className="header">
            <h2 className="h2">Tiempo</h2>
          </header>

          <div className="grid-container two-columns">
            <div className="grid-item">
              <Heatmap20 />
            </div>
            <div className="grid-item">
              <Mapa11 />
            </div>
          </div>
          <div className="grid-container two-columns">
            <div className="grid-item">
              <Barras1 />
            </div>
            <div className="grid-item">
              <Cascada2 />
            </div>
          </div>
        </section>
        <section className="section section-large">
          <header className="header">
            <h2 className="h2">Tipo societario</h2>
          </header>
          <div className="grid-container single-column">
            <div className="grid-item">
              <Barras22 />
            </div>
          </div>
          <div className="grid-container two-columns">
            <div className="grid-item">
              <Rare4 />
            </div>
            <div className="grid-item">
              <Barras6 />
            </div>
          </div>
        </section>
        <section className="section section-large">
          <header className="header">
            <h2 className="h2">Premios</h2>
          </header>
          <div className="grid-container two-columns">
            <div className="grid-item">
              <Barras14 />
            </div>
            <div className="grid-item">
              <Barras8 />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}; export default RubrosPage1;