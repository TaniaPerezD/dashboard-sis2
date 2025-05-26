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

      const labels = data.map(item => item.x);
      const totalValues = data.map(item => item.total);
      const premiadasValues = data.map(item => item.premiadas);

      chartInstanceRef.current = new Chart(canvasRef.current, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'Total Empresas',
              data: totalValues,
              backgroundColor: '#199ECA80',
              borderColor: '#199ECA',
              borderWidth: 2,
              borderRadius: 6,
              borderSkipped: false
            },
            {
              label: 'Empresas Premiadas',
              data: premiadasValues,
              backgroundColor: '#FF420180',
              borderColor: '#FF4201',
              borderWidth: 2,
              borderRadius: 6,
              borderSkipped: false
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: true },
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
        {data && data.map((item, index) => {
          const porcentaje = ((item.premiadas / item.total) * 100).toFixed(1);
          return (
            <div className="stat-item" key={index}>
              <div className="stat-value">{porcentaje}%</div>
              <div className="stat-label">{item.x}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BarPlot;

