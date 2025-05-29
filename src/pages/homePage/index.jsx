import React, { useState, useEffect } from 'react';
import styles from './homePage.module.css';
import HomeCard from '../../components/home/HomeCard';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  const cardUrls = [
    'https://meta-tania.serverbb.site/public/question/46f330eb-5b1b-4074-8f6e-6e746d30cb2c',
    'https://meta-tania.serverbb.site/public/question/5e6ae2b3-bb1c-4d56-bad0-81f13f88e9b9',
    'https://meta-tania.serverbb.site/public/question/98190f94-2c5d-41f0-bebc-6f0a4e586b9d',
    'https://meta-tania.serverbb.site/public/question/7464fa09-7a7c-4028-ab9e-1a9019e7addd',
  ];

  const chartUrls = [
    'https://meta-tania.serverbb.site/public/question/c59cbaaf-65b2-433a-a56f-727f628eac59',
    'https://meta-tania.serverbb.site/public/question/a3e0fa41-ce23-419d-9179-7245d3c8d567',
  ];

  const mapUrl = 'https://meta-tania.serverbb.site/public/question/9f6330ce-d954-4afd-8f4f-1865c3293697';

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.h1}>ANÁLISIS GENERAL DE EMPRESAS EN BOLIVIA</h1>
      </header>

      <main className={styles.mainContent}>
        {/* TARJETAS A LA IZQUIERDA */}
        <aside className={styles.sidebar}>
          {cardUrls.map((url, index) => (
            <HomeCard key={index} metabaseUrl={url} />
          ))}
        </aside>

        {/* ÁREA PRINCIPAL */}
        <section className={styles.mainArea}>
  {/* MAPA */}
  <div className={styles.mapContainer}>
    <iframe
      src={mapUrl}
      width="100%"
      height="100%"
      frameBorder="0"
      title="Mapa Bolivia"
      allowTransparency="true"
      style={{ borderRadius: '12px' }}
    />
  </div>

  {/* GRÁFICOS DE BARRAS */}
  <div className={styles.chartsContainer}>
    {chartUrls.map((url, index) => (
      <div key={index} className={styles.chartWrapper}>
        <iframe
          src={url}
          width="100%"
          height="280"
          frameBorder="0"
          title={`Gráfico ${index + 1}`}
          allowTransparency="true"
          style={{ borderRadius: '12px' }}
        />
      </div>
    ))}
  </div>
</section>

      </main>

    </div>
  );
};

export default HomePage;
