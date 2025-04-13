import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBars } from 'react-icons/fa';
import { GiBolivia } from 'react-icons/gi';
import { BiSolidCategory } from 'react-icons/bi';
import styles from './lateralbar.module.css';

const LateralBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCelu, setIsCelu] = useState(window.innerWidth <= 768);
  const [isHovered, setIsHovered] = useState(false);
  const navRef = useRef(null);

  // Manejador de cambio de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsCelu(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false); // Cierra en vista grande
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Cierre de menu al hacer click fuera
  useEffect(() => {
    if (!isCelu) return;

    const handleOutsideClick = (e) => {
      if (isOpen && !e.target.closest(`.${styles.lateralbar}`) && !e.target.closest(`.${styles.hamburger}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isOpen, isCelu]);

  // Hover en desktop
  const handleMouseEnter = () => {
    if (!isCelu) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isCelu) {
      setIsHovered(false);
    }
  };

  const menuItems = [
    { path: '/', icon: <FaHome />, name: 'Inicio' },
    { path: '/Departamental', icon: <GiBolivia />, name: 'Departamentos' },
    { path: '/Rubros', icon: <BiSolidCategory />, name: 'Rubros' },
  ];

  // Controladores de Clicks
  const handleLinkClick = () => {
    if (!isCelu) {
      setIsHovered(false);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button 
        className={styles.hamburger} 
        onClick={toggleMenu}
        aria-label="Menú principal"
        aria-expanded={isOpen}
        aria-controls="main-menu"
      >
        <FaBars />
      </button>

      <nav 
        id="main-menu"
        ref={navRef}
        className={`${styles.lateralbar} ${isOpen ? styles.open : ''} ${isHovered ? styles.hovered : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li key={item.path} className={styles.menuItem}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`
                }
                onClick={handleLinkClick}
              >
                <span className={styles.icon} aria-hidden="true">{item.icon}</span>
                <span className={styles.name}>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default LateralBar;