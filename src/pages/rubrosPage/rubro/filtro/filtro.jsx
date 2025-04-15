import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from 'react';
import "@fontsource/montserrat/700.css";

const Filtro = ({ width = "40%", height = "10%" }) => {
  const [filtroSeleccionado, setFiltroSeleccionado] = useState("Filtro");

  const handleSeleccion = (opcion) => {
    setFiltroSeleccionado(opcion);
  };

  return (
    <div
      className="card"
      style={{
        width: width,
        height: height,
        borderColor: '#E9F5FE',
        backgroundColor: "#E9F5FE",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "1rem",
        flexDirection: "row",
      }}
    >
      {/* Botones con estilo personalizado */}
      <div className="btn-group" role="group">
          <button
            type="button"
            className="btn dropdown-toggle "
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              backgroundColor: "#182335",
              color: "#ffffff",
              padding: "0.5rem 1.5rem",
              fontSize: "0.9rem",
              borderRadius: "8px",
              fontWeight: 700,
              fontFamily: "Montserrat, sans-serif",
              width: "200px"
            }}
          >
            RUBRO
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={() => handleSeleccion("Opción A")}>Opción A</button></li>
            <li><button className="dropdown-item" onClick={() => handleSeleccion("Opción B")}>Opción B</button></li>
          </ul>
        </div>

      {/* Texto a la derecha */}
      <h5
        style={{
          margin: 0,
          color: "#182335",
          fontWeight: 700,
          fontFamily: "Montserrat, sans-serif",
          fontSize: "2vw",
          whiteSpace: "nowrap"
        }}
      >
        {filtroSeleccionado}
      </h5>
      
    </div>
  );
};

export default Filtro;
