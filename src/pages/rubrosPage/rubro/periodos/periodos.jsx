
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
        alignItems: "center",
        padding: 0,
        boxShadow: "none",
        position: "relative",
        gap: "0.5rem",
        flexDirection: "row",
      }}
    >
      <Periodo width="10%" height="100%"/>
      <Periodo width="10%" height="100%"/>
      <Periodo width="10%" height="100%"/>
      <Periodo width="10%" height="100%"/>
      <Filtro width="10%" height="100%"/>
    </div>
  );
};

export default Periodos;
