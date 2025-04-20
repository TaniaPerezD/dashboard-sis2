import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer, LabelList
} from 'recharts';
import empresas from '../../data/departamento/dataEmpresas.json';
import { useNavigate } from 'react-router-dom';

const SeccionDosPage = () => {
    const navigate = useNavigate();
    const [tipoFiltro, setTipoFiltro] = useState(null);
    const [departamentoFiltro, setDepartamentoFiltro] = useState(null);

    const obtenerDatosFiltrados = () => {
        const resumen = {};

        empresas.forEach((empresa) => {
            if (tipoFiltro && empresa.tamano !== tipoFiltro) return;
            if (departamentoFiltro && empresa.departamento !== departamentoFiltro) return;

            const dep = empresa.departamento;
            if (!resumen[dep]) {
                resumen[dep] = { departamento: dep, activas: 0, familiares: 0, total: 0 };
            }

            resumen[dep].total++;
            if (empresa.activa) resumen[dep].activas++;
            if (empresa.tipo === "Familiar") resumen[dep].familiares++;
        });

        return Object.values(resumen).map(dep => ({
            departamento: dep.departamento,
            activas: parseFloat(((dep.activas / dep.total) * 100).toFixed(1)),
            familiares: parseFloat(((dep.familiares / dep.total) * 100).toFixed(1)),
        }));
    };

    const departamentosUnicos = Array.from(new Set(empresas.map(emp => emp.departamento)));

    return (
        <div className="container">
            <div className="row">
                <div className="col-11">
                    <div className="titulos">
                        DEPARTAMENTOS <span className="subtitulo">tamaño</span>
                    </div>
                </div>
                <div className="col-1">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="dropdown-custom">
                            Sección 2
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
                <button className="btn btn-secondary" onClick={() => { setTipoFiltro(null); setDepartamentoFiltro(null); }}>
                    Limpiar filtros
                </button>
            </div>

            {/* Gráfico Activas */}
            <div className="grafico-box">
            <div className="bg-dark text-white p-2 rounded-top d-flex justify-content-between align-items-center">
                <span>Porcentaje empresas activas por departamentos</span>
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
                    <BarChart data={obtenerDatosFiltrados()} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="departamento" tick={{ fill: '#000' }} />
                        <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} tick={{ fill: '#000' }} />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Legend />
                        <Bar dataKey="activas" fill="#264653">
                            <LabelList dataKey="activas" position="top" formatter={(val) => `${val}%`} />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Gráfico Familiares */}
            <div className="grafico-box mt-4">
                <div className="bg-dark text-white p-2 rounded-top">
                    <span>% Empresas familiares por departamento</span>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={obtenerDatosFiltrados()} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="departamento" tick={{ fill: '#000' }} />
                        <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} tick={{ fill: '#000' }} />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Legend />
                        <Bar dataKey="familiares" fill="#2a9d8f">
                            <LabelList dataKey="familiares" position="top" formatter={(val) => `${val}%`} />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SeccionDosPage;
