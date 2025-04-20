import React from 'react';
import styles from './homePage.module.css';
import HomeCard from '../../components/home/HomeCard';
import HorizontalBarChart from '../../components/home/HorizontalBarChart';

const HomePage = () => {
    const cardProps = [
        {
            numero: '108.232',
            texto: 'Total de Empresas',
        },
        {
            numero: '60%',
            texto: 'Total de Empresas Familiares',
        },
        {
            numero: '8.5',
            texto: 'Anios de Vida Promedio',
        },
        {
            numero: '200',
            texto: 'Total de Empresas Cerradas',
        },
        {
            numero: '154',
            texto: 'Anios de la Empresa Registrada mas Antigua',
        }
    ];

    const hcData =[
        {
            title: 'Tamaños de empresa',
            data: [
              { name: 'Grandes Empresas', value: 635 },
              { name: 'Medianas Empresas', value: 3659 },
              { name: 'Pequeñas Empresas', value: 6437 },
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
    ] 
      
    return (
        <div>
            <h1 className={styles.h1}>Pagina de Bienvenida</h1>
            {cardProps.map((item, index) => (
                <HomeCard 
                    key={index} 
                    numero={item.numero} 
                    texto={item.texto} 
                />
            ))}
            {hcData.map((item, index) => (
                <HorizontalBarChart 
                    key={index} 
                    chartData={item} 
                />
            ))}
        </div>
    );
};

export default HomePage;