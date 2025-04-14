import Sidebar from "../components/sidebar";
import DepartamentoDash from "../components/departamentoDash"
function App() {
  return (
    <div className="dash-container">
        
        <div className="sidebar">
            <Sidebar />   
        </div>
        
        <div className="visual-panel">
            <DepartamentoDash />
        </div>

    </div>
  );
}

export default App;