import Puntos from './graficq/puntos';
import Pastel from './graficq/pastel';

const Grafico1 = ({ width = "100%", height = "60%", data, dataPastel }) => {
  return (
    <div
      className="card"
      style={{
        width,
        height,
        borderColor: '#E9F5FE',
        backgroundColor: "#E9F5FE",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        boxShadow: "none",
        flexDirection: "row",
        gap: "0.5rem",
      }}
    >
      <Puntos width="75%" height="100%" data={data} />
      <Pastel width="25%" height="100%" data={dataPastel} />
    </div>
  );
};

export default Grafico1;
