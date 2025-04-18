


import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  ReferenceLine,
  CartesianGrid 
} from 'recharts';

const data = [
  { mes: 'Ene', usuarios: 100 },
  { mes: 'Feb', usuarios: 200 },
  { mes: 'Mar', usuarios: 150 },
  { mes: 'Mar', usuarios: 90 },
  { mes: 'Mar', usuarios: 80 },
  { mes: 'Mar', usuarios: 70 },
  { mes: 'Mar', usuarios: 20 },

];

const Puntos = ({ width = "100%", height = "100%" }) => {
  return (
    <div
      className="card"
      style={{
        width: width,
        height: height,
        backgroundColor: "#ffffff",
        padding: "0px",
        boxShadow: "none",
      }}
    >
      <h5 
        style={{ 
          textAlign: "left", 
          fontFamily: "'Montserrat', sans-serif", 
          fontWeight: 700,
          margin: "10px 20px"
        }}
      >
        Nuevas empresas por Rubro
      </h5>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={data}
          margin={{ top: 5, right: 20, bottom: 25, left: 30 }}
        >
          {/* Eje X sin línea vertical */}
          <XAxis 
            dataKey="mes" 
            axisLine={false}  // Oculta la línea del eje
            tickLine={false} 
            tick={{ fontSize: 10 }}  // Oculta las marcas de ticks
            label={{ 
              value: "Meses", 
              position: "bottom", 
              offset: 0,
              style: { fontFamily: "'Montserrat', sans-serif",
                fontSize: 10 }
            }} 
          />
          
          {/* Eje Y con líneas horizontales */}
          <YAxis 
            axisLine={false}  // Oculta la línea del eje
            tickLine={false} 
            tick={{ fontSize: 10 }}  // Oculta las marcas de ticks
            label={{ 
              value: "N° de Usuarios", 
              angle: -90,
              position: "insideLeft",
              offset: 1,
              style: { 
                fontFamily: "'Montserrat', sans-serif",
                textAnchor: "middle",
                fontSize: 10
              }
            }} 
          />
          
          {/* Líneas horizontales de referencia */}
          <CartesianGrid 
            horizontal={true}  // Muestra solo líneas horizontales
            vertical={false}   // Oculta líneas verticales
            stroke="#eee"      // Color de las líneas
            strokeWidth={2.5}   // Estilo de línea punteada
          />
          
          {/* Líneas de referencia específicas (opcional) */}
          <ReferenceLine y={100} stroke="#f5f5f5" />
          <ReferenceLine y={150} stroke="#f5f5f5" />
          <ReferenceLine y={200} stroke="#f5f5f5" />
          
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="usuarios" 
            stroke="#182335" 
            strokeWidth={2} 
            dot={{ r: 4 }}  // Tamaño de los puntos
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Puntos;