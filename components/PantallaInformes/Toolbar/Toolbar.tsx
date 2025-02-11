import React from "react";

interface ToolbarProps {
  codigoValido: boolean;
  handleAccept: () => void;
  handleReject: () => void;
  handlePrint: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  codigoValido,
  handleAccept,
  handleReject,
  handlePrint,
}) => {
  const onAccept = () => {
    if (codigoValido) {
      handleAccept();
    } else {
      alert("Código no válido. No se puede aceptar.");
    }
  };

  const onPrint = () => {
    if (codigoValido) {
      handlePrint();
    } else {
      alert("Código no válido. No se puede imprimir.");
    }
  };

  return (
    <div className="d-flex gap-2 mb-4">
      <button className="btn btn-success" onClick={onAccept}>
        ✔ Aceptar
      </button>
      <button className="btn btn-danger" onClick={handleReject}>
        ❌ Rechazar
      </button>
      <button className="btn btn-primary" onClick={onPrint}>
        🖨️ Imprimir
      </button>
    </div>
  );
};

export default Toolbar;
