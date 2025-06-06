
import Periodo from './periodoComp/periodo';
import Filtro from '../filtro/filtro'
const Periodos = ({ width = "15%", height = "10%",opcionesRubro,handleSeleccion ,filtroSeleccionado,datafiltro}) => {
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
        margin: "0px 0px"
      }}
    >
      <Periodo width="15%" height="100%" titulo='GRANDES EMPRESAS.' subtitulo='11.5% (149)'/>
      <Periodo width="15%" height="100%"titulo='MEDIANAS EMPRESAS.' subtitulo='32.7% (422)'/>
      <Periodo width="15%" height="100%"titulo='EMPRESAS FAMILIARES.' subtitulo='55.8% (759)'/>
      
      <Filtro width="10%" height="100%" opcionesRubro={opcionesRubro} handleSeleccion={handleSeleccion} filtroSeleccionado={filtroSeleccionado} data={datafiltro}/>
    </div>
  );
};

export default Periodos;
