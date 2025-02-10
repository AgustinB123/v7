import React from "react";
import Handsontable from "handsontable";
import { HotTable } from "@handsontable/react";
import "handsontable/dist/handsontable.full.css";

interface InformeTableProps {
  data: any;
}

const InformeTable: React.FC<InformeTableProps> = ({ data }) => {
  const { cabeceras, valores } = data;

  const tableData = valores.map((valor: any) => [
    valor.fecha,
    valor.fecha_vto,
    valor.moneda,
    valor.cantidad,
    valor.precio,
    valor.nr_operacion,
    valor.tipo,
    valor.cartera,
  ]);

  return (
    <HotTable
      data={tableData}
      colHeaders={cabeceras}
      rowHeaders={true}
      width="100%"
      height="auto"
      licenseKey="non-commercial-and-evaluation"
    />
  );
};

export default InformeTable;
