import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaTimes } from 'react-icons/fa';
import { GiBolivia } from 'react-icons/gi';
import { BiSolidCategory } from 'react-icons/bi';
import styles from './lateralbar.module.css';

const LateralBar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { path: '/', icon: <FaHome />, name: 'Inicio' },
    { path: '/Rubros', icon: <BiSolidCategory />, name: 'Análisis por rubro' },
    { path: '/Departamental', icon: <BiSolidCategory />, name: 'Análisis Departamental' },
    { path: '/Tamanos', icon: <BiSolidCategory />, name: 'Análisis por tamaño empresarial' },
    { path: '/Temporal', icon: <BiSolidCategory />, name: 'Análisis Temporal' },


  ];

  return (
    <nav className={`${styles.lateralbar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <span className={styles.title}>SECCIONES</span>
        <button className={styles.closeBtn} onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className={styles.menu}>
        {menuItems.map((item) => (
          <li key={item.path} className={styles.menuItem}>
            <NavLink
              to={item.path}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.name}>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LateralBar;
