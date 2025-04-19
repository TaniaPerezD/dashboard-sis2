import React from 'react';
import styles from './rubrosPage.module.css';
import RingChart from '../../components/RingChart'; 
import DataTable from '../../components/DataText';


// Sample data for RingChart
const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const RubrosPage = () => {
    return (
        // Main container for the page
        <div className={styles.container} style={{ backgroundColor: '#E9F5FE', width: '100vw', height: '100vh', margin: 0, padding: 0, boxSizing: 'border-box' }}>
            
            {/* Page Title */}
            <h1 className={styles.title}>RUBROS</h1><br /><br />
            
            {/* Buttons for company types */}
            <div className={styles.itemsContainer} style={{ display: 'flex', gap: '25px', justifyContent: 'space-evenly' }}>
                <button className={styles.botonEmpresa}>Grandes Empresas</button>
                <button className={styles.botonEmpresa}>Medianas Empresas</button>
                <button className={styles.botonEmpresa}>Pequeñas Empresas</button>
            </div><br />
            
            {/* Period information and dropdown */}
            <div className={styles.itemsContainer} style={{ display: 'flex', gap: '25px', justifyContent: 'space-evenly' }}>
                <div className={styles.ficha} style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ fontWeight: 'bold' }}>Primer Periodo</p>
                    <p>1825-1925</p>
                </div>
                <div className={styles.ficha} style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ fontWeight: 'bold' }}>Primer Periodo</p>
                    <p>1825-1925</p>
                </div>
                <div className={styles.ficha} style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ fontWeight: 'bold' }}>Primer Periodo</p>
                    <p>1825-1925</p>
                </div>
                <div className={styles.ficha} style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ fontWeight: 'bold' }}>Primer Periodo</p>
                    <p>1825-1925</p>
                </div>
                <select id="rubroDropdown" className={styles.dropdownMenu}>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div><br />
            
            {/* Ring charts section */}
            <div className={styles.itemsContainer} style={{ display: 'flex', gap: '25px', justifyContent: 'space-evenly' }}>
                <div className={styles.fichaAnillo} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Santa Cruz</p>
                    <RingChart data={data} />
                    <DataTable data={data} colors={COLORS} />
                </div>
                <div className={styles.fichaAnillo} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Santa Cruz</p>
                    <RingChart data={data} />
                    <DataTable data={data} colors={COLORS} />
                </div>
                <div className={styles.fichaAnillo} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Santa Cruz</p>
                    <RingChart data={data} />
                    <DataTable data={data} colors={COLORS} />
                </div>
                <div className={styles.fichaAnillo} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Santa Cruz</p>
                    <RingChart data={data} />
                    <DataTable data={data} colors={COLORS} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', height: '100%' }}>
                    <div className={styles.detalles} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold' }}>500</p>
                        <p>Empresas</p>
                    </div><br />
                    <div className={styles.detalles} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold' }}>10%</p>
                        <p>crecimiento</p>
                    </div><br />
                    <div className={styles.detalles} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p style={{ fontWeight: 'bold' }}>200</p>
                        <p>años</p>
                    </div><br />
                </div>
            </div><br /><br />
            <div className={styles.itemsContainer} style={{ display: 'flex', gap: '25px', justifyContent: 'space-evenly' }}>
                <div className={styles.fichaAnillo} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Santa Cruz</p>
                    <RingChart data={data} />
                    <DataTable data={data} colors={COLORS} />
                </div>
                <div className={styles.fichaAnillo} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Santa Cruz</p>
                    <RingChart data={data} />
                    <DataTable data={data} colors={COLORS} />
                </div>
                <div className={styles.fichaAnillo} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Santa Cruz</p>
                    <RingChart data={data} />
                    <DataTable data={data} colors={COLORS} />
                </div>
                <div className={styles.fichaAnillo} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Santa Cruz</p>
                    <RingChart data={data} />
                    <DataTable data={data} colors={COLORS} />
                </div>
                <div className={styles.fichaAnillo} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{ fontWeight: 'bold', marginTop: '10px' }}>Santa Cruz</p>
                    <RingChart data={data} />
                    <DataTable data={data} colors={COLORS} />
                </div>
            </div>
        </div>
    );
};

export default RubrosPage;