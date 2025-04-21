import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Indices from './indicesCrecimiento/indicesCre';
import Grafico1 from './grafic/graficos1';
import Estadistic from './estadistEmpresas/estadistic';

const Rubro = ({ width = "15%", height = "10%" }) => {
  return (
    <div
      className="card"
      style={{
        width: width,
        height: height,
        borderColor: '#E9F5FE',
        backgroundColor: "#E9F5FE",
        display: "flex",
        flexDirection: "column",  // Apila los elementos verticalmente
        justifyContent: "space-between",
        alignItems: "stretch",   // Ocupa todo el ancho disponible
        padding: "0rem",       // Añadido padding mínimo
        boxShadow: "none",
        position: "relative",
        gap: "0.5rem",           // Espacio entre elementos
      }}
    >
      
     
      <Indices  width="100%" height="10%" />
      <Grafico1  width="100%" height="60%" />
      <Estadistic  width="100%" height="30%" />
      
    </div>
  );
};

export default Rubro;