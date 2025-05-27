// src/pages/rubrosPage/index.jsx

import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/montserrat/700.css";
import { Routes, Route } from 'react-router-dom';

import Rubro from './rubro/Rubro';
import Seccion2 from './seccion1/seccion';
import TemporalAnalysisDashboard from './TemporalAnalysis';

const empresas = [
  { id: 1, nombre: "ALA", ciudad: "LA PAZ", tipo: "S.A.", rubro: "LACTEOS", anio_fundat: 2001, tamanio: "GRANDE" },
  { id: 2, nombre: "AORURO", ciudad: "ORURO", tipo: "S.A.", rubro: "CARNE", anio_fundat: 2001, tamanio: "PEQUEÑA" },
  { id: 3, nombre: "APOTOSI", ciudad: "POTOSI", tipo: "S.A.", rubro: "BEBIDAS", anio_fundat: 2001, tamanio: "GRANDE" },
  { id: 4, nombre: "ATARIJA", ciudad: "TARIJA", tipo: "S.A.", rubro: "ROPA", anio_fundat: 2002, tamanio: "PEQUEÑA" },
  { id: 5, nombre: "ACHUQUISACA", ciudad: "CHUQUISACA", tipo: "S.A.", rubro: "LACTEOS", anio_fundat: 2002, tamanio: "GRANDE" },
  { id: 6, nombre: "APANDOS", ciudad: "PANDO", tipo: "S.R.L.", rubro: "CARNE", anio_fundat: 2002, tamanio: "PEQUEÑA" },
  { id: 7, nombre: "ASANTA CRUZ", ciudad: "SANTA CRUZ", tipo: "S.R.L.", rubro: "BEBIDAS", anio_fundat: 2002, tamanio: "GRANDE" },
  { id: 8, nombre: "ABENI", ciudad: "BENI", tipo: "S.R.L.", rubro: "ROPA", anio_fundat: 2003, tamanio: "PEQUEÑA" },
  { id: 9, nombre: "ACOCHABAMBA", ciudad: "COCHABAMBA", tipo: "S.R.L.", rubro: "ROPA", anio_fundat: 2003, tamanio: "GRANDE" },
  { id: 10, nombre: "ASANTA CRUZ", ciudad: "SANTA CRUZ", tipo: "S.R.L.", rubro: "ROPA", anio_fundat: 2003, tamanio: "PEQUEÑA" },
];

const filtrarEmpresasPorTamanio = (empresas, tamanio) => {
  return empresas.filter(empresa => empresa.tamanio.toUpperCase() === tamanio.toUpperCase());
};

const procesarDatosPorClave = (data, clave) => {
  const resultado = {};
  data.forEach(item => {
    const valor = item[clave]?.toString();
    if (valor) {
      resultado[valor] = (resultado[valor] || 0) + 1;
    }
  });
  return Object.keys(resultado).map(key => ({
    name: key,
    value: resultado[key],
  }));
};

const RubrosPage = () => {
  const check = [
    "btncheckbox1",
    "btncheckbox2",
    "btncheckbox3"
  ];
  const checkFiltro = ["TODOS", "GANADERIA", "ROPA", "ALIMENTOS", "TECNOLOGIA", "SERVICIOS", "LACTEOS"];

  const [filtroSeleccionado, setFiltroSeleccionado] = useState(checkFiltro[0]);
  console.log("asdasd", filtroSeleccionado);
  const handleSeleccion = (opcion) => {
    setFiltroSeleccionado(opcion);
  };
  const [selectedValues, setSelectedValues] = useState(check);
  const handleValueChange = (newValues) => {
    setSelectedValues(newValues);
  };

  const tamanioFiltros = {
    btncheckbox1: "GRANDE",
    btncheckbox2: "PEQUEÑA",
    btncheckbox3: "MEDIANA",
  };

  const empresasFiltradasPorTamanio = Object.keys(tamanioFiltros)
    .filter(checkboxId => selectedValues.includes(checkboxId))
    .flatMap(checkboxId => filtrarEmpresasPorTamanio(empresas, tamanioFiltros[checkboxId]));

  const empresasFiltradasPorRubro = filtroSeleccionado === "TODOS"
    ? empresasFiltradasPorTamanio
    : empresasFiltradasPorTamanio.filter(empresa => empresa.rubro.toUpperCase() === filtroSeleccionado.toUpperCase());

  const dataParaFiltro = procesarDatosPorClave(empresasFiltradasPorRubro, "rubro");
  console.log("data dataParaFiltro ", dataParaFiltro);
  const dataParaPuntos = procesarDatosPorClave(empresasFiltradasPorRubro, "anio_fundat");
  const dataParaDepa = procesarDatosPorClave(empresasFiltradasPorRubro, "ciudad");
  const dataParaPastel = procesarDatosPorClave(empresasFiltradasPorRubro, "tipo");
  console.log("data para Puntos", dataParaPuntos);

  const encabezadoProps = {
    width: "100%",
    height: "20vh",
    selectedValues: selectedValues,
    handleValueChange: handleValueChange,
    opcionesRubro: checkFiltro,
    handleSeleccion: handleSeleccion,
    filtroSeleccionado: filtroSeleccionado,
    datafiltro: dataParaFiltro,
  };

  const rubroDataProps = {
    data: dataParaPuntos,
    datadep: dataParaDepa,
    dataPastel: dataParaPastel
  };

  return (
    <div style={{ height: "100vh", width: "100%", borderColor: '#E9F5FE', backgroundColor: "#E9F5FE" }}>
      <Routes>
        <Route
          index
          element={
            <Rubro
              {...rubroDataProps}
              encabezadoProps={encabezadoProps}
            />
          }
        />
        <Route
          path=":id"
          element={
            <Rubro
              {...rubroDataProps}
              encabezadoProps={encabezadoProps}
            />
          }
        />
        <Route
          path="seccion1"
          element={
            <Rubro
              {...rubroDataProps}
              encabezadoProps={encabezadoProps}
            />
          }
        />
        <Route
          path="seccion2"
          element={
            <Seccion2
              encabezadoProps={encabezadoProps}
            />
          }
        />
        <Route path="seccion3" element={<TemporalAnalysisDashboard />} />
      </Routes>
    </div>
  );
};

export default RubrosPage;