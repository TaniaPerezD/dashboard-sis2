import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../styles/departamento.css';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, LabelList } from 'recharts';

import empresas from '../../data/departamento/dataEmpresas.json';

const SeccionTresPage = () => {
    
    const navigate = useNavigate(); //para la navegacion entre secciones

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

    const procesoGraficoActivo = (departamentoSeleccionado) => {
        const resumen = {};
        let flag = false;

        if (departamentoSeleccionado === null) {
            flag = true;
        }

        empresas.forEach((empresa) => {
            if (empresa.departamento !== departamentoSeleccionado && !flag) return;

            const departamento = empresa.departamento;
            const activo = empresa.activo;

            if (!resumen[departamento]) {
                resumen[departamento] = { departamento, activo: 0, inactivo: 0 };
            }

                if(activo) {
                    resumen[departamento].activo += 1;
                }
                else {
                    resumen[departamento].inactivo += 1;
                }
        });

        return Object.values(resumen);
    };

    const procesoGraficoMes = (departamentoSeleccionado) => {

        const ordenMeses = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];

        const resumen = {};
        let flag = false;

        if (departamentoSeleccionado === null) {
            flag = true;
        }

        empresas.forEach((empresa) => {
            if (empresa.departamento !== departamentoSeleccionado && !flag) return;

            const mesApertura = empresa.mes_apertura;
            const mesCierre = empresa.mes_cierre;

            if (!resumen[mesApertura]) {
            resumen[mesApertura] = { mes: mesApertura, apertura: 0, cierre: 0 };
            }
            resumen[mesApertura].apertura++;

            if (mesCierre) {
            if (!resumen[mesCierre]) {
                resumen[mesCierre] = { mes: mesCierre, apertura: 0, cierre: 0 };
            }
            resumen[mesCierre].cierre++;
            }
            
        });
        
        const resumenOrdenado = Object.values(resumen).sort((a, b) => {
            return ordenMeses.indexOf(a.mes) - ordenMeses.indexOf(b.mes);
        });
        
        return resumenOrdenado;
    };

    const ordenarMeses = (resumen) => {
        const ordenMeses = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];
        resumen.sort((a, b) => {
            return ordenMeses.indexOf(a.mes) - ordenMeses.indexOf(b.mes);
        });
    }

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
                <div className="col-4">
                    <div className="row">
                        <div className="card-dashboard" style={{ height: '80px'}}>
                            <div className="card-dashboard-header">
                                Departamento 
                            </div>
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
                    <div className="row">
                        <div className="card-dashboard" style={{ height: '60vh'}}>
                            <div className="card-dashboard-header">
                                Q Aperturas y cierres por mes
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
                            <div className="card-dashboard-content">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                    layout="vertical" 
                                    data={procesoGraficoMes(departamentoSeleccionado)}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                    >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis type="number" />
                                    <YAxis dataKey="mes" type="category" />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="apertura" fill="#EEAF9D" />
                                    <Bar dataKey="cierre" fill="#94A3BA" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card-dashboard" style={{ height: '70vh'}}>
                        <div className="card-dashboard-header">Departamento</div>
                        <div className="card-dashboard-content"   style={{ height: '50vh'}}>
                                    <iframe
                                        src="http://localhost:3000/public/dashboard/620db2bd-1323-4742-a7cc-899ab12994bf"
                                        frameBorder="0"
                                        width="100%"
                                        height="100%"
                                        allowTransparency
                                        title="Metabase Dashboard"
                                    />
                            
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card-dashboard" style={{ height: '70vh'}}>
                        <div className="card-dashboard-header">
                            Q empresas activas vs inactivas
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
                        <div className="card-dashboard-content">
                            <ResponsiveContainer width=" 100%" height="100%">
                                <BarChart
                                layout="vertical" 
                                data={procesoGraficoActivo(departamentoSeleccionado)}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" />
                                <YAxis dataKey="departamento" type="category" />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="activo" fill="#EEAF9D" />
                                <Bar dataKey="inactivo" fill="#94A3BA" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeccionTresPage;