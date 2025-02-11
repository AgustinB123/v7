import React, { useState } from "react";

interface SelectorCarteraProps {
  opciones: string[];
}

const SelectorCartera: React.FC<SelectorCarteraProps> = ({ opciones }) => {
  const [disponibles, setDisponibles] = useState(opciones);
  const [seleccionadas, setSeleccionadas] = useState<string[]>([]);

  const moverDerecha = (item: string) => {
    setDisponibles(disponibles.filter((i) => i !== item));
    setSeleccionadas([...seleccionadas, item]);
  };

  const moverIzquierda = (item: string) => {
    setSeleccionadas(seleccionadas.filter((i) => i !== item));
    setDisponibles([...disponibles, item]);
  };

  return (
    <div className="row">
      {/* Lista izquierda */}
      <div className="col">
        <h3 className="font-weight-bold">Disponibles</h3>
        <ul className="list-group border p-2 h-100 overflow-auto">
          {disponibles.map((item) => (
            <li
              key={item}
              className="list-group-item list-group-item-action cursor-pointer"
              onClick={() => moverDerecha(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Lista derecha */}
      <div className="col">
        <h3 className="font-weight-bold">Seleccionadas</h3>
        <ul className="list-group border p-2 h-100 overflow-auto">
          {seleccionadas.length === 0 ? (
            <li className="list-group-item text-muted">
              Todas seleccionadas por defecto
            </li>
          ) : (
            seleccionadas.map((item) => (
              <li
                key={item}
                className="list-group-item list-group-item-action cursor-pointer"
                onClick={() => moverIzquierda(item)}
              >
                {item}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default SelectorCartera;
