import React from 'react';
import './heat.css';

const getColorForAge = (edad) => {
  if (edad <= 5) return '#FFE5D9';
  if (edad <= 15) return '#FF4201';
  if (edad <= 25) return '#199ECA';
  return '#2C00FF';
};

const Heatmap = ({ data, title = "Edad Promedio por Rubro y Tamaño" }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No hay datos disponibles.</div>;
  }

  const rubros = Array.from(new Set(data.map(item => item.rubro)));
  const tamanos = Array.from(new Set(data.map(item => item.tamano)));

  return (
    <div className="plot-card">
      <div className="plot-header">
        <h2 className="plot-title">{title}</h2>
      </div>

      <div className="heatmap-grid">
        <div className="heatmap-header"></div>
        {tamanos.map((tam, i) => (
          <div key={i} className="heatmap-header">{tam}</div>
        ))}

        {rubros.map((rubro, rowIdx) => (
          <React.Fragment key={rowIdx}>
            <div className="heatmap-label">{rubro}</div>
            {tamanos.map((tamano, colIdx) => {
              const match = data.find(d => d.rubro === rubro && d.tamano === tamano);
              const edad = match ? match.edad : null;
              return (
                <div
                  key={`${rowIdx}-${colIdx}`}
                  className="heatmap-cell"
                  style={{ backgroundColor: edad !== null ? getColorForAge(edad) : '#ccc' }}
                >
                  {edad !== null ? `${edad} años` : '—'}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>

      <div className="heatmap-legend">
        {[
          { label: '0-5 años', color: '#FFE5D9' },
          { label: '6-15 años', color: '#FF4201' },
          { label: '16-25 años', color: '#199ECA' },
          { label: '25+ años', color: '#2C00FF' },
        ].map((item, idx) => (
          <div key={idx} className="legend-item">
            <div className="legend-color" style={{ background: item.color }}></div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Heatmap;
