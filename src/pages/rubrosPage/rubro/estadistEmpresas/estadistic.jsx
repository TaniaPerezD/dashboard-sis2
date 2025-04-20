
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Santa Cruz', ventas: 400 },
  { name: 'Chuquisaca', ventas: 300 },
  { name: 'Potosi', ventas: 600 },
  { name: 'Tarija', ventas: 600 },
  { name: 'La Paz', ventas: 600 },
  { name: 'Cochabamba', ventas: 600 },
  { name: 'Oruro', ventas: 600 },
  { name: 'Beni', ventas: 600 },
  { name: 'Pando', ventas: 600 },

];

const Estadistic = ({ width = "100%", height = "300px" }) => {
  return (
    <div
      className="card"
      style={{
        width: width,
        height: height,
        backgroundColor: "#ffffff",
        padding: "10px",
        boxShadow: "none",
        display: "flex",
        flexDirection: "column"
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
        Departamentos
      </h5>

      <div style={{ flex: 1 }}>
        <ResponsiveContainer width="100%" height="95%">
          <BarChart data={data}>
            {/* Eje X sin líneas */}
            <XAxis 
              dataKey="name" 
              axisLine={false}  // Elimina la línea del eje
              tickLine={false}  // Elimina las marcas de los ticks
              tick={{ fontSize: 12 }}
            />
            
            {/* Eje Y sin líneas */}
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            
            <Tooltip 
              contentStyle={{
                borderRadius: '0px',
                fontFamily: "'Montserrat', sans-serif"
              }}
              // Personaliza el tooltip para no mostrar "ventas:"
              formatter={(value) => [value, '']}
              labelFormatter={(label) => label}
            />
            
            {/* Barra sin leyenda */}
            <Bar 
              dataKey="ventas" 
              fill="#EEAF9D" 
              barSize={25}
              radius={[10, 10, 10, 10]}
              name=""  // Cadena vacía para eliminar la leyenda
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Estadistic;