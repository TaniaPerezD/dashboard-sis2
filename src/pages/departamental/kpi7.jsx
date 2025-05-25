import React, { useEffect, useState } from 'react';
import './rubros.css';

const grafico7 = () => {


  

  return (
    <div className="plot-card" style={{ height: '60vh' }}>
      <iframe 
            src="https://meta-tania.serverbb.site/public/question/a19ce7ee-04cd-401d-b54e-4d5c07ad8ac0" 
            frameborder="0"
            width={"100%"}
            height={"100%"}
            title="Heatmap Visualization"
            allowFullScreen
        />
        
    </div>
  );
};

export default grafico7;