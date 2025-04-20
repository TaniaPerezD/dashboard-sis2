import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "@fontsource/montserrat/400.css";
import "@fontsource/roboto/400.css";
const Periodo = ({
  width = "15%",
  height = "10%",
  titulo = "Segundo Periodo",
  subtitulo = "1999-2000"
}) => {
  return (
    <div
      className="card"
      style={{
        width,
        height,
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        boxShadow: "none",
        flexDirection: "column",
        borderRadius: "10px",
        textAlign: "center",
        borderColor: "#1A1A34"
      }}
    >
      <h5 style={{ fontWeight: 700, margin: 0,color: "#1A1A34",
        fontSize: "0.80rem", fontFamily: "Roboto, sans-serif",}}>{titulo}</h5>
      <small style={{ fontWeight: 400, color: "#1A1A34",
        fontSize: "0.8rem", fontFamily: "Montserrat, sans-serif"}}>{subtitulo}</small>
    </div>
  );
};

export default Periodo;
