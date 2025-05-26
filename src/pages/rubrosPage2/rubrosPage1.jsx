import React from 'react';
import './rubros.css';
import Heatmap20 from './kpi20heatmap';
import Barras14 from './kpi14Barras';
import Barras11 from './kpi11Barras';
import Barras22 from './kpi22Barras';
import Barras8 from './kpi8Barras';
import Mapa11 from './kpi11Mapa';

const RubrosPage1 = () => {
  return (
    <>
    <header className="header">
        <h1 className="h1">RUBROS EMPRESARIALES DE BOLIVIA</h1>
    </header>
    <div className="componente-columna">
        <header className="header">
            <h2 className="h2">Departamentos</h2>
        </header>
        <div className="contenedor" style={{ height: '100vh' }}> {/* Se le pone altura para cuando es componente superios e inferior */}
            <div className="lado-izquierdo">
                <Mapa11/>
            </div>
            <div className="lado-derecho">
                <div className="componente-superior">
                    <Barras11/>
                </div>
                <div className="componente-inferior">
                    <Barras8/>
                </div>
            </div>
        </div>
        <header className="header">
            <h2 className="h2">Premios</h2>
        </header>
        <div className="contenedor" style={{ height: '62vh' }}>
            <div className="lado-izquierdo">
                <Barras14/>
            </div>
            <div className="lado-derecho">
                <Barras8/>
            </div>
        </div>  
        
        <header className="header">
            <h2 className="h2">Tiempo</h2>
        </header>
        <div className="contenedor">
            <div className="lado-izquierdo">
                <Heatmap20/>
            </div>
            <div className="lado-derecho">
                <Mapa11/>
            </div>
        </div>  
        <header className="header">
            <h2 className="h2">Tipo societario</h2>
        </header>
        <div className="contenedor">
            <div className="lado-izquierdo">
                <Heatmap20/>
            </div>
            <div className="lado-derecho">
                <Mapa11/>
            </div>
        </div>  
        
    </div>
    </>
  );
}

export default RubrosPage1;