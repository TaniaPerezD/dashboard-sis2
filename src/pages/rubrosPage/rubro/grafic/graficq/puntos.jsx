import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const data = [
  { año: '1948', empresas: 100 },
  { año: '1949', empresas: 89 },
  { año: '1950', empresas: 75 },
  { año: '1951', empresas: 200 },
  { año: '1952', empresas: 150 },
  { año: '1953', empresas: 90 },
  { año: '1954', empresas: 80 },
  { año: '1955', empresas: 70 },
  { año: '1956', empresas: 41 },
  { año: '1957', empresas: 4 },
  { año: '1958', empresas: 7 },
  { año: '1959', empresas: 20 },
  { año: '1960', empresas: 200 },
  { año: '1970', empresas: 79 },
  { año: '2000', empresas: 78 },
  { año: '2025', empresas: 7 },

];


const Puntos = ({ width = "100%", height = "100%",data }) => {
  const years = data.map(item => parseInt(item.name));
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  const [yearRange, setYearRange] = React.useState([minYear, maxYear]);

  const filteredData = data.filter(item => {
    const year = parseInt(item.name);
    return year >= yearRange[0] && year <= yearRange[1];
  });
  const totalEmpresas = filteredData.reduce((acc, curr) => acc + curr.value, 0);
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
      <h5 style={{
  display: "flex",
  alignItems: "center",
  gap: "10px",
  textAlign: "left",
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 700,
  margin: "10px 20px"
}}>
  Nuevas empresas por Rubro
  <span style={{
    fontWeight: 500,
    fontSize: "0.85rem",
    color: "#555"
  }}>
    ({totalEmpresas} total)
  </span>
</h5>

     

      <ResponsiveContainer width="100%" height="80%">
  <LineChart
    data={filteredData}
    margin={{ top: 5, right: 20, bottom: 9, left: 20 }}// Aumenta márgenes para espacio del texto
  >
    <CartesianGrid stroke="#f5f5f5" />
    
    <XAxis 
      dataKey="name"
      label={{ 
        value: 'name', 
        position: 'bottom', 
        offset: 0, 
        style: { fontSize: 12, fontFamily: "'Montserrat', sans-serif" }
      }} 
    />
    
    <YAxis 
  label={{
    value: 'Cantidad',
    angle: -90,
    position: 'left',
    offset: 1,
    style: {
      textAnchor: 'middle',
      fontSize: 12,
      fontFamily: "'Montserrat', sans-serif"
    }
  }}
/>
    
    <Tooltip />
    
    <Line
      type="monotone"
      dataKey="value"
      stroke="#182335"
      strokeWidth={2}
      dot={{ r: 4 }}
    />
  </LineChart>
</ResponsiveContainer>
      <div style={{
        padding: '0 20px 5px 20px',
        marginBottom: '0px',
        borderBottom: 'none',
        background: 'transparent',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '12px',
          marginBottom: '5px'
        }}>
          <span>{yearRange[0]}</span>
          <span>{yearRange[1]}</span>
        </div>

        <Slider
          range
          min={minYear}
          max={maxYear}
          defaultValue={[minYear, maxYear]}
          value={yearRange}
          onChange={setYearRange}
          trackStyle={[{ backgroundColor: '#182335' }]}
          handleStyle={[
            { borderColor: '#182335', backgroundColor: '#182335' },
            { borderColor: '#182335', backgroundColor: '#182335' }
          ]}
        />
      </div>
    </div>
  );
};

export default Puntos;
