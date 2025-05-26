import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import styles from '../rubrosPage.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/montserrat/700.css";
import Pastel from '../rubro/grafic/graficq/pastelS';

const WIDTH = "20%";
const HEIGHT = "100%";

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

const Seccion2 = () => {
    return (
        <div style={{
            height: "75vh", 
            width: "100%",
            borderColor: 'E9F5FE',
            backgroundColor: "#E9F5FE",
        }}>
            <div style={{height: "45%", width: "100%", display: "flex", flexDirection: "row", gap: "10px"}}>
                <Pastel width={WIDTH} height={HEIGHT} title='La Paz' data={dataLaPaz}/>
                <Pastel width={WIDTH} height={HEIGHT} title='Santa Cruz' data={dataSantaCruz}/>
                <Pastel width={WIDTH} height={HEIGHT} title='Cochabamba' data={dataCochabamba}/>
                <Pastel width={WIDTH} height={HEIGHT} title='Oruro' data={dataOruro}/>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', height: '100%' }}>
                    <div className={styles.detalles} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold' ,marginTop: '0.2rem', marginBottom:'0.2rem'}}>500</p>
                        <p>Empresas</p>
                    </div><br />
                    <div className={styles.detalles} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold' , marginTop: '0.2rem', marginBottom:'0.2rem'}}>10%</p>
                        <p>crecimiento</p>
                    </div><br />
                    <div className={styles.detalles} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold' , marginTop: '0.2rem', marginBottom:'0.2rem'}}>200</p>
                        <p>años</p>
                    </div>
                </div>
            </div><br />
            <div style={{height: "45%", width: "100%", display: "flex", flexDirection: "row", gap: "10px"}}>
                <Pastel width={WIDTH} height={HEIGHT} title='Potosí' data={dataPotosi}/>
                <Pastel width={WIDTH} height={HEIGHT} title='Chuquisaca' data={dataChuquisaca}/>
                <Pastel width={WIDTH} height={HEIGHT} title='Tarija' data={dataTarija}/>
                <Pastel width={WIDTH} height={HEIGHT} title='Beni' data={dataBeni}/>
                <Pastel width={WIDTH} height={HEIGHT} title='Pando' data={dataPando}/>
            </div>
        </div>
    );
};

export default Seccion2;