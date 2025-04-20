import React, { useState, useEffect, useId } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './botonesSeccion.css';
const BotonSeccion = ({ 
  width = "fit-content",
  height = "auto",
  options = [
    { id: "btnradio1", label: "Empresarial", route: "/Rubros/seccion1", defaultChecked: true },
    { id: "btnradio2", label: "Departamental", route: "/Rubros/seccion2" }
  ],
  selectedValue: externalSelectedValue,
  onChange,
  spacing = "2rem",
  buttonWidth = "200px",
  name = "btnradio"
}) => {
  const componentId = useId(); // 🟢 Esto garantiza unicidad
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
    <div className="enterprise-type" style={{ width, height }}>
      <div 
        className="enterprise"
        style={{ display: 'flex', gap: spacing }}
        role="group"
        aria-label="Opciones disponibles"
      >
        {options.map((option) => {
          const uniqueId = `${componentId}-${option.id}`;
          const uniqueName = `${componentId}-${name}`;
          
          return (
            <div key={uniqueId} style={{ position: "relative" }}>
              <input
                type="radio"
                className="btn-check"
                name={uniqueName}
                id={uniqueId}
                autoComplete="off"
                checked={selectedValue === option.id}
                onChange={() => handleClick(option)}
              />
              <label
                className="enterprise"
                htmlFor={uniqueId}
                style={{ width: buttonWidth }}
              >
                {option.label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BotonSeccion;
