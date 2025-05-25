import DepPage from '../pages/departamentosPage/index';
import { Routes, Route } from 'react-router-dom';
import { HomePage, ErrorPage, RubrosPage, SeccionDosPage, SeccionTresPage, SeccionCuatroPage,
  RubrosPage2 
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
          <Route path="/Departamental/SeccionUno" element={<DepPage />} />
          <Route path="/Departamental/SeccionDos" element={<SeccionDosPage />} />
          <Route path="/Departamental/SeccionTres" element={<SeccionTresPage />} />
          <Route path="/Departamental/SeccionCuatro" element={<SeccionCuatroPage />} />
          <Route path="/Rubros/*" element={<RubrosPage />} />
          <Route path="*" element={<ErrorPage />} />

          //probar nuevas paginas
          <Route path="/Rubros2" element={<RubrosPage2 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;