
import { Routes, Route } from 'react-router-dom';
import { HomePage, DepPage, ErrorPage, RubrosPage } from '../pages';
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
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
