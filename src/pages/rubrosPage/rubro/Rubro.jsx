// src/pages/rubro/Rubro.jsx

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Indices from './indicesCrecimiento/indicesCre';
import Grafico1 from './grafic/graficos1';
import Estadistic from './estadistEmpresas/estadistic';
import Encabezado from '../encabezado/encabezado'; // ¡Importa Encabezado aquí!

// Removimos los valores por defecto de width/height de Rubro,
// ya que siempre queremos que ocupe el 100% del espacio del Route.
const Rubro = ({ data, datadep, dataPastel, encabezadoProps }) => {
  return (
    <div
      className="card"
      style={{
        width: "100%", // Ahora Rubro ocupa el 100% del ancho de su contenedor (el Route)
        height: "100%", // Ahora Rubro ocupa el 100% de la altura de su contenedor (el Route)
        borderColor: '#E9F5FE',
        backgroundColor: "#E9F5FE",
        display: "flex",
        flexDirection: "column",
        // No usar justifyContent: "space-between" aquí, ya que el Encabezado tiene su propio height
        alignItems: "stretch",
        padding: "0rem",
        boxShadow: "none",
        position: "relative",
        gap: "0.5rem", // Espacio entre el encabezado y el contenedor de contenido
      }}
    >
      {/* Renderiza el Encabezado al inicio del componente Rubro */}
      {encabezadoProps && ( // Asegúrate de que las props existan antes de renderizar
        <Encabezado {...encabezadoProps} />
      )}

      {/* Contenedor para el resto del contenido de Rubro, ajustando su altura */}
      <div style={{
        // Si el encabezado toma 20vh, el resto del contenido toma calc(100% - 20vh)
        height: encabezadoProps ? "calc(100% - 20vh)" : "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem", // Mantén el gap para los elementos internos de este div
      }}>
        {/* Las alturas de estos componentes serán relativas a este div contenedor (80vh) */}
        <Indices width="100%" height="10%" />
        <Grafico1 width="100%" height="60%" data={data} dataPastel={dataPastel} />
        <Estadistic width="100%" height="30%" data={datadep} />
      </div>
    </div>
  );
};

export default Rubro;