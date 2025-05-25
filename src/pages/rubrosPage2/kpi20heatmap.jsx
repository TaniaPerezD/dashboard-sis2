import React, { useEffect, useState } from 'react';
import './rubros.css';

const heatmapData = [
  { range: [0, 5], color: '#FFE5D9', label: '0-5 años' },
  { range: [6, 15], color: '#FF4201', label: '6-15 años' },
  { range: [16, 25], color: '#199ECA', label: '16-25 años' },
  { range: [26, Infinity], color: '#2C00FF', label: '25+ años' },
];

const getColorForAge = (edad) => {
  const item = heatmapData.find(d => edad >= d.range[0] && edad <= d.range[1]);
  return item ? item.color : '#ccc';
};

const Heatmap20 = () => {
  const [data, setData] = useState([]);

  

  return (
    <div className="plot-card" style={{ height: '100vh' }}>
      <div className="plot-header">
        <h2 className="h2">Edad Promedio por Rubro y Tamaño</h2>
      </div>

      <iframe 
            src="http://localhost:3000/public/question/5ec776a4-df8e-4eb9-aa06-e7c26bb62c43" 
            frameborder="0"
            width={"100%"}
            height={"80%"}
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