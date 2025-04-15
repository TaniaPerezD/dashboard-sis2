import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "@fontsource/montserrat/700.css";


const BotonSeccion = ({ 
  width = "fit-content",
  height = "auto",
  options = [
    { id: "btnradio1", label: "Seccion1", defaultChecked: true },
    { id: "btnradio2", label: "Seccion2" }
  ],
  selectedValue,
  onChange,
  spacing = "2rem",
  buttonWidth = "100px",
  name = "btnradio" // ← Prop para personalizar el nombre del grupo
}) => {
  const isControlled = selectedValue !== undefined;
  
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
              name={name} // ← Usa el nombre personalizado
              id={option.id}
              autoComplete="off"
              checked={isControlled ? selectedValue === option.id : undefined}
              defaultChecked={!isControlled && option.defaultChecked}
              onChange={() => onChange && onChange(option.id)}
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