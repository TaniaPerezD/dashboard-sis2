import React from 'react';
import styles from './BoliviaMap.module.css';
import MapaDepartamentos from './metabase/MapaComponente';

const BoliviaMap = () => {
    return (
        <div className={[styles.container]}>
            <MapaDepartamentos />
        </div>
        
    );
};

export default BoliviaMap;
