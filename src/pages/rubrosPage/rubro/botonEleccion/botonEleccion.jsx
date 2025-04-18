


import BotonType from './boton/buutonEnterpriseType';
const BotonEleccion = ({ width = "15%", height = "10%" }) => {
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
        <BotonType width="100%" height="100%"/>
    </div>
  );
};

export default BotonEleccion;
