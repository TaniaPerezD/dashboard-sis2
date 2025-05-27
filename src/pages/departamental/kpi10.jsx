import React, { useEffect, useState } from 'react';
import './estilos.css';

const grafico10 = () => {


  

  return (
    <div className="plot-card" style={{ height: '60vh' }}>
      <iframe 
            src="https://meta-tania.serverbb.site/public/question/55639a32-2f84-49c0-a0d0-ccf8d6b72934" 
            frameborder="0"
            width={"100%"}
            height={"100%"}
            title="Heatmap Visualization"
            allowFullScreen
        />
        
    </div>
  );
};

export default grafico10;