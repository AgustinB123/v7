import React from "react";

interface BotonesProps {
  handleAccept: () => void;
  handleReject: () => void;
  handlePrint: () => void;
}

const Botones: React.FC<BotonesProps> = ({
  handleAccept,
  handleReject,
  handlePrint,
}) => {
  return (
    <div className="d-flex gap-2 mb-4">
      <button className="btn btn-success" onClick={handleAccept}>
        ✔ Aceptar
      </button>
      <button className="btn btn-danger" onClick={handleReject}>
        ❌ Rechazar
      </button>
      <button className="btn btn-primary" onClick={handlePrint}>
        🖨️ Imprimir
      </button>
    </div>
  );
};

export default Botones;
