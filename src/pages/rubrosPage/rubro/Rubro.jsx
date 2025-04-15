import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Titulo from './Tittle/titulo';

import Periodos from './periodos/periodos';
import Indices from './indicesCrecimiento/indicesCre';
import Grafico1 from './grafic/graficos1';
import Estadistic from './estadistEmpresas/estadistic';
import BotonEleccion from './botonEleccion/botonEleccion';
const Rubro = () => {
  return (
    <div className="card" style={{
        width: "100%",             
        height: "100%", 
        borderColor: '#E9F5FE',          
        backgroundColor: "#E9F5FE",
        
        gap: "0.4rem", //
      }}> 
      
      <Titulo width="16%" height="8%" />
      <BotonEleccion  width="100%" height="7%" />
      <Periodos  width="100%" height="9%" />
      <Indices  width="100%" height="10%" />
      <Grafico1  width="100%" height="38%" />
      <Estadistic  width="100%" height="28%" />
      
    </div>
  );
};

export default Rubro;