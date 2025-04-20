import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'S.R.L.', value: 52, percentage: '52.1%' }, 
  { name: 'S.E.M.', value: 19, percentage: '19.4%' },
  { name: 'S.A.', value: 11, percentage: '10.9%' },
  { name: 'S.C.S', value: 5, percentage: '5.4%' },
  { name: 'S.', value: 4, percentage: '4.3%' },
  { name: 'S.C.A', value: 4, percentage: '4.1%' },
  { name: 'A.A.C.P.', value: 4, percentage: '3.8%' },
];

const COLORS = ['#182335', '#E15546', '#EEAF9D', '#EAE4CC', '#A5D8DD', '#C5A6F0', '#F0A6A6'];

const Pastel = ({ width = "100%", height = "100%" }) => {
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
          textAlign: "center", 
          fontFamily: "'Montserrat', sans-serif", 
          fontWeight: 700,
          margin: "0 0 10px 10px",
          fontSize: "14px",
          color: '#2c3e50'
        }}
      >
        EMPRESAS POR TIPO
      </h5>

      {/* Contenedor del gráfico */}
      <div style={{ height: '135px', marginBottom: '10px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={60}
              innerRadius={30}
              fill="#8884d8"
              dataKey="value"
              label={false}
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
                const entry = data.find(item => item.name === name);
                return [`${value} empresas (${entry?.percentage || ''})`, name];
              }}
              contentStyle={{
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '11px'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Contenedor de leyendas en 2 columnas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '8px',
        
        padding: '0 10px',
        
      }}>
        {data.map((entry, index) => (
          <div key={`legend-${index}`} style={{
            display: 'flex',
            alignItems: 'center',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '12px'
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              backgroundColor: COLORS[index % COLORS.length],
              marginRight: '8px',
              borderRadius: '8px'
            }} />
            <span style={{ color: '#182335', fontWeight: 500 }}>
              {entry.name} <span style={{ color: '#7f8c8d' }}>({entry.percentage})</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pastel;