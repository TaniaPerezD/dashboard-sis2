
import Titulo from '../rubro/Tittle/titulo';
import Periodos from '../rubro/periodos/periodos';
import BotonEleccion from '../rubro/botonEleccion/botonEleccion';
import React from 'react';

const Encabezado = ({ width = "100%", height = "100",selectedValues, handleValueChange,opcionesRubro,filtroSeleccionado,handleSeleccion,datafiltro}) => {
  
  return (
    <div
      className="card"
      style={{
        width: width,
        height: height,
        borderColor: '#E9F5FE',
        backgroundColor: "#E9F5FE",
        display: "flex",
        flexDirection: "column", 
        justifyContent: "space-between",
        alignItems: "stretch",   
        padding: "0rem",       
        boxShadow: "none",
        position: "relative",
        gap: "0.5rem",           
      }}
    >
      <Titulo width="100%" height="30%" />
      <BotonEleccion width="100%" height="20%" selectedValues={selectedValues} handleValueChange={handleValueChange} />
      <Periodos width="100%" height="50%" opcionesRubro={opcionesRubro} handleSeleccion={handleSeleccion} filtroSeleccionado={filtroSeleccionado} datafiltro={datafiltro}/>
    </div>
  );
};

export default Encabezado;