import React, { useState } from "react";

const Fecha: React.FC = () => {
  const [fecha, setFecha] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
    setFecha(formattedDate);
  };

  return (
    <div className="mb-3">
      <label htmlFor="fechaInput" className="form-label">
        Selecciona una fecha
      </label>
      <input
        type="date"
        className="form-control"
        id="fechaInput"
        onChange={handleChange}
      />
      <div className="form-text">
        {/* La fecha seleccionada se muestra en el formato DD/MM/YYYY */}
        Fecha seleccionada: {fecha}
      </div>
    </div>
  );
};

export default Fecha;
