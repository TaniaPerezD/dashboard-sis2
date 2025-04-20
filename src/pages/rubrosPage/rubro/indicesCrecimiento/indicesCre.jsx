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
        subtitulo="17"
        imageUrl={imageMap['Empresas Cerradas']}
      />
      <Indice
        width="50%"
        height="100%"
        titulo="Empresas Cerradas"
        subtitulo="22"
        imageUrl={imageMap['Empresas Fusionada']}
      />
      <Indice
        width="50%"
        height="100%"
        titulo="Empresas Fusionadas"
        subtitulo="13"
        imageUrl={imageMap['Empresas Empresas']}
      />
      <Indice
        width="50%"
        height="100%"
        titulo="Empresas Creadas"
        subtitulo="5"
        imageUrl={imageMap['Empresas Diversificadas']}
      />
      
      
      
    </div>
  );
};

export default Indices;