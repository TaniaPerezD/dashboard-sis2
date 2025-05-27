import Indice from './indice/indice';

const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('../recusos', false, /\.(png|jpe?g|svg)$/));

const imageMap = {
  'Empresas Diversificadas': images[0],
  'Empresas Cerradas': images[1],
  'Empresas Fusionadas': images[2],
  'Empresas Creadas': images[3],
};

const Indices = ({ width = "100%", height = "10%" }) => {
  const data = [
    { titulo: 'Empresas Diversificadas', subtitulo: '17' },
    { titulo: 'Empresas Cerradas', subtitulo: '22' },
    { titulo: 'Empresas Fusionadas', subtitulo: '13' },
    { titulo: 'Empresas Creadas', subtitulo: '5' },
  ];

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
      {data.map(({ titulo, subtitulo }) => (
        <Indice
          key={titulo}
          width="25%"
          height="100%"
          titulo={titulo}
          subtitulo={subtitulo}
          imageUrl={imageMap[titulo]}
        />
      ))}
    </div>
  );
};

export default Indices;
