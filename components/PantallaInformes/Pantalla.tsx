import React, { useState } from "react";
import InformeTable from "../InformeTable/InformeTable";

interface PantallaProps {
  data: any;
}

const Pantalla: React.FC<PantallaProps> = ({ data }) => {
  const [showTable, setShowTable] = useState(false);

  const handleAccept = () => {
    setShowTable(true);
  };

  return (
    <div>
      {!showTable ? (
        <div className="form-container">
          <h2>Formulario de Información</h2>
          {/* Aquí puedes agregar más inputs según sea necesario */}
          <button onClick={handleAccept}>Aceptar</button>
        </div>
      ) : (
        <InformeTable
          data={data}
          titulo={data.titulo}
          imagen={data.imagen}
          datosGenerales={data.datos_generales}
        />
      )}
    </div>
  );
};

export default Pantalla;
