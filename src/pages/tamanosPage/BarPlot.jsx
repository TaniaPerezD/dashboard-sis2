import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './tamano.css';

const BarPlot = ({ data }) => {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && data) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Extraer etiquetas y valores para el gráfico
      const labels = data.map(item => item.x);
      const medianValues = data.map(item => item.median);

      chartInstanceRef.current = new Chart(canvasRef.current, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Mediana',
            data: medianValues,
            backgroundColor: [
              '#FF420180',
              '#199ECA80',
              '#2C00FF80',
              '#FF420160'
            ],
            borderColor: [
              '#FF4201',
              '#199ECA',
              '#2C00FF',
              '#FF4201'
            ],
            borderWidth: 2,
            borderRadius: 8,
            borderSkipped: false,
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { precision: 0 }
            }
          }
        }
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="plot-card">
      <div className="plot-header">
        <div className="plot-number"></div>
        <h2 className="plot-title">Tasa de Empresas Premiadas por Tamaño</h2>
      </div>
      <div className="chart-container">
        <canvas ref={canvasRef} className="chart-canvas" />
      </div>
      <div className="stats-grid">
        {data && data.map((item, index) => (
          <div className="stat-item" key={index}>
            <div className="stat-value">{item.median}</div>
            <div className="stat-label">{item.x}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarPlot;

