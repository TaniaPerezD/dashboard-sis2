import React, { useState } from 'react';
import BotonType from './boton/buutonEnterpriseType';

const BotonEleccion = ({ width = "15%", height = "10%" }) => {
  // Inicializamos el estado con todos los IDs activados
  const [selectedValues, setSelectedValues] = useState([
    "btncheckbox1", 
    "btncheckbox2", 
    "btncheckbox3"
  ]);

  return (
    <div
      className="card"
      style={{
        width: width,
        height: height,
        borderColor: '#E9F5FE',
        backgroundColor: "#E9F5FE",
        display: "flex",
        alignItems: "center",
        padding: 0,
        boxShadow: "none",
        position: "relative",
        gap: "0.5rem",
        flexDirection: "row",
      }}
    >
      <BotonType 
        width="100%" 
        height="100%"
        selectedValues={selectedValues} // Usamos el estado
        onChange={setSelectedValues} // Actualizamos el estado
      />
    </div>
  );
};

export default BotonEleccion;