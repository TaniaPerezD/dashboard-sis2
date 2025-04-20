import DepPage from '../pages/departamentosPage/index';
import { Routes, Route } from 'react-router-dom';
import { HomePage, ErrorPage, RubrosPage, SeccionDosPage, SeccionTresPage, SeccionCuatroPage
 } from '../pages';
import Lateralbar from '../components/barraLateral/lateralbar';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Lateralbar />
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Departamental" element={<DepPage />} />
          <Route path="/Rubros" element={<RubrosPage />} />
          <Route path="/Departamental/SeccionUno" element={<DepPage />} />
          <Route path="/Departamental/SeccionDos" element={<SeccionDosPage />} />
          <Route path="/Departamental/SeccionTres" element={<SeccionTresPage />} />
          <Route path="/Departamental/SeccionCuatro" element={<SeccionCuatroPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;