import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, ErrorPage, RubrosPage } from '../pages';
import Layout from '../components/layout/layout';
import DepPage from '../pages/departamentosPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
   
        
        <Route path="rubros/*" element={<RubrosPage />} />

      </Route>
    </Routes>
  );
}

export default App;