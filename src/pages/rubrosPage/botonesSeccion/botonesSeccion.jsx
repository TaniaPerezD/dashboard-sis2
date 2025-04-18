
import React, { useState, useEffect } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

const BotonSeccion = ({ 
  width = "fit-content",
  height = "auto",
  options = [
    { id: "btnradio1", label: "Seccion1", route: "/Rubros/seccion1", defaultChecked: true },
    { id: "btnradio2", label: "Seccion2", route: "/Rubros/seccion2" }
  ],
  selectedValue: externalSelectedValue,
  onChange,
  spacing = "2rem",
  buttonWidth = "100px",
  name = "btnradio"
}) => {
  const navigate = useNavigate();
  const location = useLocation();

 
  const isControlled = externalSelectedValue !== undefined;

  
  const [internalSelectedValue, setInternalSelectedValue] = useState(() => {
    const match = options.find(opt => location.pathname === opt.route);
    return match ? match.id : options[0].id;
  });

  
  useEffect(() => {
    if (!isControlled) {
      const match = options.find(opt => location.pathname === opt.route);
      if (match) setInternalSelectedValue(match.id);
    }
  }, [location.pathname, isControlled, options]);

  const selectedValue = isControlled ? externalSelectedValue : internalSelectedValue;

  const handleClick = (option) => {
    if (!isControlled) {
      setInternalSelectedValue(option.id);
    }
    if (onChange) onChange(option.id);
    if (option.route) navigate(option.route);
  };

  return (
    <div className="enterprise-type-container" style={{ width, height }}>
      <div 
        className="enterprise-btn-group"
        style={{ gap: spacing }}
        role="group"
        aria-label="Opciones disponibles"
      >
        {options.map((option) => (
          <div key={option.id} style={{ position: "relative" }}>
            <input
              type="radio"
              className="btn-check"
              name={name}
              id={option.id}
              autoComplete="off"
              checked={selectedValue === option.id}
              onChange={() => handleClick(option)}
            />
            <label 
              className="enterprise-btn"
              htmlFor={option.id}
              style={{ width: buttonWidth }}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotonSeccion;
