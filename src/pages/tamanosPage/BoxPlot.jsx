import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const BoxPlot = () => {
  const canvasRef = useRef(null);
  const [boxData, setBoxData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // URL corregida para el endpoint JSON de Metabase
    const metabaseUrl = '';
    
    setLoading(true);
    setError(null);
    
    fetch(metabaseUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log("Datos recibidos:", data);
        setBoxData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al obtener datos de Metabase:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (boxData.length === 0 || loading) return;

    const ctx = canvasRef.current.getContext('2d');

    // Calcular el rango dinámico basado en los datos
    const allValues = boxData.flatMap(item => [item.min, item.max]);
    const dataMin = Math.min(...allValues);
    const dataMax = Math.max(...allValues);
    const padding = (dataMax - dataMin) * 0.1;
    const yMin = Math.max(0, dataMin - padding);
    const yMax = dataMax + padding;

    const drawBoxplot = (ctx, chartArea) => {
      const { left, right, top, bottom } = chartArea;
      const boxWidth = (right - left) / boxData.length * 0.6;
      const spacing = (right - left) / boxData.length;

      // Función para escalar Y dentro del contexto correcto
      const scaleY = (value) => {
        return bottom - ((value - yMin) / (yMax - yMin)) * (bottom - top);
      };

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

        // Líneas de whiskers
        ctx.strokeStyle = '#FF4201';
        ctx.lineWidth = 2;

        // Whisker inferior
        ctx.beginPath();
        ctx.moveTo(centerX, minY);
        ctx.lineTo(centerX, q1Y);
        ctx.stroke();

        // Whisker superior
        ctx.beginPath();
        ctx.moveTo(centerX, q3Y);
        ctx.lineTo(centerX, maxY);
        ctx.stroke();

        // Caps de los whiskers
        ctx.beginPath();
        ctx.moveTo(boxLeft + boxWidth * 0.25, minY);
        ctx.lineTo(boxRight - boxWidth * 0.25, minY);
        ctx.moveTo(boxLeft + boxWidth * 0.25, maxY);
        ctx.lineTo(boxRight - boxWidth * 0.25, maxY);
        ctx.stroke();

        // Caja (IQR)
        ctx.fillStyle = 'rgba(255, 66, 1, 0.3)';
        ctx.fillRect(boxLeft, q3Y, boxWidth, q1Y - q3Y);
        ctx.strokeRect(boxLeft, q3Y, boxWidth, q1Y - q3Y);

        // Línea de la mediana
        ctx.strokeStyle = '#FF4201';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(boxLeft, medianY);
        ctx.lineTo(boxRight, medianY);
        ctx.stroke();

        // Outliers
        if (item.outliers && item.outliers.length > 0) {
          ctx.fillStyle = '#199ECA';
          item.outliers.forEach(outlier => {
            const outlierY = scaleY(outlier);
            ctx.beginPath();
            ctx.arc(centerX, outlierY, 4, 0, 2 * Math.PI);
            ctx.fill();
          });
        }
      });

      ctx.restore();
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
        datasets: [{ 
          data: [], 
          showLine: false, 
          pointRadius: 0,
          pointHoverRadius: 0 
        }]
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
            ticks: { 
              color: '#333', 
              font: { family: 'Arial', size: 12 } 
            },
            grid: {
              display: false
            }
          },
          y: {
            min: yMin,
            max: yMax,
            ticks: {
              color: '#666',
              font: { family: 'Arial', size: 11 },
              callback: value => Math.round(value).toString()
            },
            title: {
              display: true,
              text: 'Año de Fundación',
              color: '#333',
              font: { family: 'Arial', size: 12, weight: '600' }
            },
            grid: {
              color: 'rgba(0,0,0,0.1)'
            }
          }
        },
        layout: { padding: 20 },
        animation: { 
          duration: 1500, 
          easing: 'easeInOutCubic' 
        }
      },
      plugins: [plugin]
    });

    return () => chart.destroy();
  }, [boxData, loading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96 bg-white rounded-lg shadow-sm border">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando datos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-96 bg-white rounded-lg shadow-sm border">
        <div className="text-center">
          <div className="text-red-500 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Error al cargar datos</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <p className="text-sm text-gray-500">
            Verifica que la URL del endpoint de Metabase sea correcta y que la pregunta sea pública.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Distribución de Años de Fundación por Tamaño
        </h2>
        <p className="text-gray-600">
          Análisis estadístico de los años de fundación organizados por categorías de tamaño
        </p>
      </div>

      <div className="relative h-96 mb-6">
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
      </div>

      {boxData.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {boxData.map((item, i) => (
            <div className="text-center p-4 bg-gray-50 rounded-lg" key={i}>
              <div className="text-2xl font-bold text-orange-600 mb-1">
                {item.median}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {item.x}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BoxPlot;