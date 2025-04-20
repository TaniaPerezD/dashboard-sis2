import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../styles/departamento.css';
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, LabelList } from 'recharts';
import { useNavigate } from 'react-router-dom';



import empresas from '../../data/departamento/dataEmpresas.json';

const DepPage = () => {

    const navigate = useNavigate(); //para la navegacion entre secciones

    const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState(null);

    // Datos en trajetas
    const procesoTarjetas = (departamentoSeleccionado) => {
        const resumen = {};
        let cuentaEmpresas = 0;
        let cuentaAños = 0;
        let cuentaExportan = 0;
        let flag = false;

        if (departamentoSeleccionado === null) {
            flag = true;
        }
        let anioMin= 9999;
        let anioMax= 0;
        empresas.forEach((empresa) => {
            if (empresa.departamento !== departamentoSeleccionado && !flag) return;
            if(empresa.anio_fundacion>anioMax) anioMax= empresa.anio_fundacion;
            if(empresa.anio_fundacion<anioMin) anioMin= empresa.anio_fundacion;
            if(empresa.es_exportadora) cuentaExportan++;
            cuentaEmpresas++;
        });
        cuentaAños= anioMax-anioMin+1;
        return {
            cuentaEmpresas: cuentaEmpresas,
            cuentaAnios: cuentaAños,
            cuentaExportan: cuentaExportan,
        };
    };

    // 📊 Datos en valores reales para gráfico de barras
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

    // 📈 Datos en porcentaje para gráfico de líneas
    const procesoGraficoPorcentual = (departamentoSeleccionado) => {
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
                resumen[anio] = { anio, pequeña: 0, mediana: 0, grande: 0, total: 0 };
            }

            if (resumen[anio][tamano] !== undefined) {
                resumen[anio][tamano]++;
                resumen[anio].total++;
            }
        });

        return Object.values(resumen).map(({ anio, pequeña, mediana, grande, total }) => ({
            anio,
            pequeña: total > 0 ? parseFloat(((pequeña / total) * 100).toFixed(2)) : 0,
            mediana: total > 0 ? parseFloat(((mediana / total) * 100).toFixed(2)) : 0,
            grande: total > 0 ? parseFloat(((grande / total) * 100).toFixed(2)) : 0,
        })).sort((a, b) => a.anio - b.anio);
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
    const aniosListados = () => {
        const aniosSet = new Set();
        empresas.forEach((empresa) => {
            if (empresa.anio_fundacion) {
                aniosSet.add(empresa.anio_fundacion);
            }
        });
        return Array.from(aniosSet);
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
                            Secciones
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => navigate('/Departamental/SeccionUno')}>
                                Seccion 1</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigate('/Departamental/SeccionDos')}>
                                Seccion 2</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigate('/Departamental/SeccionTres')}>
                                Seccion 3</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigate('/Departamental/SeccionCuatro')}>
                                Seccion 4</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>                    
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <div className="row">
                        <div className="col-4">
                            <div className="card-container">
                                <div>{procesoTarjetas(departamentoSeleccionado).cuentaEmpresas}</div>
                                <div className="card-container-tooltip">Empresas</div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card-container">
                                <div>{procesoTarjetas(departamentoSeleccionado).cuentaExportan}</div>
                                <div className="card-container-tooltip">Exportan</div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card-container">
                                <div>{procesoTarjetas(departamentoSeleccionado).cuentaAnios}</div>
                                <div className="card-container-tooltip">Años</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="card-dashboard" style={{ height: '80px'}}>
                                <div className="card-dashboard-header">
                                    Departamento 
                                </div>
                                <div className="card-dashboard-content" style={{ height: '30px' }}>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic" style={{ color: '#182335', backgroundColor: 'white' , border: '1px solid #182335'}}>
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
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card-dashboard" style={{ height: '80px'}}>
                                <div className="card-dashboard-header">
                                    Años 
                                </div>
                                <div className="card-dashboard-content" style={{ height: '30px'}}>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic" style={{ color: '#182335', backgroundColor: 'white' , border: '1px solid #182335'}}>
                                            Años
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {aniosListados().map((anio) => (
                                                <Dropdown.Item
                                                    key={anio}  
                                                >
                                                    {anio}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card-dashboard" style={{ height: '350px'}}>
                            <div className="card-dashboard-header">Departamento</div>
                            <div className="card-dashboard-content">
                            <img src="https://i.pinimg.com/736x/86/bf/2f/86bf2fd1cef4d4e137d70eab4d0c8cbb.jpg" alt="" />
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="col-7">
                    <div className="card-dashboard">
                        <div className="card-dashboard-header">

                            Gráfico por 

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

                        {/* 📈 Gráfico de líneas con porcentajes */}
                        <div className="card-dashboard-content" style={{ height: '250px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    data={procesoGraficoPorcentual(departamentoSeleccionado)}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="anio" />
                                    <YAxis tickFormatter={(value) => `${value}%`} />
                                    <Tooltip formatter={(value) => `${parseFloat(value).toFixed(2)}%`} />
                                    <Legend />
                                    <Line type="monotone" dataKey="pequeña" stroke="#8884d8" strokeWidth={2}>
                                    <LabelList dataKey="pequeña" position="top" formatter={(value) => `${value.toFixed(1)}%`} />
                                    </Line>
                                    <Line type="monotone" dataKey="mediana" stroke="#82ca9d" strokeWidth={2}>
                                    <LabelList dataKey="mediana" position="top" formatter={(value) => `${value.toFixed(1)}%`} />
                                    </Line>
                                    <Line type="monotone" dataKey="grande" stroke="#8564d8" strokeWidth={2}>
                                    <LabelList dataKey="grande" position="top" formatter={(value) => `${value.toFixed(1)}%`} />
                                    </Line>
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        {/* 📊 Gráfico de barras con valores reales */}
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
                                    <Bar dataKey="pequeña" fill="#EEAF9D" />
                                    <Bar dataKey="mediana" fill="#94A3BA" />
                                    <Bar dataKey="grande"  fill="#465978" />
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