import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Rubro from './rubro/Rubro';
import Encabezado from './encabezado/encabezado';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/montserrat/700.css";
import { Routes, Route } from 'react-router-dom';
import Seccion2 from './seccion1/seccion';

// Simulación de tu base de datos (reemplaza con tu data real)
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
    const check=[
        "btncheckbox1",
        "btncheckbox2",
        "btncheckbox3"
      ];
  const checkFiltro=["TODOS","GANADERIA", "ROPA", "ALIMENTOS", "TECNOLOGIA", "SERVICIOS","LACTEOS"]; 
  
  const [filtroSeleccionado, setFiltroSeleccionado] = useState(checkFiltro[0]); // Valor por defecto desde el array
  console.log("asdasd",filtroSeleccionado);
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
    .map(checkboxId => filtrarEmpresasPorTamanio(empresas, tamanioFiltros[checkboxId]));
    
  const empresasfiltradas = empresasFiltradasPorTamanio.flat(); // Usamos .flat() para aplanar el array de arrays
  console.log("las empresas filtradas", empresasfiltradas);
  
  const empresasFiltradasPorRubro = filtroSeleccionado === "TODOS" // O tu valor por defecto para "mostrar todos"
  ? empresasfiltradas // Si se selecciona "TODOS", no aplicamos filtro de rubro
  : empresasfiltradas.filter(empresasfiltradas => empresasfiltradas.rubro.toUpperCase() === filtroSeleccionado.toUpperCase());

 
  const dataParaFiltro = procesarDatosPorClave(empresasFiltradasPorRubro, "rubro");  
  console.log("data dataParaFiltro ", dataParaFiltro);
  const dataParaPuntos = procesarDatosPorClave(empresasFiltradasPorRubro, "anio_fundat");
  const dataParaDepa = procesarDatosPorClave(empresasFiltradasPorRubro, "ciudad");
  const dataParaPastel = procesarDatosPorClave(empresasFiltradasPorRubro, "tipo");
  console.log("data para Puntos", dataParaPuntos);
  return (
    <div style={{ height: "100vh", width: "100%", borderColor: 'E9F5FE', backgroundColor: "E9F5FE" }}>
      <Encabezado width="100%" height="20vh" selectedValues={selectedValues} handleValueChange={handleValueChange} opcionesRubro={checkFiltro} handleSeleccion={handleSeleccion} filtroSeleccionado={filtroSeleccionado} datafiltro={dataParaFiltro} />

      <Routes>
        <Route path="/" element={<Rubro width="100%" height="80vh" data={dataParaPuntos} datadep={dataParaDepa} dataPastel={dataParaPastel}/>} />
        <Route path="seccion1" element={<Rubro width="100%" height="80vh" data={dataParaPuntos} datadep={dataParaDepa} dataPastel={dataParaPastel}/>} />
        <Route path="seccion2" element={<Seccion2 />} />
      </Routes>
    </div>
  );
};

export default RubrosPage;