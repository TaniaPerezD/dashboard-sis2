import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './tamano.css';

const BoxPlot = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    const allValues = data.flatMap(d => [d.min, d.q1, d.median, d.q3, d.max, ...(d.outliers || [])]);
    const yMin = 0;
    const yMax = Math.ceil(Math.max(...allValues) / 10) * 10;

    const drawBoxplot = (ctx, chartArea) => {
      const { left, right, top, bottom } = chartArea;
      const boxWidth = (right - left) / data.length * 0.6;
      const spacing = (right - left) / data.length;

      ctx.save();
      data.forEach((item, index) => {
        const centerX = left + spacing * (index + 0.5);
        const boxLeft = centerX - boxWidth / 2;
        const boxRight = centerX + boxWidth / 2;
        const scaleY = (value) => {
          return bottom - ((value - yMin) / (yMax - yMin)) * (bottom - top);
        };

        const minY = scaleY(item.min);
        const q1Y = scaleY(item.q1);
        const medianY = scaleY(item.median);
        const q3Y = scaleY(item.q3);
        const maxY = scaleY(item.max);

        ctx.strokeStyle = '#FF4201';
        ctx.lineWidth = 2;

        // Líneas verticales (bigotes)
        ctx.beginPath();
        ctx.moveTo(centerX, minY);
        ctx.lineTo(centerX, q1Y);
        ctx.moveTo(centerX, q3Y);
        ctx.lineTo(centerX, maxY);
        ctx.stroke();

        // Líneas horizontales de extremos
        ctx.beginPath();
        ctx.moveTo(boxLeft + boxWidth * 0.25, minY);
        ctx.lineTo(boxRight - boxWidth * 0.25, minY);
        ctx.moveTo(boxLeft + boxWidth * 0.25, maxY);
        ctx.lineTo(boxRight - boxWidth * 0.25, maxY);
        ctx.stroke();

        // Caja intercuartílica
        ctx.fillStyle = 'rgba(255, 66, 1, 0.3)';
        ctx.fillRect(boxLeft, q3Y, boxWidth, q1Y - q3Y);
        ctx.strokeRect(boxLeft, q3Y, boxWidth, q1Y - q3Y);

        // Mediana
        ctx.beginPath();
        ctx.moveTo(boxLeft, medianY);
        ctx.lineTo(boxRight, medianY);
        ctx.stroke();

        // Outliers
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
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        },
        scales: {
          x: {
            type: 'category',
            labels: data.map(item => item.x),
            grid: { display: false },
            ticks: {
              color: '#333',
              font: { family: 'Poppins', size: 12, weight: '500' }
            }
          },
          y: {
            min: yMin,
            max: yMax,
            grid: { color: 'rgba(0,0,0,0.1)' },
            ticks: {
              color: '#666',
              font: { family: 'Poppins', size: 11 },
              callback: value => value + ' ventas'
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
  }, [data]);

  return (
    <div className="plot-card">
      <div className="plot-header">
        <div className="plot-number"></div>
        <h2 className="plot-title">Distribución de Ventas por Categoría</h2>
      </div>

      <div className="chart-container">
        <canvas ref={canvasRef} className="chart-canvas"></canvas>
      </div>

      <div className="stats-grid">
        {data.map((item, idx) => (
          <div key={idx} className="stat-item">
            <div className="stat-value">{item.median}</div>
            <div className="stat-label">{item.x}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxPlot;
