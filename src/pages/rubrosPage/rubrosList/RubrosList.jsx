// C:\Users\LENOVO\Documents\GitHub\dashboard-sis2\src\pages\rubrosPage\rubrosList\RubrosList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const RubrosList = ({ empresas }) => {
  // Opcional: Obtener una lista única de rubros si no quieres mostrar todas las empresas
  // Puedes modificar esta lógica según cómo quieras mostrar tu lista de rubros
  const rubrosUnicos = Array.from(new Set(empresas.map(emp => emp.rubro)));

  return (
    <div style={{ padding: '20px' }}>
      <h3>Listado de Rubros</h3>
      <p>Haz clic en un rubro para ver su detalle:</p>
      <ul>
        {rubrosUnicos.map(rubro => (
          <li key={rubro}>
            <Link to={`/rubros/${rubro.toLowerCase()}`}>{rubro}</Link>
          </li>
        ))}
      </ul>

      {/* Opcional: Mostrar todas las empresas filtradas si lo deseas */}
      {/*
      <h4>Todas las empresas filtradas:</h4>
      <ul>
        {empresas.map(emp => (
          <li key={emp.id}>
            {emp.nombre} - {emp.rubro} - <Link to={`/rubros/${emp.id}`}>Ver Detalle</Link>
          </li>
        ))}
      </ul>
      */}
    </div>
  );
};

export default RubrosList;