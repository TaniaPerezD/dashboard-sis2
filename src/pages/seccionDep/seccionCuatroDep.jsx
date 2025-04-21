import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {
  PieChart, Pie, Cell, Tooltip as PieTooltip, Legend as PieLegend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList
} from 'recharts';
import empresas from '../../data/departamento/dataEmpresas.json';
import { useNavigate } from 'react-router-dom';

const SeccionCuatroDep = () => {
  const navigate = useNavigate();
  const [departamento, setDepartamento] = useState(null);
  const [rubro, setRubro] = useState(null);

  const coloresTipo = {
    Familiar: '#f4a261',
    Unipersonal: '#2a9d8f',
    Grande: '#264653',
    Pymes: '#e76f51'
  };

  const tipos = Object.keys(coloresTipo);
  const departamentos = Array.from(new Set(empresas.map(e => e.departamento)));
  const rubros = Array.from(new Set(empresas.map(e => e.rubro)));

  const limpiarFiltros = () => {
    setDepartamento(null);
    setRubro(null);
  };

  const empresasFiltradas = empresas.filter(e => {
    return (!departamento || e.departamento === departamento) &&
           (!rubro || e.rubro === rubro);
  });

  const resumenTipos = () => {
    const conteo = {};
    let total = 0;
    empresasFiltradas.forEach(e => {
      if (!conteo[e.tipo]) conteo[e.tipo] = 0;
      conteo[e.tipo]++;
      total++;
    });
    return tipos.map(tipo => ({
      name: tipo,
      value: conteo[tipo] || 0
    }));
  };

  const resumenActivasInactivas = () => {
    const data = {};
    empresas.forEach(e => {
      if (departamento && e.departamento !== departamento) return;
      const rub = e.rubro;
      if (!data[rub]) data[rub] = { rubro: rub, activa: 0, inactiva: 0 };
      if (e.activa) data[rub].activa++;
      else data[rub].inactiva++;
    });
    return Object.values(data);
  };

  const resumenFamiliares = () => {
    const data = {};
    empresas.forEach(e => {
      if (departamento && e.departamento !== departamento) return;
      const rub = e.rubro;
      if (!data[rub]) data[rub] = { rubro: rub, total: 0, familiares: 0 };
      data[rub].total++;
      if (e.tipo === 'Familiar') data[rub].familiares++;
    });
    return Object.values(data).map(d => ({
      rubro: d.rubro,
      porcentaje: parseFloat(((d.familiares / d.total) * 100).toFixed(1))
    }));
  };

  const rubroPrincipal = () => {
    const conteo = {};
    empresasFiltradas.forEach(e => {
      if (!conteo[e.rubro]) conteo[e.rubro] = 0;
      conteo[e.rubro]++;
    });
    const rubrosOrdenados = Object.entries(conteo).sort((a, b) => b[1] - a[1]);
    return rubrosOrdenados.length > 0 ? rubrosOrdenados[0][0] : 'Sin datos';
  };

  return (
    <div className="container-fluid">
      <div className="row align-items-center mb-2">
        <div className="col">
          <div className="titulos">DEPARTAMENTOS <span className="subtitulo">rubros</span></div>
        </div>
        <div className="col-auto">
          <Dropdown>
            <Dropdown.Toggle className="dropdown-custom">Empresas Rubros</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => navigate('/Departamental/SeccionUno')}>
                Linea de tiempo</Dropdown.Item>
              <Dropdown.Item onClick={() => navigate('/Departamental/SeccionDos')}>
                Tipo empresa</Dropdown.Item>
              <Dropdown.Item onClick={() => navigate('/Departamental/SeccionTres')}>
                Empresas Activas</Dropdown.Item>
              <Dropdown.Item onClick={() => navigate('/Departamental/SeccionCuatro')}>
                Empresas Rubros</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="row">
        {/* Columna izquierda */}
        <div className="col-4">
          <div className="row mb-2">
            <div className="col-6">
              <div className="card-dashboard" style={{ height: '80px' }}>
                <div className="card-dashboard-header">Departamentos</div>
                <div className="card-dashboard-content" style={{ height: '30px' }}>
                  <Dropdown>
                    <Dropdown.Toggle style={{ color: '#182335', backgroundColor: 'white', border: '1px solid #182335' }}>
                      {departamento || "No seleccionado"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {departamentos.map(dep => (
                        <Dropdown.Item key={dep} onClick={() => setDepartamento(dep)}>{dep}</Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card-dashboard" style={{ height: '80px' }}>
                <div className="card-dashboard-header">Rubro</div>
                <div className="card-dashboard-content" style={{ height: '30px' }}>
                  <Dropdown>
                    <Dropdown.Toggle style={{ color: '#182335', backgroundColor: 'white', border: '1px solid #182335' }}>
                      {rubro || "No seleccionado"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {rubros.map(rub => (
                        <Dropdown.Item key={rub} onClick={() => setRubro(rub)}>{rub}</Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>

          <div className="text-end mb-2">
            <button className="btn btn-danger btn-sm" onClick={limpiarFiltros}>Limpiar filtros</button>
          </div>

          <div className="bg-danger bg-opacity-25 text-center p-3 mb-3 rounded" style={{ maxWidth: '100%' }}>
            <div className="fw-bold text-danger fs-5">Rubro principal departamento</div>
            <div className="text-danger">Rubro principal por el departamento</div>
            <div className="fw-bold text-dark">{rubroPrincipal()}</div>
          </div>

          <div className="text-center">
            <h6 className="text-black">TIPOS DE EMPRESA</h6>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={resumenTipos()}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="55%"
                  outerRadius={80}
                  innerRadius={40}
                  label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
                >
                  {resumenTipos().map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={coloresTipo[entry.name]} />
                  ))}
                </Pie>
                <PieLegend verticalAlign="bottom" height={36} />
                <PieTooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="col-8">
          <div className="card-dashboard mb-3" style={{ height: '40vh' }}>
            <div className="card-dashboard-header d-flex justify-content-between align-items-center">
              <span>📊 Empresas activas por departamento y rubro</span>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" size="sm">
                  Departamento
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {departamentos.map(dep => (
                    <Dropdown.Item key={dep} onClick={() => setDepartamento(dep)}>{dep}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="card-dashboard-content">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={resumenActivasInactivas()} margin={{ top: 10, right: 30, left: 0, bottom: 50 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="rubro" angle={-25} textAnchor="end" interval={0} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="inactiva" fill="#e76f51">
                    <LabelList dataKey="inactiva" position="top" formatter={(val) => val} />
                  </Bar>
                  <Bar dataKey="activa" fill="#2a9d8f">
                    <LabelList dataKey="activa" position="top" formatter={(val) => val} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card-dashboard" style={{ height: '40vh' }}>
            <div className="card-dashboard-header d-flex justify-content-between align-items-center">
              <span>📌 % empresas familiares por rubro y departamento</span>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" size="sm">
                  Departamento
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {departamentos.map(dep => (
                    <Dropdown.Item key={dep} onClick={() => setDepartamento(dep)}>{dep}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="card-dashboard-content">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={resumenFamiliares()} margin={{ top: 20, right: 30, left: 0, bottom: 50 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="rubro" angle={-25} textAnchor="end" interval={0} />
                  <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
                  <Tooltip formatter={(val) => `${val}%`} />
                  <Bar dataKey="porcentaje" fill="#264653">
                    <LabelList dataKey="porcentaje" position="top" formatter={(val) => `${val}%`} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeccionCuatroDep;
