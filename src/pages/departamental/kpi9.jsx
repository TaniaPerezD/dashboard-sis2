import React, { useEffect, useState } from 'react';
import './rubros.css';

const grafico9 = () => {


  

  return (
    <div className="plot-card" style={{ height: '60vh' }}>
      <iframe 
            src="https://meta-tania.serverbb.site/public/question/16f673e5-f5ae-4392-a283-2d9e7f41e60d" 
            frameborder="0"
            width={"100%"}
            height={"100%"}
            title="Heatmap Visualization"
            allowFullScreen
        />
        
    </div>
  );
};

export default grafico9;