import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useId } from 'react';
import "@fontsource/montserrat/700.css";
import './buutonEnterpriseType.css';

const BotonType = ({ 
  width = "fit-content",
  height = "auto",
  options = [
    { id: "btnradio1", label: "Grandes Empresas", defaultChecked: true },
    { id: "btnradio2", label: "Medianas Empresas" },
    { id: "btnradio3", label: "Empresas Familiares" }
  ],
  selectedValue,
  onChange,
  spacing = "2rem",
  buttonWidth = "350px"
}) => {
  const isControlled = selectedValue !== undefined;
  const groupId = useId();
  return (
    <div
      className="enterprise-type-container"
      style={{ width, height }}
    >
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
              name={`btnradio-${groupId}`} // Usa el ID único en el name
              id={`${option.id}-${groupId}`}
              autoComplete="off"
              checked={isControlled ? selectedValue === option.id : undefined}
              defaultChecked={!isControlled && option.defaultChecked}
              onChange={() => onChange && onChange(option.id)}
            />
            <label 
              className="enterprise-btn"
              htmlFor={`${option.id}-${groupId}`}
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

export default BotonType;