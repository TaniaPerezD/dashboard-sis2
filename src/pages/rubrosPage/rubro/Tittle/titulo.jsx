import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "@fontsource/montserrat/700.css";

const Titulo = ({ width = "15%", height = "10%" }) => {
  return (
    <div
      className="card"
      style={{
        width: width,
        height: height,
        borderColor: '#E9F5FE',
        backgroundColor: "#E9F5FE",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        boxShadow: "none",
        position: "relative",
      }}
    >
      <h5
        style={{
          position: "absolute",  // Coloca el texto en el centro
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#182335",
          fontWeight: 700,
          fontFamily: "Montserrat, sans-serif",
          fontSize: "3vw",  // Escala dinámicamente el tamaño de la fuente
          lineHeight: "100%",  // Ajusta el alto del texto al alto de la card
          textAlign: "center",
        }}
      >
        RUBROS
      </h5>
    </div>
  );
};

export default Titulo;
