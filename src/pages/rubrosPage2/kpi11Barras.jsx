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

const Barras11 = () => {
  const [data, setData] = useState([]);

  

  return (
    <div className="plot-card" style={{ height: '60vh' }}>
      <div className="plot-header">
        <h2 className="h2">Edad Promedio por Rubro y Tamaño</h2>
      </div>

      <iframe 
            src="http://localhost:3000/public/question/c0855052-5294-4559-a860-0e35bbbef7f6" 
            frameborder="0"
            width={"100%"}
            height={"80%"}
            title="Heatmap Visualization"
            allowFullScreen
        />
        
    </div>
  );
};

export default Barras11;