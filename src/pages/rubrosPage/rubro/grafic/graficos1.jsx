import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "@fontsource/montserrat/700.css";
import Puntos from './graficq/puntos';
import Pastel from './graficq/pastel';
const Grafico1 = ({ width = "15%", height = "10%" }) => {
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
        flexDirection: "row",
        gap: "0.5rem",
      }}
    >
    
      <Puntos  width="75%" height="100%" />
      <Pastel  width="25%" height="100%" />
    </div>
  );
};

export default Grafico1;
