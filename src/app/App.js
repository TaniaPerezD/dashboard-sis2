iimport React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  HomePage,
  ErrorPage,
  RubrosPage,
  SeccionDosPage,
  SeccionTresPage,
  SeccionCuatroPage,
  TamanosPage,
} from '../pages';
import Layout from '../components/layout/layout';
import DepPage from '../pages/departamentosPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="Departamental" element={<DepPage />} />
        <Route path="Departamental/SeccionUno" element={<DepPage />} />
        <Route path="Departamental/SeccionDos" element={<SeccionDosPage />} />
        <Route path="Departamental/SeccionTres" element={<SeccionTresPage />} />
        <Route path="Departamental/SeccionCuatro" element={<SeccionCuatroPage />} />
        <Route path="Rubros/*" element={<RubrosPage />} />
        <Route path="Tamanos" element={<TamanosPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;

