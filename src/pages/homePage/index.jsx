import React from 'react';
import styles from './homePage.module.css';
import HomeCard from '../../components/home/HomeCard';
import HorizontalBarChart from '../../components/home/HorizontalBarChart';
import BoliviaMap from '../../components/home/BoliviaMap';

const HomePage = () => {
    const cardProps = [
        {
            numero: '60%',
            texto: 'Empresas Familiares',
        },
        {
            numero: '108.232',
            texto: 'Empresas en Bolivia',
        },
        {
            numero: '8.5',
            texto: 'Años de Vida Promedio',
        },
        {
            numero: '200',
            texto: 'Empresas Cerradas',
        },
        {
            numero: '1871',
            texto: 'Primera Empresa',
        }
    ];

    const hcData = [
        {
            title: 'Tamaños de empresa',
            data: [
                { name: 'Grandes', value: 635 },
                { name: 'Medianas', value: 3659 },
                { name: 'Pequeñas', value: 6437 },
            ],
        },
        {
            title: 'Rubros Mas Poblados',
            data: [
                { name: 'Mineria', value: 3629 },
                { name: 'Manufacturera', value: 10623 },
                { name: 'Construccion', value: 16348 },
                { name: 'Comercio', value: 37338 },
                { name: 'Servicios', value: 39068 },
            ],
        }
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.h1}>RADIOGRAFIA EMPRESARIAL DE BOLIVIA</h1>
            </header>

            <div className={styles.mainContent}>
                <aside className={styles.sidebar}>
                    {cardProps.map((item, index) => (
                        <HomeCard
                            key={index}
                            numero={item.numero}
                            texto={item.texto}
                        />
                    ))}
                </aside>

                <main className={styles.mainArea}>
                    <h2 className={styles.h2}>"Explora el impacto y distribución de las empresas bolivianas, con énfasis en el papel de las empresas familiares"</h2>
                    
                    <div className={styles.dataVisuals}>
                        <div className={styles.mapContainer}>
                            <BoliviaMap />
                        </div>
                        
                        <div className={styles.chartsContainer}>
                            {hcData.map((item, index) => (
                                <div className={styles.chartWrapper} key={index}>
                                    <HorizontalBarChart
                                        chartData={item}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>                 
                </main>
            </div>
            <footer className={styles.footer}>
                <h2 className={styles.h2}>"Las empresas familiares no solo son mayoría, también representan el pasado, presente y futuro del tejido empresarial boliviano."</h2>
            </footer>
        </div>
    );
};

export default HomePage;