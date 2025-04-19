import '../styles/departamento.css'
import { FaHome, FaUserAlt, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <FaHome className="sidebar-icon" />
      <FaUserAlt className="sidebar-icon" />
      <FaCog className="sidebar-icon" />
    </div>
  );
};

export default Sidebar;