import React, { useId } from 'react';
import './buutonEnterpriseType.css';

const BotonType = ({ 
  width = "fit-content",
  height = "auto",
  options = [
    { id: "btncheckbox1", label: "Grandes Empresas" },
    { id: "btncheckbox2", label: "Medianas Empresas" },
    { id: "btncheckbox3", label: "Empresas Familiares" }
  ],
  selectedValues = options.map(option => option.id), 
  onChange,
  spacing = "2rem",
  buttonWidth = "350px"
}) => {
  const groupId = useId();
  
  const handleChange = (optionId) => {
    if (onChange) {
      const newValues = selectedValues.includes(optionId)
        ? selectedValues.filter(id => id !== optionId)
        : [...selectedValues, optionId];
      onChange(newValues);
    }
  };

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
              type="checkbox"
              className="btn-check"
              name={`btncheckbox-${groupId}`} 
              id={`${option.id}-${groupId}`}
              autoComplete="off"
              checked={selectedValues.includes(option.id)}
              onChange={() => handleChange(option.id)}
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