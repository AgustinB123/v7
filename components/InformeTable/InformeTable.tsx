import React from "react";
import Handsontable from "handsontable";
import { HotTable } from "@handsontable/react";
import "handsontable/dist/handsontable.full.css";

interface InformeTableProps {
  data: any;
  titulo: string;
  imagen: string;
  datosGenerales: any;
}

const InformeTable: React.FC<InformeTableProps> = ({
  data,
  titulo,
  imagen,
  datosGenerales,
}) => {
  const { cabeceras, valores, total } = data;

  const tableData = [
    ...valores.map((valor: any) => [
      valor.fecha,
      valor.fecha_vto,
      valor.moneda,
      valor.cantidad,
      valor.precio,
      valor.nr_operacion,
      valor.tipo,
      valor.cartera,
    ]),
    ["Total", "", "", total.cantidad, total.precio, "", "", ""],
  ];

  const colHeaders = cabeceras.map((cabecera: any) => cabecera.nombre);
  const colWidths = cabeceras.map((cabecera: any) => cabecera.ancho || 100);

  return (
    <div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
      >
        <img
          src={imagen}
          alt="Informe Imagen"
          style={{ maxWidth: "200px", marginRight: "20px" }}
        />
        <h2>{titulo}</h2>
      </div>
      <div>
        <h3>Datos Generales</h3>
        <ul>
          {Object.entries(datosGenerales).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
      <HotTable
        data={tableData}
        colHeaders={colHeaders}
        colWidths={colWidths}
        rowHeaders={true}
        width="100%"
        height="auto"
        stretchH="all"
        manualColumnResize={true}
        licenseKey="non-commercial-and-evaluation"
      />
    </div>
  );
};

export default InformeTable;
