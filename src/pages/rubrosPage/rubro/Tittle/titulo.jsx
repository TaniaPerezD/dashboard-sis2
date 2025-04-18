
import BotonSeccion from '../../botonesSeccion/botonesSeccion';
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
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0rem",
        boxShadow: "none",
        position: "relative",
      }}
    >
      <h5
        style={{
          position: "absolute",
          top: "50%",
          left: "0.75rem", // Usa el mismo valor que el padding del contenedor
          transform: "translateY(-50%)",
          margin: 0,
          color: "#182335",
          fontWeight: 700,
          fontFamily: "Montserrat, sans-serif",
          fontSize: "3vw",
          lineHeight: "100%",
          textAlign: "left", // Alinea el texto a la izquierda
        }}
      >
        RUBROS
      </h5>
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "0.75rem", 
          transform: "translateY(-50%)",
          color: "#182335",
        }}
      >
        <BotonSeccion />
      </div>
      
    
      
    </div>
  );
};

export default Titulo;
