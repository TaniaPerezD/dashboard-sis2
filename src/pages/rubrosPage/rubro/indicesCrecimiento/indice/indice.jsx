import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "@fontsource/montserrat/400.css";
import "@fontsource/roboto/400.css";

const Indice = ({
  width = "15%",
  height = "10%",
  titulo = "Segundo Periodo",
  subtitulo = "1999-2000",
  imageUrl // Pasar la URL de la imagen como prop
}) => {
  return (
    <div
      className="card"
      style={{
        width,
        height,
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 10px",
        boxShadow: "none",
        flexDirection: "row",
        borderRadius: "10px",
        textAlign: "center",
        borderColor: "#1A1A34"
      }}
    >
      <div style={{ textAlign: "left" }}>
        <h5 style={{ fontWeight: 400, margin: 0, color: "#1A1A34",
          fontSize: "0.60rem", fontFamily: "Roboto, sans-serif" }}>{titulo}</h5>
        <small style={{ fontWeight: 400, color: "#1A1A34",
          fontSize: "0.8rem", fontFamily: "Montserrat, sans-serif" }}>{subtitulo}</small>
      </div>
      <img 
        src={imageUrl} 
        alt="Ícono" 
        style={{ width: "40px", height: "40px", borderRadius: "50%" }} 
      />
    </div>
  );
};

export default Indice;
