import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './tamano.css';

const BoxPlot = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const data = {
      labels: ['Electrónica', 'Ropa', 'Hogar', 'Alimentos'],
      datasets: [{
        label: 'Ventas',
        data: [
          { x: 'Electrónica', min: 150, q1: 270, median: 320, q3: 375, max: 420, outliers: [100, 450, 470] },
          { x: 'Ropa', min: 100, q1: 230, median: 280, q3: 330, max: 390, outliers: [80, 95, 405] },
          { x: 'Hogar', min: 90, q1: 150, median: 190, q3: 250, max: 290, outliers: [60, 305] },
          { x: 'Alimentos', min: 200, q1: 350, median: 410, q3: 460, max: 520, outliers: [180, 540, 600] }
        ],
        backgroundColor: 'rgba(255, 66, 1, 0.3)',
        borderColor: '#FF4201',
        borderWidth: 2
      }]
    };

    const drawBoxplot = (ctx, chartArea) => {
      const { left, right, top, bottom } = chartArea;
      const boxWidth = (right - left) / data.labels.length * 0.6;
      const spacing = (right - left) / data.labels.length;

      ctx.save();
      data.datasets[0].data.forEach((item, index) => {
        const centerX = left + spacing * (index + 0.5);
        const boxLeft = centerX - boxWidth / 2;
        const boxRight = centerX + boxWidth / 2;
        const scaleY = (value) => {
          const min = 0, max = 650;
          return bottom - ((value - min) / (max - min)) * (bottom - top);
        };

        const minY = scaleY(item.min);
        const q1Y = scaleY(item.q1);
        const medianY = scaleY(item.median);
        const q3Y = scaleY(item.q3);
        const maxY = scaleY(item.max);

        ctx.strokeStyle = '#FF4201';
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(centerX, minY);
        ctx.lineTo(centerX, q1Y);
        ctx.moveTo(centerX, q3Y);
        ctx.lineTo(centerX, maxY);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(boxLeft + boxWidth * 0.25, minY);
        ctx.lineTo(boxRight - boxWidth * 0.25, minY);
        ctx.moveTo(boxLeft + boxWidth * 0.25, maxY);
        ctx.lineTo(boxRight - boxWidth * 0.25, maxY);
        ctx.stroke();

        ctx.fillStyle = 'rgba(255, 66, 1, 0.3)';
        ctx.fillRect(boxLeft, q3Y, boxWidth, q1Y - q3Y);
        ctx.strokeRect(boxLeft, q3Y, boxWidth, q1Y - q3Y);

        ctx.beginPath();
        ctx.moveTo(boxLeft, medianY);
        ctx.lineTo(boxRight, medianY);
        ctx.stroke();

        ctx.fillStyle = '#199ECA';
        item.outliers?.forEach(outlier => {
          const outlierY = scaleY(outlier);
          ctx.beginPath();
          ctx.arc(centerX, outlierY, 4, 0, 2 * Math.PI);
          ctx.fill();
        });
      });

      ctx.restore();
    };

    const plugin = {
      id: 'boxplotPlugin2',
      afterDatasetsDraw(chart) {
        const { ctx, chartArea } = chart;
        drawBoxplot(ctx, chartArea);
      }
    };

    const config = {
      type: 'scatter',
      data: {
        datasets: [{ data: [], showLine: false, pointRadius: 0 }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: {
          x: {
            type: 'category',
            labels: data.labels,
            grid: { display: false },
            ticks: {
              color: '#333',
              font: { family: 'Poppins', size: 12, weight: '500' }
            }
          },
          y: {
            min: 0,
            max: 650,
            grid: { color: 'rgba(0,0,0,0.1)' },
            ticks: {
              color: '#666',
              font: { family: 'Poppins', size: 11 },
              callback: value => value + ' unidades'
            },
            title: {
              display: true,
              text: 'Cantidad de Ventas',
              color: '#333',
              font: { family: 'Poppins', size: 12, weight: '600' }
            }
          }
        },
        layout: { padding: 20 },
        animation: { duration: 2000, easing: 'easeInOutQuart' }
      },
      plugins: [plugin]
    };

    const chart = new Chart(ctx, config);

    return () => chart.destroy();
  }, []);

  return (
    <div className="plot-card">
      <div className="plot-header">
        <div className="plot-number">6</div>
        <h2 className="plot-title">Distribución de Ventas por Categoría</h2>
      </div>

      <div className="chart-container">
        <canvas ref={canvasRef} className="chart-canvas"></canvas>
      </div>

      <div className="boxplot-legend">
        <div className="legend-item">
          <div className="legend-symbol" style={{ backgroundColor: '#FF4201' }}></div> Mediana
        </div>
        <div className="legend-item">
          <div className="legend-symbol" style={{ backgroundColor: '#199ECA', borderRadius: '50%' }}></div> Valores atípicos
        </div>
        <div className="legend-item">
          <div className="legend-symbol" style={{ backgroundColor: 'rgba(255, 66, 1, 0.3)', height: '12px' }}></div> IQR (Q1 - Q3)
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-value">320</div>
          <div className="stat-label">Electrónica</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">280</div>
          <div className="stat-label">Ropa</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">190</div>
          <div className="stat-label">Hogar</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">410</div>
          <div className="stat-label">Alimentos</div>
        </div>
      </div>
    </div>
  );
};

export default BoxPlot;