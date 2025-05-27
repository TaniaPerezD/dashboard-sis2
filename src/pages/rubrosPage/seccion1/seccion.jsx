// src/pages/seccion1/seccion.jsx

import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import styles from '../rubrosPage.module.css'; // Asegúrate de que esta ruta sea correcta
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/montserrat/700.css";
import Pastel from '../rubro/grafic/graficq/pastelS'; // Asegúrate de que esta ruta sea correcta
import Encabezado from '../encabezado/encabezado'; // ¡Importa Encabezado!

const WIDTH = "20%"; // Esto probablemente se refiere al ancho de cada Pastel en una fila
const HEIGHT = "100%"; // Esto se refiere a la altura de cada Pastel dentro de su contenedor de fila

const dataLaPaz = [
    { name: 'Tech (50%)', value: 50 },
    { name: 'Finance (30%)', value: 30 },
    { name: 'Health (20%)', value: 20 },
];

const dataSantaCruz = [
    { name: 'Agriculture (40%)', value: 40 },
    { name: 'Industry (35%)', value: 35 },
    { name: 'Services (25%)', value: 25 },
];

const dataCochabamba = [
    { name: 'Education (60%)', value: 60 },
    { name: 'Tourism (25%)', value: 25 },
    { name: 'Retail (15%)', value: 15 },
];

const dataOruro = [
    { name: 'Mining (70%)', value: 70 },
    { name: 'Crafts (20%)', value: 20 },
    { name: 'Other (10%)', value: 10 },
];

const dataPotosi = [
    { name: 'Silver (80%)', value: 80 },
    { name: 'Tourism (15%)', value: 15 },
    { name: 'Other (5%)', value: 5 },
];

const dataChuquisaca = [
    { name: 'Law (50%)', value: 50 },
    { name: 'Education (30%)', value: 30 },
    { name: 'Other (20%)', value: 20 },
];

const dataTarija = [
    { name: 'Wine (60%)', value: 60 },
    { name: 'Agriculture (30%)', value: 30 },
    { name: 'Other (10%)', value: 10 },
];

const dataBeni = [
    { name: 'Cattle (70%)', value: 70 },
    { name: 'Tourism (20%)', value: 20 },
    { name: 'Other (10%)', value: 10 },
];

const dataPando = [
    { name: 'Forestry (65%)', value: 65 },
    { name: 'Agriculture (25%)', value: 25 },
    { name: 'Other (10%)', value: 10 },
];

const Seccion2 = ({ encabezadoProps }) => {
    return (
        <div style={{
            width: "100%",
            height: "100%", // Ocupa el 100% del espacio de la Route
            borderColor: '#E9F5FE',
            backgroundColor: "#E9F5FE",
            display: "flex",
            flexDirection: "column", // Apila el Encabezado y el contenido desplazable
        }}>
            {/* Renderiza el Encabezado, que se mantendrá fijo en la parte superior */}
            {encabezadoProps && (
                <Encabezado {...encabezadoProps} />
            )}

            {/* Contenedor DESPLAZABLE para el resto del contenido de Seccion2 */}
            <div style={{
                // **CLAVE:** Toma la altura restante después del encabezado (20vh).
                height: encabezadoProps ? "calc(100% - 20vh)" : "100%",
                width: "100%",
                overflowY: "auto", // **¡Esta es la clave para habilitar el scroll vertical!**
                display: "flex",
                flexDirection: "column", // Para las dos filas de Pasteles
                gap: "10px", // Espacio entre las filas de Pasteles
                padding: "10px", // Añade padding interno para que no se pegue al borde
                boxSizing: "border-box", // Importante con padding y height calculados.
            }}>
                {/* Primera fila de pasteles */}
                {/* minHeight es importante aquí para que las filas no se encojan demasiado y puedan desbordar */}
                <div style={{ height: "auto", minHeight: "300px", width: "100%", display: "flex", flexDirection: "row", gap: "10px" }}>
                    <Pastel width={WIDTH} height={HEIGHT} title='La Paz' data={dataLaPaz} />
                    <Pastel width={WIDTH} height={HEIGHT} title='Santa Cruz' data={dataSantaCruz} />
                    <Pastel width={WIDTH} height={HEIGHT} title='Cochabamba' data={dataCochabamba} />
                    <Pastel width={WIDTH} height={HEIGHT} title='Oruro' data={dataOruro} />
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', height: 'auto', minHeight: '300px' }}> {/* También ajustado a auto/minHeight */}
                        <div className={styles.detalles} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <p style={{ fontWeight: 'bold', marginTop: '0.2rem', marginBottom: '0.2rem' }}>500</p>
                            <p>Empresas</p>
                        </div><br />
                        <div className={styles.detalles} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <p style={{ fontWeight: 'bold', marginTop: '0.2rem', marginBottom: '0.2rem' }}>10%</p>
                            <p>crecimiento</p>
                        </div><br />
                        <div className={styles.detalles} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <p style={{ fontWeight: 'bold', marginTop: '0.2rem', marginBottom: '0.2rem' }}>200</p>
                            <p>años</p>
                        </div>
                    </div>
                </div>
                
                {/* Segunda fila de pasteles */}
                <div style={{ height: "auto", minHeight: "300px", width: "100%", display: "flex", flexDirection: "row", gap: "10px" }}>
                    <Pastel width={WIDTH} height={HEIGHT} title='Potosí' data={dataPotosi} />
                    <Pastel width={WIDTH} height={HEIGHT} title='Chuquisaca' data={dataChuquisaca} />
                    <Pastel width={WIDTH} height={HEIGHT} title='Tarija' data={dataTarija} />
                    <Pastel width={WIDTH} height={HEIGHT} title='Beni' data={dataBeni} />
                    <Pastel width={WIDTH} height={HEIGHT} title='Pando' data={dataPando} />
                </div>
            </div>
        </div>
    );
};

export default Seccion2;