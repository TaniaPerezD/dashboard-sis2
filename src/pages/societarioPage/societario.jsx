import React from 'react';

const SocietarioPage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>ANÁLISIS POR TIPO DE EMPRESA</h1>
      <p>TIPO SOCIETARIO</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
          marginTop: '2rem',
        }}
      >
        <iframe
          src="https://meta-tania.serverbb.site/public/question/70245199-d7fa-4156-acdc-d75ef7192bc7"
          title="Tamaño empresarial promedio por tipo societario"
          style={{
            width: '100%',
            height: '600px',
            border: 'none',
            borderRadius: '8px',
          }}
          allowFullScreen
        ></iframe>
        <iframe
          src="https://meta-tania.serverbb.site/public/question/867ce8ec-b189-48e9-ab2b-f04f4ddb7470"
          title="Tasa de cambio de tipo societario por rubro"
          style={{
            width: '100%',
            height: '600px',
            border: 'none',
            borderRadius: '8px',
          }}
          allowFullScreen
        ></iframe>
        <iframe
          src="https://meta-tania.serverbb.site/public/question/2c3444f8-cb77-493c-9b37-5e5fd993f418"
          title="Promedio de años como empresa familiar"
          style={{
            width: '100%',
            height: '600px',
            border: 'none',
            borderRadius: '8px',
          }}
          allowFullScreen
        ></iframe>
        <iframe
          src="https://meta-tania.serverbb.site/public/question/8dc66ccf-abb7-47e6-a804-753e9a19fdbc"
          title="Dashboard 4"
          style={{
            width: '100%',
            height: '600px',
            border: 'none',
            borderRadius: '8px',
          }}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default SocietarioPage;
