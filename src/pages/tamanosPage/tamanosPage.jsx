import React from 'react';
import './tamano.css';
import Heatmap from './Heatmap';
import BarPlot from './BarPlot';
import Boxplot from './BoxPlot';

const datosBar = [
  { x: "Gran Empresa", total: 100, premiadas: 60},
  { x: "Mediana Empresa", total: 80, premiadas: 20},
  { x: "Pequeña Empresa",total: 150,premiadas: 30}
];

const datosBox = [
  { x: 'S.A.', min: 150, q1: 270, median: 320, q3: 375, max: 420, outliers: [100, 450, 470] },
  { x: 'S.R.L.', min: 100, q1: 230, median: 280, q3: 330, max: 390, outliers: [80, 95, 405] },
  { x: 'Personal', min: 90, q1: 150, median: 190, q3: 250, max: 290, outliers: [60, 305] },
  { x: 'Cooperativa', min: 200, q1: 350, median: 410, q3: 460, max: 520, outliers: [180, 540, 600] }
];

const dataHeat = [
  { rubro: "Comercio", tamano: "Pequeña", edad: 4 },
  { rubro: "Comercio", tamano: "Mediana", edad: 12 },
  { rubro: "Comercio", tamano: "Grande", edad: 26 },
  { rubro: "Industria", tamano: "Pequeña", edad: 7 },
  { rubro: "Industria", tamano: "Mediana", edad: 16 },
  { rubro: "Industria", tamano: "Grande", edad: 28 },
  { rubro: "Agropecuario", tamano: "Pequeña", edad: 5 },
  { rubro: "Agropecuario", tamano: "Mediana", edad: 10 },
  { rubro: "Agropecuario", tamano: "Grande", edad: 24 },
  { rubro: "Tecnología", tamano: "Pequeña", edad: 2 },
  { rubro: "Tecnología", tamano: "Mediana", edad: 9 },
  { rubro: "Tecnología", tamano: "Grande", edad: 22 },
  { rubro: "Servicios", tamano: "Pequeña", edad: 6 },
  { rubro: "Servicios", tamano: "Mediana", edad: 17 },
  { rubro: "Servicios", tamano: "Grande", edad: 29 },
];

const TamanosPage = () => {
  return (
    <>
    <div className="contenedor">
      <div className="lado-izquierdo">
        <div className="componente-superior">
            <Boxplot data={datosBox}/>
        </div>
        <div className="componente-inferior">
            <BarPlot data={datosBar}/>
        </div>
      </div>
      <div className="lado-derecho">
            <h1 className="titulo">Análisis por Tamaño Empresarial</h1><br />
            <Heatmap data={dataHeat} title="Edad Promedio por Rubro y Tamaño"/>
      </div>
    </div>
    </>
  );
}

export default TamanosPage;