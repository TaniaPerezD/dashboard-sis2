import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import styles from '../rubrosPage.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/montserrat/700.css";
import Pastel from '../rubro/grafic/graficq/pastelS';

const WIDTH = "20%";
const HEIGHT = "100%";



const Seccion2 = () => {
    return (
        <div style={{
            height: "75vh", 
            width: "100%",
            borderColor: 'black',
            backgroundColor: "#E9F5FE",
        }}>
            <div style={{height: "45%", width: "100%", display: "flex", flexDirection: "row", gap: "10px"}}>
                <Pastel width={WIDTH} height={HEIGHT} title='La Paz'/>
                <Pastel width={WIDTH} height={HEIGHT} title='Santa Cruz'/>
                <Pastel width={WIDTH} height={HEIGHT} title='Cochabamba'/>
                <Pastel width={WIDTH} height={HEIGHT} title='Oruro'/>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', height: '100%' }}>
                    <div className={styles.detalles} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold' }}>500</p>
                        <p>Empresas</p>
                    </div><br />
                    <div className={styles.detalles} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold' }}>10%</p>
                        <p>crecimiento</p>
                    </div><br />
                    <div className={styles.detalles} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold' }}>200</p>
                        <p>años</p>
                    </div>
                </div>
            </div><br />
            <div style={{height: "45%", width: "100%", display: "flex", flexDirection: "row", gap: "10px"}}>
                <Pastel width={WIDTH} height={HEIGHT} title='Potosí'/>
                <Pastel width={WIDTH} height={HEIGHT} title='Chuquisaca'/>
                <Pastel width={WIDTH} height={HEIGHT} title='Tarija'/>
                <Pastel width={WIDTH} height={HEIGHT} title='Beni'/>
                <Pastel width={WIDTH} height={HEIGHT} title='Pando'/>
            </div>
        </div>
    );
};

export default Seccion2;