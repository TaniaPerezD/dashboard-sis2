
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
        justifyContent: "center",
        gap: "4rem",
        boxShadow: "none",
        flexDirection: "row",
      }}
    >
      <Periodo width="10%" height="100%" titulo='GRANDES E.' subtitulo='10%'/>
      <Periodo width="10%" height="100%"titulo='MEDIANAS E.' subtitulo='30%'/>
      <Periodo width="10%" height="100%"titulo='PEQUEÑAS E.' subtitulo='60%'/>
      
      <Filtro width="10%" height="100%"/>
    </div>
  );
};

export default Periodos;
