import React from "react";
import Handsontable from "handsontable";
import { HotTable } from "@handsontable/react";
import "handsontable/dist/handsontable.full.css";

interface InformeTableProps {
  data: any;
}

const InformeTable: React.FC<InformeTableProps> = ({ data }) => {
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
  );
};

export default InformeTable;
