import React, { useState, useEffect } from "react";
import './tamano.css';
import Heatmap from './Heatmap';
import BarPlot from './BarPlot';
import Boxplot from './BoxPlot';

const TamanosPage = () => {
  const [datosBar, setDatosBar] = useState([]);
  const [datosBox, setDatosBox] = useState([]);
  const [dataHeat, setDatosHeat] = useState([]);

  useEffect(() => {
    const fetchDatosBar = async () => {
      try {
        const response = await fetch("https://meta-tania.serverbb.site/api/public/card/1700e3b4-e95c-4ae8-9cca-1c57f7de4676/query/json");
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const data = await response.json();
        setDatosBar(data); // Se espera misma estructura que datosBar de prueba
      } catch (error) {
        console.error("Error al cargar datos del BarPlot:", error);
      }
    };

  const fetchDatosBox = async () => {
    try {
      const response = await fetch("https://meta-tania.serverbb.site/api/public/card/b31c6e57-c2ff-4a39-9432-873f51db9925/query/json");
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();

      const parsed = data.map(item => ({
        ...item,
        outliers: typeof item.outliers === "string"
          ? JSON.parse(item.outliers) // <-- aquí lo parseas correctamente
          : Array.isArray(item.outliers)
          ? item.outliers
          : []
      }));

      setDatosBox(parsed);
    } catch (error) {
      console.error("Error al cargar datos del BoxPlot:", error);
    }
  };

    const fetchDatosHeat = async () => {
      try {
        const response = await fetch("https://meta-tania.serverbb.site/api/public/card/590746ab-aeca-45e6-8c79-91a9b5c7f224/query/json");
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const data = await response.json();
        setDatosHeat(data); // Se espera misma estructura que dataHeat de prueba
      } catch (error) {
        console.error("Error al cargar datos del Heatmap:", error);
      }
    };

    fetchDatosBar();
    fetchDatosBox();
    fetchDatosHeat();
  }, []);

  return (
    <div className="contenedor">
      <div className="lado-izquierdo">
        <div className="componente-superior">
          <Boxplot data={datosBox} />
        </div>
        <div className="componente-inferior">
          <BarPlot data={datosBar} />
        </div>
      </div>
      <div className="lado-derecho">
        <h1 className="titulo">Análisis por Tamaño Empresarial</h1><br />
        <Heatmap data={dataHeat} title="Edad Promedio por Rubro y Tamaño" />
      </div>
    </div>
  );
};

export default TamanosPage;
