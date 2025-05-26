import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './header.module.css';

const Header = ({ toggleSidebar, isOpen }) => {
  return (
    <header className={styles.header}>
      <button className={styles.menuButton} onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <h1 className={styles.title}>DASHBOARD</h1>
    </header>
  );
};

export default Header;
