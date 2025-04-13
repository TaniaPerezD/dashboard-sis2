import { Routes, Route} from 'react-router-dom';
// Implementar transicion entre pantallas aqui posteriormente
import { HomePage, DepPage, ErrorPage, RubrosPage } from '../pages';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/departamental" element={<DepPage/>} />
        <Route path="*" element={<ErrorPage/>} />
        <Route path="/rubros" element={<RubrosPage />}/>
      </Routes>
    </div>
  );
}
export default App;
