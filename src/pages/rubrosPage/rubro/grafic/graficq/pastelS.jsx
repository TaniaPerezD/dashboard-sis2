
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'React (70%)', value: 70 }, 
  { name: 'Vue (20%)', value: 20 },
  { name: 'Angular (10%)', value: 10 },
  { name: 'la (10%)', value: 10 },
];

const COLORS = ['#182335', '#E15546', '#EEAF9D', '#EAE4CC'];

const PastelS = ({ width = "100%", height = "100%" }) => {
  return (
    <div
      className="card"
      style={{
        width: width,
        height: height,
        backgroundColor: "#ffffff",
        padding: "10px",
        boxShadow: "none",
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <h5 
        style={{ 
          textAlign: "left", 
          fontFamily: "'Montserrat', sans-serif", 
          fontWeight: 700,
          margin: "0 0 10px 10px",
          fontSize: "14px",
          color: '#2c3e50'
        }}
      >
        Nuevas empresas por Rubro
      </h5>

      <div style={{ flex: 1 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="35%"
              outerRadius={60}
              innerRadius={30}
              fill="#8884d8"
              dataKey="value"
              label={false} // Desactivar etiquetas en la torta
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                  stroke="#fff"
                  strokeWidth={1}
                />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value, name) => {
                // Extraer el nombre sin el porcentaje para el tooltip
                const cleanName = name.replace(/\(\d+%\)$/, '').trim();
                return [`${value} empresas`, cleanName];
              }}
              contentStyle={{
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '11px'
              }}
            />
            <Legend 
              layout="vertical"
              verticalAlign="middle"
              align="right"
              wrapperStyle={{
                paddingLeft: '10px',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '12px'
              }}
              formatter={(value) => value} // Muestra el nombre con el %
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PastelS;