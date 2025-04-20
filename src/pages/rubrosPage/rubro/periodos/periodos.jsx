
import Periodo from './periodoComp/periodo';
import Filtro from '../filtro/filtro'
const Periodos = ({ width = "15%", height = "10%" }) => {
  return (
    <div
      className="card"
      style={{
        width: width,
        height: height,
        borderColor: '#E9F5FE',
        backgroundColor: "#E9F5FE",
        display: "flex",
        justifyContent: "left",
        gap: "3.5rem",
        boxShadow: "none",
        flexDirection: "row",
      }}
    >
      <Periodo width="10%" height="100%" titulo='GRANDES E.' subtitulo='11.5% (149)'/>
      <Periodo width="10%" height="100%"titulo='MEDIANAS E.' subtitulo='32.7% (422)'/>
      <Periodo width="10%" height="100%"titulo='PEQUEÑAS E.' subtitulo='55.8% (1346)'/>
      
      <Filtro width="10%" height="100%"/>
    </div>
  );
};

export default Periodos;
