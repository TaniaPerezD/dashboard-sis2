import Indice from './indice/indice';

const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('../recusos', false, /\.(png|jpe?g|svg)$/));

const imageMap = {
  'Empresas Diversificadas': images[0],
  'Empresas Cerradas': images[1],
  'Empresas Fusionada': images[2],
  'Empresas Empresas': images[3],
};

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
      <Indice
        width="50%"
        height="100%"
        titulo="Empresas Diversificadas"
        subtitulo="+1,724"
        imageUrl={imageMap['Empresas Diversificadas']}
      />
      <Indice
        width="50%"
        height="100%"
        titulo="Empresas Cerradas"
        subtitulo="+1,724"
        imageUrl={imageMap['Empresas Cerradas']}
      />
      <Indice
        width="50%"
        height="100%"
        titulo="Empresas Fusionada"
        subtitulo="+1,724"
        imageUrl={imageMap['Empresas Fusionada']}
      />
      <Indice
        width="50%"
        height="100%"
        titulo="Empresas Empresas"
        subtitulo="+1,724"
        imageUrl={imageMap['Empresas Empresas']}
      />
    </div>
  );
};

export default Indices;