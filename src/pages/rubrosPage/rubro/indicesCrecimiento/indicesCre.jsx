
import Indice from './indice/indice';
const Indices = ({ width = "15%", height = "10%" }) => {
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
      <Indice width="50%" height="100%" />
      <Indice width="50%" height="100%" />
      <Indice width="50%" height="100%" />
      <Indice width="50%" height="100%" />
      
    </div>
  );
};

export default Indices;