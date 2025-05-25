import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import './tamano.css';

const BoxPlot = () => {
  const canvasRef = useRef(null);
  const [boxData, setBoxData] = useState([]);

  useEffect(() => {
    fetch('http://172.25.1.99:3000/public/question/21311596-fa60-4b25-9964-cba0fe817aab.json')
      .then(res => res.json())
      .then(data => setBoxData(data))
      .catch(err => console.error('Error al obtener datos de Metabase:', err));
  }, []);

  useEffect(() => {
    if (boxData.length === 0) return;

    const ctx = canvasRef.current.getContext('2d');

    const drawBoxplot = (ctx, chartArea) => {
      const { left, right, top, bottom } = chartArea;
      const boxWidth = (right - left) / boxData.length * 0.6;
      const spacing = (right - left) / boxData.length;

      ctx.save();
      boxData.forEach((item, index) => {
        const centerX = left + spacing * (index + 0.5);
        const boxLeft = centerX - boxWidth / 2;
        const boxRight = centerX + boxWidth / 2;

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

    const scaleY = (value) => {
      const min = 0;
      const max = 2100; // Ajusta según tu rango
      const { top, bottom } = chart.chartArea;
      return bottom - ((value - min) / (max - min)) * (bottom - top);
    };

    const plugin = {
      id: 'boxplotPlugin',
      afterDatasetsDraw(chart) {
        drawBoxplot(chart.ctx, chart.chartArea);
      }
    };

    const chart = new Chart(ctx, {
      type: 'scatter',
      data: {
        labels: boxData.map(d => d.x),
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
            labels: boxData.map(d => d.x),
            ticks: { color: '#333', font: { family: 'Poppins', size: 12 } }
          },
          y: {
            min: 0,
            max: 2100,
            ticks: {
              color: '#666',
              font: { family: 'Poppins', size: 11 },
              callback: value => `${value}`
            },
            title: {
              display: true,
              text: 'Año de Fundación',
              color: '#333',
              font: { family: 'Poppins', size: 12, weight: '600' }
            }
          }
        },
        layout: { padding: 20 },
        animation: { duration: 1500, easing: 'easeInOutCubic' }
      },
      plugins: [plugin]
    });

    return () => chart.destroy();
  }, [boxData]);

  return (
    <div className="plot-card">
      <div className="plot-header">
        <h2 className="plot-title">Distribución de Años de Fundación por Tamaño</h2>
      </div>

      <div className="chart-container">
        <canvas ref={canvasRef} className="chart-canvas"></canvas>
      </div>

      <div className="stats-grid">
        {boxData.map((item, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-value">{item.median}</div>
            <div className="stat-label">{item.x}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxPlot;
