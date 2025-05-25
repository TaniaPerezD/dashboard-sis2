import React, { useEffect, useState } from 'react';
import './tamano.css';

const heatmapDataLegend = [
  { color: '#FFE5D9', label: '0-5 años', min: 0, max: 5 },
  { color: '#FF4201', label: '6-15 años', min: 6, max: 15 },
  { color: '#199ECA', label: '16-25 años', min: 16, max: 25 },
  { color: '#2C00FF', label: '25+ años', min: 26, max: Infinity },
];

const getColorForAge = (age) => {
  for (let i = 0; i < heatmapDataLegend.length; i++) {
    const range = heatmapDataLegend[i];
    if (age >= range.min && age <= range.max) return range.color;
  }
  return '#ccc';
};

const Heatmap = () => {
  const [heatmapData, setHeatmapData] = useState([]);

  useEffect(() => {
    fetch('http://172.25.1.99:3000/public/question/f79969a2-fc26-4459-8af9-8373c594b2a7.json')
      .then((res) => res.json())
      .then((data) => setHeatmapData(data))
      .catch((err) => console.error('Error al obtener datos de Metabase:', err));
  }, []);

  const uniqueRubros = [...new Set(heatmapData.map(item => item.rubro))];
  const uniqueTamanos = [...new Set(heatmapData.map(item => item.tamano))];

  return (
    <div className="plot-card">
      <div className="plot-header">
        <h2 className="plot-title">Edad Promedio por Rubro y Tamaño</h2>
      </div>

      <div className="heatmap-grid" style={{ gridTemplateColumns: `repeat(${uniqueTamanos.length}, 1fr)` }}>
        {uniqueRubros.map(rubro => (
          uniqueTamanos.map(tamano => {
            const item = heatmapData.find(i => i.rubro === rubro && i.tamano === tamano);
            const edad = item?.edad_promedio ?? '-';
            const color = typeof edad === 'number' ? getColorForAge(edad) : '#eee';
            return (
              <div key={`${rubro}-${tamano}`} className="heatmap-cell" style={{ backgroundColor: color }}>
                {edad} años
              </div>
            );
          })
        ))}
      </div>

      <div className="heatmap-legend">
        {heatmapDataLegend.map((item, index) => (
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
