import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer, LabelList,
    LineChart, Line
} from 'recharts';
import empresas from '../../data/departamento/dataEmpresas.json';
import { useNavigate } from 'react-router-dom';

const SeccionDosPage = () => {
    const navigate = useNavigate();
    const [tipoFiltro, setTipoFiltro] = useState(null);
    const [departamentoFiltro, setDepartamentoFiltro] = useState(null);
    const [tipoEmpresaFiltro, setTipoEmpresaFiltro] = useState(null);

    const obtenerDatosAntiguedadFamiliar = () => {
        const resumen = {};

        empresas.forEach((empresa) => {
            if (tipoFiltro && empresa.tamano !== tipoFiltro) return;
            if (departamentoFiltro && empresa.departamento !== departamentoFiltro) return;

            
            const anioInicio = empresa.anio_inicio_familiar;
            const anioFin = empresa.anio_fin_familiar;

            if (anioInicio != null) { // esto filtra null y undefined
                if (!resumen[anioInicio]) {
                    resumen[anioInicio] = { anio: anioInicio, familiar: 0, dejo_familiar: 0 };
                }
                resumen[anioInicio].familiar++;
            }
            
            if (anioFin != null) {
                if (!resumen[anioFin]) {
                    resumen[anioFin] = { anio: anioFin, familiar: 0, dejo_familiar: 0 };
                }
                resumen[anioFin].dejo_familiar++;
            }
        });

        return Object.values(resumen).map(dep => ({
            anio: dep.anio,
            familiar: dep.familiar,
            dejo_familiar: dep.dejo_familiar,
        }));
    };

    console.log("DATOS FAMILIAR:", obtenerDatosAntiguedadFamiliar()); 
    
    const obtenerDatosActivasInactivas = () => {
        const resumen = {};

        empresas.forEach((empresa) => {
            if (tipoFiltro && empresa.tamano !== tipoFiltro) return;
            if (departamentoFiltro && empresa.departamento !== departamentoFiltro) return;

            const dep = empresa.departamento;
            if (!resumen[dep]) {
                resumen[dep] = { departamento: dep, activa: 0, inactiva: 0, total: 0 };
            }

            empresa.activa ? resumen[dep].activa++ : resumen[dep].inactiva++;
            resumen[dep].total++;
        });

        return Object.values(resumen).map(dep => ({
            departamento: dep.departamento,
            activa: parseFloat(((dep.activa / dep.total) * 100).toFixed(1)),
            inactiva: parseFloat(((dep.inactiva / dep.total) * 100).toFixed(1))
        }));
    };

    const obtenerTiposPorDepartamento = () => {
        const resumen = {};

        empresas.forEach((empresa) => {
            if (departamentoFiltro && empresa.departamento !== departamentoFiltro) return;

            const dep = empresa.departamento;
            const tipo = empresa.tipo;

            if (!resumen[dep]) {
                resumen[dep] = { departamento: dep, total: 0 };
            }

            if (!resumen[dep][tipo]) {
                resumen[dep][tipo] = 0;
            }

            resumen[dep][tipo]++;
            resumen[dep].total++;
        });

        const tipos = Object.keys(empresas.reduce((acc, emp) => {
            acc[emp.tipo] = true;
            return acc;
        }, {}));

        return Object.values(resumen).map(dep => {
            const result = { departamento: dep.departamento };
            tipos.forEach(tipo => {
                const porcentaje = dep[tipo] ? ((dep[tipo] / dep.total) * 100).toFixed(1) : 0;
                result[tipo] = parseFloat(porcentaje);
            });
            return result;
        });
    };

    const departamentosUnicos = Array.from(new Set(empresas.map(emp => emp.departamento)));
    const tiposUnicos = Array.from(new Set(empresas.map(emp => emp.tipo))).filter(Boolean);

    const colores = {
        Familiar: '#2a9d8f',
        Pymes: '#e76f51',
        Unipersonal: '#f4a261',
        Grande: '#264653',
        Otro: '#6c757d'
    };

    return (
        <div className="container-fluid">
            <div className="row align-items-center mb-2">
                <div className="col">
                    <div className="titulos">DEPARTAMENTOS <span className="subtitulo">tipo empresa</span></div>
                </div>
                <div className="col-auto">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="dropdown-custom">
                            Tipo empresa
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

            <div className="botones-filtros mb-3">
                <button className={`btn ${tipoFiltro === 'grande' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setTipoFiltro('grande')}>
                    Grandes empresas
                </button>
                <button className={`btn ${tipoFiltro === 'mediana' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setTipoFiltro('mediana')}>
                    Medianas empresas
                </button>
                <button className={`btn ${tipoFiltro === 'pequeña' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setTipoFiltro('pequeña')}>
                    Pequeñas Empresas
                </button>
                <button className="btn btn-secondary" onClick={() => {
                    setTipoFiltro(null);
                    setDepartamentoFiltro(null);
                    setTipoEmpresaFiltro(null);
                }}>
                    Limpiar filtros
                </button>
            </div>
            <div className="row">
                <div className="col-12">
                    {/* Gráfico Activas vs Inactivas */}
                    <div className="grafico-box">
                        <div className="bg-dark text-white p-2 rounded-top d-flex justify-content-between align-items-center">
                            <span>Porcentaje empresas activas vs inactivas por departamentos</span>
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" size="sm">
                                    Departamento
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {departamentosUnicos.map(dep => (
                                        <Dropdown.Item key={dep} onClick={() => setDepartamentoFiltro(dep)}>
                                            {dep}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={obtenerDatosAntiguedadFamiliar()} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="anio" tickFormatter={(tick) => parseInt(tick)} />
                                <YAxis tickFormatter={(v) => `${v}`} tick={{ fill: '#000' }} />
                                <Tooltip formatter={(value) => `${value}`} />
                                <Legend />
                                <Line type="monotone" dataKey="familiar" stroke="#2a9d8f" strokeWidth={2}>
                                    <LabelList dataKey="familiar" position="top" formatter={(val) => `${val}`} />
                                </Line>
                                <Line type="monotone" dataKey="dejo_familiar" stroke="#e76f51" strokeWidth={2}>
                                    <LabelList dataKey="dejo_familiar" position="top" formatter={(val) => `${val}`} />
                                </Line>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            
            
            <div className="row">
                <div className="col-6">
                    {/* Antiguedad */}
                    <div className="grafico-box mt-4">
                    <div className="bg-dark text-white p-2 rounded-top d-flex justify-content-between align-items-center">
                        <span>Q empresas con antiguedad de familiar</span>
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" size="sm">
                                    Departamento
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {departamentosUnicos.map(dep => (
                                        <Dropdown.Item key={dep} onClick={() => setDepartamentoFiltro(dep)}>
                                            {dep}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={obtenerDatosActivasInactivas()} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="departamento" tick={{ fill: '#000' }} />
                                <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} tick={{ fill: '#000' }} />
                                <Tooltip formatter={(value) => `${value}%`} />
                                <Legend />
                                <Bar dataKey="activa" fill="#2a9d8f">
                                    <LabelList dataKey="activa" position="top" formatter={(val) => `${val}%`} />
                                </Bar>
                                <Bar dataKey="inactiva" fill="#e76f51">
                                    <LabelList dataKey="inactiva" position="top" formatter={(val) => `${val}%`} />
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="col-6">
                    {/* Gráfico por tipo de empresa */}
                    <div className="grafico-box mt-4">
                        <div className="bg-dark text-white p-2 rounded-top d-flex justify-content-between align-items-center">
                            <span>% Tipos de empresa por departamento</span>
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" size="sm">
                                    Tipo
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {tiposUnicos.map(tipo => (
                                        <Dropdown.Item key={tipo} onClick={() => setTipoEmpresaFiltro(tipo)}>
                                            {tipo}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={obtenerTiposPorDepartamento()} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="departamento" tick={{ fill: '#000' }} />
                                <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} tick={{ fill: '#000' }} />
                                <Tooltip formatter={(value) => `${value}%`} />
                                <Legend />
                                {tiposUnicos.map((tipo) =>
                                    !tipoEmpresaFiltro || tipoEmpresaFiltro === tipo ? (
                                        <Bar key={tipo} dataKey={tipo} fill={colores[tipo] || '#8884d8'}>
                                            <LabelList dataKey={tipo} position="top" formatter={(val) => `${val}%`} />
                                        </Bar>
                                    ) : null
                                )}
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SeccionDosPage;
