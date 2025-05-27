import React, { useEffect, useState } from 'react';
import './estilos.css';

const grafico8 = () => {


  

  return (
    <div className="plot-card" style={{ height: '60vh' }}>
      <iframe 
            src="https://meta-tania.serverbb.site/public/question/cea17e34-7740-4d7a-8040-5c01baac1c76" 
            frameborder="0"
            width={"100%"}
            height={"100%"}
            title="Heatmap Visualization"
            allowFullScreen
        />
        
    </div>
  );
};

export default grafico8;