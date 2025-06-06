import React, { useEffect, useState } from 'react';
import './rubros.css';

const heatmapData = [
  { range: [0, 5], color: '#FFE5D9', label: '40-60 años' },
  { range: [6, 15], color: '#6f9bc9', label: '60-80 años' },
  { range: [16, 25], color: '#336ba7', label: '80-100 años' },
  { range: [26, Infinity], color: '#00448e', label: '100+ años' },
];

const getColorForAge = (edad) => {
  const item = heatmapData.find(d => edad >= d.range[0] && edad <= d.range[1]);
  return item ? item.color : '#ccc';
};

const Heatmap20 = () => {
  const [data, setData] = useState([]);

  

  return (
    <div className="plot-card">
      {/*
      <div className="plot-header">
        <h2 className="h2">Edad Promedio por Rubro y Tamaño</h2>
      </div>
      */}
      <iframe 
            src="https://meta-tania.serverbb.site/public/question/0ae15efa-f52d-4f3e-9c8f-133e915cb24c" 
            frameborder="0"
            width={"100%"}
            height={"100%"}
            title="Heatmap Visualization"
            allowFullScreen
        />

      <div className="heatmap-legend">
        {heatmapData.map((item, index) => (
          <div key={index} className="legend-item">
            <div className="legend-color" style={{ background: item.color }}></div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
        
    </div>
  );
};

export default Heatmap20;