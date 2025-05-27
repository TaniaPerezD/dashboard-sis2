// src/pages/rubrosPage/index.jsx

import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/montserrat/700.css";
import TemporalAnalysisDashboard from './TemporalAnalysis';

const RubrosPage = () => {
  return (
    <div style={{ height: "100vh", width: "100%", borderColor: '#E9F5FE', backgroundColor: "#E9F5FE" }}>
      <TemporalAnalysisDashboard />
    </div>
  );
};

export default RubrosPage;
