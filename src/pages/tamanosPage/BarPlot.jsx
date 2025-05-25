import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './tamano.css';

const BarPlot = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      new Chart(canvasRef.current, {
        type: 'bar',
        data: {
          labels: ['S.A.', 'S.R.L.', 'Persona Física', 'Cooperativa'],
          datasets: [{
            label: 'Promedio Empleados',
            data: [87, 45, 23, 156],
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
  }, []);

  return (
    <div className="plot-card">
      <div className="plot-header">
        <div className="plot-number">5</div>
        <h2 className="plot-title">Tamaño Empresarial Promedio por Tipo Societario</h2>
      </div>
      <div className="chart-container">
        <canvas ref={canvasRef} className="chart-canvas" />
      </div>
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-value">87</div>
          <div className="stat-label">S.A.</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">45</div>
          <div className="stat-label">S.R.L.</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">23</div>
          <div className="stat-label">Persona Física</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">156</div>
          <div className="stat-label">Cooperativa</div>
        </div>
      </div>
    </div>
  );
};

export default BarPlot;