import React from 'react';
import './tamaño.css'

const heatmapData = [
  { color: '#FFE5D9', label: '0-5 años' },
  { color: '#FF4201', label: '6-15 años' },
  { color: '#199ECA', label: '16-25 años' },
  { color: '#2C00FF', label: '25+ años' },
];

const Heatmap = () => {
  const cellCount = 16; // Ejemplo: 4x4
  const cells = Array.from({ length: cellCount }, (_, i) => {
    const color = heatmapData[i % heatmapData.length].color;
    return (
      <div
        key={i}
        className="heatmap-cell"
        style={{ backgroundColor: color }}
      >
        {Math.floor(Math.random() * 40 + 1)} años
      </div>
    );
  });

  return (
    <div className="plot-card">
      <div className="plot-header">
        <div className="plot-number">20</div>
        <h2 className="plot-title">Edad Promedio por Rubro y Tamaño</h2>
      </div>

      <div className="heatmap-container">
        {cells}
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
