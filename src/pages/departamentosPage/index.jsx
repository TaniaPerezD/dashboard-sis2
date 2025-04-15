import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../styles/departamento.css';
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

import empresas from '../../data/departamento/dataEmpresas.json';

const DepPage = () => {
    const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState(null);

    const procesoGraficoBarras = (departamentoSeleccionado) => {
        const resumen = {};
        let flag = false;

        if (departamentoSeleccionado === null) {
            flag = true;
        }

        empresas.forEach((empresa) => {
            if (empresa.departamento !== departamentoSeleccionado && !flag) return;

            const anio = empresa.anio_fundacion;
            const tamano = empresa.tamano;

            if (!resumen[anio]) {
                resumen[anio] = { anio, pequeña: 0, mediana: 0, grande: 0 };
            }

            if (resumen[anio][tamano] !== undefined) {
                resumen[anio][tamano]++;
            }
        });

        return Object.values(resumen).sort((a, b) => a.anio - b.anio);
    };

    const departamentoListados = () => {
        const departamentosSet = new Set();
        empresas.forEach((empresa) => {
            if (empresa.departamento) {
                departamentosSet.add(empresa.departamento);
            }
        });
        return Array.from(departamentosSet);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="titulos">DEPARTAMENTOS</div>
            </div>

            <div className="row">
                <div className="col-4">
                    <div className="card-container">100</div>
                    <div className="card-container">100</div>
                    <div className="card-container">100</div>
                </div>

                <div className="col-6">
                    <div className="card-dashboard">
                        <div className="card-dashboard-header">
                            Hola
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    Departamento
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {departamentoListados().map((departamento) => (
                                        <Dropdown.Item
                                            key={departamento}
                                            onClick={() => setDepartamentoSeleccionado(departamento)}
                                        >
                                            {departamento}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        {/* Gráfico de líneas */}
                        <div className="card-dashboard-content" style={{ height: '250px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    data={procesoGraficoBarras(departamentoSeleccionado)}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="anio" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="pequeña" stroke="#8884d8" strokeWidth={2} />
                                    <Line type="monotone" dataKey="mediana" stroke="#82ca9d" strokeWidth={2} />
                                    <Line type="monotone" dataKey="grande" stroke="#8564d8" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Gráfico de barras */}
                        <div className="card-dashboard-content">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={procesoGraficoBarras(departamentoSeleccionado)}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="anio" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="pequeña" stackId="a" fill="#8884d8" />
                                    <Bar dataKey="mediana" stackId="a" fill="#82ca9d" />
                                    <Bar dataKey="grande" stackId="a" fill="#8564d8" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepPage;
