import React from 'react';
import styles from './homePage.module.css';
import HomeCard from '../../components/home/HomeCard';

const HomePage = () => {
    const props = {
        numero: '100',
        texto: 'Total de Empresas',
        porcentaje: '10%'
    };

    return (
        <div>
            <h1 className={styles.h1}>Pagina de Bienvenida</h1>
            <HomeCard 
                numero={props.numero} 
                texto={props.texto} 
                porcentaje={props.porcentaje} 
            />
        </div>
    );
}; export default HomePage;