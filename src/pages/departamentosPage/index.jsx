import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/departamento.css';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import data  from '../../data/departamento/depaResumen.json'
import depa  from '../../data/departamento/depaResumen.json'


const DepPage = () => {

    const resumirEmpresasPorDepartamento = (empresas) => {
        const resumen = {};
      
        empresas.forEach((empresa) => {
            const depto = empresa.departamento;
            const rubro = empresa.rubro;
        
            if (!resumen[depto]) {
                resumen[depto] = {
                cantidad_empresas: 0,
                rubros: {}
                };
            }
        
            resumen[depto].cantidad_empresas++;
            resumen[depto].rubros[rubro] = (resumen[depto].rubros[rubro] || 0) + 1;
        });
      
        // Rubro mas comua ksjd
        const resultado = Object.entries(resumen).map(([departamento, datos]) => {
            const rubro_mas_comun = Object.entries(datos.rubros).reduce((a, b) =>
                b[1] > a[1] ? b : a
            )[0];
        
            return {
                departamento,
                cantidad_empresas: datos.cantidad_empresas,
                rubro_mas_comun
            };
        });
      
        return { resumen_por_departamento: resultado };
    };
      

    return (
        <div className="container">
            <div className="row">
                <div className="titulos">
                DEPARTAMENTOS
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="card-container">
                        100
                    </div>
                    <div className="card-container">
                        100
                    </div>
                    <div className="card-container">
                        100
                    </div>
                </div>
                <div className="col-6">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={depa}
                            margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="departamento" />
                            <YAxis />
                            <Tooltip/>
                            <Legend />
                            <Bar dataKey="cantidad_empresas" barSize={20} fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}; export default DepPage;