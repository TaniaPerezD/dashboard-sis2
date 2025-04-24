


import Puntos from './graficq/puntos';
import Pastel from './graficq/pastel';
const Grafico1 = ({ width = "15%", height = "10%" , data,dataPastel}) => {
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
    
      <Puntos  width="75.35%" height="100%" data={data}/>
      <Pastel  width="24.65%" height="100%" data={dataPastel}/>
    </div>
  );
};

export default Grafico1;
