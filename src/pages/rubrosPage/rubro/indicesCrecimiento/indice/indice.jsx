import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "@fontsource/montserrat/400.css";
import "@fontsource/roboto/400.css";

const Indice = ({
  width = "15%",
  height = "10%",
  titulo = "Segundo Periodo",
  subtitulo = "1999-2000",
  imageUrl 
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
        borderColor: "#1A1A34",
        position: 'relative' // Añadido para mejor control
      }}
    >
      {/* Contenedor del texto - centrado absoluto */}
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        width: 'calc(100% - 60px)' // Restamos el espacio de la imagen
      }}>
        <h5 style={{ 
          fontWeight: 700, 
          margin: 0, 
          color: "#1A1A34",
          fontSize: "0.8rem", 
          fontFamily: "Roboto, sans-serif" 
        }}>{titulo}</h5>
        <small style={{ 
          fontWeight: 400, 
          color: "#1A1A34",
          fontSize: "1rem", 
          fontFamily: "Montserrat, sans-serif" 
        }}>{subtitulo}</small>
      </div>
      
      {/* Imagen alineada a la derecha */}
      <div style={{ marginLeft: 'auto' }}>
        <img 
          src={imageUrl} 
          alt="Ícono" 
          style={{ 
            width: "40px", 
            height: "40px", 
            borderRadius: "50%",
            marginLeft: 'auto' // Empuja la imagen a la derecha
          }} 
        />
      </div>
    </div>
  );
};

export default Indice;