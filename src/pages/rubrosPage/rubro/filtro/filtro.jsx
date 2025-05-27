import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/montserrat/700.css";

const Filtro = ({ width = "40%", height = "10%", opcionesRubro, handleSeleccion, filtroSeleccionado, data }) => {
  // Encuentra el objeto en 'data' que coincide con el 'filtroSeleccionado'
  const filtroSeleccionadoData = data ? data.find(item => item.name?.toUpperCase() === filtroSeleccionado?.toUpperCase()) : null;

  // Obtiene el 'value' del filtro seleccionado o 0 si no se encuentra
  const cantidadFiltrada = filtroSeleccionadoData ? filtroSeleccionadoData.value : 0;

  // Calcula el total de todos los 'value' en 'data'
  const totalCantidad = data ? data.reduce((sum, item) => sum + (item.value || 0), 0) : 0;

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
          className="btn dropdown-toggle"
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
          {opcionesRubro.map((opcion) => (
            <li key={opcion}>
              <button className="dropdown-item" onClick={() => handleSeleccion(opcion)}>{opcion}</button>
            </li>
          ))}
        </ul>
      </div>

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
      <h5
        style={{
          margin: 0,
          color: "#182335",
          fontWeight: 700,
          fontFamily: "Montserrat, sans-serif",
          fontSize: "1vw",
          whiteSpace: "nowrap"
        }}
      >
        {cantidadFiltrada} total ({totalCantidad} global)
      </h5>
    </div>
  );
};

export default Filtro;