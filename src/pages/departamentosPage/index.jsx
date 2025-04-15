import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../styles/departamento.css';
import React from 'react';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import empresas  from '../../data/departamento/dataEmpresas.json'
import depa  from '../../data/departamento/depaResumen.json'


const DepPage = () => {
    const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState(null);
    const procesoGraficoBarras = (departamentoSeleccionado) => {
        const resumen = {};
        var flag = false;
        
        if(departamentoSeleccionado==null){
            flag = true;
        }

        empresas.forEach((empresa) => {
        if (empresa.departamento !== departamentoSeleccionado & flag===false) return;
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
      

      
    const dataDepaBarras = procesoGraficoBarras();
    console.log(dataDepaBarras);
    return (
        <div className="container">
            <div className="row">
                <div className="titulos">
                DEPARTAMENTOS
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="row">
                        <div className="col-4">
                            <div className="card-container">
                                100
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card-container">
                                100
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card-container">
                                100
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-6">
                    <div className="card-dashboard">
                        <div className="card-dashboard-header">
                            Creciemiendo empresas pequeñas grandes  
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    Departamento
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {departamentoListados().map((departamento) => (
                                        <Dropdown.Item key={departamento} onClick={() => setDepartamentoSeleccionado(departamento)}>
                                        {departamento}
                                        </Dropdown.Item>
                                    ))}
                                    </Dropdown.Menu>

                            </Dropdown>
                        </div> 
                        <div className="card-dashboard-content">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={procesoGraficoBarras(departamentoSeleccionado)}
                                    margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="anio" />
                                    <YAxis />
                                    <Tooltip/>
                                    <Legend />
                                    <Bar dataKey="pequeña" stackId="a" fill="#EEAF9D" />
                                    <Bar dataKey="mediana" stackId="a" fill="#94A3BA" />
                                    <Bar dataKey="grande" stackId="a" fill="#465978" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; export default DepPage;