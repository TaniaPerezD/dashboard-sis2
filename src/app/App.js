import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  HomePage,
  ErrorPage,
  RubrosPage,
  RubrosPage2,
  SeccionDosPage,
  SeccionTresPage,
  SeccionCuatroPage,
  TamanosPage,
  SocietarioPage 
} from '../pages';
import Layout from '../components/layout/layout';
import DepartamentalPage from '../pages/departamental/departamentalPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="societario" element={<SocietarioPage />} />
        <Route path="rubros/*" element={<RubrosPage />} />
        <Route index element={<HomePage />} />
        <Route path="Departamental" element={<DepartamentalPage />} />
        <Route path="Departamental/SeccionUno" element={<DepartamentalPage />} />
        <Route path="Departamental/SeccionDos" element={<SeccionDosPage />} />
        <Route path="Departamental/SeccionTres" element={<SeccionTresPage />} />
        <Route path="Departamental/SeccionCuatro" element={<SeccionCuatroPage />} />
        <Route path="Temporal/*" element={<RubrosPage />} />
        <Route path="Tamanos" element={<TamanosPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/Rubros" element={<RubrosPage2 />} />
      </Route>
    </Routes>

  );
}

export default App;
