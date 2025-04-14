import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import DepartamentoDash from '../pages/departamentoPage';


function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DepartamentoDash/>} />
        <Route path="/departamento" element={<DepartamentoDash />} />

      </Routes>
    </div>
  );
}

export default App;