// src/pages/TemporalAnalysis.jsx

import React, { useState } from 'react';
import './TemporalAnalysis.css';

const TemporalAnalysisDashboard = () => {
  const [expandedKPI, setExpandedKPI] = useState(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  const toggleKPI = (index) => {
    setExpandedKPI(expandedKPI === index ? null : index);
  };

  const kpis = [
    {
      id: "KPI 2",
      title: "Frecuencia de fundación por década",
      description: "Muestra la distribución temporal de la creación de empresas por décadas. Este análisis permite identificar períodos históricos con mayor actividad emprendedora y correlacionarlos con contextos socioeconómicos específicos.",
      chartType: "Histograma",
      icon: "calendar-days"
    },
    {
      id: "KPI 22",
      title: "Cohorte de fundación por rubro",
      description: "Distribución de fundaciones por año dentro de cada rubro económico. Revela patrones temporales específicos de cada sector, mostrando cuándo y cómo diferentes industrias han emergido o declinado.",
      chartType: "Barras apiladas",
      icon: "building-columns"
    },
    {
      id: "KPI 19",
      title: "Tasa de nacimiento/cierre de empresas por año y rubro",
      description: "Indicador de crisis o booms sectoriales. Muestra la dinámica de creación y desaparición de empresas por sector económico, revelando patrones de resiliencia y vulnerabilidad sectorial.",
      chartType: "Línea temporal",
      icon: "chart-line"
    },
    {
      id: "KPI 15",
      title: "Tiempo promedio hasta primer premio",
      description: "Velocidad de impacto de las empresas, medida como el tiempo transcurrido desde su fundación hasta recibir su primer reconocimiento o premio importante. Indica la rapidez con que las empresas alcanzan hitos de excelencia.",
      chartType: "Gráfico de dispersión",
      icon: "award"
    },
    {
      id: "KPI 16",
      title: "Índice de premiación acumulada",
      description: "Total de premios por empresa a lo largo de su historia. Este indicador de excelencia acumulada permite identificar las empresas más consistentemente reconocidas en su sector.",
      chartType: "Barras descendentes",
      icon: "chart-area"
    },
    {
      id: "KPI 12",
      title: "Proporción de empresas familiares actuales vs. históricas",
      description: "Evolución del modelo familiar a través del tiempo. Compara la prevalencia de empresas familiares en diferentes períodos, revelando tendencias en la estructura organizacional del tejido empresarial.",
      chartType: "Línea temporal o barras apiladas",
      icon: "users-gear"
    },
    {
      id: "KPI 21",
      title: "Supervivencia empresarial",
      description: "Porcentaje de empresas activas por cohorte de fundación. Esta 'curva de supervivencia' muestra cuántas empresas sobreviven a diferentes edades, indicando la sostenibilidad a largo plazo de los modelos de negocio.",
      chartType: "Curva de supervivencia",
      icon: "chart-simple"
    }
  ];

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    setIframeError(false);
  };

  const handleIframeError = () => {
    setIframeError(true);
    setIframeLoaded(false);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">ANÁLISIS TEMPORAL / LONGITUDINAL</h1>
      </header>

      <div className="main-content-area">
        <div className="iframe-container">
          {!iframeLoaded && !iframeError && (
            <div className="iframe-loading">
              <p>Cargando dashboard...</p>
              <div className="loading-spinner"></div>
            </div>
          )}

          {iframeError && (
            <div className="iframe-error">
              <p>No se pudo cargar el dashboard. Por favor, verifica la conexión o intenta más tarde.</p>
              <button onClick={() => window.location.reload()}>Reintentar</button>
            </div>
          )}

          <iframe
            src="https://meta-tania.serverbb.site/public/dashboard/61766c72-1a98-4caf-8b88-1a16a5c8ee7a"
            title="Dashboard Analítico"
            allowFullScreen={true}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            style={{ display: iframeLoaded && !iframeError ? 'block' : 'none' }}
          />
        </div>
      </div>
    </div>
  );
};

export default TemporalAnalysisDashboard;
