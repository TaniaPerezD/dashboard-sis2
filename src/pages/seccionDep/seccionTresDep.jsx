import React, { useState } from 'react';
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../styles/departamento.css';
import { useNavigate } from 'react-router-dom';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer, LabelList
} from 'recharts';

import empresas from '../../data/departamento/dataEmpresas.json';

const SeccionTresPage = () => {
    const navigate = useNavigate();
    const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState(null);

    const departamentoListados = () => {
        const departamentosSet = new Set();
        empresas.forEach((empresa) => {
            if (empresa.departamento) {
                departamentosSet.add(empresa.departamento);
            }
        });
        return Array.from(departamentosSet);
    };

    const procesoGraficoActivo = () => {
        const resumen = {};

        empresas.forEach((empresa) => {
            if (departamentoSeleccionado && empresa.departamento !== departamentoSeleccionado) return;

            const departamento = empresa.departamento;
            if (!resumen[departamento]) {
                resumen[departamento] = { departamento, activa: 0, inactiva: 0 };
            }

            if (empresa.activa) {
                resumen[departamento].activa += 1;
            } else {
                resumen[departamento].inactiva += 1;
            }
        });

        return Object.values(resumen);
    };

    const procesoGraficoMes = () => {
        const ordenMeses = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];

        const resumen = {};

        empresas.forEach((empresa) => {
            if (departamentoSeleccionado && empresa.departamento !== departamentoSeleccionado) return;

            const apertura = empresa.mes_apertura;
            const cierre = empresa.mes_cierre;

            if (apertura) {
                if (!resumen[apertura]) resumen[apertura] = { mes: apertura, apertura: 0, cierre: 0 };
                resumen[apertura].apertura++;
            }

            if (cierre) {
                if (!resumen[cierre]) resumen[cierre] = { mes: cierre, apertura: 0, cierre: 0 };
                resumen[cierre].cierre++;
            }
        });

        return ordenMeses.map(mes => resumen[mes] || { mes, apertura: 0, cierre: 0 });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-11">
                    <div className="titulos">DEPARTAMENTOS</div>
                </div>
                <div className="col-1">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="dropdown-custom">
                            Sección 3
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => navigate('/Departamental/SeccionUno')}>Sección 1</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigate('/Departamental/SeccionDos')}>Sección 2</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigate('/Departamental/SeccionTres')}>Sección 3</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigate('/Departamental/SeccionCuatro')}>Sección 4</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <div className="card-dashboard" style={{ height: '90px', marginBottom: '20px' }}>
                        <div className="card-dashboard-header">Filtrar por Departamento</div>
                        <div className="card-dashboard-content">
                            <div className="d-flex justify-content-between align-items-center gap-2 mt-1 px-3 mb-3">
                                <Dropdown>
                                    <Dropdown.Toggle
                                        id="dropdown-basic"
                                        style={{
                                            backgroundColor: 'white',
                                            color: '#182335',
                                            border: '1px solid #182335'
                                        }}
                                    >
                                        {departamentoSeleccionado || "Departamento"}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {departamentoListados().map(dep => (
                                            <Dropdown.Item key={dep} onClick={() => setDepartamentoSeleccionado(dep)}>
                                                {dep}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>

                                <button
                                    className="btn btn-outline-secondary btn-sm"
                                    onClick={() => setDepartamentoSeleccionado(null)}
                                >
                                    Limpiar filtros
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card-dashboard" style={{ height: '60vh' }}>
                        <div className="card-dashboard-header">📊 Aperturas y cierres por mes</div>
                        <div className="card-dashboard-content">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart layout="vertical" data={procesoGraficoMes()}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis type="number" />
                                    <YAxis dataKey="mes" type="category" />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="apertura" fill="#EEAF9D">
                                        <LabelList dataKey="apertura" position="right" formatter={(value) => value} />
                                    </Bar>
                                    <Bar dataKey="cierre" fill="#94A3BA">
                                        <LabelList dataKey="cierre" position="right" formatter={(value) => value} />
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card-dashboard" style={{ height: '75vh' }}>
                        <div className="card-dashboard-header">🗺️ Ubicación</div>
                        <div className="card-dashboard-content d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                            <img
                                src="https://i.pinimg.com/736x/86/bf/2f/86bf2fd1cef4d4e137d70eab4d0c8cbb.jpg"
                                alt="Mapa de Bolivia"
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card-dashboard" style={{ height: '70vh' }}>
                        <div className="card-dashboard-header">📌 Activas vs Inactivas</div>
                        <div className="card-dashboard-content">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart layout="vertical" data={procesoGraficoActivo()}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis type="number" />
                                    <YAxis dataKey="departamento" type="category" />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="activa" fill="#2a9d8f">
                                        <LabelList dataKey="activa" position="right" formatter={(value) => value} />
                                    </Bar>
                                    <Bar dataKey="inactiva" fill="#e76f51">
                                        <LabelList dataKey="inactiva" position="right" formatter={(value) => value} />
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

export default SeccionTresPage;
