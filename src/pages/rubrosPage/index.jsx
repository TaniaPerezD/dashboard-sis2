import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Rubro from './rubro/Rubro';
import Encabezado from './encabezado/encabezado';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/montserrat/700.css";

import { Routes, Route } from 'react-router-dom';
import Seccion2 from './seccion1/seccion';
const RubrosPage = () => {
    return (
        <div style={{
            height: "100vh", 
            width: "100%",
            borderColor: 'black',
            backgroundColor: "black",
        }}>
            <Encabezado width="100%" height="20vh"/>
            
           
        <Routes>
          
            <Route path="seccion1" element={<Rubro width="100%" height="80vh"/>} />
            <Route path="seccion2" element={<Seccion2 />} />
           
        </Routes>
      
        </div>
    );
};

export default RubrosPage;