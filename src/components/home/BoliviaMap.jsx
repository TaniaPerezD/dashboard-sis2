import React from 'react';
import styles from './BoliviaMap.module.css';

const BoliviaMap = () => {
    return (
        <div className={[styles.container]}>
            <h2>Distribución por Departamento</h2>
            <div className="map-placeholder">
                <p>Mapa de Bolivia (Placeholder)</p>
            </div>
        </div>
    );
};

export default BoliviaMap;
