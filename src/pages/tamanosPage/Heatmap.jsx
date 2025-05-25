import React, { useEffect, useState } from 'react';
import './tamano.css';

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

const Heatmap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://172.25.1.99:3000/public/question/be5dab7f-1756-4fd0-8d6a-332eebafde20.json')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('Error cargando datos:', err));
  }, []);

  return (
    <div className="plot-card">
      <div className="plot-header">
        <h2 className="plot-title">Edad Promedio por Rubro y Tamaño</h2>
      </div>

      <div className="heatmap-container">
        {data.map((item, i) => (
          <div
            key={i}
            className="heatmap-cell"
            style={{ backgroundColor: getColorForAge(item.edad_promedio) }}
          >
            {item.edad_promedio} años
            <br />
            <small>{item.rubro}<br />{item.tamano}</small>
          </div>
        ))}
      </div>

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

export default Heatmap;
