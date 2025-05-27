import React, { useState } from 'react';
import Header from '../header/header';
import Sidebar from '../barraLateral/lateralbar';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <Header 
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} 
        isOpen={isSidebarOpen} 
      />
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} 
      />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
