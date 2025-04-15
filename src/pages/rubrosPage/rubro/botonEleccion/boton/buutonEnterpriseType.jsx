import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "@fontsource/montserrat/700.css";

const BotonType = ({ 
  width = "fit-content", // Cambiado para mejor ajuste
  height = "auto",
  options = [
    { id: "btnradio1", label: "Grandes Empresas", defaultChecked: true },
    { id: "btnradio2", label: "Medianas Empresas" },
    { id: "btnradio3", label: "Empresas Familiares" }
  ],
  selectedValue,
  onChange,
  spacing = "15rem" // Nueva prop para controlar el espacio
}) => {
  const isControlled = selectedValue !== undefined;
  
  return (
    <div
      className="card"
      style={{
        width: width,
        height: height,
        borderColor: '#E9F5FE',
        backgroundColor: "#E9F5FE",
        display: "inline-flex", // Cambiado a inline-flex
        alignItems: "center",
        padding: "0.75rem",
        boxShadow: "none",
        borderRadius: "0.5rem"
      }}
    >
      <div 
        style={{
          display: "flex",
          flexDirection: "row", // Orientación horizontal
          gap: spacing, // Espacio entre elementos
          flexWrap: "wrap", // Permite ajuste en pantallas pequeñas
          alignItems: "center"
        }}
        role="group"
        aria-label="Opciones disponibles"
      >
        {options.map((option) => (
          <div key={option.id} style={{ position: "relative" }}>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id={option.id}
              autoComplete="off"
              checked={isControlled ? selectedValue === option.id : undefined}
              defaultChecked={!isControlled && option.defaultChecked}
              onChange={() => onChange && onChange(option.id)}
            />
            <label 
              className="btn btn-outline-primary" 
              htmlFor={option.id}
              style={{
                whiteSpace: "nowrap",
                fontSize: "0.875rem",
                padding: "0.375rem 0.75rem",
                margin: 0,
                borderRadius: "0.375rem",
                transition: "all 0.2s ease"
              }}
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