import React, { useState, useEffect } from "react";
import Toolbar from "../PantallaInformes/Toolbar/Toolbar";
import Imputs from "../PantallaInformes/Formularios/Imputs";
import SelectorCartera from "../PantallaInformes/Formularios/SelectorCartera";
import { useRouter } from "next/navigation";
import InformeTable from "../InformeTable/InformeTable";

interface PantallaProps {
  data: any;
}

const Pantalla: React.FC<PantallaProps> = ({ data }) => {
  const [showTable, setShowTable] = useState(false);
  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");
  const [cliente, setCliente] = useState("");
  const [especie, setEspecie] = useState("");
  const [cartera, setCartera] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    setShowTable(false); // Reiniciar el estado cuando los datos cambian
  }, [data]);

  const handleAccept = () => {
    setShowTable(true);
  };

  const handleReject = () => {
    router.push("/inicio");
  };

  const handlePrint = () => {
    alert("Descargar tabla como Excel");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {!showTable ? (
        <div
          className="form-container p-4 border rounded"
          style={{ maxWidth: "600px" }}
        >
          <h2>{data.titulo}</h2>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="fechaDesde" className="form-label">
                Fecha Desde
              </label>
              <input
                type="date"
                className="form-control"
                id="fechaDesde"
                value={fechaDesde}
                onChange={(e) => setFechaDesde(e.target.value)}
              />
            </div>
            <div className="col">
              <label htmlFor="fechaHasta" className="form-label">
                Fecha Hasta
              </label>
              <input
                type="date"
                className="form-control"
                id="fechaHasta"
                value={fechaHasta}
                onChange={(e) => setFechaHasta(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <Imputs
                id="clienteInput"
                title="Cliente"
                values={[...new Set(data.valores.map((v: any) => v.cliente))]} // Eliminamos duplicados
              />
            </div>
            <div className="col">
              <Imputs
                id="especieInput"
                title="Especie"
                values={[...new Set(data.valores.map((v: any) => v.especie))]} // Eliminamos duplicados
              />
            </div>
          </div>
          <div className="mb-3">
            <SelectorCartera opciones={data.datos_generales.carteras} />
          </div>
          <Toolbar
            codigoValido={true}
            handleAccept={handleAccept}
            handleReject={handleReject}
            handlePrint={handlePrint}
          />
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
