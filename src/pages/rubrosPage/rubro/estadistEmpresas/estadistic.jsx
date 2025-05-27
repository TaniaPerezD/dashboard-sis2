import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

const data = [
  { name: 'Santa Cruz', Empresas: 400 },
  { name: 'Chuquisaca', Empresas: 300 },
  { name: 'Potosi', Empresas: 300 },
  { name: 'Tarija', Empresas: 300 },
  { name: 'La Paz', Empresas: 400 },
  { name: 'Cochabamba', Empresas: 400 },
  { name: 'Oruro', Empresas: 400 },
  { name: 'Beni', Empresas: 400 },
  { name: 'Pando', Empresas: 400 },
];

const Estadistic = ({ width = "100%", height = "300px",data }) => {
  return (
    <div
      className="card"
      style={{
        width: width,
        height: height,
        backgroundColor: "#ffffff",
        padding: "0px",
        boxShadow: "none",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <h5 style={{ 
        textAlign: "left", 
        fontFamily: "'Montserrat', sans-serif", 
        fontWeight: 700,
        margin: "10px 20px"
      }}>
        Departamentos
      </h5>

      <div style={{ flex: 1, padding: '0 10px' }}>
        <ResponsiveContainer width="100%" height="95%">
          <BarChart 
            data={data}
            margin={{ top: 20, right: 10, left: 10, bottom: 5 }}
          >
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              domain={[0, 'dataMax']} 
            />
            
            <Tooltip 
              contentStyle={{
                borderRadius: '0px',
                fontFamily: "'Montserrat', sans-serif"
              }}
              formatter={(value) => [value, '']}
              labelFormatter={(label) => label}
            />
            
            <Bar 
              dataKey="value" 
              fill="#EEAF9D" 
              barSize={25}
              radius={[10, 10, 10, 10]}
            >
              <LabelList 
                dataKey="value" 
                position="top"
                fill="#182335"
                fontFamily="'Montserrat', sans-serif"
                fontSize={12}
                fontWeight={700}
                offset={10}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Estadistic;