import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, ErrorPage, RubrosPage, SocietarioPage } from '../pages';
import Layout from '../components/layout/layout';
import DepPage from '../pages/departamentosPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="departamentos" element={<DepPage />} />
        <Route path="rubros" element={<RubrosPage />} />
        <Route path="societario" element={<SocietarioPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
