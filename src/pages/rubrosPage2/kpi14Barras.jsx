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

const Barras14 = () => {
  const [data, setData] = useState([]);

  

  return (
    <div className="plot-card">
      {/*
      <div className="plot-header">
        <h2 className="h2">Tasa de empresas premiadas por rubro o tamaño</h2>
      </div>
      */}
      <iframe 
            src="https://meta-tania.serverbb.site/public/question/5d307ec6-b313-4c3d-8104-ec644be54697" 
            frameborder="0"
            width={"100%"}
            height={"100%"}
            title="Heatmap Visualization"
            allowFullScreen
        />
        
    </div>
  );
};

export default Barras14;