import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, ErrorPage, RubrosPage } from '../pages';
import Layout from '../components/layout/layout';
import DepartamentalPage from '../pages/departamental/departamentalPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route path="/Departamental" element={<DepartamentalPage />}></Route>

      
    </Routes>
  );
}

export default App;
