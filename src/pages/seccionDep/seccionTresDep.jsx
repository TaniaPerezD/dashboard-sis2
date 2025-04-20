import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../styles/departamento.css';
import { useNavigate } from 'react-router-dom';

const SeccionTresPage = () => {
    
    const navigate = useNavigate(); //para la navegacion entre secciones

    return (
        <div className="container">
            <div className="row">
                <div className="col-11">
                    <div className="titulos">DEPARTAMENTOS</div>
                </div>
                <div className="col-1">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="dropdown-custom">
                            Sección 3
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => navigate('/Departamental/SeccionUno')}>
                                Sección 1</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigate('/Departamental/SeccionDos')}>
                                Sección 2</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigate('/Departamental/SeccionTres')}>
                                Sección 3</Dropdown.Item>
                            <Dropdown.Item onClick={() => navigate('/Departamental/SeccionCuatro')}>
                                Sección 4</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>                    
                </div>
            </div>
        </div>
    );
}

export default SeccionTresPage;